import React from "react";

enum ButtonStyles {
  SELECTED="text-white border-primary-500",
  DEFAULT="text-[#ADB7BE] border-slate-600 hover:border-white"
}

export const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected ? ButtonStyles.SELECTED : ButtonStyles.DEFAULT;

  return (
    <button
      className={`${buttonStyles} 
        rounded-full border-2 px-4 py-2 text-base cursor-pointer 
        md:px-6 md:py-3 md:text-xl
      `}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};
