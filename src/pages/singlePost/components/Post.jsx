import React from "react";
import styled from "styled-components";
import { FlexCont } from "../../../components/Containers";
import Typography from "../../../components/Typography";
import { colors } from "../../../theme/colors";

const profilePicture =
  "https://img.freepik.com/vector-gratis/avatar-personaje-empresario-aislado_24877-60111.jpg?w=2000";

const PostContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

const UserContent = styled.div`
  width: 200px;
  border-radius: 5px 0 0 5px;
  background: ${colors.magenta.shadow};
  border: ${`2px solid ${colors.magenta.primary}`};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 10px;
  @media (max-width: 720px) {
    width: 100%;
    border-radius: 5px 5px 0 0;
    flex-direction: row;
  }
`;

const ImagePostContainer = styled.div`
  width: 96px;
  height: 96px;
  border-radius: 50%;
  background-image: ${(props) => `url(${props.image})`};
  background-size: cover;
  background-position: center center;
  @media (max-width: 720px) {
    width: 36px;
    height: 36px;
  }
`;

const PostContent = styled.div`
  width: 100%;
  background: ${colors.cyan.shadow};
  border-radius: 0 5px 5px 0;
  border: ${`2px solid ${colors.cyan.primary}`};
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (max-width: 720px) {
    border-radius: 0 0 5px 5px;
  }
`;

const Content = styled.div`
  padding-top: 10px;
  border-top: ${`1px solid ${colors.cyan.primary}`};
`;

const Post = ({ i }) => {
  return (
    <>
      <PostContainer>
        <UserContent>
          <ImagePostContainer image={profilePicture} />
          <Typography variant="subtitle" color="magenta" glow>
            username
          </Typography>
        </UserContent>
        <PostContent>
          <FlexCont justify="space-between">
            <Typography variant="caption" color="cyan" glow>
              7/11/2023
            </Typography>
            <Typography variant="caption"> # {i}</Typography>
          </FlexCont>
          <Content>
            <Typography variant="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              obcaecati vitae quasi dolorem amet rerum quisquam nostrum optio
              quo! Ex possimus nulla recusandae exercitationem aliquid. Iusto
              consequatur eum sint quae.
            </Typography>
          </Content>
        </PostContent>
      </PostContainer>
    </>
  );
};

export default Post;
