import React, { lazy, Suspense } from "react";
import { HashRouter as Router, NavLink, Route } from "react-router-dom";
import "./index.css";

const lazy_lazy = (component) => lazy(() => import(`./pages/${component}`))

const routesConfig = [
  {
    path: "/codeScript/",
    name: "代码分割",
    component: lazy_lazy("CodeScript")
  },
  {
    path: "/context/",
    name: "Context",
    component: lazy_lazy("Context")
  },
  {
    path: "/errorBoundaries",
    name: "错误边界",
    component: lazy_lazy("ErrorBoundaries")
  },
  {
    path: '/refs',
    name: 'Refs',
    component: lazy_lazy("Refs")
  },
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
