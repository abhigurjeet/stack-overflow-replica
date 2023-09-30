import { useState, useEffect } from "react";
import axios from "axios";
const Answers = ({ qId }) => {
  const [questionData, setQuestionData] = useState(null);
  const [allAnswers, setAllAnswers] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/question/${qId}`)
      .then((response) => response.data)
      .then((data) => setQuestionData(data[0]));
  }, [qId]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/question/${qId}/answers`)
      .then((response) => response.data)
      .then((data) => setAllAnswers(data));
  }, [qId]);
  if (questionData)
    return (
      <div>
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
        <hr />
        <hr />
        <hr />
        <hr />
        <div>
          {/* answers printed here */}
          {allAnswers.length !== 0 ? (
            allAnswers.map((item) => {
              return (
                <>
                  <h3>{item.answerDetail}</h3>
                  <hr />
                </>
              );
            })
          ) : (
            <p>No answers yet</p>
          )}
        </div>
      </div>
    );
  else {
    return <div>Loading</div>;
  }
};

export default Answers;
