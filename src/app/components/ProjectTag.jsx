import React from "react";

export const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white border-primary-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";

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
