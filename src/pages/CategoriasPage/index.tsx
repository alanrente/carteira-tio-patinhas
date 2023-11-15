import { Form, Modal } from "antd";
import { useCategorias } from "../../hooks/useCategorias.hook";

export function CategoriasPage() {
  const {
    categorias,
    categoria,
    visible,
    setvisible,
    mutationCategoria,
    onChangeCategoria,
    closeModelAndResetCategoria,
    getOneCategoria,
    onEdit,
    categoriaId,
    mutationEditaCategoria,
  } = useCategorias();

  return (
    <div>
      <Modal
        open={visible}
        closeIcon={false}
        onCancel={closeModelAndResetCategoria}
        onOk={() => {
          onEdit
            ? mutationEditaCategoria.mutate({ categoria, id: categoriaId })
            : mutationCategoria.mutate(categoria);
        }}
        destroyOnClose
        okText="Salvar"
        cancelText="Cancelar"
        title="Adicionar Categoria"
      >
        <Form
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <label style={{ fontSize: "1.1rem" }} htmlFor="nome-form">
            Categoria:
          </label>
          <input
            id="nome-form"
            type="text"
            onChange={(e) => onChangeCategoria(e)}
            value={categoria}
          />
        </Form>
      </Modal>
      <button onClick={() => setvisible(true)}>Criar Categoria</button>
      <ul>
        {categorias &&
          categorias.map((categoria) => (
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
                  if (!categoria.categoriaId) return;
                  getOneCategoria(`${categoria.categoriaId}`);
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
