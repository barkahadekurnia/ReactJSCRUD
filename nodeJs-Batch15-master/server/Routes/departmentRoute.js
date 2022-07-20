import { Router } from "express";
import indexController from "../controller/indexCtrl";

const router= new Router()

router.get('/',indexController.departmentCtrl.findAll)
router.get ('/sql',indexController.departmentCtrl.querySQL)
router.get('/:id',indexController.departmentCtrl.findOne)
router.post('/',indexController.departmentCtrl.create)
router.post('/next/',indexController.departmentCtrl.createNext,indexController.employeeCtrl.create1)
router.put('/:id',indexController.departmentCtrl.update)
router.delete('/:id',indexController.departmentCtrl.deleted)


export default router