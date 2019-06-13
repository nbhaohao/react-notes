import React, { lazy, Suspense } from "react";
import { HashRouter as Router, NavLink, Route } from "react-router-dom";
import "./index.css";

const routesConfig = [
  {
    path: "/codeScript/",
    name: "代码分割",
    component: lazy(() => import("./pages/CodeScript"))
  },
  {
    path: "/context/",
    name: "Context",
    component: lazy(() => import("./pages/Context"))
  }
];

const App = () => {
  return (
    <Router>
      <div>
        <ul>
          {routesConfig.map(({ path, name }) => {
            return (
              <li key={path}>
                <NavLink
                  to={path}
                  activeStyle={{
                    fontWeight: "bold",
                    color: "tomato"
                  }}
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <Suspense fallback={<div>加载路由中~~~~~~~...</div>}>
        {routesConfig.map(({ path, component }) => {
          return <Route key={path} path={path} exact component={component} />;
        })}
      </Suspense>
    </Router>
  );
};
export default App;
