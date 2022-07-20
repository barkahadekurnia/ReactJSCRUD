import { Router } from "express";
import indexController from "../controller/indexCtrl";

const router= new Router()

router.get('/',indexController.locationCtrl.findAll)
router.get ('/sql',indexController.locationCtrl.querySQL)
router.get('/:id',indexController.locationCtrl.findOne)
router.post('/',indexController.locationCtrl.create)
router.post('/next/',indexController.locationCtrl.createNext,indexController.departmentCtrl.create)
router.put('/:id',indexController.locationCtrl.update)
router.delete('/:id',indexController.locationCtrl.deleted)


export default router