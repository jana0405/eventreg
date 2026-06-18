import express from "express";
import { createRegistration, getRegistrations, deleteRegistration, getMyRegistrations} from "../Controller/Registration.js";

const router = express.Router();

router.post("/", createRegistration);
router.get("/", getRegistrations);
router.get("/student", getMyRegistrations); 
router.delete("/:id", deleteRegistration);

export default router;