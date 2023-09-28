import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Root } from "./routes/Root";
import "./index.css";
import { CarteiraPage } from "./pages/CarteiraPage";
import { ErroPage } from "./pages/ErroPage";
import { CadastrarPage } from "./pages/CadastrarPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErroPage />,
    children: [
      { path: "carteira", element: <CarteiraPage /> },
      { path: "another/:id", element: <CadastrarPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
