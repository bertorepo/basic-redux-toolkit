import { useState } from "react";
import { ButtonIcon, List } from "../../components";
import { FolderIcon } from "@heroicons/react/20/solid";
import { useRemoveAlbumMutation } from "../../store";
import { PhotosList } from "../photos/PhotosList";

export const Album = ({ album }) => {
  const [removeAlbum, results] = useRemoveAlbumMutation();
  const [isExpanded, setIsExpanded] = useState(false);

  const albumConfig = {
    icon: <FolderIcon className="h-12 w-12 rounded-full fill-yellow-600" />,
    label: album.name,
    avatar: null,
    results,
    subLabel: "Contains 3 files",
    isExpanded,
    handleDeleteList(e) {
      e.stopPropagation();
      removeAlbum(album);
    },
    handleExpandContent() {
      setIsExpanded(!isExpanded);
    },
  };

  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-md">
      <ul role="list" className="divide-y divide-gray-200">
        <List config={albumConfig} />

        {isExpanded && <PhotosList album={album} />}
      </ul>
    </div>
  );
};
