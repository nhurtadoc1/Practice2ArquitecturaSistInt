import { Request, Response } from "npm:express@4.18.2";
import ProductModel from "../db/Product.ts";

const getProduct = async (req: Request, res: Response) => {
  try {
    const { name } = req.params;
    const product = await ProductModel.findOne({ name }).exec();
    if (!product) {
      res.status(404).send("Product not found");
      return;
    }
    res.status(200).send({
      name: product.name,
      stock: product.stock,
      description: product.description,
      id: product._id.toString(),
    });
  } catch (error) {
    res.status(404).send(error.message);
    return;
  }
};

export default getProduct;
