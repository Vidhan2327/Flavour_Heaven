import { Reservation } from "../models/reservation.js";
import ErrorHandler from "../middlewares/error.js";

export const send_reservation = async (req, res, next) => {
  const { firstName, lastName, email, date, time, phone } = req.body;

  if (!firstName || !lastName || !email || !date || !time || !phone) {
    return next(new ErrorHandler("Please Fill Full Reservation Form!", 400));
  }

  try {
    await Reservation.create({ firstName, lastName, email, date, time, phone });
    res
      .status(201)
      .json({ success: true, message: "Reservation Sent Successfully!" });
  } catch (error) {
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(
        (err) => err.message
      );
      return next(new ErrorHandler(validationErrors.join(", "), 400));
    }
    return next(error);
  }
};

export const getReservationsByEmail = async (req, res, next) => {
  const { email } = req.body;

  if (!email) {
    return next(new ErrorHandler("Email is required", 400));
  }

  try {
    const reservations = await Reservation.find({ email });

    if (reservations.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No reservations found" });
    }

    res.status(200).json({ success: true, data: reservations });
  } catch (error) {
    return next(error);
  }
};
