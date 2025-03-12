import React from 'react'
import AddMoney from './add-money/AddMoney'
import Balance from './balance/Balance'
import RecentTransactions from './recent-transactions/RecentTransactions'
import { getServerSession } from 'next-auth/next';
import { authOptions } from 'app/lib/auth';
import prisma from '@repo/db/client';

interface BalanceData {
  amount: number;
  locked: number;
}

interface Transaction {
  time: Date;
  amount: number;
  status: string;
  provider: string;
}

interface FormattedTransaction {
  time: string;
  amount: number;
  status: string;
  provider: string;
}

async function getBalance(): Promise<BalanceData> {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return { amount: 0, locked: 0 };
  }

  const balance = await prisma.balance.findFirst({
    where: {
      userId: Number(session.user.id)
    }
  });

  return {
    amount: (balance?.amount || 0) / 100,
    locked: (balance?.locked || 0) / 100
  };
}

async function getOnRampTransactions(): Promise<Transaction[]> {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return [];
  }

  const txns = await prisma.onRampTransaction.findMany({
    where: {
      userId: Number(session.user.id)
    }
  });

  return txns.map((t:{startTime:Date,amount:number,status:string,provider:string}) => ({
    time: t.startTime,
    amount: t.amount,
    status: t.status,
    provider: t.provider
  }));
}

const NetBanking = async () => {
  const balance = await getBalance();
  const transactions = await getOnRampTransactions();
  
  const lockedAmount = transactions
    .filter(t => t.status === 'Processing')
    .reduce((acc, t) => acc + t.amount, 0);

  const formattedTransactions: FormattedTransaction[] = transactions.map((transaction) => ({
    ...transaction,
    amount: transaction.amount / 100,
    time: new Date(transaction.time).toLocaleString(),
  }));

  return (
    <div className='flex flex-row gap-3'>
      <AddMoney/>
      <div className='flex flex-col gap-3'> 
        <Balance balance={{
          amount: balance.amount.toString(),
          locked: (lockedAmount / 100).toString()
        }}/>
        <RecentTransactions
          transactions={formattedTransactions}
        />
      </div>
    </div>
  )
}

export default NetBanking