import { ColumnContainer, ColumnTitle } from "../styles";
import { AddNewItem } from "./AddNewItem";
import { Card } from "./Card";

type ColumnProps = {
  text: string;
};

export const Column = ({text}: ColumnProps) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      <Card text="First card" />
      <Card text="Second card" />
      <Card text="Third card" />
      <AddNewItem
        toggleButtonText="+ Add another card"
        onAdd={() => console.log("New item added") }
        dark
      />
    </ColumnContainer>
  )
}