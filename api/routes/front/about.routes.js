import express from "express";
import { aboutCtrl } from "../../controllers/cms/index.js";

const router = express.Router()

router.post('/', aboutCtrl.store)

export default router