import React from "react";
import styles from "./OrderListItemText.module.css";

interface Props {
  subtitle: string;
  text: string;
}
function OrderListItemText({ subtitle, text }: Props) {
  return (
    <>
      <h2 className={`${styles.subtitle}`}>{subtitle}</h2>
      <p>{text}</p>
    </>
  );
}

export default OrderListItemText;
