import { createRoot } from "react-dom/client";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Root } from "./routes/Root";
import "./index.css";
import { LancamentosPage } from "./pages/LancamentosPage";
import { ErroPage } from "./pages/ErroPage";
import { CadastrarPage } from "./pages/CadastrarPage";
import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;
axios.defaults.baseURL = apiUrl;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErroPage />,
    children: [
      { path: "lancamentos", element: <LancamentosPage /> },
      { path: "cadastrar", element: <CadastrarPage /> },
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
