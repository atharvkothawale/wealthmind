
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

import { CountUp } from "@/components/ui/count-up";

interface SipInsightsProps {
    costOfDelay: number;
    totalWealth: number;
    invested: number;
    useRealValues?: boolean;
}

export function SipInsights({ costOfDelay, totalWealth, invested, useRealValues }: SipInsightsProps) {
    const gains = totalWealth - invested;
    const isLoss = gains < 0;

    return (
        <div className="grid gap-4">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="bg-[#111827] border-[#1F2937] hover:scale-[1.02] transition-all duration-300 shadow-sm hover:shadow-md">
                    <CardContent className="pt-6">
                        <div className="text-sm font-medium text-[#9CA3AF]">Total Invested</div>
                        <div className="text-2xl font-bold text-white">
                            <CountUp end={invested} prefix="₹" />
                        </div>
                    </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-[#111827] to-[#D4AF6A]/10 border-l-4 border-l-[#D4AF6A] border-t-[#1F2937] border-r-[#1F2937] border-b-[#1F2937] hover:scale-[1.02] transition-all duration-300 shadow-md hover:shadow-lg">
                    <CardContent className="pt-6">
                        <div className="text-sm font-medium text-[#9CA3AF]">{useRealValues ? "Real Wealth" : "Total Wealth"}</div>
                        <div className="text-2xl font-bold text-[#D4AF6A]">
                            <CountUp end={totalWealth} prefix="₹" />
                        </div>
                    </CardContent>
                </Card>
                <Card className="bg-[#111827] border-[#1F2937] hover:scale-[1.02] transition-all duration-300 shadow-sm hover:shadow-md">
                    <CardContent className="pt-6">
                        <div className="text-sm font-medium text-[#9CA3AF]">Total Gains</div>
                        <div className={`text-2xl font-bold ${isLoss ? "text-red-500" : "text-[#D4AF6A]"}`}>
                            <CountUp end={gains} prefix="₹" />
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Cost of Delay Insight */}
            {costOfDelay > 0 && (
                <div className="bg-amber-100 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-900 rounded-lg p-4 flex items-start gap-3 animate-in fade-in slide-in-from-bottom-2 duration-700">
                    <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-500 mt-0.5" />
                    <div>
                        <h4 className="font-semibold text-amber-800 dark:text-amber-400">Cost of Delay</h4>
                        <p className="text-sm text-amber-700 dark:text-amber-300">
                            If you wait <strong>1 year</strong> to start, you lose approximately <span className="font-bold">₹{costOfDelay.toLocaleString()}</span> in final value.
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}
