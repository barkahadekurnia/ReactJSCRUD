import { Router } from "express";
import indexController from "../controller/indexCtrl";

const router= new Router()

router.get('/',indexController.CountCtrl.findAll)
router.get ('/sql',indexController.CountCtrl.querySQL)
router.get('/:id',indexController.CountCtrl.findOne)
router.post('/',indexController.CountCtrl.create)
router.post('/next/',indexController.CountCtrl.createNext,indexController.locationCtrl.create)
router.put('/:id',indexController.CountCtrl.update)
router.delete('/:id',indexController.CountCtrl.deleted)


export default router