import { useState } from "react";
import { Categoria } from "../interfaces/Categoria.interface";
import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useCategorias() {
  const [visible, setvisible] = useState(false);
  const [categoria, setCategoria] = useState("");
  const [onEdit, setOnEdit] = useState(false);
  const [categoriaId, setCategoriaId] = useState("");

  const queryClient = useQueryClient();

  function closeModelAndResetCategoria() {
    setvisible(false);
    setCategoria("");
  }

  const { data: categorias } = useQuery({
    queryKey: ["categorias"],
    queryFn: async () => {
      const { data: categorias }: { data: Categoria[] } = await axios.get(
        "/categorias"
      );
      return categorias;
    },
  });

  const mutationCategoria = useMutation({
    mutationFn: (categoria: string) => {
      return axios.post("/categorias", { categoria: categoria });
    },
    onError: (error: any) => {
      closeModelAndResetCategoria();
      alert(error);
    },
    onSuccess: () => {
      closeModelAndResetCategoria();
      queryClient.invalidateQueries({ queryKey: ["categorias"] });
    },
  });

  const mutationEditaCategoria = useMutation({
    mutationFn: ({ categoria, id }: { categoria: string; id: string }) =>
      axios.put(`/categorias/${id}`, { categoria: categoria }),
    onError: (err) => {
      closeModelAndResetCategoria();
      alert(err);
    },
    onSuccess: () => {
      closeModelAndResetCategoria();
      setOnEdit(false);
      queryClient.invalidateQueries({ queryKey: ["categorias"] });
    },
  });

  async function getOneCategoria(id: string) {
    const { data }: { data: Categoria } = await axios.get(`/categorias/${id}`);
    if (data.categoriaId) {
      setCategoriaId(`${data.categoriaId}`);
    }
    setCategoria(data.categoria);
    setOnEdit(true);
    setvisible(true);
  }

  function onChangeCategoria(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setCategoria(e.target.value);
  }

  return {
    categorias,
    categoriaId,
    visible,
    setvisible,
    mutationCategoria,
    categoria,
    onChangeCategoria,
    closeModelAndResetCategoria,
    getOneCategoria,
    mutationEditaCategoria,
    onEdit,
  };
}
