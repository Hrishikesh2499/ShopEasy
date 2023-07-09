import Item, { IItemProps } from "./item.component";

const ItemContainer = (props: IItemProps) => {
  return <Item {...props} />;
};

export default ItemContainer;
