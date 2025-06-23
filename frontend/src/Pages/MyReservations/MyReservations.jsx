import React, { useState } from "react";
import axios from "axios";
import "./MyReservations.css";
const MyReservations = () => {
  const [email, setEmail] = useState("");
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchReservations = async () => {
    try {
      setLoading(true);
      const res = await axios.post("http://localhost:4000/api/v1/reservation/get-by-email", {
        email: email,
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
    <div className="reservation-checker">
      <h2>Check Your Reservations</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={fetchReservations} disabled={loading}>
        {loading ? "Loading..." : "Fetch Reservations"}
      </button>

      {reservations.length > 0 ? (
        <ul>
          {reservations.map((res, index) => (
            <li key={index}>
              <strong>Name:</strong> {res.firstName} {res.lastName}<br />
              <strong>Date:</strong> {res.date}<br />
              <strong>Time:</strong> {res.time}<br />
              <strong>Phone:</strong> {res.phone}
            </li>
          ))}
        </ul>
      ) : (
        !loading && <p>No reservations found.</p>
      )}
    </div>
  );
};

export default MyReservations;
