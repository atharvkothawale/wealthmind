
"use client";

import { useState, useMemo } from "react";
import { SwpInputs } from "./SwpInputs";
import { SwpChart } from "./SwpChart";
import { SwpInsights } from "./SwpInsights";
import { SwpParameters, calculateSWP } from "@/lib/swp-logic";

export default function SwpCalculator() {
    const [params, setParams] = useState<SwpParameters>({
        totalInvestment: 5000000, // 50 Lakhs
        withdrawalAmount: 25000,
        expectedReturn: 8, // Conservative
        timePeriod: 20
    });

    const results = useMemo(() => calculateSWP(params), [params]);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Controls */}
            <div className="lg:col-span-4 space-y-4">
                <SwpInputs values={params} onChange={setParams} />
            </div>

            {/* Results */}
            <div className="lg:col-span-8 space-y-8">
                <SwpChart data={results.yearlyData} />
                <SwpInsights
                    finalBalance={results.finalBalance}
                    totalWithdrawn={results.totalWithdrawn}
                    isDepleting={results.isDepleting}
                    depletionYear={results.depletionYear}
                />
            </div>
        </div>
    );
}
