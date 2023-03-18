import React, { useState } from "react";
import Button from "../../components/Button";
import { Container } from "../../components/Container";
import { FlexCont } from "../../components/Containers";
import Typography from "../../components/Typography";
import Header from "../../modules/Header";
import { TopicsContainer } from "../forum/components/TopicsContainer";
import CreatePostForm from "./components/CreatePostForm";
import Post from "./components/Post";

const SinglePostPage = () => {
  const [post, setPost] = useState([]);
  const [createPost, setCreatePost] = useState(false);
  return (
    <>
      <Header />
      <Container>
        <TopicsContainer>
          <FlexCont justify="space-between" align="center">
            <Typography variant="h1">Titulo del post</Typography>
            <Button
              variant="rounded-outlined"
              onClick={() => setCreatePost(true)}
            >
              Agregar Respuesta
            </Button>
          </FlexCont>
          {createPost && (
            <CreatePostForm color="cyan" onClose={setCreatePost} />
          )}
          <Post />
          <Post />
          <Post />
          <Post />
        </TopicsContainer>
      </Container>
    </>
  );
};

export default SinglePostPage;
