import { Router } from "express";
import { store, index } from "../controllers/post-controller.js";
import jwtAuthenticator from "../middlewares/jwt-autenticator.js";
const router = Router();
router.post("/", jwtAuthenticator, store); //rota privada
router.get("/", index); //rota publica
export default router;
