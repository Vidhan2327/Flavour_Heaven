import express from "express";
import { send_reservation, getReservationsByEmail } from "../controller/reservation.js";

const router = express.Router();

// Route to create/send a reservation
router.post("/send", send_reservation);

// Route to get reservations by email
router.post("/get-by-email", getReservationsByEmail);

export default router;
