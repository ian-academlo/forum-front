import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Typography from "../../../components/Typography";
import { colors } from "../../../theme/colors";

const PostContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 7px;
  padding-top: 10px;
  border-bottom: ${`2px solid ${colors.cyan.primary}`};
`;

const FlexCont = styled.div`
  display: flex;
  gap: ${(props) => props.gap || "5px"};
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const ImageContainer = styled.div`
  width: 52px;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const PostImage = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-image: ${(props) => `url(${props.image})`};
  background-size: cover;
  background-position: center center;
`;

const profilePicture2 =
  "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2021/06/avatar-2366079.jpg?tf=3840x";
const profilePicture =
  "https://img.freepik.com/vector-gratis/avatar-personaje-empresario-aislado_24877-60111.jpg?w=2000";

const PostItem = ({ title, author, date, postId }) => {
  const navigate = useNavigate();
  return (
    <PostContainer>
      <FlexCont>
        <ImageContainer>
          <PostImage image={profilePicture} />
        </ImageContainer>
        <InfoContainer>
          <Typography
            variant="subtitle"
            color="cyan"
            glow
            hover
            onClick={() => navigate(`/forum/single-post/${postId}`)}
          >
            {title}
          </Typography>
          <FlexCont>
            <Typography variant="caption" color="magenta" glow>
              {author}
            </Typography>
            <Typography variant="caption">{date}</Typography>
          </FlexCont>
        </InfoContainer>
      </FlexCont>
    </PostContainer>
  );
};

export default PostItem;
