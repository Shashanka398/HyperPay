"use server"
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import prisma from "@repo/db/client";

export const peerToPeer = async (amount: number, phone: string) => {
  const session= await getServerSession(authOptions);
   const sender= session.user?.id
   if(!sender){
    return {
        message:"Error while sending money"
    }
   }

    const receiver= await prisma.user.findFirst({
         where:{
              number:phone
         }
    })
    if (!receiver) {
        return {
            message: "Receiver not found"
        }
    }


        await prisma.$transaction(async (trx) => {
            await trx.$queryRaw`SELECT * FROM "Balance" WHERE "userId"=${Number(sender)} FOR UPDATE`
            const sufficientBalance = await trx.balance.findUnique({
                where: {
                    userId: Number(sender),
                }
            })
             console.log(sufficientBalance,"suffcient balance", amount)
            if (!sufficientBalance || sufficientBalance.amount < amount) {
               throw new Error("Insufficient balance")
            }

            await trx.balance.update({
                where: {
                    userId: Number(sender),
                },
                data: {
                    amount: {
                        decrement: amount
                    }
                }
            })
            await trx.balance.update({
                where: {
                    userId: Number(receiver.id),
                },
                data: {
                    amount: {
                        increment: amount
                    }
                }
            })

            await trx.p2ptransfer.create({
                data:{
                    senderId: Number(sender),
                    receiverId: Number(receiver),
                    amount: amount
                }
            })
          
              return {
            message: "Successfully sent money to receiver"
        }
        })

}