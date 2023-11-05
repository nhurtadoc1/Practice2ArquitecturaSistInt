import mongoose from "npm:mongoose@8.0.0";
import { Client } from "../types.ts";

const Schema = mongoose.Schema;

const clientSchema = new Schema(
  {
    name: { type: String, required: true },
    cif: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

export type ClientModelType = mongoose.Document & Omit<Client, "id">;

export default mongoose.model<ClientModelType>("Client", clientSchema);