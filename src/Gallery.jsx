import React from "react";
import ImageCard from "./ImageCard";

export default function Gallery() {
  return (
    <>
      <h1 className="galleryHeading">Image Gallery</h1>
      <div className="gallery">
        <ImageCard imgSrc = "https://picsum.photos/id/143/200/300" alt = "random" />
        <ImageCard imgSrc = "https://picsum.photos/id/144/200/300" alt = "random" />
        <ImageCard imgSrc = "https://picsum.photos/id/145/200/300" alt = "random" />
        <ImageCard imgSrc = "https://picsum.photos/id/146/200/300" alt = "random" />
        <ImageCard imgSrc = "https://picsum.photos/id/158/200/300" alt = "random" />
        <ImageCard imgSrc = "https://picsum.photos/id/157/200/300" alt = "random" />
        <ImageCard imgSrc = "https://picsum.photos/id/149/200/300" alt = "random" />
        <ImageCard imgSrc = "https://picsum.photos/id/159/200/300" alt = "random" />
        <ImageCard imgSrc = "https://picsum.photos/id/151/200/300" alt = "random" />
        <ImageCard imgSrc = "https://picsum.photos/id/152/200/300" alt = "random" />
        <ImageCard imgSrc = "https://picsum.photos/id/153/200/300" alt = "random" />
        <ImageCard imgSrc = "https://picsum.photos/id/155/200/300" alt = "random" />
      </div>
    </>
  );
}
