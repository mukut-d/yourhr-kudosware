"use client";

import { useRef, useState } from "react";
import classes from "./resume-picker.module.css";
import Image from "next/image";

export default function ResumePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();
  const imageRef = useRef();

  function handlePickClick() {
    imageRef.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    // converting the image into an url
    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor="image">{label}</label>
      <div className={classes.control}>
        <div className={classes.preview}>
          {!pickedImage && <p>No resume picked yet.</p>}
          {pickedImage && (
            <Image
              fill
              src={pickedImage}
              alt="the image selected by the user."
            />
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageRef}
          onChange={handleImageChange}
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlePickClick}
        >
          Pick an File
        </button>
      </div>
    </div>
  );
}
