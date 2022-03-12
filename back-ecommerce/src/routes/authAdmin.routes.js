import { Router } from "express";
import { login } from "../controllers/authAdmin.controller.js";

export const authAdminRouter = Router();

authAdminRouter.post("/loginadmin", login);
