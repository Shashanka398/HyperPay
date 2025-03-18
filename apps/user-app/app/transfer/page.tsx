"use client"

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, RefreshCw, CreditCard, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@ui/components/ui/card";
import { Button } from "@ui/components/ui/button";


export default function TransferOptions() {
  const router = useRouter();

  const transferOptions = [
    {
      id: "upi",
      title: "UPI Options",
      icon: <RefreshCw className="h-5 w-5" />,
      route: "/transfer/upi"
    },
    {
      id: "card",
      title: "Credit/Debit/ATM card",
      icon: <CreditCard className="h-5 w-5" />,
      route: "/transfer/cards"
    },
    {
      id: "netbanking",
      title: "Net Banking",
      icon: <Globe className="h-5 w-5" />,
      route: "/transfer/netbanking"
    }
  ];

  const handleOptionClick = (route: string) => {
    router.push(route);
  };

  return (
    <div className="p-6 bg-white dark:bg-slate-950 min-h-screen">
      <Card className="bg-white dark:bg-slate-900 border-gray-200 dark:border-slate-800 mb-6">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-white text-xl">Transfer Options</CardTitle>
        </CardHeader>
      </Card>

      <CardContent className="p-0 space-y-4">
        {transferOptions.map((option) => (
          <Button
            key={option.id}
            variant="outline"
            className="w-full bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 border-gray-200 dark:border-slate-700 flex justify-between items-center h-14 text-left"
            onClick={() => handleOptionClick(option.route)}
          >
            <div className="flex items-center">
              <div className="bg-gray-200 dark:bg-slate-700 p-2 rounded-md mr-3 text-gray-700 dark:text-slate-300">
                {option.icon}
              </div>
              <span className="text-gray-800 dark:text-slate-200 font-medium">{option.title}</span>
            </div>
            <ArrowRight className="h-4 w-4 text-gray-500 dark:text-slate-400" />
          </Button>
        ))}
      </CardContent>
    </div>
  );
}