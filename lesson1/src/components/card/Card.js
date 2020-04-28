import React from "react";
import PropTypes from "prop-types";
import styles from "./card.module.css";
import { changeImageBackground } from "../ui/changeImageBackground";

// console.log(styles);
const defImage =
  "https://www.randschemicals.com/wp-content/themes/randschemical/images/di.png";

export const Card = ({ title, sku, isAuth, sale }) => {
  const x = changeImageBackground(sale);
  console.log(sale);
  return (
    <div className={isAuth ? styles.isActive : styles.cardContainer}>
      <div
        className={styles.imageContainer}
        style={{
          backgroundImage: `url(${x})`
        }}
      >
        <h2 className={styles.title}>title: {title}</h2>
      </div>
      <div>
        <img
          alt="pic"
          src={sku ? require(`../../images/${sku}_1.jpg`) : defImage}
        />
      </div>
    </div>
  );
};

Card.defaultProps = {
  sku: "00064273040195300",
  sale: false
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  sku: PropTypes.number
};
