
"use client";

import {
    Area,
    AreaChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { YearResult } from "@/lib/sip-logic";

interface SipChartProps {
    data: YearResult[];
    useRealValues?: boolean;
}

export function SipChart({ data, useRealValues }: SipChartProps) {
    // Transformation for display
    // We want to stack: Invested (Layer 1) + Gains (Layer 2) = Total
    // If Real Values:
    //   Total = realWealth
    //   Invested = investedAmount (Nominal) or do we adjust invested?
    //   Usually we compare Nominal Investment vs Real Outcome.
    //   So Gains = realWealth - investedAmount.
    //   Note: realWealth might be < investedAmount in bad cases, but Recharts stack handles negative? 
    //   "Wealth Gained" (Green).

    const chartData = data.map((item) => {
        const total = useRealValues ? item.realWealth : (item.investedAmount + item.wealthGained);
        // Wait, in my logic 'wealthGained' was 'currentWealth' which is TOTAL.
        // Let me check lib/sip-logic.ts:
        // yearlyData.push({ wealthGained: Math.round(currentWealth) ... }) 
        // Ah, I named it 'wealthGained' but assigned 'currentWealth' (Total).
        // Use 'wealthGained' implies Profit? No, variable name in push says 'wealthGained: currentWealth'.
        // Logic: const gains = finalNominalWealth - totalInvested;
        // So 'wealthGained' property in YearResult currently holds TOTAL VALUE.

        // I should fix the naming in SipChart logic or just use it as 'Total Value'.
        // Let's assume item.wealthGained is TOTAL VALUE.

        const investment = item.investedAmount;
        const totalValue = useRealValues ? item.realWealth : item.wealthGained;

        // Gain to display in stack:
        const gain = Math.max(0, totalValue - investment);

        return {
            year: item.year,
            invested: investment,
            gain: gain,
            total: totalValue,
        };
    });

    return (
        <Card className="w-full h-[500px] bg-[#111827] border-[#1F2937] shadow-xl">
            <CardHeader>
                <CardTitle className="text-white">Wealth Projection</CardTitle>
            </CardHeader>
            <CardContent className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        data={chartData}
                        margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                    >
                        <defs>
                            <linearGradient id="colorInvested" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorGain" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#D4AF6A" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#D4AF6A" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1F2937" />
                        <XAxis dataKey="year" stroke="#9CA3AF" tickLine={false} axisLine={false} tickFormatter={(value) => `Yr ${value}`} />
                        <YAxis
                            stroke="#9CA3AF"
                            tickFormatter={(value) =>
                                new Intl.NumberFormat("en-IN", { notation: "compact", compactDisplay: "short" }).format(value)
                            }
                            tickLine={false}
                            axisLine={false}
                        />
                        <Tooltip
                            formatter={(value: any, name: any) => {
                                if (typeof value !== 'number') return ["0", ""];
                                const label = name === "invested" ? "Invested Amount" : "Wealth Gained";
                                return [`₹${value.toLocaleString()}`, label];
                            }}
                            labelFormatter={(label) => `Year ${label}`}
                            contentStyle={{ backgroundColor: '#111827', borderRadius: "8px", border: "1px solid #1F2937", boxShadow: "0 4px 12px rgba(0,0,0,0.5)" }}
                        />
                        <Area
                            type="monotone"
                            dataKey="invested"
                            stackId="1"
                            stroke="#3b82f6"
                            fill="url(#colorInvested)"
                            name="invested"
                            animationDuration={1500}
                        />
                        <Area
                            type="monotone"
                            dataKey="gain"
                            stackId="1"
                            stroke="#D4AF6A"
                            fill="url(#colorGain)"
                            name="gain"
                            animationDuration={1500}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}
