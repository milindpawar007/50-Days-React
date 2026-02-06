import React from "react";

type Props = {
  heading: string;
};

const MovieListHeading: React.FC<Props> = ({ heading }) => {
  return (
    <div className="col">
      <h2>{heading}</h2>
    </div>
  );
};

export default MovieListHeading;
