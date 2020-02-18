import React from "react";
import TodoItem from "../to-do-item/to-do-item";
import "./to-do-list.css";
import { listType } from "../../interfaces";

type Props = {
  listDelete: (id: number) => void;
  listImportant: (id: number) => void;
  listDone: (id: number) => void;
  list: listType[];
};

const TodoList: React.FC<Props> = ({
  list,
  listDelete,
  listImportant,
  listDone
}) => {
  return (
    <ul className="list">
      {list.map(({ id, content, important, done }) => (
        <TodoItem
          key={id}
          id={id}
          content={content}
          important={important}
          done={done}
          listDelete={listDelete}
          listImportant={listImportant}
          listDone={listDone}
        />
      ))}
    </ul>
  );
};
export default TodoList;
