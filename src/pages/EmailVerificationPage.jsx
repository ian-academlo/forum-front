import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Typography from "../components/Typography";

const EmailVerificationPage = () => {
  const [params] = useSearchParams();
  const [verified, setVerified] = useState(false);
  const token = params.get("token");

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .post("http://localhost:8000/api/v1/auth/verify", { token })
      .then(() => setVerified(true))
      .catch((error) => console.log(error.response.data));
  }, []);

  useEffect(() => {
    if (verified) {
      setTimeout(() => {
        navigate("/auth/login");
      }, 3000);
    }
  }, [verified]);

  return (
    <>
      {verified ? (
        <>
          <Typography variant="h1">Correo verificado exitosamente</Typography>
          <Typography variant="paragraph">Redirigiendo a login</Typography>
        </>
      ) : (
        <Typography variant="h1">Verificando correo</Typography>
      )}
    </>
  );
};

export default EmailVerificationPage;
