import { Router } from "express";
import { signup, login } from "../controllers/user-controller.js";
import jwtAuthenticator from "../middlewares/jwt-autenticator.js";
import authorizer from "../middlewares/authorizer.js";
const router = Router();
//crud usuario......
router.post("/signup", signup /* Criar uma conta de usuario*/);
router.use(authorizer("ADMISTRATOR"));
router.post("/login", login /*Cria um token para o usuario */);

router.use(jwtAuthenticator);
router.use(authorizer("ADMISTRATOR"));
router.post("/", store);
router.put("/:id", update);
router.delete("/:id", destroy);

// crud usuário

export default router;


