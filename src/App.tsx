import React, { useState } from "react";
import TodoList from "./components/to-do-list/to-do-list";
import AddList from "./components/add-list/add-list";
import Search from "./components/search/search";
import { listType } from "./interfaces";
import "./App.css";

function App() {
  const [addingValue, setAddingValue] = useState<string>("");
  const [list, setList] = useState<listType[]>([
    { content: "Get married", id: 1, important: false, done: false },
    { content: "to be or not to be", id: 2, important: true, done: true },
    { content: "go up", id: 3, important: false, done: true },
    { content: "bye car", id: 4, important: true, done: false },
    { content: "drink some coffee ", id: 5, important: false, done: false }
  ]);
  const [searchValue, setSearchValue] = useState("");

  const listValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddingValue(e.target.value);
  };

  const listSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (addingValue.length < 30 && addingValue.length > 0) {
      setList(prev => {
        const newList = {
          content: addingValue,
          id: Date.now(),
          important: false,
          done: false
        };
        const newArr = [...prev, newList];
        setAddingValue("");
        return newArr;
      });
    } else if (addingValue.length > 30) {
      alert("max length 30 symbols");
    } else if (addingValue.length <= 0) {
      alert("type please anything");
    }
  };

  const listDelete = (id: number) => {
    setList(prev => {
      const idx = prev.findIndex(el => el.id === id);
      const before = prev.slice(0, idx);
      const after = prev.slice(idx + 1);
      const newArr = [...before, ...after];

      return newArr;
    });
  };

  const toggleBool = (
    prev: listType[],
    id: number,
    boolProperty: string
  ): listType[] => {
    const idx = prev.findIndex(el => el.id === id);
    const oldItem: any = prev[idx];
    const newValue = !oldItem[boolProperty];
    const newItem = { ...oldItem, [boolProperty]: newValue };
    const before = prev.slice(0, idx);
    const after = prev.slice(idx + 1);
    return [...before, newItem, ...after];
  };

  const listImportant = (id: number) => {
    setList(prev => {
      const items = toggleBool(prev, id, "important");
      return items;
    });
  };

  const listDone = (id: number) => {
    setList(prev => {
      const items = toggleBool(prev, id, "done");
      return items;
    });
  };

  const listSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const listSearch = (list: listType[], searchValue: string) => {
    if (searchValue.length === 0) {
      return list;
    }

    return list.filter(item => {
      return item.content.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
    });
  };

  const doneCount: number = list.filter(el => el.done).length;
  const importantCount: number = list.filter(el => el.important).length;
  const visibleLists: listType[] = listSearch(list, searchValue);
  return (
    <div className="App">
      <Search
        listSearchValue={listSearchValue}
        totalCount={list.length}
        doneCount={doneCount}
        importantCount={importantCount}
      />
      <TodoList
        list={visibleLists}
        listDelete={listDelete}
        listImportant={listImportant}
        listDone={listDone}
      />
      <AddList
        listValue={listValue}
        listSubmit={listSubmit}
        addingValue={addingValue}
      />
    </div>
  );
}

export default App;
