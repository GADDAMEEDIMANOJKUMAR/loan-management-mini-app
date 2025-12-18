import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import "../Styles/auth.css";

const Signup = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    city: ""
  });

  useEffect(() => {
    const users = localStorage.getItem("users");
    if (!users) {
      localStorage.setItem("users", JSON.stringify([]));
    }
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSignup = () => {
    const { name, email, password, phone, city } = form;

    if (!name || !email || !password || !phone || !city) {
      toast.error("All fields are required");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users"));

    const alreadyExists = users.find(
      (user) => user.email === email
    );

    if (alreadyExists) {
      toast.error("Email already exists");
      return;
    }

    const newUser = {
      id: Date.now(),
      name,
      email,
      password,
      phone,
      city,
      otp: "111222"
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    toast.success("Signup successful");
    navigate("/");
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2>Signup</h2>

        <input name="name" placeholder="Full Name" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <input name="phone" placeholder="Phone Number" onChange={handleChange} />
        <input name="city" placeholder="City" onChange={handleChange} />

        <button onClick={handleSignup}>Create Account</button>

        <p>
          Already have an account? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
