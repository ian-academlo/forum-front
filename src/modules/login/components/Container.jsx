import React from "react";
import styled from "styled-components";
import { colors } from "../../../theme/colors";

const FormContainer = styled.div`
  max-width: 700px;
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  @media (max-width: 720px) {
    width: 70%;
  }
  @media (max-width: 480px) {
    width: 90%;
  }
  border-radius: 7px;
  border: ${(props) =>
    props.color
      ? `3px solid ${colors[props.color].primary}`
      : "2px solid white"};
  box-shadow: ${(props) =>
    props.color
      ? `0px 0px 10px 1px ${colors[props.color].shadow}`
      : "0px 0px 10px 1px rgba(255, 255, 255, 0.6)"};
  padding: 20px;
`;

const Container = ({ children, ...rest }) => {
  return <FormContainer {...rest}>{children}</FormContainer>;
};

export default Container;
