import React, { Children } from "react";
import styled from "styled-components";
import { colors } from "../theme/colors";
import { input } from "../theme/input";
import Typography from "./Typography";

const BaseButton = styled.button`
  background: white;
  width: ${(props) => (props.fullwidth ? "100%" : "fit-content")};
  padding: ${(props) => (props.size ? `${input[props.size]}` : "5px 10px")};
  outline: none;
  background-color: ${(props) =>
    props.color ? colors[props.color].primary : "#fff"};
  border: ${(props) =>
    props.color
      ? `2px solid ${colors[props.color].primary}`
      : "2px solid #fff"};
  box-shadow: ${(props) =>
    props.color
      ? `0px 0px 10px 1px ${colors[props.color].shadow}`
      : "0px 0px 10px 1px rgba(255, 255, 255, 0.6)"};
  color: ${(props) => (props.color ? "#000000" : "black")};
  &:hover {
    cursor: pointer;
  }
`;
const OutlinedButton = styled(BaseButton)`
  background-color: rgba(0, 0, 0, 0.2);
  color: ${(props) => (props.color ? colors[props.color].primary : "#fff")};
`;

const RoundedButton = styled(BaseButton)`
  border-radius: 7px;
`;

const RoundedOutlined = styled(OutlinedButton)`
  border-radius: 7px;
`;

const Button = ({ type, size, children, variant, ...rest }) => {
  const { color } = rest;
  const buttonDictionary = {
    filled: (
      <BaseButton type={type ?? "button"} size={size} {...rest}>
        {children}
      </BaseButton>
    ),
    outlined: (
      <OutlinedButton type={type ?? "button"} size={size} {...rest}>
        {children}
      </OutlinedButton>
    ),
    rounded: (
      <RoundedButton type={type ?? "button"} size={size} {...rest}>
        {children}
      </RoundedButton>
    ),
    "rounded-outlined": (
      <RoundedOutlined type={type ?? "button"} size={size} {...rest}>
        {children}
      </RoundedOutlined>
    ),
  };
  return <>{variant ? buttonDictionary[variant] : buttonDictionary.filled}</>;
};

export default Button;
