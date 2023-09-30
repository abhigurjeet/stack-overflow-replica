import Login from "../../container/Auth/login";
import SignUp from "../../container/Auth/signUp";
import Home from "../../container/Home";
import Question from "../../container/Question";
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
    path: "/questions/:qId",
    element: <Question />,
  },
];

export default routesConfig;
