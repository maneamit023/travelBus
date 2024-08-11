import React from "react";
import { useRoutes } from "react-router-dom";
import DashboardLayout from "../components/layouts";
import HomeContent from "../pages/HomeContent";

export default function Router() {
  const routes = useRoutes([
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        {
          path: "/",
          element: <HomeContent />,
        },
      ],
    },
  ]);

  return routes;
}
