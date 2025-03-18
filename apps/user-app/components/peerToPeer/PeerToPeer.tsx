"use client"
import React, { useState } from 'react';
import { peerToPeer } from 'app/lib/actions/peerToPeer';
import { Phone, CreditCard, ArrowRight, Shield, Check, Loader } from 'lucide-react';

import { Input } from '@ui/components/ui/input';
import { Button } from '@ui/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@ui/components/ui/card';

const PeerToPeer = () => {
  const [peerDetails, setPeerDetails] = useState({
    phone: '',
    amount: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const message = await peerToPeer(Number(peerDetails.amount) * 100, peerDetails.phone);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
      alert(message?.message);
    } catch (error) {
      console.error("Payment failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPeerDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-6 bg-white dark:bg-gray-950">
      <Card className="w-full max-w-md bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 text-gray-900 dark:text-gray-100 shadow-xl">
        <CardHeader className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 pb-6">
          <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Fund Transfer</CardTitle>
          <CardDescription className="text-gray-500 dark:text-gray-400">Send money securely</CardDescription>
        </CardHeader>
        
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-6 pt-6">
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm text-gray-600 dark:text-gray-400">Recipient</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Phone className="h-4 w-4 text-gray-500" />
                </div>
                <Input
                  type="number"
                  id="phone"
                  name="phone"
                  value={peerDetails.phone}
                  onChange={handleChange}
                  placeholder="Phone number"
                  required
                  className="pl-10 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 focus:ring-gray-300 dark:focus:ring-gray-600 focus:border-gray-300 dark:focus:border-gray-600"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="amount" className="text-sm text-gray-600 dark:text-gray-400">Amount</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <CreditCard className="h-4 w-4 text-gray-500" />
                </div>
                <Input
                  type="number"
                  id="amount"
                  name="amount"
                  value={peerDetails.amount}
                  onChange={handleChange}
                  placeholder="0.00"
                  required
                  min="1"
                  step="0.01"
                  className="pl-10 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 focus:ring-gray-300 dark:focus:ring-gray-600 focus:border-gray-300 dark:focus:border-gray-600"
                />
              </div>
            </div>
          </CardContent>
            
          <CardFooter className="flex flex-col gap-4 pt-2 pb-6 px-6">
            <Button 
              type="submit" 
              disabled={loading}
              className={`w-full py-6 ${
                loading 
                  ? 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed' 
                  : success 
                    ? 'bg-emerald-500 dark:bg-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-700 text-white' 
                    : 'bg-indigo-500 dark:bg-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-700 text-white'
              }`}
            >
              <div className="flex items-center justify-center">
                {loading ? (
                  <Loader className="animate-spin mr-2 h-4 w-4" />
                ) : success ? (
                  <Check className="mr-2 h-5 w-5" />
                ) : (
                  <ArrowRight className="mr-2 h-5 w-5" />
                )}
                {loading ? 'Processing...' : success ? 'Transfer Complete' : 'Send Transfer'}
              </div>
            </Button>
            
            <div className="flex items-center justify-center text-xs text-gray-500 dark:text-gray-500">
              <Shield className="w-3 h-3 mr-1" />
              Secured and encrypted transaction
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default PeerToPeer;