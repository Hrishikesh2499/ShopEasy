import { IItem } from "../../../../../interfaces/item.interface";
import ErrorBoundary from "../../../../common/error-boundary/errorBoundary";
import classes from "./imageSection.styles";
export interface IImageSectionProp {
  item: IItem;
}
const ImageSection = (props: IImageSectionProp) => {
  const { item } = props;
  return (
    <ErrorBoundary>
      <img
        style={{ ...classes.img, textAlign: "center" }}
        src={item.imgSrc}
        srcSet={item.imgSrc}
        loading="lazy"
        alt={item.title}
      />
    </ErrorBoundary>
  );
};

export default ImageSection;
