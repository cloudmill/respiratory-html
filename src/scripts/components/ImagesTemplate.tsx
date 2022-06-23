import React, { useCallback, useEffect, useState } from "react";

export const ImagesTemplate: React.FC<{
  images: string[];
  onLoad?: Function;
}> = ({ images, onLoad }) => {
  const [loadCount, setLoadCount] = useState(0);

  useEffect(() => {
    setLoadCount(0);
  }, [images]);

  const handleImgLoad = useCallback(
    () =>
      setLoadCount((loadCount) => {
        const newLoadCount = loadCount + 1;

        if (newLoadCount === images.length) {
          onLoad && onLoad();
        }

        return newLoadCount;
      }),
    [onload]
  );

  return (
    <template>
      <ul>
        {images.map((image, index) => (
          <li key={index}>
            <img src={image} onLoad={handleImgLoad} />
          </li>
        ))}
      </ul>
    </template>
  );
};
