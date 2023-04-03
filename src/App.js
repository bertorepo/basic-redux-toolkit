import React from "react";
import { UsersList } from "./pages";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const App = () => {
  return (
    <SkeletonTheme baseColor="#ebebeb" highlightColor="#d7d7d7">
      <div className="p-5 h-screen max-w-4xl mx-auto">
        <UsersList />
      </div>
    </SkeletonTheme>
  );
};

export default App;
