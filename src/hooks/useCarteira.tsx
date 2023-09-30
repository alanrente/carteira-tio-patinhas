import { useEffect, useState } from "react";
import axios from "axios";

export function useCarteira() {
  const [carteira, setCarteira] = useState<any[]>();

  async function getCarteira() {
    const {
      data: { carteiras },
    } = await axios.get("/carteira");

    if (!carteiras) return;

    setCarteira(carteiras);
  }

  useEffect(() => {
    getCarteira();
  }, []);

  return {
    carteira,
  };
}
