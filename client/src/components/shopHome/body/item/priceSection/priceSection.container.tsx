import { batch } from "react-redux";
import {
  findAndUpdateItemAction,
  IFindAndUpdateItemAction,
} from "../../../../../rtk/features/itemSlice";
import { addItemInCart } from "../../../../../rtk/features/userSlice";
import { useAppDispatch } from "../../../../../rtk/hooks/hooks";
import PriceSection, { IPriceSectionProps } from "./priceSection.component";

const PriceSectionContainer = (props: IPriceSectionProps) => {
  const { userSelectedQuantity, variant, _id } = props.item;
  const dispatch = useAppDispatch();

  const onClick: React.FormEventHandler<HTMLButtonElement> | undefined = (
    event
  ) => {
    const { id } = event.currentTarget;

    switch (
      id as "subUserSelectedQuantity" | "addUserSelectedQuantity" | "addToCart"
    ) {
      case "addUserSelectedQuantity":
        if (
          variant &&
          _id &&
          variant.quantity &&
          (userSelectedQuantity < variant?.quantity || !userSelectedQuantity)
        ) {
          const value = userSelectedQuantity + 1 || 1;
          const payload: IFindAndUpdateItemAction = {
            _id,
            name: "userSelectedQuantity",
            value,
          };
          dispatch(findAndUpdateItemAction(payload));
        }

        break;
      case "subUserSelectedQuantity":
        if (userSelectedQuantity > 0 && _id) {
          const value = userSelectedQuantity - 1;
          const payload: IFindAndUpdateItemAction = {
            _id,
            name: "userSelectedQuantity",
            value,
          };
          dispatch(findAndUpdateItemAction(payload));
        }
        break;
      case "addToCart":
        batch(() => {
          if (_id) {
            const payload: IFindAndUpdateItemAction = {
              _id,
              name: "userSelectedQuantity",
              value: 0,
            };
            dispatch(findAndUpdateItemAction(payload));
            dispatch(addItemInCart(props.item));
          }
        });
    }
  };
  return <PriceSection {...props} onClick={onClick} />;
};

export default PriceSectionContainer;
