import React from "react";
import styled from "styled-components";
import { colors } from "../theme/colors";
import { input } from "../theme/input";

const BaseInput = styled.input`
  width: 100%;
  border: ${(props) =>
    props.color
      ? `3px solid ${colors[props.color].primary}`
      : "2px solid white"};
  box-shadow: ${(props) =>
    props.color
      ? `0px 0px 10px 1px ${colors[props.color].shadow}`
      : "0px 0px 10px 1px rgba(255, 255, 255, 0.6)"};
  outline: none;
  border-radius: 7px;
  padding: ${(props) => (props.size ? input[props.size] : "10px 15px")};
  background: rgba(0, 0, 0, 0.2);
  color: ${(props) => (props.color ? colors[props.color].primary : "white")};
  text-shadow: ${(props) =>
    props.color
      ? `0px 0px 10px ${colors[props.color].shadow}`
      : "0px 0px 10px rgba(255, 255, 255, 0.6)"};
`;

const TextInput = ({ color, size, ...rest }) => {
  return (
    <BaseInput
      type={rest?.type ?? "text"}
      color={color}
      size={size}
      {...rest}
    />
  );
};

export default TextInput;
