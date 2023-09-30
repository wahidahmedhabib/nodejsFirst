import express from "express";
import users from "./users.js";
import product from "./product.js";
import cart from "./cart.js";
import uploade from "./uploade.js"

const routes = express.Router();

routes.use("/users", users);
routes.use("/product", product);
routes.use("/cart", cart);
routes.use("/uploade", uploade);

export default routes