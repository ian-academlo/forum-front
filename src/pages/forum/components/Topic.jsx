import React from "react";
import styled from "styled-components";
import Typography from "../../../components/Typography";
import { colors } from "../../../theme/colors";

const TopicContainer = styled.div`
  box-shadow: ${`0px 0px 10px 2px ${colors.cyan.shadow}`};
`;

const TopicHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  background: ${colors.cyan.shadow};

  border-radius: 5px 5px 0 0;
  border: ${`2px solid ${colors.cyan.primary}`};
`;

const TopicContent = styled.div`
  border-left: ${`2px solid ${colors.cyan.primary}`};
  border-bottom: ${`2px solid ${colors.cyan.primary}`};
  border-right: ${`2px solid ${colors.cyan.primary}`};
  border-radius: 0 0 5px 5px;
`;

export const TopicItem = styled.div`
  width: 100%;
  border-bottom: ${`2px solid ${colors.cyan.primary}`};
  padding: 10px 5px;
`;

const Topics = ({ title, children }) => {
  return (
    <TopicContainer>
      <TopicHeader>
        <Typography variant="title">{title}</Typography>
      </TopicHeader>
      <TopicContent>{children}</TopicContent>
    </TopicContainer>
  );
};

export default Topics;
