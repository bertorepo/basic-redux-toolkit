import React from "react";

import { TrashIcon } from "@heroicons/react/20/solid";
import { useRemovePhotoMutation } from "../../store";

export const Photos = ({ photo }) => {
  const [removePhoto, results] = useRemovePhotoMutation();

  const handleDeletePhoto = () => {
    removePhoto(photo);
  };

  return (
    <div className="relative group">
      <img
        src={photo.imageUrl}
        alt={photo.id}
        className="h-24 w-24 lg:h-32 lg:w-32 rounded-md object-cover object-center shadow-xl group-hover:scale-105 transition-all duration-500"
      />

      {results.isLoading ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1}
          stroke="currentColor"
          className="w-5 h-5 mr-2 animate-spin stroke-red-500 absolute top-1 right-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>
      ) : (
        <TrashIcon
          onClick={handleDeletePhoto}
          className="h-5 w-5 cursor-pointer  fill-red-500 absolute top-1 right-1 
          group-hover:scale-110 group-hover:visible transition-all duration-500 invisible"
        />
      )}
    </div>
  );
};
