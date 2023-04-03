import React from "react";

export const ButtonIcon = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      type="button"
      className="inline-flex items-center rounded-full border border-transparent bg-red-500 p-0.5 text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-500"
    >
      {children}
    </button>
  );
};
