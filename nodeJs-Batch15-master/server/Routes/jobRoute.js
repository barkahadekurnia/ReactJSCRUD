import { Router } from "express";
import indexController from "../controller/indexCtrl";

const router= new Router()

router.get('/',indexController.jobCtrl.findAll)
router.get ('/sql',indexController.jobCtrl.querySQL)
router.get('/:id',indexController.jobCtrl.findOne)
router.post('/',indexController.jobCtrl.create)
router.post('/next/',indexController.jobCtrl.createNext,indexController.employeeCtrl.create1)
router.put('/:id',indexController.jobCtrl.update)
router.delete('/:id',indexController.jobCtrl.deleted)


export default router