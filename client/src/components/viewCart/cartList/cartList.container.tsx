import { useAppSelector } from "../../../rtk/hooks/hooks";
import CartList from "./cartList.component";

const CartListContainer = () => {
  const { cart } = useAppSelector((state) => state.user);
  return <CartList cart={cart}/>;
};

export default CartListContainer;
