export type Product = {
    name: string;
    stock: number;
    description: string;
    price: number;
    id: string;
};

export type Client = {
    name: string;
    cif: string;
    id: string;
};

export type Bill = {
    client: string;
    products: Array<Product>;
    total: number;
    id: string;
};