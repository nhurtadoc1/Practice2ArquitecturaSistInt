import mongoose from "npm:mongoose@8.0.0";
import { Product, Bill } from "../types.ts";

const Schema = mongoose.Schema;

const billSchema = new Schema(
  {
    client: { type: String, required: true, unique: true },
    products: { type: Array<Product>, required: true },
    total: { type: Number, required: true },
  },
  { timestamps: true }
);

export type BillModelType = mongoose.Document & Omit<Bill, "id">;

export default mongoose.model<BillModelType>("Bill", billSchema);