import ShopHomeUtility from "./utility.component";
import { useAppDispatch, useAppSelector } from "../../../rtk/hooks/hooks";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { updateSearchTextAction } from "../../../rtk/features/itemSlice";
const ShopHomeUtilityContainer = () => {
  const { cart } = useAppSelector((state) => state.user);
  const { searchText } = useAppSelector((state) => state.item);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const totalItem = useMemo(() => cart.length, [cart]);
  const onChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    dispatch(updateSearchTextAction(event.target.value));
  };
  const onClick:
    | React.MouseEventHandler<HTMLButtonElement>
    | undefined = () => {
    navigate("/viewCart");
  };
  return (
    <ShopHomeUtility
      cartItem={totalItem}
      onClick={onClick}
      onChange={onChange}
      searchText={searchText}
    />
  );
};

export default ShopHomeUtilityContainer;
