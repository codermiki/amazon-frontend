import React, { useContext, useEffect } from "react";
import CarouselEffect from "../../components/Carousel/CarouselEffect";
import Category from "../../components/Category/Category";
import Product from "../../components/Product/Product";

const Landing = () => {
  return (
    <>
      <CarouselEffect />
      <Category />
      <Product />
    </>
  );
};

export default Landing;
