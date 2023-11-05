import { Request, Response } from "npm:express@4.18.2";
import ProductModel from "../db/Product.ts";

const addProduct = async (req: Request, res: Response) => {
  try {
    const { name, stock, description, price } = req.params;
    if (!name || !stock || !description || !price) {
      res.status(400).send("Name, stock, description, and price are required");
      return;
    }
    const alreadyExists = await ProductModel.findOne({ name }).exec();
    if (alreadyExists) {
      res.status(400).send("Product already exists");
      return;
    }

    const newProduct = new ProductModel({ name, stock, description, price });
    await newProduct.save();

    res.status(200).send({
      name: newProduct.name,
      stock: newProduct.stock,
      description: newProduct.description,
      id: newProduct._id.toString(),
    });
  } catch (error) {
    res.status(500).send(error.message);
    return;
  }
};

export default addProduct;
