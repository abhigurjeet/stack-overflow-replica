import { useState, useEffect } from "react";
import axios from "axios";
const Answers = ({ qId }) => {
  const [questionData, setQuestionData] = useState(null);
  useEffect(() => {
    axios
      .get(`https://stack-overflow-api1.onrender.com/question/${qId}`)
      .then((response) => response.data)
      .then((data) => setQuestionData(data[0]));
  }, [qId]);
  if (questionData)
    return (
      <div>
        <h1>{questionData.title}</h1>
        <h2>{questionData.body}</h2>
        <h4>Question by {questionData.user}</h4>
        <h5>
          Tags ->{" "}
          {questionData.tags.map((item, i) => (
            <span key={i}>{item} </span>
          ))}
        </h5>
      </div>
    );
  else {
    return <div>Loading</div>;
  }
};

export default Answers;
