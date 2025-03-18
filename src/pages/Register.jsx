import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("http://localhost:5000/register", {
        name,
        email,
        password,
      });

      alert(response.data.message);
      navigate("/login");
    } catch (err) {
      setError("Registration failed. Try again.");
    }
  };

  return (
    <div className="container my-3 py-3">
      <h1 className="text-center">Register</h1>
      <hr />
      <div className="row my-4 h-100">
        <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
          <form onSubmit={handleRegister}>
            {error && <p className="text-danger">{error}</p>}

            <div className="my-3">
              <label>Full Name</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="my-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                required
              />
            </div>

            <div className="my-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
            </div>

            <div className="text-center">
              <button className="my-2 mx-auto btn btn-dark" type="submit">
                Register
              </button>
            </div>
          </form>

          <div className="my-3">
            <p>
              Already have an account?{" "}
              <Link to="/login" className="text-decoration-underline text-info">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
