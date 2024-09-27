import * as express from "express";
import { createUser, findUserById, deleteUser, userList } from "../controllers/clientController.js";

const router = express.Router();

router.get('/consulta', userList);
router.get('/consulta/:id', findUserById);
router.post('/cadastro', createUser);
router.delete('/deletar/:id', deleteUser);
  
export default router;  