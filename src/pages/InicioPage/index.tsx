import { useNavigate } from "react-router-dom";

export function InicioPage() {
  const navigate = useNavigate();
  return (
    <div style={{ padding: "3rem" }}>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </button>
      Inicio page
    </div>
  );
}
