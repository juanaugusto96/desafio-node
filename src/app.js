
import express from "express";
import productsRouter from "./routes/products.js";
import cartsRouter from "./routes/carts.js";

const app = express();
const PORT = 8080;

app.use("/products", productsRouter);
app.use("/carts", cartsRouter);

app.listen(PORT, () => {
  console.log("Servidor está corriendo en el puerto " + PORT);
});