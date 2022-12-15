import  express  from "express";
import UserController from "../Controller/controller.js";

const router=express.Router()

router.get('/Registration',UserController.ViewRegistration)
router.get('/',UserController.ViewRegistration)
router.post('/',UserController.Registration)
router.get('/login',UserController.ViewLogin)
router.post('/login',UserController.Verification)

export default router
