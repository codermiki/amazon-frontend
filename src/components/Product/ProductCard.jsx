import React, { useContext } from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "./Product.module.css";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import { ACTION } from "../../Utility/action.type";

const ProductCard = ({ product, flex, renderDesc, renderAdd }) => {
  function truncateTitle(title, maxLength) {
    if (title.length > maxLength) {
      return title.substring(0, maxLength) + "...";
    }
    return title;
  }

  const { id, title, image, price, rating, description } = product;

  const [{ basket }, dispatch] = useContext(DataContext);

  const addToCart = () => {
    dispatch({
      type: ACTION.ADD_TO_BASKET,
      item: { id, title, image, price, rating, description },
    });
  };

  return (
    <>
      <div className={`${classes.card__container} ${flex && classes.d_flex}`}>
        <Link to={`products/${id}`}>
          <img src={image} alt="" />
        </Link>
        <div>
          <h3>{title}</h3>
          {renderDesc && (
            <div
              style={{
                maxWidth: "550px",
              }}
            >
              {truncateTitle(description, 105)}
            </div>
          )}
          <div className={classes.rating}>
            {/* rating */}
            <Rating
              name="half-rating"
              defaultValue={rating.rate}
              precision={0.5}
            />
            {/* rating count */}
            <small>{rating.count}</small>
          </div>
          <div>
            {/* price */}
            <CurrencyFormat amount={price} />
          </div>
          {renderAdd && (
            <button onClick={addToCart} className={classes.button}>
              add to cart
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductCard;
