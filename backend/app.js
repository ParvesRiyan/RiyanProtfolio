import express from "express"
import cookieParser from "cookie-parser"
import path from "path";

export const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cookieParser());

import { ContactRouter } from "./router/router.js";

app.use("/api/v1", ContactRouter)

app.use(express.static(path.resolve("./frontend/build")))

app.get("*", (req, res)=>{
    res.sendFile(path.resolve("./frontend/build/index.html"))
})
