
"use client";

import { useState, useMemo } from "react";
import { SipInputs } from "./SipInputs";
import { SipChart } from "./SipChart";
import { SipInsights } from "./SipInsights";
import { SipParameters, calculateSIP, calculateCostOfDelay } from "@/lib/sip-logic";

export default function SipTab() {
    const [params, setParams] = useState<SipParameters>({
        monthlyInvestment: 10000,
        interestRate: 12, // Equity mutual funds average
        timePeriod: 10,
        stepUpPercentage: 0,
        inflationRate: 6,
        isTaxAdjusted: false,
        isInflationAdjusted: false,
    });

    const results = useMemo(() => calculateSIP(params), [params]);
    const costOfDelay = useMemo(() => calculateCostOfDelay(params), [params]);

    const displayWealth = params.isInflationAdjusted
        ? results.totalWealthReal
        : (params.isTaxAdjusted ? results.postTaxWealth : results.totalWealth);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Controls */}
            <div className="lg:col-span-4 space-y-4">
                <SipInputs values={params} onChange={setParams} />
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
