import { useLocation } from "react-router";
import "./ThankYou.css";
import React from "react";
import { Link } from "react-router-dom";

const ThankYou = () => {
  const { state } = useLocation();
  const userName = state?.name;

  console.log(state);
  return (
    <div className="thank-box">
      <div className="thank-you">
        <div>Thank you {userName} for shopping.</div>
        <div>Hope you have a great day!!</div>
        <div className="continue-shopping-container">
          <Link to="/">
            <button className="continue-shopping">Continue Shopping</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
