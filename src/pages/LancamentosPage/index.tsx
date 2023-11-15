import { Modal } from "antd";
import { LancamentoCard } from "../../components/LancamentoCard";
import { useCarteira } from "../../hooks/useCarteira";
import { Container, Principal, TextBodyModal } from "./style";
import { AntdAlert } from "../../components/AntdAlert";
import { ContainerScrollable } from "../../components/ContainerScrollable";

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
      <button onClick={showModal}>Atualizar Valores</button>
      <ContainerScrollable>
        {carteira && (
          <Principal className="principal">
            {carteira.map((lancamento: any, index) => (
              <LancamentoCard
                cabecalho={lancamento.ticket}
                valorAtual={lancamento.valorAtual}
                key={index}
              />
            ))}
          </Principal>
        )}
      </ContainerScrollable>
      <Modal
        title="Atualizar Valores"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        confirmLoading={confirmLoading}
        cancelText="Não"
        okText="Sim"
        closeIcon={false}
      >
        <TextBodyModal>
          Após atualizar, o valor será alterado e poderá estar com a data de
          atualização mas antiga.
        </TextBodyModal>
        <p>Deseja continuar?</p>
      </Modal>
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
