import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Question = () => {
  const { qId } = useParams();
  //   useEffect(() => {
  //     axios.get("/");
  //   }, []);
  return <div>Question no. whatever {qId}</div>;
};

export default Question;
