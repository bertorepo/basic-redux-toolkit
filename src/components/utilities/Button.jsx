import React from "react";
import classNames from "classnames";

export const Button = ({
  children,
  className,
  loading,
  primary,
  error,
  ...rest
}) => {
  const classes = classNames(
    className,
    "inline-flex items-center rounded-md border border-transparent  px-4 py-2 text-base font-medium focus:outline-none  transition-all duration-500",
    {
      "disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-500":
        loading,
      "bg-green-300 text-green-70 hover:bg-green-400": primary,
      "bg-red-300 text-red-70 hover:bg-red-400": error,
    }
  );

  return (
    <button {...rest} className={classes} disabled={loading}>
      {loading && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1}
          stroke="currentColor"
          className="w-5 h-5 mr-2 animate-spin"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>
      )}
      {loading ? "processing..." : children}
    </button>
  );
};
