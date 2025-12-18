import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import "../styles/auth.css";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      toast.error("Enter email and password");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    let foundUser = null;

    for (let i = 0; i < users.length; i++) {
      if (users[i].email === email && users[i].password === password) {
        foundUser = users[i];
        break;
      }
    }

    if (!foundUser) {
      toast.error("Invalid email or password");
      return;
    }

    localStorage.removeItem("tempUser");
    localStorage.setItem("tempUser", JSON.stringify(foundUser));
    navigate("/otp");
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Login</button>

        <p>
          Don&apos;t have an account? <Link to="/signup">Signup</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
