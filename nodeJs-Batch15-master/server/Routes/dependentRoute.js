import { Router } from "express";
import indexController from "../controller/indexCtrl";

const router= new Router()

router.get('/',indexController.dependentCtrl.findAll)
router.get ('/sql',indexController.dependentCtrl.querySQL)
router.get('/:id',indexController.dependentCtrl.findOne)
router.post('/',indexController.dependentCtrl.create)
router.post('/next/',indexController.dependentCtrl.createNext,indexController.employeeCtrl.create1)
router.put('/:id',indexController.dependentCtrl.update)
router.delete('/:id',indexController.dependentCtrl.deleted)


export default router