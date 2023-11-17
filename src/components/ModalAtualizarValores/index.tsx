import { Modal } from "antd";
import { TextBodyModal } from "../../pages/LancamentosPage/style";

export function ModalAtualizarValores({
  confirmLoading,
  handleCancel,
  handleOk,
  isModalOpen,
}: {
  isModalOpen: boolean;
  handleOk: () => Promise<void>;
  handleCancel: () => void;
  confirmLoading: boolean;
}) {
  return (
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
  );
}
