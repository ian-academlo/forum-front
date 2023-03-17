import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "../../components/Container";
import { FlexCont } from "../../components/Containers";
import Icon from "../../components/Icon";
import Typography from "../../components/Typography";
import Header from "../../modules/Header";
import Topics from "../forum/components/Topic";
import { TopicsContainer } from "../forum/components/TopicsContainer";
import PostItem from "./components/PostItem";

const PostPage = () => {
  const [posts, setPosts] = useState([]);
  const { id } = useParams();

  const { token } = JSON.parse(localStorage.getItem("userInfo"));
  console.log(token);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/v1/posts?categoryId=${id}`, {
        headers: {
          "access-token": token,
        },
      })
      .then((res) => setPosts(res.data));
  }, []);

  return (
    <>
      <Header />
      <Container>
        <TopicsContainer>
          <FlexCont justify="space-between" align="center">
            <Typography variant="h1">Categoria</Typography>
            <Icon icon="add_circle" />
          </FlexCont>
          <Topics title="Temas">
            {posts.map((post) => (
              <PostItem
                key={post.id}
                title={post.title}
                author={post["author_name"].username}
                date="16 Mar 2023"
              />
            ))}
          </Topics>
        </TopicsContainer>
      </Container>
    </>
  );
};

export default PostPage;
