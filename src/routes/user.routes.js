import { Router } from "express";
import {upload} from "../middleware/multer.middleware.js"
import {signupuser} from "../controllers/user.controller.js"
const router = Router()
router.route("/sign-up").post(
    upload.fields([
        {
            name:"coverimage",
            maxCount:1
        }
    ])
    ,signupuser)
router.route("/log-in").post()
export default router