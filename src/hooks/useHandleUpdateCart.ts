import { ProductWithPrice } from "../pages/shop";
import useLocalStorage from "./useLocalStorage";

const handleUpdateCart = (
  product: ProductWithPrice,
  decrement?: boolean,
  deleteItem?: boolean
) => {
  const [cart, updateCart] = useLocalStorage("cart", {} as any);

  const current = cart[product.id];

  if (current) {
    if (deleteItem) {
      const updated = {
        ...cart,
        [product.id]: null,
      };
      updateCart(updated);
    } else {
      const updated = {
        ...cart,
        [product.id]: {
          ...product,
          quantity: decrement ? current.quantity - 1 : current.quantity + 1,
        },
      };
      console.log(updated);

      updateCart(updated);
    }
  } else {
    updateCart({ ...cart, [product.id]: { ...product, quantity: 1 } });
  }
};

export default handleUpdateCart;
