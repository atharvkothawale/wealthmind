
export interface SwpParameters {
    totalInvestment: number; // Lump sum
    withdrawalAmount: number; // Monthly
    expectedReturn: number; // Annual %
    timePeriod: number; // Years
}

export interface SwpYearResult {
    year: number;
    balance: number;
    totalWithdrawn: number;
    interestEarned: number;
}

export interface SwpResult {
    yearlyData: SwpYearResult[];
    finalBalance: number;
    totalWithdrawn: number;
    isDepleting: boolean;
    depletionYear?: number;
}

export const calculateSWP = (params: SwpParameters): SwpResult => {
    const { totalInvestment, withdrawalAmount, expectedReturn, timePeriod } = params;

    let currentBalance = totalInvestment;
    let totalWithdrawn = 0;
    const monthlyRate = expectedReturn / 100 / 12;
    const yearlyData: SwpYearResult[] = [];
    let depletionYear: number | undefined;

    // Check Sustainability (Infinite Money Glitch Check)
    // Sustainable if Monthly Withdrawal <= Monthly Interest on Initial Corpus (roughly)
    // Actually, check if corpus ever hits 0.

    const totalMonths = timePeriod * 12;
    let yearInterest = 0;

    for (let month = 1; month <= totalMonths; month++) {
        // Withdraw first (usually) or End of month? 
        // Standard SWP: Withdraw -> Balance -> Interest. OR Balance -> Interest -> Withdraw.
        // Usually funds grow for the month, then you withdraw? Or you withdraw on 1st?
        // Let's assume Withdraw on 1st of month.

        // 1. Withdraw
        if (currentBalance >= withdrawalAmount) {
            currentBalance -= withdrawalAmount;
            totalWithdrawn += withdrawalAmount;
        } else {
            // Depleted
            totalWithdrawn += currentBalance;
            currentBalance = 0;
            if (!depletionYear) depletionYear = Math.ceil(month / 12);
        }

        // 2. Interest
        const interest = currentBalance * monthlyRate;
        currentBalance += interest;
        yearInterest += interest;

        // Snapshot at year end
        if (month % 12 === 0) {
            yearlyData.push({
                year: month / 12,
                balance: Math.round(currentBalance),
                totalWithdrawn: Math.round(totalWithdrawn),
                interestEarned: Math.round(yearInterest)
            });
            yearInterest = 0;
        }
    }

    // Check if depleting within timeframe OR trending to zero quickly?
    // User requested: "Sustainable: Your money will last forever." vs "Depleting".
    // Magic check: withdrawal < (investment * monthlyRate)
    // If interest > withdrawal, it grows forever.
    const initialMonthlyInterest = totalInvestment * monthlyRate;
    const isSustainable = withdrawalAmount <= initialMonthlyInterest;

    // Explicit depletion check: did it hit 0?
    const isActuallyDepleted = currentBalance < 1;

    // Status Logic
    // If it depleted, it's RED.
    // If it didn't deplete, but balance is dropping? It's "Depleting" eventually.
    // If balance is growing? It's "Sustainable".

    // We can confidently say "Sustainable" if end balance > start balance.
    const isGrowing = currentBalance > totalInvestment;

    // We flag "Depleting" if it runs out within the period.
    // If it lasts the full period but is dropping, we can say "Depleting slowly".
    // User asked for "Sustainable" vs "Depleting: runs out in Year X".

    return {
        yearlyData,
        finalBalance: Math.round(currentBalance),
        totalWithdrawn: Math.round(totalWithdrawn),
        isDepleting: isActuallyDepleted || (!isGrowing && !isSustainable),
        depletionYear: isActuallyDepleted ? depletionYear : undefined
    };
};
