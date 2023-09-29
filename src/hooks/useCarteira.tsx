import { useEffect, useState } from "react";
import axios from "axios";

export function useCarteira() {
  const [carteira, setCarteira] = useState<any[]>();

  async function getCarteira() {
    console.log("getCarteira");
    const { data: carteiras } = await axios.get(
      "http://localhost:4000/api/carteira"
    );

    if (!carteiras) return;

    setCarteira(carteiras.produtos);
  }

  useEffect(() => {
    console.log("useEffect");
    getCarteira();
  }, []);

  return {
    carteira,
  };
}
