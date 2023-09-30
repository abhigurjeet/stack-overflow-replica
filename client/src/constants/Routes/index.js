import Login from "../../container/Auth/login";
import SignUp from "../../container/Auth/signUp";
import Home from "../../container/Home";
import Question from "../../container/QuestionAnswer";
const routesConfig = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/question/:qId",
    element: <Question />,
  },
];

export default routesConfig;
