import { Outlet, useNavigate } from "react-router-dom";

export function Root() {
  const navigate = useNavigate();

  function navigateHandler(to: string) {
    navigate(to);
  }

  return (
    <>
      <div>
        <button onClick={() => navigateHandler("/inicio")}>inicio</button>
        <button onClick={() => navigateHandler("/amigo")}>amigo</button>
        <Outlet />
      </div>
    </>
  );
}
