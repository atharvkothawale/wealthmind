
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
import { SwpYearResult } from "@/lib/swp-logic";

interface SwpChartProps {
    data: SwpYearResult[];
}

export function SwpChart({ data }: SwpChartProps) {
    return (
        <Card className="w-full h-[500px] bg-[#111827] border-[#1F2937] shadow-xl">
            <CardHeader>
                <CardTitle className="text-white">Balance Projection</CardTitle>
            </CardHeader>
            <CardContent className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        data={data}
                        margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                    >
                        <defs>
                            <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#D4AF6A" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#D4AF6A" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorWithdrawn" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
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
                                const label = name === "balance" ? "Remaining Balance" : "Total Withdrawn";
                                return [`₹${value.toLocaleString()}`, label];
                            }}
                            labelFormatter={(label) => `Year ${label}`}
                            contentStyle={{ backgroundColor: '#111827', borderRadius: "8px", border: "1px solid #1F2937", boxShadow: "0 4px 12px rgba(0,0,0,0.5)" }}
                        />
                        <Area
                            type="monotone"
                            dataKey="totalWithdrawn"
                            stackId="2"
                            stroke="#ef4444"
                            fill="url(#colorWithdrawn)"
                            name="withdrawn"
                            animationDuration={1500}
                        />
                        <Area
                            type="monotone"
                            dataKey="balance"
                            stackId="1"
                            stroke="#D4AF6A"
                            fill="url(#colorBalance)"
                            name="balance"
                            animationDuration={1500}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}
