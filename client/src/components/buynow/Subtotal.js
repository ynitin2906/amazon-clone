import React, { useEffect, useState } from "react";

const Subtotal = ({ iteam }) => {
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const totalAmount = () => {
      let price = 0;
      iteam?.map((item) => (price = item.price.cost + price));
      setPrice(price);
    };
    totalAmount();
  }, [iteam]);

  return (
    <div className="sub_item">
      <h3>
        Subtotal ({iteam?.length}items):{" "}
        <strong style={{ fontWeight: 700, color: "#111" }}> ₹{price}.00</strong>
      </h3>
    </div>
  );
};

export default Subtotal;
