import React, { useState, useRef } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import {
  Title,
  Container,
  Body,
  Tags,
  InputTag,
  TagItem,
  RemoveTag,
  AskQuestion,
} from "./addquestion.style";

export const AddQuestion = (props) => {
  const titleRef = useRef("");
  const bodyRef = useRef("");
  const [tags, setTags] = useState([]);
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      e.preventDefault();
      setTags([...tags, e.target.value.trim()]);
      e.target.value = "";
    }
  };
  const onRemoveHandle = (i) => {
    setTags((prev) => {
      let updatedTags = [...prev];
      updatedTags.splice(i, 1);
      return updatedTags;
    });
  };
  const handleSubmit = async () => {
    let newQuestion = {
      username: "Gurjeet",
      title: titleRef.current.value,
      body: bodyRef.current.value,
      tags,
    };
    axios
      .post(`${process.env.REACT_APP_API_URL}/question`, newQuestion)
      .then((result) => {
        titleRef.current.value = "";
        bodyRef.current.value = "";
        setTags([]);
        props.addQuestionTrigger();
      });
  };
  return (
    <Container>
      <Title placeholder="Title..." ref={titleRef} />
      <Body placeholder="Body..." ref={bodyRef} />
      <Tags>
        <span>Tags-> </span>
        {tags.map((item, i) => {
          return (
            <div key={uuidv4()}>
              <TagItem>{item}</TagItem>
              <RemoveTag onClick={() => onRemoveHandle(i)}>-</RemoveTag>
            </div>
          );
        })}
        <InputTag
          placeholder="Enter relevant tags..."
          onKeyDown={handleKeyDown}
        />

        <AskQuestion onClick={handleSubmit}>Ask question</AskQuestion>
      </Tags>
    </Container>
  );
};
