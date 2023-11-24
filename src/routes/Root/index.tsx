import { Outlet } from "react-router-dom";
import { NavigateButton } from "../../components/NavigateButton";
import { LoginPage } from "../../pages/LoginPage";

export function Root() {
  const auth = localStorage.getItem("token");
  return (
    <>
      <div>
        <NavigateButton label="Carteira" to="/" />
        <NavigateButton label="Lancamentos" to="lancamentos" />
        <NavigateButton label="Categorias" to="categorias" />
        {/* verificar o motivo de quando eu deleto o token continua acessando as páginas. será que preciso criar um provider ? */}
        <div>{auth ? <Outlet /> : <LoginPage />}</div>
      </div>
    </>
  );
}
