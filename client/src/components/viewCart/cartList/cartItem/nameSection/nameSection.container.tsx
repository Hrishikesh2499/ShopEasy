import { removeFromCartAction } from "../../../../../rtk/features/userSlice";
import { useAppDispatch } from "../../../../../rtk/hooks/hooks";
import NameSection, { INameSectionProp } from "./nameSection.component";

const NameSectionContainer = (props: INameSectionProp) => {
  const dispatch = useAppDispatch();
  
  const onClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(removeFromCartAction(props.item));
  };
  return <NameSection {...props} onClick={onClick} />;
};

export default NameSectionContainer;
