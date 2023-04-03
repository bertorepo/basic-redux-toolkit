import React from "react";
import { Heading, Button, SkeletonLoader } from "../../components";
import { Album } from "../index";
import { useFetchAlbumsQuery, useAddAlbumMutation } from "../../store";

export const AlbumsList = ({ user }) => {
  const { data, error, isFetching } = useFetchAlbumsQuery(user);
  const [addAlbum, results] = useAddAlbumMutation();

  let content;
  if (isFetching) {
    content = <SkeletonLoader times={3} height={50} className="my-2 p-4" />;
  } else if (error) {
    content = <div>LError fetching albums</div>;
  } else {
    content = data.map((album) => {
      return <Album key={album.id} album={album} />;
    });
  }

  const handleAddAlbum = () => {
    addAlbum(user);
  };

  return (
    <div className="p-1 border">
      <Heading headingName={`Albums by ${user.name}`}>
        <Button onClick={handleAddAlbum} loading={results.isLoading} primary>
          Add Album
        </Button>
      </Heading>
      {content}
    </div>
  );
};
