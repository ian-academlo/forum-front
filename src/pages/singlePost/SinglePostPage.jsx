import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../../components/Button";
import { Container } from "../../components/Container";
import { FlexCont } from "../../components/Containers";
import Typography from "../../components/Typography";
import Header from "../../modules/Header";
import { TopicsContainer } from "../forum/components/TopicsContainer";
import CreatePostForm from "./components/CreatePostForm";
import Post from "./components/Post";

const SinglePostPage = () => {
  const [post, setPost] = useState({});
  const [answers, setAnswers] = useState([]);
  const [createPost, setCreatePost] = useState(false);

  const { token } = JSON.parse(localStorage.getItem("userInfo"));

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/v1/posts/${id}/answers`, {
        headers: { "access-token": token },
      })
      .then((res) => {
        console.log(res);
        setAnswers(res.data.answers);
        setPost({
          author: res.data["author_name"].username,
          category: res.data.category.name,
          description: res.data.description,
          title: res.data.title,
          postedAt: res.data["posted_at"],
          id: res.data.id,
        });
      });
  }, []);

  return (
    <>
      <Header />
      <Container>
        <TopicsContainer>
          <FlexCont justify="space-between" align="center">
            <Typography variant="h1">{post.title}</Typography>
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
          <Post
            content={post.description}
            date={post.postedAt}
            author={post.author}
            i={1}
          />
        </TopicsContainer>
      </Container>
    </>
  );
};

export default SinglePostPage;
