import React, { useRef } from "react";
import { ButtonIcon } from "./ButtonIcon";
import {
  CheckCircleIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  EnvelopeIcon,
  TrashIcon,
} from "@heroicons/react/20/solid";

export const List = ({ config }) => {
  const listRef = useRef(null);
  const {
    icon,
    avatar,
    label,
    subLabel,
    handleDeleteList,
    handleExpandContent,
    isExpanded,
    results,
  } = config;

  return (
    <li onClick={handleExpandContent}>
      <a className="block hover:bg-gray-50">
        <div className="flex items-center px-4 py-4 sm:px-6">
          <div className="flex min-w-0 flex-1 items-center">
            <div className="flex-shrink-0">
              {icon ? (
                icon
              ) : (
                <img
                  className="h-12 w-12 rounded-full"
                  src={avatar}
                  alt={label}
                />
              )}
            </div>
            <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
              <div>
                <span className="flex items-center gap-x-3">
                  {results?.isLoading ? (
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
                  ) : (
                    <ButtonIcon onClick={handleDeleteList}>
                      <TrashIcon className="h-3 w-3" />
                    </ButtonIcon>
                  )}

                  <p className="truncate text-sm font-medium text-indigo-600 flex-1">
                    {results?.isLoading ? "Deleting..." : label}
                  </p>
                </span>
                <p className="mt-2 flex items-center text-sm text-gray-500">
                  <EnvelopeIcon
                    className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="truncate">{subLabel}</span>
                </p>
              </div>
            </div>
          </div>
          <div className="cursor-pointer">
            {isExpanded ? (
              <ChevronDownIcon
                className="h-8 w-8 text-gray-400"
                aria-hidden="true"
              />
            ) : (
              <ChevronRightIcon
                className="h-8 w-8 text-gray-400"
                aria-hidden="true"
              />
            )}
          </div>
        </div>
      </a>
    </li>
  );
};
