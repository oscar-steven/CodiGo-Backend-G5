import { Router } from "express";
import { login, singup } from "../controllers/authUser.controller.js";

export const authRouter = Router();

authRouter.post("/login", login);
authRouter.post("/singup", singup);
