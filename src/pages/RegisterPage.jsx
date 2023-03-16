import axios from "axios";
import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Typography from "../components/Typography";
import RegisterForm from "../modules/register/RegisterForm";

const RegisterPage = () => {
  const navigate = useNavigate();

  const register = (userData) => {
    axios
      .post("http://localhost:8000/api/v1/users", userData)
      .then(() => navigate("/auth/login"))
      .catch((error) => console.log(error));
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "15px",
          right: "15px",
        }}
      >
        <Typography variant="caption" color="magenta" glow>
          Ya tienes cuenta <Link to="/auth/login">ingresa</Link>{" "}
        </Typography>
      </div>
      <RegisterForm onRegister={register} />
    </div>
  );
};

export default RegisterPage;
