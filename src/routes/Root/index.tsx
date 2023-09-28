import { Outlet } from "react-router-dom";
import { NavigateButton } from "../../components/NavigateButton";

export function Root() {
  return (
    <>
      <div>
        <NavigateButton label="Home" to="/" />
        <NavigateButton label="Inicio" to="inicio" />
        <Outlet />
      </div>
    </>
  );
}
