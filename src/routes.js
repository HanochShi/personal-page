// import Index from "./pages/Index";
import { lazy } from "react";

const Index = lazy(() => import("./pages/Index/Index"));

const routes = [
  {
    key: "index",
    path: "/",
    element: <Index />,
  },
];

export default routes;
