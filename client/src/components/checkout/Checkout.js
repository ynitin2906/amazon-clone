import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import "./Checkout.css";

// import { Link } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [contactDetails, setContactDetails] = useState({
    name: "",
    phoneNumber: "",
  });
  const [addressDetails, setAddressDetails] = useState({
    houseNumber: "",
    roadName: "",
    pinCode: "",
    city: "",
    state: "",
    nearbyLocation: "",
  });

  const InputChangeHandler = (event) => {
    const { name, value } = event.target;
    if (["name", "phoneNumber"].includes(name)) {
      setContactDetails((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    } else {
      setAddressDetails((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  return (
    <div>
      <div className="payment-container">
        <div className="info-container">
          <div className="select-delivery-address">
            <h3>Select Delivery Address</h3>
          </div>
          <form
            onSubmit={(e) => {
              navigate("/thankyou", { state: { name: contactDetails.name } });
            }}
          >
            <div className="form-container">
              <div className="contact-container">
                <h4>Contact Details</h4>
                <input
                  required
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={contactDetails.name}
                  onChange={InputChangeHandler}
                />
                <input
                  required
                  type="text"
                  placeholder="Phone Number"
                  name="phoneNumber"
                  value={contactDetails.phoneNumber}
                  onChange={InputChangeHandler}
                />
              </div>
              <div className="address-container">
                <h4>Address Details</h4>

                <input
                  required
                  type="text"
                  placeholder="House no./Building Name"
                  name="houseNumber"
                  value={addressDetails.houseNumber}
                  onChange={InputChangeHandler}
                />
                <input
                  required
                  type="text"
                  placeholder="Road Name/ Area/ Colony"
                  name="roadName"
                  value={addressDetails.roadName}
                  onChange={InputChangeHandler}
                />
                <input
                  required
                  type="text"
                  placeholder="Pin Code"
                  name="pinCode"
                  value={addressDetails.pinCode}
                  onChange={InputChangeHandler}
                />
                <input
                  required
                  type="text"
                  placeholder="City"
                  name="city"
                  value={addressDetails.city}
                  onChange={InputChangeHandler}
                />
                <input
                  required
                  type="text"
                  placeholder="State"
                  name="state"
                  value={addressDetails.state}
                  onChange={InputChangeHandler}
                />
                <input
                  required
                  type="text"
                  placeholder="Nearby Location(optional)"
                  name="nearbyLocation"
                  value={addressDetails.nearbyLocation}
                  onChange={InputChangeHandler}
                />
              </div>
              <div className="button-container">
                {/* <Link to="/thankyou" state={{ name: contactDetails.name }}> */}
                <button type="submit">Continue</button>
                {/* </Link> */}
              </div>
            </div>
          </form>
        </div>

        <div className="price-details-container">
          <div className="total-price-container">
            <h3>Price Details</h3>
            <p className="total-payment-price">
              Total Product Price : ₹{state?.total}
            </p>
            <p className="order-payment-total">Order Total : ₹{state?.total}</p>
          </div>

          <div className="disclamer">
            *Only cash on delivery is available. Sorry for inconvenience.
          </div>
        </div>
      </div>
    </div>
  );
};
export default Checkout;
