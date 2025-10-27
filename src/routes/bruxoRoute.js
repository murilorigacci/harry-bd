import { Router } from "express";
import * as BruxoController from './../controllers/bruxoController.js'

const router = Router();

router.get("/", BruxoController.listarTodos)
router.get("/:id", BruxoController.listarUm)
router.post("/", BruxoController.criar)
router.delete("/:id", BruxoController.apagar)
router.put("/:id", BruxoController.atualizar)

export default router;
