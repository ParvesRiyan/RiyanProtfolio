import express from "express"
import cookieParser from "cookie-parser"

export const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cookieParser());

import { ContactRouter } from "./router/router.js";

app.use("/api/v1", ContactRouter)
