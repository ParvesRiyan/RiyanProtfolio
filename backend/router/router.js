import express from "express";
import { contact } from "../modal/controller.js";

export const ContactRouter = express.Router();

ContactRouter.route("/contact").post(contact);
