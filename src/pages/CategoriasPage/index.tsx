import { useCategorias } from "../../hooks/useCategorias.hook";

export function CategoriasPage() {
  const { categorias, editarCategoriaHandler } = useCategorias();

  return (
    <div>
      <ul>
        {categorias.map((categoria) => (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "2rem",
            }}
            key={`${categoria.categoriaId}`}
          >
            <li>{categoria.categoria}</li>
            <button
              onClick={() => {
                const { categoriaId } = categoria;
                if (!categoriaId) return;
                editarCategoriaHandler({ categoriaId });
              }}
            >
              editar
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}
