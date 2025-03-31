"use client"
import { NetBankingType } from 'components/transfer/types'
import React, { useState } from 'react'
import styles from "../../payment-option.module.css"
import { SUPPORTED_BANKS } from 'utils/TransferOptions.type'
import { createOnRamptxn } from 'app/lib/actions/createOnRamptxn'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@ui/components/ui/card'
import { Input } from '@ui/components/ui/input'
import { Button } from '@ui/components/ui/button'
import { Landmark, User } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@ui/components/ui/select'

const AddMoney = () => {
    const [redirectUrl, setRedirectUrl] = useState<string>(SUPPORTED_BANKS[0]?.redirectUrl as string)
    const [transactionDetails, setTransactionDetails] = useState<NetBankingType>({
        amount: 0,
        bank: '',

    })

    const handleTransactionDetailsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTransactionDetails((prev: NetBankingType) => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }   

    const handletTransactionSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(transactionDetails)
        await createOnRamptxn(transactionDetails.amount*100, transactionDetails.bank)
        window.location.href=redirectUrl
       
    }

    const handleBankChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        handleTransactionDetailsChange(e as unknown as React.ChangeEvent<HTMLInputElement>)
        setRedirectUrl(SUPPORTED_BANKS.find(bank => bank.name === e.target.value)?.redirectUrl || '')

    }
  return (
    <div className="flex justify-center  items-center h-full w-full p-6">
      <Card className="w-full max-w-md bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 text-gray-900 dark:text-gray-100 shadow-xl">
        <CardHeader className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 pb-6">
          <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-gray-100">HyperPay Transfer</CardTitle>
          <CardDescription className="text-gray-500 dark:text-gray-400">Enter your Bank information</CardDescription>
        </CardHeader>
        <form onSubmit={handletTransactionSubmit}>
          <CardContent className="space-y-6 pt-6">
            <div className="space-y-2">
              <label htmlFor="amount" className="text-sm text-gray-600 dark:text-gray-400">Transferable amount</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Landmark  className="h-4 w-4 text-gray-500" />
                </div>
             
                <Input
                  id="amount"
                  name="amount"
                  value={transactionDetails.amount}
                  onChange={handleTransactionDetailsChange}
                  placeholder="1234 5678 9012 3456"
                  className="pl-10 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 focus:ring-gray-300 dark:focus:ring-gray-600 focus:border-gray-300 dark:focus:border-gray-600"
                />
                 <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">₹</div>
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="cardHolderName" className="text-sm text-gray-600 dark:text-gray-400">Select Bank</label>
              <div className="relative">
                <div className='flex gap-2 flex-1'>
                <Select onValueChange={(value) => {
                    handleBankChange({ target: { name: 'bank', value } } as React.ChangeEvent<HTMLSelectElement>);
                }}>
                <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Bank" />
                </SelectTrigger>
                
                <SelectContent>
                    {
                        SUPPORTED_BANKS.map(bank => (
                            <SelectItem key={bank.name} value={bank.name}>{bank.name}</SelectItem>
                        ))
                    }
                </SelectContent>
                </Select>
               </div>


        
              </div>
            </div>
            
     
          </CardContent>
            
          <CardFooter className="pt-2 pb-6">
            <Button 
              type="submit" 
              className="w-full py-6 bg-indigo-500 dark:bg-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-700 text-white"
            >
              Process Payment
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

export default AddMoney