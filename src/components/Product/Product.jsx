import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import classes from "./Product.module.css";
import Loader from "../Loader/Loader";

const Product = () => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("https://fakestoreapi.com/products");
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Fetching Failed", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
  if (loading) {
    return <Loader />;
  }

  if (!products) {
    return <div>product Not Found</div>;
  }

  return (
    <>
      <section className={classes.product__container}>
        {products.map((singleProduct) => {
          return (
            <ProductCard
              key={singleProduct.id}
              product={singleProduct}
              renderAdd={true}
            />
          );
        })}
      </section>
    </>
  );
};

export default Product;
