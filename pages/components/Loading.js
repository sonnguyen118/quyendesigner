import React from "react";
import Image from "next/image";

const Loading = () => {
  return (
    <div className="loading">
      <div className="loading-img">
        <Image
          src={`/image/home_page/icon_quyendesign__.png`}
          alt="description of image"
          layout="fill"
          data-testid="close-icon"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default Loading;
