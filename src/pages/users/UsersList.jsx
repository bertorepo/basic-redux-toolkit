import React from "react";
import { useFetchUsersQuery, useAddUserMutation } from "../../store";
import { Button, Heading, SkeletonLoader } from "../../components";
import { User } from "./User";

export const UsersList = () => {
  const { data, error, isLoading } = useFetchUsersQuery();
  const [addUser, results] = useAddUserMutation();

  const handleAddUser = () => {
    addUser();
  };

  let content;

  if (isLoading) {
    content = <SkeletonLoader times={6} height={100} className="my-2 p-4" />;
  } else if (error) {
    content = <div>Error Loading Users!</div>;
  } else {
    content = data.map((user) => {
      return <User user={user} key={user.id} />;
    });
  }

  return (
    <div className="p-3 mt-5">
      <Heading headingName="List of Users">
        <Button onClick={handleAddUser} loading={results.isLoading} primary>
          Add New User
        </Button>
      </Heading>
      {content}
    </div>
  );
};
