import { createContext, FC, useContext, Dispatch } from "react";
import { AppState, appStateReducer, List, Task } from "./appStateReducer";
import { Action } from "./actions";
import { useImmerReducer } from "use-immer";
import { DragItem } from "../DragItem";

const appData: AppState = {
  draggedItem: null,
  lists: [
    {
      id: "1",
      text: "To Do",
      tasks: [{ id: "c1", text: "Third task" }],
    },
    {
      id: "2",
      text: "In Progress",
      tasks: [{ id: "c2", text: "Second task" }],
    },
    {
      id: "3",
      text: "Done",
      tasks: [{ id: "c3", text: "First task" }],
    },
  ],
};

type AppStateContextProps = {
  lists: List[];
  getTasksByListId(id: string): Task[];
  dispatch: Dispatch<Action>;
  draggedItem: DragItem | null;
};

const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
);

// modify this in FC definition props: PropsWithChildren<P>
export const AppStateProvider: FC = ({ children }) => {
  const [state, dispatch] = useImmerReducer(appStateReducer, appData);
  const { lists, draggedItem } = state;

  const getTasksByListId = (id: string) => {
    console.log(lists)

    return lists.find((list) => list.id === id)?.tasks || [];
  };

  return (
    <AppStateContext.Provider value={{ lists, getTasksByListId, dispatch, draggedItem }}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  return useContext(AppStateContext);
};
