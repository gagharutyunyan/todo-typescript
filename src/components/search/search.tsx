import React from "react";
import "./search.css";

type Props = {
  listSearchValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  totalCount: number;
  doneCount: number;
  importantCount: number;
};

function Search({
  listSearchValue,
  totalCount,
  doneCount,
  importantCount
}: Props) {
  return (
    <header className="header">
      <input
        className="search"
        type="search"
        placeholder="type to search"
        onChange={e => listSearchValue(e)}
      />
      <span className="counts">
        Total: {totalCount}, Done: {doneCount}, Important: {importantCount}
      </span>
    </header>
  );
}

export default Search;
