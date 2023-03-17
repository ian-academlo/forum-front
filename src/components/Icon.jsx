import React from "react";
import styled from "styled-components";
import { colors } from "../theme/colors";

const IconContainer = styled.span`
  color: ${(props) =>
    props.color ? `${colors[props.color].primary}` : "white"};
  &:hover {
    cursor: pointer;
  }
`;

const Icon = ({ icon, color }) => {
  return (
    <IconContainer className="material-symbols-outlined" color={color}>
      {icon}
    </IconContainer>
  );
};

export default Icon;
