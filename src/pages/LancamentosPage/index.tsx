import { Modal } from "antd";
import { LancamentoCard } from "../../components/LancamentoCard";
import { useCarteira } from "../../hooks/useCarteira";
import { Container, Principal, TextBodyModal } from "./style";
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
            type: "success",
            message: description,
          }}
          cb={() => {
            setTimeout(() => {
              window.location.reload();
              setVisibleAlert(false);
            }, 1500);
          }}
        />
      )}
    </Container>
  );
}
