import express from "express";
import { initializeKhaltiPayment, verifyKhaltiPayment } from "./khalti.js";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json());

const dummyItem = { id: "1", name: "Sample Item", price: 500 };
app.post("/initialize-khali", async (req, res) => {
  try {
    const { itemId, totalPrice, website_url } = req.body;
    const purchasedItemData = {
      _id: "dummy-purchase-id",
      totalPrice: totalPrice * 100,
    };

    const paymentInitate = await initializeKhaltiPayment({
      amount: totalPrice * 100,
      purchase_order_id: purchasedItemData._id,
      purchase_order_name: "Dummy Item",
      return_url: `${process.env.BACKEND_URI}/complete-khalti-payment`,
      website_url,
    });

    res.json({
      success: true,
      purchasedItemData,
      payment: paymentInitate,
    });
  } catch (error) {
    res.json({
      success: false,
      error,
    });
  }
});

// Example backend route (Express)
app.get("/complete-khalti-payment", async (req, res) => {
  try {
    const { pidx, status } = req.query;

    if (!pidx || !status) {
      return res.redirect("http://localhost:5173/khalti?status=failed");
    }

    if (status === "User canceled") {
      return res.redirect("http://localhost:5173/khalti?status=canceled");
    }

    return res.redirect(
      `http://localhost:5173/khalti?status=success&pidx=${pidx}`
    );
  } catch (error) {
    console.error("Error completing payment:", error);
    return res.redirect("http://localhost:5173/khalti?status=error");
  }
});

app.listen(3001, () => {
  console.log("Backend listening at http://localhost:3001");
});
