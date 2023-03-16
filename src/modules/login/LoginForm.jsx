import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import TextInput from "../../components/Input";
import Typography from "../../components/Typography";
import Container from "./components/Container";

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState(false);
  const [errroPassword, setErrorPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    setFormData({
      email,
      password,
    });
  }, [email, password]);

  const clear = () => {
    setEmail("");
    setPassword("");
  };

  const validate = () => {
    const { email, password } = formData;
    if (!email) {
      setErrorEmail(true);
    }
    if (!password) {
      setErrorPassword(true);
    }
    if (email && password) {
      return true;
    }
    return false;
  };

  return (
    <Container color="cyan">
      <Typography
        variant="h1"
        color="cyan"
        glow
        style={{ textAlign: "center" }}
      >
        Login
      </Typography>
      <TextInput
        color={errorEmail ? "error" : "cyan"}
        size="medium"
        placeholder="email"
        value={email}
        onChange={(e) => {
          setErrorEmail(false);
          setEmail(e.target.value);
        }}
      />
      {errorEmail && (
        <Typography variant="caption" color="error">
          Debes ingresar un correo
        </Typography>
      )}
      <TextInput
        color={errroPassword ? "error" : "cyan"}
        size="medium"
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => {
          setErrorPassword(false);
          setPassword(e.target.value);
        }}
      />
      {errroPassword && (
        <Typography variant="caption" color="error">
          Debes ingresar una contraseña
        </Typography>
      )}
      <Button
        variant="rounded"
        color="cyan"
        size="medium"
        fullwidth
        onClick={() => {
          if (validate()) {
            onLogin(formData);
            clear();
          }
        }}
      >
        Ingresar
      </Button>
    </Container>
  );
};

export default LoginForm;
