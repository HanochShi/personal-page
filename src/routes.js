// import Index from "./pages/Index";
import { lazy } from "react";

const Index = lazy(() => import("./pages/Index"));

const routes = [
  {
    key: "index",
    path: "/index",
    element: <Index />,
  },
];

export default routes;
