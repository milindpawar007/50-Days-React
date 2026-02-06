import React from "react";

type Props = {
  isFav: boolean;
};

const AddToFav: React.FC<Props> = ({ isFav }) => {
  return (
    <div className="text-center text-white">
      {isFav ? "❌ Remove" : "❤️ Add"}
    </div>
  );
};

export default AddToFav;
