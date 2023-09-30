import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  min-height: calc(
    100vh - 60px
  ); /* Set minimum height to fill the entire viewport minus the header height */
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-top: 20px; /* Add margin at the top for separation from the header */
`;

export const QuestionTitle = styled(Link)`
  font-size: 20px;
  margin-bottom: 10px;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    text-decoration: underline;
    color: purple;
  }
`;

export const QuestionContainer = styled.div`
  width: 100%;
  margin-top: 20px;
`;

export const Flex = styled.div`
  border: 1px solid #ccc;
  background-color: #f9f9f9;
  padding: 10px;
  margin-top: 10px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const UserAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const UserName = styled.div`
  font-weight: bold;
`;

export const AnswerText = styled.div`
  margin-top: 10px;
`;
