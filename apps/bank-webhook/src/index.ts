import express from "express";
import db from "@repo/db/client";

const app = express();

app.post("hdfcWebHook", async (req, res) => {
    // TODO: Add zod validation here
    // TODO: Check if request came from bank webhook
    const paymentInformation = {
        token: req.body.token,
        userId: req.body.user_identifier,
        amount: req.body.amount
    };

    try {
        await db.$transaction([
            db.balance.updateMany({
                where: {
                    userId: paymentInformation.userId,
                },
                data: {
                    amount: {
                        increment: paymentInformation.amount // We could do amount = balance + paymentInformation.amount but if two requests would go then it will be race condition
                    }
                }
            }),
            db.onRampTransaction.updateMany({
                where: {
                    token: paymentInformation.token
                },
                data: {
                    status: "Success"
                }
            })
        ]);

        res.status(200).json({
            message: "Payment Successful"
        });
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
});
