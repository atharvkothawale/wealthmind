
export interface SipParameters {
    monthlyInvestment: number;
    interestRate: number; // Annual %
    timePeriod: number; // Years
    stepUpPercentage?: number; // Annual %
    inflationRate?: number; // Annual %
    isTaxAdjusted?: boolean;
    isInflationAdjusted?: boolean;
}

export interface YearResult {
    year: number;
    investedAmount: number;
    wealthGained: number; // Nominal
    realWealth: number; // Inflation adjusted
    monthlyInvestment: number;
}

export interface SipResult {
    yearlyData: YearResult[];
    totalInvested: number;
    totalWealth: number;
    totalWealthReal: number;
    absoluteGains: number;
    taxAmount: number;
    postTaxWealth: number;
}

export const calculateSIP = (params: SipParameters): SipResult => {
    const {
        monthlyInvestment,
        interestRate,
        timePeriod,
        stepUpPercentage = 0,
        inflationRate = 6,
        isTaxAdjusted = false,
    } = params;

    let currentMonthlyInvestment = monthlyInvestment;
    let totalCorpus = 0;
    let totalInvested = 0;
    const monthlyRate = interestRate / 100 / 12;
    const totalMonths = timePeriod * 12;

    const yearlyData: YearResult[] = [];

    // Iterate month by month
    for (let month = 1; month <= totalMonths; month++) {
        // Step A (Invest)
        totalCorpus += currentMonthlyInvestment;

        // Step B (Track)
        totalInvested += currentMonthlyInvestment;

        // Step C (Compound)
        totalCorpus *= (1 + monthlyRate);

        // Step D (Step-Up Trigger & Year End Snapshot)
        if (month % 12 === 0) {
            const year = month / 12;

            // Snapshot Logic
            const inflationFactor = Math.pow(1 + inflationRate / 100, year);
            const realWealth = totalCorpus / inflationFactor;

            yearlyData.push({
                year,
                investedAmount: Math.round(totalInvested),
                wealthGained: Math.round(totalCorpus), // Keeping field name 'wealthGained' but it represents Total Value based on previous context
                realWealth: Math.round(realWealth),
                monthlyInvestment: Math.round(currentMonthlyInvestment),
            });

            // Apply Step-Up strictly after year completion
            currentMonthlyInvestment *= (1 + stepUpPercentage / 100);
        }
    }

    // Final Calculations
    const finalNominalWealth = totalCorpus;
    const gains = finalNominalWealth - totalInvested;

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
        totalInvested: Math.round(totalInvested),
        totalWealth: Math.round(finalNominalWealth),
        totalWealthReal: Math.round(postTaxReal),
        absoluteGains: Math.round(gains),
        taxAmount: Math.round(tax),
        postTaxWealth: Math.round(postTaxWealth),
    };
};

export const calculateCostOfDelay = (params: SipParameters, delayYears: number = 1): number => {
    // Scenario 1: Start Now (Runs for N years)
    const startNow = calculateSIP(params);

    // Scenario 2: Start Delayed (Runs for N - delayYears)
    // We assume the GOAL year is fixed? Or the DURATION is fixed?
    // "Cost of Delay: If you wait 1 year to start, you lose approximately X in final value."
    // Usually means: If I invest for N-1 years instead of N years.

    if (params.timePeriod <= delayYears) return 0;

    const delayedParams = { ...params, timePeriod: params.timePeriod - delayYears };
    const delayed = calculateSIP(delayedParams);

    // The loss is the difference in final wealth
    // Using Post-Tax and Post-Inflation? Usually Nominal is shown for shock value, but user asked for "Real Value" formula elsewhere.
    // Let's use Nominal for the "Amount" display unless specified.
    // "you lose approximately ₹[Amount] in final value"
    // Let's use the same metric as displayed (e.g. Total Wealth).
    // If tax/inflation are on, use those.

    return startNow.postTaxWealth - delayed.postTaxWealth;
}
