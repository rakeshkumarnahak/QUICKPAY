import express from "express";
import db from "@repo/db/client";

const app = express();

app.use(express.json());

app.post("/hdfcWebhook", async (req, res) => {
  const paymentInfo: {
    token: string;
    userId: string;
    amount: string;
  } = {
    token: req.body.token,
    userId: req.body.user_identifier,
    amount: req.body.amount,
  };

  try {
    await db.$transaction([
      db.balance.update({
        where: { userId: paymentInfo.userId },
        data: {
          amount: {
            increment: Number(paymentInfo.amount),
          },
        },
      }),

      db.onRampTransaction.update({
        where: {
          token: paymentInfo.token,
        },
        data: {
          status: "Success",
        },
      }),
    ]);

    res.json({
      message: "Captured",
    });
  } catch (error) {
    res.status(411).json({
      error: error,
    });
  }
});

app.listen(3001, () => {
  console.log("Server is running at port 3001");
});
