import React from "react";
import GlobalStyles from "./GlobalStyles";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import routesConfig from "./constants/Routes";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {routesConfig.map((route) => (
          <Route key={route.path} path={route.path} element={route.element}>
            {route.children &&
              route.children.map((childRoute) => (
                <Route
                  key={childRoute.path}
                  path={childRoute.path}
                  element={childRoute.element}
                />
              ))}
          </Route>
        ))}
      </Routes>
      <GlobalStyles />
    </>
  );
}

export default App;
