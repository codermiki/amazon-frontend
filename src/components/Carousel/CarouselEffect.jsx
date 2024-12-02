import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { imgUrl } from "./img/data";
import classes from "./Carousel.module.css";

const CarouselEffect = () => {
  return (
    <>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {imgUrl.map((singleimg, i) => {
          return <img key={i} src={singleimg} alt="" />;
        })}
      </Carousel>
      <div className={classes.hero__img}></div>
    </>
  );
};

export default CarouselEffect;
