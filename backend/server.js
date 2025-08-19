import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";
import cors from "cors";





const app = express();
app.use(cors());

app.use(express.json())


app.use("/api/products", productRoutes)


app.listen(process.env.PORT, () => {
    connectDB();
    console.log(`Server is runningf on port ${process.env.PORT}`);
})

// Z2xiMOBmztHqaZoa