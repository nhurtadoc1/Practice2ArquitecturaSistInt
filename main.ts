import express from "npm:express@4.18.2";
import mongoose from "npm:mongoose@8.0.0";

/*
import getPerson from "./resolvers/getPerson.ts";
import addPerson from "./resolvers/addPerson.ts";
import updatePerson from "./resolvers/updatePerson.ts";
import deletePerson from "./resolvers/deletePerson.ts";
*/

import addProduct from "./resolvers/addProduct.ts";
import getProduct from "./resolvers/getProduct.ts";

import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts";
const env = await load();

const MONGO_URL = env.MONGO_URL || Deno.env.get("MONGO_URL");

if (!MONGO_URL) {
  console.log("No mongo URL found");
  Deno.exit(1);
}

await mongoose.connect(MONGO_URL);
const app = express();
app.use(express.json());
app.post("/addProduct/:name,:stock,:description,:price", addProduct);
app.get("/getProduct/:name", getProduct);
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
