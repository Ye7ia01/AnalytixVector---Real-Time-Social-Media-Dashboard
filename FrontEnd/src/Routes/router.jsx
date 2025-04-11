import React from "react";
import Layout from "../Components/Layout/Layout";
import Header from "../Components/Header/Header";

const router = () => [
  {
    path: "/",
    element: <Layout />,
    children: [{ index: true, element: <Header /> }],
  },
];

export default router;
