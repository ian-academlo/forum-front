import React from "react";
import styled from "styled-components";
import { Container } from "../components/Container";
import Typography from "../components/Typography";
import { colors } from "../theme/colors";

const HeaderContainer = styled.div`
  width: 100%;
  background: ${colors.magenta.shadow};
  height: 110px;
  display: flex;
  align-items: center;
  box-shadow: ${`0px 0px 10px 2px ${colors.magenta.shadow}`};
  border: ${`2px solid ${colors.magenta.primary}`};
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Container>
        <Typography variant="h2">DevForum</Typography>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
