import CartItem, { ICartItemProp } from "./cartItem.component";

const CartItemContainer = (props:ICartItemProp) => {
  return <CartItem {...props} />;
};

export default CartItemContainer;
