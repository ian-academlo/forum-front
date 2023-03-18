import React, { useEffect, useState } from "react";
import Button from "../../../components/Button";
import { FlexCont } from "../../../components/Containers";
import TextArea from "../../../components/TextArea";
import Typography from "../../../components/Typography";

const CreatePostForm = ({ onSubmit, onClose }) => {
  const [content, setContent] = useState("");
  const [errorContent, setErrorContent] = useState(false);
  const [formData, setFormData] = useState({
    content: "",
  });

  useEffect(() => {
    setFormData({
      content,
    });
  }, [content]);

  const clear = () => {
    setContent("");
  };

  const validate = () => {
    const { content } = formData;
    if (!content) {
      setErrorContent(true);
    }
    if (content) {
      return true;
    }
    return false;
  };

  return (
    <>
      <Typography variant="h1" color="cyan" glow>
        Escribe tu respuesta
      </Typography>

      <TextArea
        rows="10"
        color={errorContent ? "error" : "cyan"}
        size="medium"
        placeholder="respuesta"
        value={content}
        onChange={(e) => {
          setErrorContent(false);
          setContent(e.target.value);
        }}
      />
      {errorContent && (
        <Typography variant="caption" color="error">
          Debes ingresar una respuesta
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
