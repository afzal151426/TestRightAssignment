import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import FrameTwo from "pages/FrameTwo";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "frametwo",
      element: <FrameTwo />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
