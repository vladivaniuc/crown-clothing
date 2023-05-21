import { useNavigate } from "react-router-dom";
import "./directory-item.styles";
import {
  DirectoryItemContainer,
  BackgroundImage,
  Body,
} from "./directory-item.styles";
import { DirectoryCategory } from "../directory/directory.component";
import { FunctionComponent } from "react";

type DirectoryItemProps = {
  category: DirectoryCategory;
}

const DirectoryItem: FunctionComponent<DirectoryItemProps> = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
