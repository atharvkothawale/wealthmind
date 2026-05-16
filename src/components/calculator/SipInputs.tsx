
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { SipParameters } from "@/lib/sip-logic";

interface SipInputsProps {
    values: SipParameters;
    onChange: (values: SipParameters) => void;
}

export function SipInputs({ values, onChange }: SipInputsProps) {
    const handleChange = (key: keyof SipParameters, value: number | boolean) => {
        onChange({ ...values, [key]: value });
    };

    const handleInputChange = (key: keyof SipParameters, e: React.ChangeEvent<HTMLInputElement>, max: number) => {
        let val = parseFloat(e.target.value);
        if (isNaN(val)) {
            handleChange(key, 0);
            return;
        }
        // Clamp value
        if (val > max) val = max;
        if (val < 0) val = 0;

        handleChange(key, val);
    };

    return (
        <Card className="w-full h-fit bg-[#111827] border-[#1F2937] shadow-xl">
            <CardHeader>
                <CardTitle className="text-white text-xl">Configuration</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-6">
                {/* Monthly Investment */}
                <div className="grid gap-2">
                    <div className="flex justify-between items-center gap-4">
                        <Label htmlFor="monthlyInvestment" className="text-[#9CA3AF]">Monthly Investment (₹)</Label>
                        <Input
                            id="monthlyInvestment"
                            type="number"
                            value={values.monthlyInvestment}
                            onChange={(e) => handleInputChange("monthlyInvestment", e, 500000)}
                            className="w-24 h-8 text-right font-bold bg-[#0A0F1E] border-[#1F2937] text-white focus:border-[#D4AF6A] outline-none"
                        />
                    </div>
                    <Slider
                        id="monthlyInvestment"
                        min={500}
                        max={500000}
                        step={500}
                        value={[values.monthlyInvestment]}
                        onValueChange={(v) => handleChange("monthlyInvestment", v[0])}
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
                            onChange={(e) => handleInputChange("timePeriod", e, 40)}
                            className="w-24 h-8 text-right font-bold bg-[#0A0F1E] border-[#1F2937] text-white focus:border-[#D4AF6A] outline-none"
                        />
                    </div>
                    <Slider
                        id="timePeriod"
                        min={1}
                        max={40}
                        step={1}
                        value={[values.timePeriod]}
                        onValueChange={(v) => handleChange("timePeriod", v[0])}
                    />
                </div>

                {/* Expected Return Rate */}
                <div className="grid gap-2">
                    <div className="flex justify-between items-center gap-4">
                        <Label htmlFor="interestRate" className="text-[#9CA3AF]">Expected Return (p.a %)</Label>
                        <Input
                            id="interestRate"
                            type="number"
                            value={values.interestRate}
                            onChange={(e) => handleInputChange("interestRate", e, 30)}
                            className="w-24 h-8 text-right font-bold bg-[#0A0F1E] border-[#1F2937] text-white focus:border-[#D4AF6A] outline-none"
                        />
                    </div>
                    <Slider
                        id="interestRate"
                        min={1}
                        max={30}
                        step={0.1}
                        value={[values.interestRate]}
                        onValueChange={(v) => handleChange("interestRate", v[0])}
                    />
                </div>

                {/* Step Up Percentage */}
                <div className="grid gap-2">
                    <div className="flex justify-between items-center gap-4">
                        <Label htmlFor="stepUpPercentage" className="text-[#9CA3AF]">Annual Step Up (%)</Label>
                        <Input
                            id="stepUpPercentage"
                            type="number"
                            value={values.stepUpPercentage || 0}
                            onChange={(e) => handleInputChange("stepUpPercentage", e, 50)}
                            className="w-24 h-8 text-right font-bold bg-[#0A0F1E] border-[#1F2937] text-white focus:border-[#D4AF6A] outline-none"
                        />
                    </div>
                    <Slider
                        id="stepUpPercentage"
                        min={0}
                        max={30}
                        step={1}
                        value={[values.stepUpPercentage || 0]}
                        onValueChange={(v) => handleChange("stepUpPercentage", v[0])}
                    />
                </div>

                {/* Toggles Row */}
                <div className="flex flex-col gap-4 pt-4 border-t border-[#1F2937] mt-2">

                    {/* Inflation Toggle */}
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                            <Label htmlFor="inflation" className="flex flex-col text-[#9CA3AF]">
                                <span>Adjust for Inflation</span>
                            </Label>
                            <Switch
                                id="inflation"
                                checked={values.isInflationAdjusted || false}
                                onCheckedChange={(c) => handleChange("isInflationAdjusted", c)}
                            />
                        </div>

                        {/* Editable Inflation Rate if Checked */}
                        {values.isInflationAdjusted && (
                            <div className="flex justify-between items-center pl-2 border-l-2 border-[#1F2937]">
                                <Label htmlFor="inflationRate" className="text-xs text-[#9CA3AF]">Inflation Rate (%)</Label>
                                <Input
                                    id="inflationRate"
                                    type="number"
                                    value={values.inflationRate || 6}
                                    onChange={(e) => handleInputChange("inflationRate", e, 10)}
                                    className="w-20 h-7 text-xs text-right bg-[#0A0F1E] border-[#1F2937] text-white"
                                />
                            </div>
                        )}
                    </div>

                    {/* Tax Toggle */}
                    <div className="flex items-center justify-between">
                        <Label htmlFor="tax" className="flex flex-col text-[#9CA3AF]">
                            <span>Include Taxes</span>
                            <span className="text-[10px] opacity-70">12.5% on gains &gt; ₹1.25L</span>
                        </Label>
                        <Switch
                            id="tax"
                            checked={values.isTaxAdjusted || false}
                            onCheckedChange={(c) => handleChange("isTaxAdjusted", c)}
                        />
                    </div>

                </div>
            </CardContent>
        </Card>
    );
}
