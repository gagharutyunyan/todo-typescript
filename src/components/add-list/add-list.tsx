import React from "react";
import "./add-list.css";

type Props = {
  listValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  listSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  addingValue: string;
};

function AddList({ listValue, listSubmit, addingValue }: Props) {
  return (
    <form onSubmit={e => listSubmit(e)}>
      <input
        className="add_bar"
        onChange={e => listValue(e)}
        value={addingValue}
        placeholder="type anything and add"
        autoFocus
      />
      <button type="submit" className="add_btn"></button>
    </form>
  );
}

export default AddList;
