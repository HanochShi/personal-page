import { Routes, Route } from "react-router-dom";

import routes from "./routes";

function App() {
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.key}
          path={route.path}
          element={route.element}
        ></Route>
      ))}
    </Routes>
  );
}

export default App;
