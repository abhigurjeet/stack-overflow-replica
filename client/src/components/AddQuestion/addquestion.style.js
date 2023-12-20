import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  height: 15%;
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-top: 20px; /* Add margin at the top for separation from the header */
`;
export const Title = styled.textarea`
  width: 100%;
  height: 3em; /* Adjust the height as needed */
  border-radius: 8px;
  font-size: 15px;
  margin: 3px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Body = styled.textarea`
  width: 100%;
  height: 10em; /* Adjust the height as needed */
  border-radius: 8px;
  margin: 3px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
export const Tags = styled.div`
  display: flex;
  flex-direction: rows;
  align-items: center;
`;
export const TagItem = styled.span`
  border: 1px solid #ccc;
  background-color: #f9f9f9;
  margin: 2px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
export const InputTag = styled.textarea`
  border-radius: 8px;
  margin: 3px;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: inline;
`;
export const RemoveTag = styled.button`
  margin: 2px;
`;

export const BaseButtonStyles = `
  width: 200px;
  height: 40px;
  border: 1px solid;
  border-radius: 5px;
  cursor: pointer;
  margin:3px;

`;
export const AskQuestion = styled.button`
  ${BaseButtonStyles}
  background: #f2f2f2;
  color: #52616b;
`;
