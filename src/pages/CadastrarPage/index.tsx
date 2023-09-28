import { useParams } from "react-router-dom";
export function CadastrarPage() {
  const { id } = useParams();
  return (
    <div>
      <p>Page Param</p>
      <span>{id}</span>
    </div>
  );
}
