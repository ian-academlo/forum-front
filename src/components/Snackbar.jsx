import React from "react";
import styled from "styled-components";
import { colors } from "../theme/colors";
import Typography from "./Typography";

const SnackbarBase = styled.div`
  position: absolute;
  top: ${(props) => props.vertical === "top" && "20px"};
  bottom: ${(props) => props.vertical === "bottom" && "20px"};
  left: ${(props) => props.horizontal === "left" && "20px"};
  right: ${(props) => props.horizontal === "right" && "20px"};
  min-width: 250px;
  max-width: 380px;
  border-radius: 10px;
  border: ${(props) =>
    props.severity
      ? `3px solid ${colors[props.severity].primary}`
      : "3px solid rgba(255,255,255,0.8)"};
  box-shadow: ${(props) =>
    props.severity
      ? `0px 0px 10px 3px ${colors[props.severity].shadow}`
      : "0px 0px 10px 1px rgba(255, 255, 255, 0.6)"};
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  & > .close {
    cursor: pointer;
  }
`;

const Snackbar = ({ open, onClose, message, severity, position }) => {
  const { horizontal, vertical } = position;
  return (
    <>
      {open && (
        <SnackbarBase
          severity={severity}
          vertical={vertical || "top"}
          horizontal={horizontal || "left"}
        >
          <Typography color={severity}>
            {severity && (
              <span className="material-symbols-outlined">
                {severity === "info" && "info"}
                {severity === "warning" && "warning"}
                {severity === "error" && "error"}
                {severity === "success" && "check"}
              </span>
            )}
          </Typography>
          <Typography variant="paragraph" color={severity}>
            {message}
          </Typography>
          <Typography
            onClick={() => onClose()}
            className="close"
            color={severity}
          >
            <span className="material-symbols-outlined">close</span>
          </Typography>
        </SnackbarBase>
      )}
    </>
  );
};

export default Snackbar;
