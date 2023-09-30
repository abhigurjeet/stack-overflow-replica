import Answers from "../../components/Answers";
import { useParams } from "react-router-dom";
const Question = () => {
  const { qId } = useParams();
  return <Answers qId={qId} />;
};

export default Question;
