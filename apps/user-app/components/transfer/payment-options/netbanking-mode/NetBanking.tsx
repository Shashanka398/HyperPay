import React from 'react'
import AddMoney from './add-money/AddMoney'
import Balance from './balance/Balance'
import RecentTransactions from './recent-transactions/RecentTransactions'
import { getServerSession } from 'next-auth/next';
import { authOptions } from 'app/lib/auth';
import prisma from '@repo/db/client';
async function getBalance() {
    const session = await getServerSession(authOptions);
    console.log(session,"session")
    const balance = await prisma.balance.findFirst({
        where: {
            userId: Number(session?.user?.id)
        }
    });
    console.log(balance,"balance")
    return {
        amount: balance?.amount/100 ,
        locked: balance?.locked/100
    }
}

async function getOnRampTransactions() {
    const session = await getServerSession(authOptions);
    const txns = await prisma.onRampTransaction.findMany({
        where: {
            userId: Number(session?.user?.id)
        }
    });
    return txns.map(t => ({
        time: t.startTime,
        amount: t.amount,
        status: t.status,
        provider: t.provider
    }))
}

const NetBanking = async () => {
    const balance = await getBalance();
    const transactions = await getOnRampTransactions();
    const lockedAmount = transactions.filter(t => t.status === 'Processing').reduce((acc, t) => acc + t.amount, 0);    
    console.log(balance, transactions,"balance, transactions")
    const formattedTransactions = transactions.map((transaction) => ({
        ...transaction,
        amount: transaction.amount/100,
        time: new Date(transaction.time).toLocaleString(),
    }));
  return (
    <div className='flex flex-row gap-3'>
        <AddMoney/>
        <div className='flex flex-col gap-3'> 
             <Balance balance={{
            amount: balance.amount,

            locked: lockedAmount/100
             }}/>
        <RecentTransactions
            transactions={formattedTransactions}/>

        </div>
       

    </div>
  )
}

export default NetBanking