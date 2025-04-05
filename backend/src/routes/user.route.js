import Router from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {
  signup,
  loginUser,
  logoutUser,
  changeCurrentPassword,
  getCurrentUser,
} from "../controllers/user.controller.js";
const router = Router();

router.route("/signup").post(signup);
router.route("/login").post(loginUser);
router.route("/logout").post(verifyJWT, logoutUser);
router.route("/change/password").patch(verifyJWT, changeCurrentPassword);
router.route("/current-user").get(verifyJWT, getCurrentUser);

export default router;
