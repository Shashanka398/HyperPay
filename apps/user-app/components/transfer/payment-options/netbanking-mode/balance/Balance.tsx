'use client'
import React, { useEffect, useState } from 'react'
import { CircleCheckBig, CircleX, Clock, HandCoins, LockKeyholeOpen } from 'lucide-react'
import { FormattedTransaction } from '../NetBanking'
import StatusCard from './statusCard/StatusCard'

const Balance = ({ balance ,transactions}: {
    balance: {
        amount: string,
        locked: string,
    },
    transactions:FormattedTransaction[]
}) => {

    const [transactionStatus, setTransactionStatus] = useState({
        pending:0,
        success:0,
        failed:0
    })
    useEffect(() => {
        let pending = 0;
        let success = 0;
        let failed = 0;
        transactions.forEach(transaction => {
            if(transaction.status === 'Processing'){
                pending += 1;
            }
            if(transaction.status === 'Success'){
                success += 1;
            }
            if(transaction.status === 'Failed'){
                failed += 1;
            }
        });
        setTransactionStatus({pending,success,failed})
    }, [transactions])
    return (
       <div className='flex flex-row gap-3'>
             <StatusCard title='Total Balance' amount={balance.amount} ><HandCoins size={20}/></StatusCard>
            <StatusCard title='Total Unlocked Balance' amount={balance.locked}  ><LockKeyholeOpen size={20} /></StatusCard>
            <StatusCard title='Transaction Status' amount='' isNotIcon={true}>
                <div className='flex flex-row gap-3'>
                    <div className='flex flex-col gap-1 justify-center items-center'>
                        <div className='flex flex-row gap-1 justify-center items-center'>
                                <Clock size={10} color='yellow' />
                                <p className='text-sm text-yellow-500'>Pending</p>  
                        </div>
                        <p className='text-lg font-bold text-yellow-500'>{transactionStatus.pending}</p>
                    </div>
                    <div className='flex flex-col gap-1 justify-center items-center'>
                         <div className='flex flex-row gap-1 justify-center items-center'>
                            <CircleCheckBig size={10} color='green'/>
                             <p className='text-sm text-green-500'>Success</p>
                         </div>
                        <p className='text-lg font-bold text-green-500'>{transactionStatus.success}</p>
                    </div>
                    <div className='flex flex-col gap-1 justify-center items-center'>
                        <div className='flex flex-row gap-1 justify-center items-center'>
                            <CircleX  size={10} color='red'/>
                            <p className='text-sm text-red-500'>Failed</p>
                        </div>
                        <p className='text-lg font-bold text-red-500'>{transactionStatus.failed}</p>
                    </div>
                </div>
            </StatusCard>
        </div>
    )
}

export default Balance
