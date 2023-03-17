import React, { useEffect, useState } from "react";
import { Container } from "../../components/Container";
import Header from "../../modules/Header";
import Topics, { TopicItem } from "./components/Topic";
import { TopicsContainer } from "./components/TopicsContainer";
import Typography from "../../components/Typography";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ForumPage = () => {
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/categories")
      .then((res) => setCategories(res.data));
  }, []);

  const goToCategory = (id) => {
    navigate(`/forum/category/${id}`);
  };

  return (
    <>
      <Header />
      <Container>
        <TopicsContainer>
          <Topics title="Categorias del foro">
            {categories.map((category) => (
              <TopicItem
                onClick={() => {
                  console.log("click");
                }}
                key={category.id}
              >
                <Typography
                  variant="subtitle"
                  onClick={() => goToCategory(category.id)}
                >
                  {category.name}
                </Typography>
              </TopicItem>
            ))}
          </Topics>
        </TopicsContainer>
      </Container>
    </>
  );
};

export default ForumPage;
