import React from "react";
import { Link } from "react-router-dom";
import Typography from "../components/Typography";
import RegisterForm from "../modules/register/RegisterForm";

const RegisterPage = () => {
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
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
