import React from "react";
import { IoMenu } from "react-icons/io5";
import classes from "./Header.module.css";

const LowerHeader = () => {
  return (
    <>
      <section className={classes.lower__navBar}>
        <div className={classes.lower__container}>
          <ul>
            <li>
              <IoMenu size={25} />
              <p>All</p>
            </li>
            <li>Todays Deals</li>
            <li>Customer Service</li>
            <li>Registry</li>
            <li>cart</li>
            <li>Cards</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default LowerHeader;
