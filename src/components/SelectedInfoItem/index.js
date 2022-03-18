import { Item } from "./styles";

export const SelectedInfoItem = (props) => {
  return (
    <Item>
      <span>{props.title}</span>
      <p>{props.data}</p>
    </Item>
  );
};
