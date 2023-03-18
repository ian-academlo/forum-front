import React, { useEffect, useState } from "react";
import Button from "../../../components/Button";
import TextInput from "../../../components/Input";
import TextArea from "../../../components/TextArea";
import Typography from "../../../components/Typography";
import { FlexCont } from "../../../components/Containers";

const CreatePostForm = ({ onSubmit, onClose }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [errorTitle, setErrorTitle] = useState(false);
  const [errorDescription, setErrorDescription] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    email: "",
  });

  useEffect(() => {
    setFormData({
      title,
      description,
    });
  }, [title, description]);

  const clear = () => {
    setTitle("");
    setDescription("");
  };

  const validate = () => {
    const { username, description } = formData;
    if (!username) {
      setErrorTitle(true);
    }
    if (!description) {
      setErrorDescription(true);
    }
    if (username && description) {
      return true;
    }
    return false;
  };

  return (
    <>
      <Typography variant="h3" color="cyan" glow>
        Crear nueva publicación
      </Typography>
      <TextInput
        color={errorTitle ? "error" : "cyan"}
        size="medium"
        placeholder="Titulo"
        value={title}
        onChange={(e) => {
          setErrorTitle(false);
          setTitle(e.target.value);
        }}
      />
      {errorTitle && (
        <Typography variant="caption" color="error">
          Debes ingresar un titulo para la publicación
        </Typography>
      )}
      <TextArea
        rows="10"
        color={errorDescription ? "error" : "cyan"}
        size="medium"
        placeholder="Contenido"
        value={description}
        onChange={(e) => {
          setErrorDescription(false);
          setDescription(e.target.value);
        }}
      />
      {errorDescription && (
        <Typography variant="caption" color="error">
          Debes ingresar el contenido de tu publicación
        </Typography>
      )}
      <FlexCont justify="space-between" gap="10px">
        <Button
          variant="rounded"
          color="magenta"
          size="medium"
          fullwidth
          onClick={() => {
            onClose(false);
          }}
        >
          Cancelar
        </Button>
        <Button
          variant="rounded"
          color="cyan"
          size="medium"
          fullwidth
          onClick={() => {
            if (validate()) {
              onSubmit(formData);
              clear();
            }
          }}
        >
          Responder
        </Button>
      </FlexCont>
    </>
  );
};

export default CreatePostForm;
