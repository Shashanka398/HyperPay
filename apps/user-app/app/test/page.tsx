"use client"
import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import {PrismaClient} from '@repo/db/client';
// import { useBalance } from '@repo/store/hooks/useBalance';
export default function Page() {
  // const balance = useBalance();
  const handleClick = async() => {
   const data = await fetch('http://localhost:3000/kk/jjgyg');
    console.log(data);
  }

  return(
    <div className="text-4xl h-10">
      {/* <div>{balance}</div> */}
      <div onClick={handleClick}>zero</div>
      <Button appName={'Hi'} >Click me sadasdd</Button>
    </div>
  )
}