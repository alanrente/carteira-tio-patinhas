import { useCarteira } from "../../hooks/useCarteira";

export function CarteiraPage() {
  const { carteira } = useCarteira();
  return (
    <>
      {carteira && (
        <div>
          <h3>Carteira</h3>
          {carteira.map((lancamento: any) => (
            <>
              <p>{JSON.stringify(lancamento)}</p>
            </>
          ))}
        </div>
      )}
    </>
  );
}
