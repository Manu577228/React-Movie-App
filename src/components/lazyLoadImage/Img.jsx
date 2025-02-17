/* eslint-disable react/prop-types */
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Img = ({ src, className = "" }) => {
  return (
    <LazyLoadImage className={className} alt="Image" effect="blur" src={src} />
  );
};

export default Img;
