"use client"
import React from 'react'
import styles from "../../payment-option.module.css"

const RecentTransactions = ({ transactions }: {
    transactions: {
        time: string,
        amount: Number,
        provider?: string,
        status: string
    }[]
}) => {
    return (
        <div  className={`${styles.form} flex flex-col gap-3`}>
            <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
            {
                transactions.map((transaction, index) => {
                    return (
                        <div key={index} className="flex justify-between items-center p-2 border-b last:border-b-0">
                            <div className="flex flex-col">
                                <span>{transaction.provider}</span>
                                <span className="text-sm text-gray-500">{transaction.time}</span>
                                <span className={`text-sm font-medium ${transaction.status === 'Success' ? 'text-green-500' : 'text-red-500'}`}>
                                    {transaction.status}
                                </span>
                            </div>
                            <div className="text-lg font-semibold">
                                {transaction.amount as number}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default RecentTransactions