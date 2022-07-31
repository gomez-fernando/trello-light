import { AddNewItem } from "./components/AddNewItem";
import { Column } from "./components/Column";
import { AppContainer, ColumnContainer } from "./styles";

export const App = () => {
  return (
    <AppContainer>
      <Column text="Todo: " />
      <AddNewItem
        toggleButtonText="+ Add another list"
        onAdd={() => console.log("Item created")}
      />
    </AppContainer>
  );
};
