import React from "react";
import { Heading, Button, Photos, SkeletonLoader } from "../../components";
import { useFetchPhotosQuery, useAddPhotoMutation } from "../../store";

export const PhotosList = ({ album }) => {
  const { data, error, isFetching } = useFetchPhotosQuery(album);
  const [addPhoto, results] = useAddPhotoMutation();

  let content;

  if (isFetching) {
    content = (
      <SkeletonLoader times={5} height={130} width={130} className="my-2 p-4" />
    );
  } else if (error) {
    content = <div>Error fetching Photos</div>;
  } else {
    content = data.map((photo) => {
      return <Photos key={photo.id} photo={photo} />;
    });
  }

  const handleAddPhoto = () => {
    addPhoto(album);
  };

  return (
    <div className="p-1 border">
      <Heading headingName={`Photos by ${album.name}`}>
        <Button onClick={handleAddPhoto} loading={results.isLoading} primary>
          Add Photo
        </Button>
      </Heading>

      <div className="p-2 h-full w-full flex items-center justify-center gap-4 flex-wrap">
        {content}
      </div>
    </div>
  );
};
