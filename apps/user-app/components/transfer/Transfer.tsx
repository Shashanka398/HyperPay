"use client"
import { MainBar } from '@repo/ui/MainBar'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { TransferNav } from 'utils/NavItems'

const Transfer = ({ children }: { children: React.ReactNode; }) => {
  const router = useRouter();
  return (
    <div className="flex h-full">
      {/* Left Sidebar */}
      <aside className="w-64 bg-gray-100 h-full p-4">
        <header>Tranfer Options</header>
        {TransferNav.map((item) => (
          <Link key={item.url} href={item.url} className="block p-2 text-gray-800 hover:bg-gray-300 rounded">
            {item.title}
          </Link>
        ))}
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4">{children}</main>
    </div>
  )
}

export default Transfer