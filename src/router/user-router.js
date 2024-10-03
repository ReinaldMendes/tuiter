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

import { Router } from "express";
import { signup, login, store, update, destroy } from "../controllers/user-controller.js";
import jwtAuthenticator from "../middlewares/jwt-authenticator.js"; // Middleware para autenticação JWT
import authorizer from "../middlewares/authorizer.js"; // Middleware para autorização por role

const router = Router();

// Rota para signup (criação de usuário)
router.post("/signup", signup); // Aberto para todos

// Rota para login (geração de token)
router.post("/login", login); // Aberto para todos

// Todas as rotas a partir daqui exigem um token JWT válido
router.use(jwtAuthenticator);

// Rotas para CRUD de usuários, acessíveis apenas para administradores
router.use(authorizer("ADMINISTRATOR"));
router.post("/", store); // Criar usuário
router.put("/:id", update); // Atualizar usuário
router.delete("/:id", destroy); // Deletar usuário

export default router;
