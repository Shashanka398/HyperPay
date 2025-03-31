"use client";
import React from "react";
import { Clock, ArrowDownRight, ArrowUpRight } from "lucide-react"; // Ensure these icons are installed
import { FormattedTransaction } from "../NetBanking";

const RecentTransactions = ({ transactions }: { transactions: FormattedTransaction[] }) => {
  return (
    <div className="flex flex-col gap-3 w-full h-full">
      <div className="p-6 ma-h-[700px] bg-gradient-to-br from-blue-50  to-white dark:from-gray-900 dark:to-gray-950 transition-colors">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="flex items-center mb-6">
            <Clock className="text-purple-500 dark:text-purple-400 mr-3" size={24} />
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Recent Transactions</h1>
          </div>

          {/* Transaction List */}
          <div className="space-y-4 h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-blue-300 dark:scrollbar-thumb-gray-700">
            {transactions.map((transaction: FormattedTransaction) => (
              <div
                key={transaction.time}
                className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-xl p-5 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg transition-all"
              >
                <div className="flex justify-between items-center">
                  {/* Transaction Details */}
                  <div className="space-y-2">
                    {transaction.provider && (
                      <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">{transaction.provider}</h3>
                    )}
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{transaction.time}</p>
                    <div className="flex items-center mt-1">
                      <div
                        className={`w-2.5 h-2.5 rounded-full ${
                          transaction.status === "Success"
                            ? "bg-green-500"
                            : transaction.status === "Failed"
                            ? "bg-red-500"
                            : "bg-yellow-400"
                        } mr-2.5`}
                      ></div>
                      <span
                        className={`font-medium ${
                          transaction.status === "Success"
                            ? "text-green-600 dark:text-green-400"
                            : transaction.status === "Failed"
                            ? "text-red-600 dark:text-red-400"
                            : "text-yellow-600 dark:text-yellow-400"
                        }`}
                      >
                        {transaction.status}
                      </span>
                    </div>
                  </div>

                  {/* Transaction Amount & Status Icon */}
                  <div className="flex items-center">
                    <span className="text-xl font-bold text-gray-800 dark:text-white mr-2">
                      ₹ {transaction.amount.toLocaleString()}
                    </span>
                    {transaction.status === "Success" && <ArrowUpRight className="text-green-500" size={24} />}
                    {transaction.status === "Failed" && <ArrowDownRight className="text-red-500" size={24} />}
                    {transaction.status === "Processing" && <Clock className="text-yellow-500" size={24} />}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentTransactions;
