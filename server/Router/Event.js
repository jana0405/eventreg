import express from "express";
import { createEvent, deleteOne, getAllEvents, getOneEvents, UpdateOne } from "../Controller/Event.js"; 

const router = express.Router();


router.route("/").post(createEvent)
.get(getAllEvents)

router.route("/:id").get(getOneEvents)
.put(UpdateOne)
.delete(deleteOne)


export default router;