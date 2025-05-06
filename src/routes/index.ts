import { Router } from "express";
import { userRoutes } from "../modules/users/user.routes";
import { productRoutes } from "../modules/products/product.route";
import { sellRoutes } from "../modules/sell/sell.routes";

const router = Router();

router.use("/users", userRoutes);
router.use("/products", productRoutes);
router.use("/sells", sellRoutes);
router.use("/coupons", sellRoutes);

export default router;
