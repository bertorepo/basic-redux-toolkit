import React, { useState, useRef, useEffect } from "react";
import { ButtonIcon, List } from "../../components";
import { AlbumsList } from "../index";
import { useRemoveUserMutation } from "../../store";

export const User = ({ user }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [removeUser, results] = useRemoveUserMutation();

  // useEffect(() => {
  //   const handler = (e) => {
  //     if (!listRef.current.contains(e.target)) {
  //       console.log(listRef.current);
  //       console.log(e.target);
  //       setIsExpanded(false);
  //     }
  //   };

  //   document.addEventListener("click", handler, true);

  //   return () => {
  //     document.removeEventListener("click", handler);
  //   };
  // }, [listRef]);

  const userConfig = {
    avatar: user.avatar,
    label: user.name,
    subLabel: user.email,
    isExpanded,
    results,
    handleDeleteList(e) {
      e.stopPropagation();
      removeUser(user);
    },
    handleExpandContent() {
      setIsExpanded(!isExpanded);
    },
  };

  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-md border mb-3 border-solid border-green-500">
      <ul role="list" className="divide-y divide-gray-200 m-3">
        <List config={userConfig} />
        {/* show album list */}

        {isExpanded && <AlbumsList user={user} />}
      </ul>
    </div>
  );
};
