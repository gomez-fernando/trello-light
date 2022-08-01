import { AddNewItem } from "./components/AddNewItem";
import { Column } from "./components/Column";
import { AppContainer, ColumnContainer } from "./styles";
import { useAppState } from "./state/AppStateContext";

export const App = () => {
  const {lists} = useAppState();
  return (
    <AppContainer>
      {
        lists.map(list => (
          <Column key={list.id} text={list.text} id={list.id} />
        ))
      }
      <AddNewItem
        toggleButtonText="+ Add another list"
        onAdd={(e) => console.log(e)}
      />
    </AppContainer>
  );
};
