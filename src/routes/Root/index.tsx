import { Outlet } from "react-router-dom";
import { NavigateButton } from "../../components/NavigateButton";

export function Root() {
  return (
    <>
      <div>
        <NavigateButton label="Home" to="/" />
        <NavigateButton label="Carteira" to="carteira" />
        <NavigateButton label="Cadastrar" to="another" param="1" />
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
