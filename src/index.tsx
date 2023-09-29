import { createRoot } from "react-dom/client";

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

const rootElement = document.getElementById("root");
const root = createRoot(rootElement as HTMLElement);

root.render(
  <div>
    <RouterProvider router={router} />
  </div>
);
