import { LancamentoCard } from "../../components/LancamentoCard";
import { useCarteira } from "../../hooks/useCarteira";
import { Principal } from "./style";

export function LancamentosPage() {
  const { carteira } = useCarteira();

  return (
    <>
      <h3>Lançamentos</h3>
      {carteira && (
        <Principal className="principal">
          <LancamentoCard />
          {carteira.map((lancamento: any) => (
            <>
              <p>{JSON.stringify(lancamento)}</p>
            </>
          ))}
        </Principal>
      )}
    </>
  );
}
