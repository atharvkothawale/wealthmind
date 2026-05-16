
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { SwpParameters } from "@/lib/swp-logic";

interface SwpInputsProps {
    values: SwpParameters;
    onChange: (values: SwpParameters) => void;
}

export function SwpInputs({ values, onChange }: SwpInputsProps) {
    const handleChange = (key: keyof SwpParameters, value: number) => {
        onChange({ ...values, [key]: value });
    };

    const handleInputChange = (key: keyof SwpParameters, e: React.ChangeEvent<HTMLInputElement>, max: number) => {
        let val = parseFloat(e.target.value);
        if (isNaN(val)) {
            handleChange(key, 0);
            return;
        }
        if (val > max) val = max;
        if (val < 0) val = 0;
        handleChange(key, val);
    };

    return (
        <Card className="w-full h-fit bg-[#111827] border-[#1F2937] shadow-xl">
            <CardHeader>
                <CardTitle className="text-white text-xl">SWP Configuration</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-6">

                {/* Total Investment */}
                <div className="grid gap-2">
                    <div className="flex justify-between items-center gap-4">
                        <Label htmlFor="totalInvestment" className="text-[#9CA3AF]">Total Investment (₹)</Label>
                        <Input
                            id="totalInvestment"
                            type="number"
                            value={values.totalInvestment}
                            onChange={(e) => handleInputChange("totalInvestment", e, 50000000)} // 5 Cr Limit
                            className="w-28 h-8 text-right font-bold bg-[#0A0F1E] border-[#1F2937] text-white focus:border-[#D4AF6A] outline-none"
                            max={50000000}
                        />
                    </div>
                    <Slider
                        id="totalInvestment"
                        min={100000}
                        max={10000000} // 1 Cr Slider Max
                        step={100000}
                        value={[values.totalInvestment]}
                        onValueChange={(v) => handleChange("totalInvestment", v[0])}
                    />
                </div>

                {/* Withdrawal Amount */}
                <div className="grid gap-2">
                    <div className="flex justify-between items-center gap-4">
                        <Label htmlFor="withdrawalAmount" className="text-[#9CA3AF]">Monthly Withdrawal (₹)</Label>
                        <Input
                            id="withdrawalAmount"
                            type="number"
                            value={values.withdrawalAmount}
                            onChange={(e) => handleInputChange("withdrawalAmount", e, 500000)}
                            className="w-24 h-8 text-right font-bold bg-[#0A0F1E] border-[#1F2937] text-white focus:border-[#D4AF6A] outline-none"
                            max={500000}
                        />
                    </div>
                    <Slider
                        id="withdrawalAmount"
                        min={1000}
                        max={200000}
                        step={500}
                        value={[values.withdrawalAmount]}
                        onValueChange={(v) => handleChange("withdrawalAmount", v[0])}
                    />
                </div>

                {/* Expected Return */}
                <div className="grid gap-2">
                    <div className="flex justify-between items-center gap-4">
                        <Label htmlFor="expectedReturn" className="text-[#9CA3AF]">Expected Return (p.a %)</Label>
                        <Input
                            id="expectedReturn"
                            type="number"
                            value={values.expectedReturn}
                            onChange={(e) => handleInputChange("expectedReturn", e, 30)}
                            className="w-24 h-8 text-right font-bold bg-[#0A0F1E] border-[#1F2937] text-white focus:border-[#D4AF6A] outline-none"
                            max={30}
                        />
                    </div>
                    <Slider
                        id="expectedReturn"
                        min={1}
                        max={15}
                        step={0.1}
                        value={[values.expectedReturn]}
                        onValueChange={(v) => handleChange("expectedReturn", v[0])}
                    />
                </div>

                {/* Time Period */}
                <div className="grid gap-2">
                    <div className="flex justify-between items-center gap-4">
                        <Label htmlFor="timePeriod" className="text-[#9CA3AF]">Time Period (Years)</Label>
                        <Input
                            id="timePeriod"
                            type="number"
                            value={values.timePeriod}
                            onChange={(e) => handleInputChange("timePeriod", e, 50)}
                            className="w-24 h-8 text-right font-bold bg-[#0A0F1E] border-[#1F2937] text-white focus:border-[#D4AF6A] outline-none"
                            max={50}
                        />
                    </div>
                    <Slider
                        id="timePeriod"
                        min={1}
                        max={30}
                        step={1}
                        value={[values.timePeriod]}
                        onValueChange={(v) => handleChange("timePeriod", v[0])}
                    />
                </div>

            </CardContent>
        </Card>
    );
}
