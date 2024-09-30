import { Router } from "express";
import { signup, login } from "../controllers/user-controller.js";
const router = Router();
//crud usuario......
router.post("/signup", signup /* Criar uma conta de usuario*/);
router.post("/login", login /*Cria um token para o usuario */);

export default router;
