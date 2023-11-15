import { createRoot } from "react-dom/client";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Root } from "./routes/Root";
import "./index.css";
import { LancamentosPage } from "./pages/LancamentosPage";
import { ErroPage } from "./pages/ErroPage";
import { CategoriasPage } from "./pages/CategoriasPage";
import axios from "axios";
import { EditarCategoria } from "./pages/EditarCategoria.page";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

const apiUrl = process.env.REACT_APP_API_URL;
axios.defaults.baseURL = apiUrl;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErroPage />,
    children: [
      { path: "lancamentos", element: <LancamentosPage /> },
      { path: "categorias", element: <CategoriasPage /> },
      { path: "categorias/:categoriaId", element: <EditarCategoria /> },
    ],
  },
]);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement as HTMLElement);

root.render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);
