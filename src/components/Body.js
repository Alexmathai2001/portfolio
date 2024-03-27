import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./LandingPage";
import ProjectPage from "./ProjectPage";

const Body = () => {
    const appRouter = createBrowserRouter([
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path : "/projects",
        element : <ProjectPage />
      }
    ]);
  
    return (
      <div>
        <RouterProvider router={appRouter} />
      </div>
    );
  };

  export default Body