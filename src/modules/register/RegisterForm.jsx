import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import TextInput from "../../components/Input";
import Typography from "../../components/Typography";
import Container from "../login/components/Container";

const RegisterForm = ({ onRegister }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorUsername, setErrorUsername] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errroPassword, setErrorPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    setFormData({
      username,
      email,
      password,
    });
  }, [username, email, password]);

  const clear = () => {
    setUsername("");
    setEmail("");
    setPassword("");
  };

  const validate = () => {
    const { username, email, password } = formData;
    if (!username) {
      setErrorUsername(true);
    }
    if (!email) {
      setErrorEmail(true);
    }
    if (!password) {
      setErrorPassword(true);
    }
    if (username && email && password) {
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
        Register
      </Typography>
      <TextInput
        color={errorUsername ? "error" : "cyan"}
        size="medium"
        placeholder="username"
        value={username}
        onChange={(e) => {
          setErrorUsername(false);
          setUsername(e.target.value);
        }}
      />
      {errorUsername && (
        <Typography variant="caption" color="error">
          Debes ingresar el nombre de usuario
        </Typography>
      )}
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
            onRegister(formData);
            clear();
          }
        }}
      >
        Registrar
      </Button>
    </Container>
  );
};

export default RegisterForm;
