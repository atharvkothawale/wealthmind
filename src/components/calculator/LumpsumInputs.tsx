
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { LumpsumParameters } from "@/lib/lumpsum-logic";

interface LumpsumInputsProps {
    values: LumpsumParameters;
    onChange: (values: LumpsumParameters) => void;
}

export function LumpsumInputs({ values, onChange }: LumpsumInputsProps) {
    const handleChange = (key: keyof LumpsumParameters, value: number | boolean) => {
        onChange({ ...values, [key]: value });
    };

    const handleInputChange = (key: keyof LumpsumParameters, e: React.ChangeEvent<HTMLInputElement>, max: number) => {
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
                <CardTitle className="text-white text-xl">Lumpsum Configuration</CardTitle>
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
                            onChange={(e) => handleInputChange("totalInvestment", e, 10000000)}
                            className="w-28 h-8 text-right font-bold bg-[#0A0F1E] border-[#1F2937] text-white focus:border-[#D4AF6A] outline-none"
                            max={10000000}
                        />
                    </div>
                    <Slider
                        id="totalInvestment"
                        min={5000}
                        max={5000000}
                        step={5000}
                        value={[values.totalInvestment]}
                        onValueChange={(v) => handleChange("totalInvestment", v[0])}
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
                            max={40}
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
                        max={30}
                        step={0.1}
                        value={[values.expectedReturn]}
                        onValueChange={(v) => handleChange("expectedReturn", v[0])}
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
                        {values.isInflationAdjusted && (
                            <div className="flex justify-between items-center pl-2 border-l-2 border-[#1F2937]">
                                <Label htmlFor="inflationRate" className="text-xs text-[#9CA3AF]">Inflation Rate (%)</Label>
                                <Input
                                    id="inflationRate"
                                    type="number"
                                    value={values.inflationRate || 6}
                                    onChange={(e) => handleInputChange("inflationRate", e, 10)}
                                    className="w-20 h-7 text-xs text-right bg-[#0A0F1E] border-[#1F2937] text-white"
                                    max={10}
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
