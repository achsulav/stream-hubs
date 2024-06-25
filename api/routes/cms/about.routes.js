import express from "express";
import { aboutCtrl } from "../../controllers/cms/index.js";

const router = express.Router()

router.get('/', aboutCtrl.index)

router.delete('/:id', aboutCtrl.destroy)

export default router