import "./App.css";
import Navbaar from "./components/header/Navbaar";
import Newnav from "./components/newnavbaar/Newnav";
import Maincomp from "./components/home/Maincomp";
import Footer from "./components/footer/Footer";
import Sign_in from "./components/signup_sign/Sign_in";
import SIgnUp from "./components/signup_sign/SIgnUp";
import Cart from "./components/cart/Cart";
import Buynow from "./components/buynow/Buynow";
import { Routes, Route } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { useEffect, useState } from "react";
import Checkout from "./components/checkout/Checkout";
import ThankYou from "./components/thankyou/ThankYou";
import { createContext } from "react";
import axios from "axios";

export const MyContext = createContext();

function App() {
  const [data, setData] = useState(false);
  const [products, setProducts] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setData(true);
    }, 3000);
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await fetch("/getproducts", {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       });

  //       const res = await data.json();
  //       setProducts(res);
  //       console.log(res);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/getproducts");
        setProducts(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <MyContext.Provider value={{ products }}>
      <>
        {data ? (
          <>
            <Navbaar />
            <Newnav />
            <Routes>
              <Route path="/" element={<Maincomp />} />
              <Route path="/login" element={<Sign_in />} />
              <Route path="/register" element={<SIgnUp />} />
              <Route path="/getproductsone/:id" element={<Cart />} />
              <Route path="/buynow" element={<Buynow />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/thankyou" element={<ThankYou />} />
            </Routes>
            <Footer />
          </>
        ) : (
          <div className="circle">
            <CircularProgress />
            <h2>Loading...</h2>
          </div>
        )}
      </>
    </MyContext.Provider>
  );
}

export default App;

// A>B>C>D
// A ->  props
// store 5 userdata
