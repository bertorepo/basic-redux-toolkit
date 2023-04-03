import React from "react";
import Skeleton from "react-loading-skeleton";

export const SkeletonLoader = ({ times, ...rest }) => {
  const boxes = Array(times)
    .fill(0)
    .map((_, i) => {
      return <Skeleton key={i} {...rest} />;
    });

  return boxes;
};
