import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "../../components/Container";
import { FlexCont } from "../../components/Containers";
import Button from "../../components/Button";
import Typography from "../../components/Typography";
import Header from "../../modules/Header";
import Topics from "../forum/components/Topic";
import { TopicsContainer } from "../forum/components/TopicsContainer";
import PostItem from "./components/PostItem";
import CreatePostForm from "./components/CreatePostForm";

const PostPage = () => {
  const [posts, setPosts] = useState([]);
  const [createPost, setCreatePost] = useState(false);
  const { id } = useParams();

  const { token } = JSON.parse(localStorage.getItem("userInfo"));

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/v1/posts?categoryId=${id}`, {
        headers: {
          "access-token": token,
        },
      })
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      });
  }, []);

  return (
    <>
      <Header />
      <Container>
        <TopicsContainer>
          <FlexCont justify="space-between" align="center">
            <Typography variant="h1">Categoria</Typography>
            <Button
              variant="rounded-outlined"
              onClick={() => setCreatePost(true)}
            >
              Agregar publicación
            </Button>
          </FlexCont>
          {createPost && <CreatePostForm onClose={setCreatePost} />}
          <Topics title="Temas">
            {posts.map((post) => {
              const date = new Date(post["posted_at"]);
              const postDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()}`;
              return (
                <PostItem
                  key={post.id}
                  postId={post.id}
                  title={post.title}
                  author={post["author_name"].username}
                  date={postDate}
                />
              );
            })}
          </Topics>
        </TopicsContainer>
      </Container>
    </>
  );
};

export default PostPage;
