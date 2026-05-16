
import { SipResult, YearResult } from "./sip-logic";

export interface LumpsumParameters {
    totalInvestment: number;
    expectedReturn: number; // Annual %
    timePeriod: number; // Years
    inflationRate?: number; // Annual %
    isTaxAdjusted?: boolean;
    isInflationAdjusted?: boolean;
}

export const calculateLumpsum = (params: LumpsumParameters): SipResult => {
    const {
        totalInvestment,
        expectedReturn,
        timePeriod,
        inflationRate = 6,
        isTaxAdjusted = false,
    } = params;

    let currentWealth = totalInvestment;
    const yearlyData: YearResult[] = [];
    const annualRate = expectedReturn / 100;

    // Lumpsum calculation is simpler: Compound Annually? Or Monthly?
    // Mutual funds usually compound daily/NAV based, but annual CAGR formula is standard.
    // Let's use Annual Compounding for simplicity in loop, or Monthly to be consistent with SIP?
    // A = P(1+r)^t.
    // Let's iterate yearly for the chart.

    for (let year = 1; year <= timePeriod; year++) {
        // Apply annual interest
        currentWealth *= (1 + annualRate);

        /* 
           Inflation adjustment:
           Real = Nominal / (1 + inf)^n
        */
        const inflationFactor = Math.pow(1 + inflationRate / 100, year);
        const realWealth = currentWealth / inflationFactor;

        yearlyData.push({
            year,
            investedAmount: Math.round(totalInvestment),
            wealthGained: Math.round(currentWealth), // Total Value
            realWealth: Math.round(realWealth),
            monthlyInvestment: 0, // Not applicable
        });
    }

    // Final Calculations
    const finalNominalWealth = currentWealth;
    const gains = finalNominalWealth - totalInvestment;

    // Tax Calculation (LTCG: 12.5% on gains > 1.25L)
    let tax = 0;
    if (isTaxAdjusted) {
        const exemptAmount = 125000;
        const taxableGains = Math.max(0, gains - exemptAmount);
        tax = taxableGains * 0.125;
    }

    const postTaxWealth = finalNominalWealth - tax;
    const inflationFactorEnd = Math.pow(1 + inflationRate / 100, timePeriod);
    const postTaxReal = postTaxWealth / inflationFactorEnd;

    return {
        yearlyData,
        totalInvested: Math.round(totalInvestment),
        totalWealth: Math.round(finalNominalWealth),
        totalWealthReal: Math.round(postTaxReal),
        absoluteGains: Math.round(gains),
        taxAmount: Math.round(tax),
        postTaxWealth: Math.round(postTaxWealth),
    };
};
