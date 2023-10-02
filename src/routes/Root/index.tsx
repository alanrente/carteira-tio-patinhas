import { Outlet } from "react-router-dom";
import { NavigateButton } from "../../components/NavigateButton";

export function Root() {
  return (
    <>
      <div>
        <NavigateButton label="Carteira" to="/" />
        <NavigateButton label="Lancamentos" to="lancamentos" />
        <NavigateButton label="Categorias" to="categorias" />
        <div
          style={{
            border: "2px gray solid",
          }}
        >
          <p>Root Page</p>
          <Outlet />
        </div>
      </div>
    </>
  );
}
