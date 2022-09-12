import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  ActiveThumbnailWindow,
  Thumbnail,
  ThumbnailGrid,
  Thumbnails,
} from "./styles";

const ProductGallery = () => {
  const [thumbnails, setThumbnails] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    axios
      .get(
        "https://gist.githubusercontent.com/DZuz14/56b7f363e9787fb4c0240eb145bc2b9f/raw/e0b67d18352704d155929b7e27e0dae08cc383b6/data.json"
      )
      .then((res) => setThumbnails(res.data.gallery));
  }, []);

  const renderThumbnails = () =>
    thumbnails.length ? (
      <>
        <></>
        <ActiveThumbnailWindow>
          <img src={thumbnails[activeIndex]} />
        </ActiveThumbnailWindow>
        <ThumbnailGrid>
          {thumbnails.map((thumbnail, i) => (
            <Thumbnail
              key={i}
            >
              <img src={thumbnail} data-index={i} onClick={handleClick} />
            </Thumbnail>
          ))}
        </ThumbnailGrid>
      </>
    ) : null;

  // const renderTextContent = () =>
  //   thumbnails.length ? (
  //     <>
  //       <h1>{thumbnails[activeIndex].title}</h1>
  //       <p>{thumbnails[activeIndex].bodyText}</p>
  //     </>
  //   ) : null;

  const handleClick = (e) => {
    const activeIndex = e.target.getAttribute("data-index");
    setActiveIndex(activeIndex);
  };

  return (
    <Thumbnails>
      <div>{renderThumbnails()}</div>
      {/* <div>{renderTextContent()}</div> */}
    </Thumbnails>
  );
};

export default ProductGallery;
