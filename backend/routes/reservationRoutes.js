
import express from "express";
import {
  send_reservation,
  getReservationsByEmail,
} from "../controllers/reservationController.js";

const router = express.Router();

router.post("/send", send_reservation);
router.post("/get-by-email", getReservationsByEmail);

export default router;
