import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../Api/endPoint";
import classes from "./Results.module.css";
import ProductCard from "../../components/Product/ProductCard";
import Loader from "../../components/Loader/Loader";

const Results = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${baseUrl}/products/category/${categoryName}`)
      .then((res) => {
        return res.data;
      })
      .then((result) => {
        setProducts(result);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (!products) {
    return <div>Product Not Found</div>;
  }

  return (
    <>
      <section className={classes.outer_container}>
        <h1 className={classes.results} style={{ padding: "30px" }}>
          Results
        </h1>
        <p style={{ padding: "10px 30px" }}>category/{categoryName}</p>
        <hr />
        <div className={classes.product__container}>
          {products.map((singleProduct) => {
            return (
              <ProductCard
                key={singleProduct.id}
                product={singleProduct}
                renderAdd={true}
                haveLink={true}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Results;
