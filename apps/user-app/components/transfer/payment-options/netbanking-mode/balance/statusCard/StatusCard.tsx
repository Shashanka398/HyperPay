import { Card, CardContent } from '@ui/components/ui/card'
import { CreditCard, LucideIcon, Wallet } from 'lucide-react'
import React from 'react'

interface StatusCardProps {
    title: string;
    amount: string;
    children?: React.ReactNode;  
    isNotIcon?: boolean;
}
const StatusCard = ({title,amount,children,isNotIcon}:StatusCardProps) => {
  return (
  <div className="w-full h-full">
        <Card className="bg-gradient-to-br dark:from-blue-900/30 dark:to-blue-700/20 border dark:border-blue-500/20 backdrop-blur-sm overflow-hidden relative">
          <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/10 rounded-full -translate-y-10 translate-x-10"></div>
          <CardContent className="p-4 relative">
            <div className="flex items-center mb-3">
              <div className="p-2 bg-blue-500/20 rounded-lg mr-3">
                { !isNotIcon && children}
              </div>
              <p className="text-sm font-medium dark:text-blue-300">{title}</p>
            </div>
            <p className="text-2xl font-bold">{amount && `₹ ${amount}`}</p>
             { isNotIcon && children}
            <div className="absolute bottom-2 right-2 opacity-10">
              <CreditCard size={50} className='dark:red' />
            </div>
          </CardContent>
        </Card>
</div>
  )
}

export default StatusCard;
