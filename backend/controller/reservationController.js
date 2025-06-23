import Reservation from '../models/reservation.js'; 

export const getReservationsByEmail = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ success: false, message: "Email is required" });
  }

  try {
    const reservations = await Reservation.find({ email });

    if (reservations.length === 0) {
      return res.status(404).json({ success: false, message: "No reservations found" });
    }

    res.status(200).json({ success: true, data: reservations });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
