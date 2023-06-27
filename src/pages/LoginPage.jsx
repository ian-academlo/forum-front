import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Typography from "../components/Typography";
import LoginForm from "../modules/login/LoginForm";
import Snackbar from "../components/Snackbar";

const LoginPage = () => {
  const [reqError, setReqError] = useState(null);
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  console.log(import.meta.env.VITE_PORT);

  const login = (userData) => {
    axios
      .post("http://localhost:8000/api/v1/auth/login", userData)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("userInfo", JSON.stringify(res.data));
        navigate("/forum");
      })
      .catch((error) => {
        setShowError(true);
        setReqError(error.response.data.message);
      });
  };

  return (
    <>
      <Snackbar
        open={showError}
        onClose={() => setShowError(false)}
        message={reqError}
        severity="error"
        position={{ vertical: "bottom", horizontal: "right" }}
      />
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
        <LoginForm onLogin={login} />
      </div>
    </>
  );
};

export default LoginPage;
