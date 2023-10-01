import { useParams } from "react-router-dom";
import { useEditarCategoria } from "../hooks/useEditarCategoria";

export function EditarCategoria() {
  const { categoriaId } = useParams();
  const { editarCategoria, setCategoria } = useEditarCategoria();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        editarCategoria({ categoriaId });
      }}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "6rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "300px",
          gap: "1rem",
        }}
      >
        <label htmlFor="categoria">Categoria:</label>
        <input
          type="text"
          id="categoria"
          onChange={(e) => setCategoria(e.target.value)}
        />
      </div>

      <button>Alterar</button>
    </form>
  );
}
