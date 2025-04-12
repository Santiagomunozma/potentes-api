type ProductSell = {
    id?: string;
    productId: string;
    quantity: number;
    totalPrice: number;
    sellId: string;
}

type Sell = {
    id?: string;
    customerId: string;
    employeeId?: string;
    totalPrice: number;
    products: ProductSell[];
};

export type { Sell };