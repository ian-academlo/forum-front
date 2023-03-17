import React from "react";
import { Container } from "../../components/Container";
import { FlexCont } from "../../components/Containers";
import Icon from "../../components/Icon";
import Typography from "../../components/Typography";
import Header from "../../modules/Header";
import Topics from "../forum/components/Topic";
import { TopicsContainer } from "../forum/components/TopicsContainer";
import PostItem from "./components/PostItem";

const PostPage = () => {
  const posts = [
    { title: "Publicacion 1", author: "Iannacus" },
    { title: "Publicacion 2", author: "Iannacus" },
    { title: "Publicacion 3", author: "Iannacus" },
  ];
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
                title={post.title}
                author={post.author}
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
