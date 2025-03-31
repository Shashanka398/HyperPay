"use client"
import React, { useState } from 'react';
import { CardDetailsChangeEvent, CardDetails } from '../../types';


import { CreditCard, User, Calendar, Lock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@ui/components/ui/card';
import { Input } from '@ui/components/ui/input';
import { Button } from '@ui/components/ui/button';

const CardDetailsForm = () => {
  const [cardDetails, setCardDetails] = useState<CardDetails>({
    cardNumber: '',
    cardHolderName: '',
    expiryDate: '',
    cvv: ''
  });

  const handleCardDetailsChange = (e: CardDetailsChangeEvent) => {
    setCardDetails((prev: CardDetails) => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(cardDetails);
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-6">
      <Card className="w-full max-w-md bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 text-gray-900 dark:text-gray-100 shadow-xl">
        <CardHeader className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 pb-6">
          <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Payment Details</CardTitle>
          <CardDescription className="text-gray-500 dark:text-gray-400">Enter your card information</CardDescription>
        </CardHeader>
        
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-6 pt-6">
            <div className="space-y-2">
              <label htmlFor="cardNumber" className="text-sm text-gray-600 dark:text-gray-400">Card Number</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <CreditCard className="h-4 w-4 text-gray-500" />
                </div>
                <Input
                  id="cardNumber"
                  name="cardNumber"
                  value={cardDetails.cardNumber}
                  onChange={handleCardDetailsChange}
                  placeholder="1234 5678 9012 3456"
                  className="pl-10 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 focus:ring-gray-300 dark:focus:ring-gray-600 focus:border-gray-300 dark:focus:border-gray-600"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="cardHolderName" className="text-sm text-gray-600 dark:text-gray-400">Card Holder Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <User className="h-4 w-4 text-gray-500" />
                </div>
                <Input
                  id="cardHolderName"
                  name="cardHolderName"
                  value={cardDetails.cardHolderName}
                  onChange={handleCardDetailsChange}
                  placeholder="John Doe"
                  className="pl-10 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 focus:ring-gray-300 dark:focus:ring-gray-600 focus:border-gray-300 dark:focus:border-gray-600"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="expiryDate" className="text-sm text-gray-600 dark:text-gray-400">Expiry Date</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Calendar className="h-4 w-4 text-gray-500" />
                  </div>
                  <Input
                    id="expiryDate"
                    name="expiryDate"
                    type="date"
                    value={cardDetails.expiryDate}
                    onChange={handleCardDetailsChange}
                    className="pl-10 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 focus:ring-gray-300 dark:focus:ring-gray-600 focus:border-gray-300 dark:focus:border-gray-600"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="cvv" className="text-sm text-gray-600 dark:text-gray-400">CVV</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Lock className="h-4 w-4 text-gray-500" />
                  </div>
                  <Input
                    id="cvv"
                    name="cvv"
                    value={cardDetails.cvv}
                    onChange={handleCardDetailsChange}
                    placeholder="123"
                    maxLength={4}
                    className="pl-10 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 focus:ring-gray-300 dark:focus:ring-gray-600 focus:border-gray-300 dark:focus:border-gray-600"
                  />
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
  );
};

export default CardDetailsForm;