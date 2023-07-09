import Body from "./body.component";
import { useAppDispatch, useAppSelector } from "../../../rtk/hooks/hooks";
import { useEffect, useState } from "react";
import { getAllItemsAsync } from "../../../rtk/thunks/item.thunks";
import { IItem } from "../../../interfaces/item.interface";

const BodyContainer = () => {
  const { items, searchText } = useAppSelector((state) => state.item);
  const dispatch = useAppDispatch();
  const [displayItem, setDisplayItems] = useState<Array<IItem>>([]);

  useEffect(() => {
    dispatch(getAllItemsAsync());
  }, [dispatch]);

  useEffect(() => {
    debugger;
    if (searchText.length) {
      const filteredItems = items.filter(
        (item) =>
          item.title?.toLowerCase().includes(searchText.toLowerCase()) ||
          item.variant?.sku?.toLowerCase().includes(searchText.toLowerCase())
      );
      setDisplayItems(filteredItems);
    } else {
      setDisplayItems(items);
    }
  }, [items, searchText]);

  return <Body items={displayItem} />;
};

export default BodyContainer;
