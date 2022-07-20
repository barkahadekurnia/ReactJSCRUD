import { Router } from "express";
import indexController from "../controller/indexCtrl";
import uploadDownload from "../../middleware/uploadDownload";
const router= new Router()

router.get('/',indexController.employeeCtrl.findAll)
router.get ('/sql',indexController.employeeCtrl.querySQL)
router.get('/:id',indexController.employeeCtrl.findOne)
router.post('/',indexController.employeeCtrl.create)
router.post('/',indexController.employeeCtrl.create1)
router.post('/next/',indexController.employeeCtrl.createNext,indexController.dependentCtrl.create)
router.put('/:id',indexController.employeeCtrl.update)
router.delete('/:id',indexController.employeeCtrl.deleted)
router.get('/file/:filename',uploadDownload.showFile)

export default router