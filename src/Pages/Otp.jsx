import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../Styles/auth.css";

const Otp = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");

  const user = JSON.parse(localStorage.getItem("tempUser"));

  const handleVerify = () => {
    if (!user) {
      toast.error("Please login again");
      navigate("/");
      return;
    }

    if (otp.trim() !== user.otp) {
      toast.error("Invalid OTP");
      return;
    }

    localStorage.setItem("loggedUser", JSON.stringify(user));
    localStorage.removeItem("tempUser");
    toast.success("Login successful");
    navigate("/dashboard");
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2>OTP Verification</h2>

        {/* DEMO OTP DISPLAY */}
        {user && (
          <p style={{ fontSize: "13px", marginBottom: "10px", color: "#555" }}>
            Demo OTP: <strong>{user.otp}</strong>
          </p>
        )}

        <input
          placeholder="Enter OTP"
          onChange={(e) => setOtp(e.target.value)}
        />

        <button onClick={handleVerify}>Verify</button>
      </div>
    </div>
  );
};

export default Otp;
