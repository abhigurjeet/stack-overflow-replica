import { AddQuestion } from "../../components/AddQuestion";
import Questions from "../../components/AllQuestions";
import { useState } from "react";
const Home = () => {
  const [triggerRender, setTriggerRender] = useState(true);
  const addQuestionTrigger = () => {
    setTriggerRender((prev) => !prev);
  };
  return (
    <div>
      <AddQuestion addQuestionTrigger={addQuestionTrigger} />
      <Questions triggerRender={triggerRender} />
    </div>
  );
};

export default Home;
