import { Router } from "express";
import {
  store,
  index,
  update,
  destroy,
} from "../controllers/post-controller.js";
import jwtAuthenticator from "../middlewares/jwt-autenticator.js";
const router = Router();

router.post("/", jwtAuthenticator, store); //rota privada
router.get("/", jwtAuthenticator, index);
router.get("/:id", jwtAuthenticator, store);
router.put("/:id", jwtAuthenticator, update);
router.delete("/:id", jwtAuthenticator, destroy);
export default router;
