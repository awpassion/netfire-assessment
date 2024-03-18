import React from "react";
import { IconType } from "react-icons";

const IconButton = ({
  Icon,
  onClick,
}: {
  Icon: IconType;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className="bg-stone-200/70 hover:bg-stone-100 transition-colors duration-300 p-2.5 rounded-full border border-stone-400"
    >
      <Icon size={18} />
    </button>
  );
};

export default IconButton;
