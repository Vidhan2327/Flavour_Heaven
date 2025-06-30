import React, { useState } from "react";
import axios from "axios";
import "./MyReservations.css"; // Assuming updated CSS with `lt-reservation-*` is here

const MyReservations = () => {
  const [email, setEmail] = useState("");
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(false);

  
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const fetchReservations = async () => {
    try {
      setLoading(true);
      const res = await axios.post(`${backendUrl}/reservation/get-by-email`, {
        email,
      });
      setReservations(res.data.data || []);
    } catch (error) {
      console.error("Error fetching reservations:", error);
      setReservations([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="lt-reservation-container">
      <h2>Check Your Reservations</h2>

      <input
        type="email"
        className="lt-reservation-input"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button
        onClick={fetchReservations}
        className="lt-reservation-button"
        disabled={loading}
      >
        {loading ? "Loading..." : "Fetch Reservations"}
      </button>

      {reservations.length > 0 ? (
        <ul className="lt-reservation-list">
          {reservations.map((res, index) => (
            <li className="lt-reservation-item" key={index}>
              <strong>Name:</strong> {res.firstName} {res.lastName}
              <br />
              <strong>Date:</strong> {res.date}
              <br />
              <strong>Time:</strong> {res.time}
              <br />
              <strong>Phone:</strong> {res.phone}
            </li>
          ))}
        </ul>
      ) : (
        !loading && (
          <p className="lt-reservation-message">No reservations found.</p>
        )
      )}
    </div>
  );
};

export default MyReservations;

