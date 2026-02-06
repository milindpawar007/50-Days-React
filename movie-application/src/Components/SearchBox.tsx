import React from "react";

type Props = {
  search: string;
  setSearch: (value: string) => void;
};

const SearchBox: React.FC<Props> = ({
  search,
  setSearch,
}) => {
  return (
    <div className="col col-sm-4">
      <input
        className="form-control"
        type="text"
        placeholder="Search movies..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />
    </div>
  );
};

export default SearchBox;
