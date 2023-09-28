import { useNavigate } from "react-router-dom";

export function NavigateButton({ label, to }: { to: string; label: string }) {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate(to)}>{label}</button>
    </>
  );
}
