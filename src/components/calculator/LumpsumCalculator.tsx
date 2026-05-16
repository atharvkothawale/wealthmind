
"use client";

import { useState, useMemo } from "react";
import { LumpsumInputs } from "./LumpsumInputs";
// Reuse SIP Chart and Insights as the data shape is compatible (SipResult)
import { SipChart } from "./SipChart";
import { SipInsights } from "./SipInsights";
import { LumpsumParameters, calculateLumpsum } from "@/lib/lumpsum-logic";
import { calculateCostOfDelay } from "@/lib/sip-logic"; // Can we reuse this? Need to check types.
// calculateCostOfDelay expects SipParameters. LumpsumParameters is almost same but missing 'monthlyInvestment'.
// We might need a specific cost of delay for lumpsum or skip it.
// "Cost of Delay" for lumpsum: If I invest today vs next year?
// 10L today for 10Y vs 10L next year for 9Y.
// Let's implement a quick local cost of delay or skip if complicated.
// User didn't explicitly ask for Cost of Delay in Lumpsum, but "Insight Card: Final Balance" was requested in SWP.
// For Lumpsum, let's keep SipInsights structure (Invested, Wealth, Gains).

export default function LumpsumCalculator() {
    const [params, setParams] = useState<LumpsumParameters>({
        totalInvestment: 100000,
        expectedReturn: 12,
        timePeriod: 10,
        inflationRate: 6,
        isTaxAdjusted: false,
        isInflationAdjusted: false,
    });

    const results = useMemo(() => calculateLumpsum(params), [params]);

    // Display Wealth Logic (Inflation/Tax adjusted)
    const displayWealth = params.isInflationAdjusted
        ? results.totalWealthReal
        : (params.isTaxAdjusted ? results.postTaxWealth : results.totalWealth);

    // Simple Cost of Delay for Lumpsum (Optional, reusing SipInsights prop name but passing 0 for now to hide or custom logic)
    // Actually, let's calculate it: Loss = Value(N) - Value(N-1) roughly.
    // Logic: calculateLumpsum({ ...params, timePeriod: params.timePeriod - 1 })
    // Only if timePeriod > 1
    const costOfDelay = useMemo(() => {
        if (params.timePeriod <= 1) return 0;
        const delayedParams = { ...params, timePeriod: params.timePeriod - 1 };
        const delayedResults = calculateLumpsum(delayedParams);
        // Compare wealth
        const currentW = params.isTaxAdjusted ? results.postTaxWealth : results.totalWealth;
        const delayedW = params.isTaxAdjusted ? delayedResults.postTaxWealth : delayedResults.totalWealth;
        return currentW - delayedW;
    }, [params, results]);


    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Controls */}
            <div className="lg:col-span-4 space-y-4">
                <LumpsumInputs values={params} onChange={setParams} />
            </div>

            {/* Results */}
            <div className="lg:col-span-8 space-y-8">
                <SipChart
                    data={results.yearlyData}
                    useRealValues={params.isInflationAdjusted}
                />
                <SipInsights
                    costOfDelay={costOfDelay}
                    totalWealth={displayWealth}
                    invested={results.totalInvested}
                    useRealValues={params.isInflationAdjusted}
                />
            </div>
        </div>
    );
}
