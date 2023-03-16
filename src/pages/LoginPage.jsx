import React from "react";
import { Link } from "react-router-dom";
import Typography from "../components/Typography";
import LoginForm from "../modules/login/LoginForm";

const LoginPage = () => {
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
          Aún no tienes cuenta <Link to="/auth/register">registrate</Link>{" "}
        </Typography>
      </div>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
