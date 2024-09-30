import { Router } from "express";
import {
  store,
  index,
  update,
  destroy,
} from "../controllers/post-controller.js";
import jwtAuthenticator from "../middlewares/jwt-autenticator.js";
const router = Router();
router.use(jwtAuthenticator);

router.post("/", store); //rota privada
router.get("/", index);
router.get("/:id", store);
router.put("/:id", update);
router.delete("/:id", destroy);
export default router;
