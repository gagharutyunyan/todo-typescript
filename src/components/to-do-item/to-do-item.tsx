import React from "react";
import { listType } from "../../interfaces";

import "./to-do-item.css";

interface Props extends listType {
  listDelete: (id: number) => void;
  listImportant: (id: number) => void;
  listDone: (id: number) => void;
}

const TodoItem: React.FC<Props> = ({
  id,
  content,
  important,
  done,
  listDelete,
  listImportant,
  listDone
}) => {
  let ClassNames = "list-item_content";
  if (important) ClassNames += " important";
  if (done) ClassNames += " done";
  let imp = "imp";
  if (important) imp += " imp_true";

  return (
    <li className="list-item" key={id}>
      <span className={ClassNames} onClick={() => listDone(id)} tabIndex={0}>
        {content}
      </span>
      <div className="buttons">
        <button className={imp} onClick={() => listImportant(id)}></button>
        <button className="del" onClick={() => listDelete(id)}></button>
      </div>
    </li>
  );
};

export default TodoItem;
