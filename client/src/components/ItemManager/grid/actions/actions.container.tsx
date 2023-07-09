import { CellClassParams } from "@ag-grid-community/all-modules";
import {
  setItemAction,
  setOpenDialogAction,
} from "../../../../rtk/features/itemSlice";
import { useAppDispatch } from "../../../../rtk/hooks/hooks";
import { deleteItemAsync } from "../../../../rtk/thunks/item.thunks";
import Actions from "./actions.component";

const ActionsContainer = (props: CellClassParams) => {
  const dispatch = useAppDispatch();
  const onClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    switch (event.currentTarget.name) {
      case "delete":
        dispatch(deleteItemAsync(props.data._id));
        break;
      case "edit":
        dispatch(setItemAction(props.data));
        dispatch(setOpenDialogAction("editItem"));
        break;

      default:
        break;
    }
  };
  return <Actions {...props} onClick={onClick} />;
};

export default ActionsContainer;
