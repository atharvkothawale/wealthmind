
"use client";

import { useState, useMemo } from "react";
import { SipInputs } from "./SipInputs";
import { SipChart } from "./SipChart";
import { SipInsights } from "./SipInsights";
import { SipParameters, calculateSIP, calculateCostOfDelay } from "@/lib/sip-logic";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SipTab from "./SipTab";
import LumpsumCalculator from "./LumpsumCalculator";
import SwpCalculator from "./SwpCalculator";

export default function CalculatorPage() {
    return (
        <div className="w-full">
                <Tabs defaultValue="sip" className="w-full">
                    <div className="flex justify-center mb-12 border-b border-[#1F2937]">
                        <TabsList className="flex bg-transparent p-0 gap-8">
                            {[
                                { value: 'sip', label: 'SIP Calculator' },
                                { value: 'lumpsum', label: 'Lumpsum' },
                                { value: 'swp', label: 'SWP Calculator' }
                            ].map((tab) => (
                                <TabsTrigger 
                                    key={tab.value}
                                    value={tab.value}
                                    className="px-6 py-4 text-[#9CA3AF] text-sm font-bold tracking-wider uppercase bg-transparent border-b-[3px] border-transparent rounded-none transition-all duration-200 hover:text-[#D4AF6A] data-[state=active]:text-[#D4AF6A] data-[state=active]:border-[#D4AF6A] data-[state=active]:bg-[#D4AF6A]/5"
                                >
                                    {tab.label}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                    </div>

                    <TabsContent value="sip">
                        <div className="space-y-4">
                            <SipTab />
                        </div>
                    </TabsContent>

                    <TabsContent value="lumpsum">
                        <div className="space-y-4">
                            <LumpsumCalculator />
                        </div>
                    </TabsContent>

                    <TabsContent value="swp">
                        <div className="space-y-4">
                            <SwpCalculator />
                        </div>
                    </TabsContent>
                </Tabs>
        </div>
    );
}
