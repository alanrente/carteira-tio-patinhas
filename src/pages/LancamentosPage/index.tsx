import { LancamentoCard } from "../../components/LancamentoCard";
import { useCarteira } from "../../hooks/useCarteira";
import { Container, Principal } from "./style";
import { AntdAlert } from "../../components/AntdAlert";
import { ContainerScrollable } from "../../components/ContainerScrollable";
import { Ativo } from "../../interfaces/Ativo.interface";
import { ModalAtualizarValores } from "../../components/ModalAtualizarValores";

export function LancamentosPage() {
  const {
    carteira,
    handleCancel,
    handleOk,
    isModalOpen,
    showModal,
    confirmLoading,
    visibleAlert,
    setVisibleAlert,
    description,
    typeAlert,
  } = useCarteira();

  return (
    <Container key={"lancamentos-page"}>
      <button onClick={showModal} className="atualizar-valores">
        Atualizar Valores
      </button>
      <ContainerScrollable>
        {carteira && (
          <Principal className="principal">
            {carteira.map((lancamento: Ativo, index) => (
              <LancamentoCard
                cabecalho={lancamento.ticket}
                valorAtual={lancamento.valorAtual}
                qtd={lancamento.qtd}
                lpa={lancamento.lpa}
                vp={lancamento.vp}
                vpa={lancamento.vpa}
                pm={lancamento.pm}
                key={index}
                onClick={() => console.log(lancamento.idAtivo)}
              />
            ))}
          </Principal>
        )}
      </ContainerScrollable>
      <ModalAtualizarValores
        confirmLoading={confirmLoading}
        handleCancel={handleCancel}
        handleOk={handleOk}
        isModalOpen={isModalOpen}
      />
      {visibleAlert && (
        <AntdAlert
          args={{
            type: typeAlert,
            message: description,
          }}
          cb={() => {
            setTimeout(() => {
              setVisibleAlert(false);
            }, 1500);
          }}
        />
      )}
    </Container>
  );
}
