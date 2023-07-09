import { useCallback, useEffect, useMemo } from "react";
import { batch } from "react-redux";
import {
  setErrorAction,
  clearErrorAction,
} from "../../../rtk/features/errorSlice";
import {
  closeDialogAction,
  updateItemAction,
} from "../../../rtk/features/itemSlice";
import { useAppSelector, useAppDispatch } from "../../../rtk/hooks/hooks";
import { createItemAsync, updateItemAsync } from "../../../rtk/thunks/item.thunks";
import {
  createErrorPayload,
  createHelperTextObject,
  isDisabled,
} from "../../../utils/utils";
import CreateItem from "./createItem.component";

const CreateItemContainer = () => {
  const { openDialog, item } = useAppSelector((state) => state.item);
  const { required } = useAppSelector((state) => state.errorHandler.createItem);
  const dispatch = useAppDispatch();
  const open = useMemo(
    () => openDialog === "createItem" || openDialog === "editItem",
    [openDialog]
  );
  const disableSaveButton = useMemo(() => isDisabled(required), [required]);

  useEffect(() => {
    // dispatch(clearExpenseManagerAction());
  }, [dispatch]);

  useMemo(() => {
    // extract fields which are mandatory
    const { handle } = item;
    const payload = createErrorPayload({ handle }, "required", "createItem");
    dispatch(setErrorAction(payload));
  }, [item, dispatch]);

  const helperText = useCallback(() => {
    return createHelperTextObject(required);
  }, [required]);

  const onChange: React.ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  > = (event) => {
    const { name, value } = event.target;
    const payload = { name, value };
    dispatch(updateItemAction(payload));
  };
  const title = useCallback(() => {
    switch (openDialog) {
      case "createItem":
        return "Create Item";
      case "editItem":
        return "Edit Item";
      default:
        return "";
    }
  }, [openDialog]);

  const save = () => {
    switch (openDialog) {
      case "createItem":
        dispatch(createItemAsync(item));

        break;
      case "editItem":
        dispatch(updateItemAsync(item));
        break;
    }
    close();
  };

  const close = () => {
    batch(() => {
      dispatch(closeDialogAction());
      dispatch(clearErrorAction());
    });
  };

  return (
    <CreateItem
      helperText={helperText}
      onChange={onChange}
      save={save}
      close={close}
      open={open}
      item={item}
      title={title()}
      disableSaveButton={disableSaveButton}
    />
  );
};

export default CreateItemContainer;
