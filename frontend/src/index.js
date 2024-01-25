import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";

import "./index.css";
import ChatPage from "./pages/ChatPage";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path:"chat",
        element:<ChatPage/>
      }
    ],
  },
]);
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
