import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  QuestionTitle,
  QuestionContainer,
  Flex,
  UserName,
  AnswerText,
} from "./questions.style";

const AllQuestions = () => {
  const [questions, setQuestions] = useState([]); // Store questions in state
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}`)
      .then(function (response) {
        // handle success
        setQuestions(response.data); // Update state with fetched questions
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []); // Empty dependency array ensures useEffect runs only once after initial render

  return (
    <Container>
      {questions.map((item) => (
        <QuestionContainer key={item._id}>
          <Flex>
            <UserName>{item.user}</UserName>
            <QuestionTitle to={`/question/${item._id}`}>
              {item.title}
            </QuestionTitle>
            <AnswerText>{item.body}</AnswerText>
          </Flex>
        </QuestionContainer>
      ))}
    </Container>
  );
};

export default AllQuestions;
