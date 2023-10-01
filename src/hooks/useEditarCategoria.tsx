import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function useEditarCategoria() {
  const [categoria, setCategoria] = useState<string>("");

  const navigate = useNavigate();

  async function editarCategoria({
    categoriaId,
  }: {
    categoriaId?: number | string;
  }) {
    if (!categoriaId) return;

    await axios.put(`/categorias/${categoriaId}`, {
      categoria,
    });
    navigate("/categorias");
  }

  return { editarCategoria, setCategoria };
}
