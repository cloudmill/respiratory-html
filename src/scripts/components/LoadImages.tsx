import React, { useRef, useState } from "react";
import { useEffect } from "react";

const LoadImage: React.FC<{ src: string; onLoad: () => void }> = ({
  src,
  onLoad,
}) => {
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    ref.current?.addEventListener("load", onLoad);
  }, []);

  return <img ref={ref} src={src} />;
};

const LoadImages: React.FC<{ srcs: string[]; onLoad: () => void }> = ({
  srcs,
  onLoad,
}) => {
  const [loadCount, setLoadCount] = useState(0);

  useEffect(() => {
    if (loadCount === srcs.length) {
      onLoad();
    }
  }, [loadCount]);

  return (
    <template>
      {srcs.map((src, index) => (
        <LoadImage
          key={index}
          src={src}
          onLoad={() => setLoadCount((loadCount) => loadCount + 1)}
        />
      ))}
    </template>
  );
};

export { LoadImages };
