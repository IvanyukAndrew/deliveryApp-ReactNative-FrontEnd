import { useTypedSelectore } from './useTypedSelectore';

export const useCart = () => {
  const items = useTypedSelectore((state) => state.cart.items);
  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return { items, total };
};
