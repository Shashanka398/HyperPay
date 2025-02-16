"use server"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth"
import prisma from "@repo/db/client";

export const  createOnRamptxn =async(amount:number,provider:string) =>{
  const session=await getServerSession(authOptions);
  const userId=session?.user?.id;
  const token=Math.random().toString()
  if(!userId){
    return{
        message:"You are not logged in!!!"
    }
  }

  await prisma.onRampTransaction.create({
    data:{
        userId:Number(userId),
        amount:amount,
        status:"Processing",
        startTime:new Date(),
        provider,
        token:token
    }
  })

  return{
        message:"Transaction created successfull"
  }

}