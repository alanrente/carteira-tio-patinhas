import { useNavigate } from "react-router-dom";

export function NavigateButton({
  label,
  to,
  param,
}: {
  to: string;
  label: string;
  param?: string;
}) {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate(`${to}${param ? `/${param}` : ""}`)}>
        {label}
      </button>
    </>
  );
}
