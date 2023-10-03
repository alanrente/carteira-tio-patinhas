import { useEffect, useState } from "react";
import axios from "axios";

export function useCarteira() {
  const [carteira, setCarteira] = useState<any[]>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [visibleAlert, setVisibleAlert] = useState(false);
  const [description, setDescription] = useState("");
  const [typeAlert, setTypeAlert] = useState<
    "info" | "success" | "error" | "warning"
  >();

  function showModal() {
    setIsModalOpen(true);
  }

  async function handleOk() {
    console.log("handleOk");
    setConfirmLoading(true);

    await atualizarCarteira();
  }

  function handleCancel() {
    setIsModalOpen(false);
  }

  async function getCarteira() {
    const {
      data: { carteiras },
    } = await axios.get("/carteira");

    if (!carteiras) return;

    setCarteira(carteiras);
  }

  async function atualizarCarteira() {
    try {
      const { data } = await axios.post("/atualizar-valor-atual");
      setIsModalOpen(false);
      setConfirmLoading(false);
      setDescription(data.message);
      setTypeAlert("success");
      setVisibleAlert(true);
    } catch (err: any) {
      setTypeAlert("error");
      setDescription(err.message);
      setVisibleAlert(true);
    }
  }

  useEffect(() => {
    getCarteira();
  }, []);
  useEffect(() => {
    console.log(visibleAlert);
  }, [visibleAlert]);

  return {
    carteira,
    showModal,
    handleOk,
    handleCancel,
    isModalOpen,
    confirmLoading,
    visibleAlert,
    setVisibleAlert,
    description,
    typeAlert,
  };
}
