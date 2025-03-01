
import express from "express";
import {
  createStripePaymentIntent,
  listTransactions,
  createTransaction,
} from "../controllers/transactionController";

const router = express.Router();

router.get("/", listTransactions);
router.post("/", createTransaction);
router.post("/stripe/payment-intent", createStripePaymentIntent);

export default router;
