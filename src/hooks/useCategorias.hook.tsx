import { useEffect, useState } from "react";
import { Categoria } from "../interfaces/Categoria.interface";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function useCategorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const navigate = useNavigate();

  async function getCategorias() {
    const { data: categorias }: { data: Categoria[] } = await axios.get(
      "/categorias"
    );

    if (!categorias) return;

    setCategorias(categorias);
  }

  function editarCategoriaHandler({
    categoriaId,
  }: {
    categoriaId: number | string;
  }) {
    navigate(`/categorias/${categoriaId}`);
  }

  useEffect(() => {
    getCategorias();
  }, []);

  return { categorias, editarCategoriaHandler };
}
