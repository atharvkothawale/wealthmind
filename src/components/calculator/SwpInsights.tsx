
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, AlertOctagon } from "lucide-react";
import { CountUp } from "@/components/ui/count-up";

interface SwpInsightsProps {
    finalBalance: number;
    totalWithdrawn: number;
    isDepleting: boolean;
    depletionYear?: number;
}

export function SwpInsights({ finalBalance, totalWithdrawn, isDepleting, depletionYear }: SwpInsightsProps) {
    return (
        <div className="grid gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="bg-[#111827] border-[#1F2937] hover:scale-[1.02] transition-all duration-300 shadow-sm hover:shadow-md">
                    <CardContent className="pt-6">
                        <div className="text-sm font-medium text-[#9CA3AF]">Total Withdrawn</div>
                        <div className="text-2xl font-bold text-white">
                            <CountUp end={totalWithdrawn} prefix="₹" />
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-[#111827] to-[#D4AF6A]/10 border-l-4 border-l-[#D4AF6A] border-t-[#1F2937] border-r-[#1F2937] border-b-[#1F2937] hover:scale-[1.02] transition-all duration-300 shadow-md hover:shadow-lg">
                    <CardContent className="pt-6">
                        <div className="text-sm font-medium text-[#9CA3AF]">Final Balance</div>
                        <div className="text-2xl font-bold text-[#D4AF6A]">
                            <CountUp end={finalBalance} prefix="₹" />
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Status Card */}
            <div className={`rounded-lg p-4 flex items-start gap-4 border ${isDepleting ? "bg-red-50 border-red-200 dark:bg-red-950/30 dark:border-red-900" : "bg-green-50 border-green-200 dark:bg-green-950/30 dark:border-green-900"}`}>
                {isDepleting ? (
                    <AlertOctagon className="w-6 h-6 text-red-600 dark:text-red-400 mt-0.5" />
                ) : (
                    <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400 mt-0.5" />
                )}

                <div>
                    <h4 className={`font-semibold ${isDepleting ? "text-red-800 dark:text-red-300" : "text-green-800 dark:text-green-300"}`}>
                        {isDepleting ? "Capital Depleting" : "Sustainable Withdrawal"}
                    </h4>
                    <p className={`text-sm ${isDepleting ? "text-red-700 dark:text-red-400" : "text-green-700 dark:text-green-400"}`}>
                        {isDepleting
                            ? `At this rate, your money runs out ${depletionYear ? `in Year ${depletionYear}` : "eventually"}. Reduce withdrawal amount.`
                            : "Your Safe Withdrawal Rate allows your capital to grow forever."}
                    </p>
                </div>
            </div>
        </div>
    );
}
