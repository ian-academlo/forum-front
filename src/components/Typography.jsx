import React from "react";
import styled from "styled-components";
import { colors } from "../theme/colors";
import { sizes } from "../theme/fonts";

const Text = styled.p`
  color: ${(props) => (props.color ? colors[props.color].primary : "#fff")};
  text-shadow: ${(props) =>
    props.glow
      ? `0px 0px 10px ${colors[props.color].shadow}`
      : "0px 0px 0px white"};
  font-size: ${(props) => (props.variant ? sizes[props.variant].size : "14px")};
  font-weight: ${(props) =>
    props.variant ? sizes[props.variant].weight : "14px"};
  margin: 0;
  &:hover {
    cursor: ${(props) => (props.hover ? "pointer" : "defautl")};
  }
`;

const Typography = ({ children, variant, ...rest }) => {
  return (
    <Text variant={variant} {...rest}>
      {children}
    </Text>
  );
};

export default Typography;
