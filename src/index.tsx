import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Root } from "./routes/Root";
import "./index.css";
import { InicioPage } from "./pages/InicioPage";
import { ErroPage } from "./pages/ErroPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErroPage />,
    children: [{ path: "inicio", element: <InicioPage /> }],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
