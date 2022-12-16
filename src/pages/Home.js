import React, { useState, useEffect } from "react";

import { Container, Row, Col } from "reactstrap";

import "../styles/hero-section.css";

import "../styles/home.css";

import products from "../dummy_data/food_data.js";

import foodCategoryImg01 from "../images/hamburger.png";
import foodCategoryImg02 from "../images/pizza.png";
import foodCategoryImg03 from "../images/wrap.png";

import ProductCard from "../components/UI/ProductCard";

import Slider from "../components/Slider.js";

import { useNavigate  } from "react-router-dom";


const Home = () => {
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);



  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }

    if (category === "BURGER") {
      const filteredProducts = products.filter(
        (item) => item.category === "Burger"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "PIZZA") {
      const filteredProducts = products.filter(
        (item) => item.category === "Pizza"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "WRAPS") {
      const filteredProducts = products.filter(
        (item) => item.category === "Wraps"
      );

      setAllProducts(filteredProducts);
    }
  }, [category]);

  const navigate = useNavigate();

  const redirectToMenu = () => {
    navigate("/menu");
  };

  
  return (
    <section>
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content  ">
                <h1 className="mb-4 hero__title">
                  <span>What</span> Should <br /> I
                  <span> eat? </span>
                </h1>

                <h4>
                  Try some of the offers that we prepared for you
                </h4>

                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className="order__btn d-flex align-items-center justify-content-between" onClick={redirectToMenu}>
                    Order now <i class="ri-arrow-right-s-line"></i>
                  </button>

                </div>
              </div>

            </Col>
            <Col lg="1" md="6">

               <Slider/>
              
            </Col>
          </Row>
        </Container>
      </section>

    {/*============================ Categories ===================================*/}

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Explore Our Popular Foods</h2>
            </Col>

            <Col lg="12">
              <div className="food__category d-flex align-items-center justify-content-center gap-4">
                <button
                  className={`all__btn  ${
                    category === "ALL" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("ALL")}
                >
                  All
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "BURGER" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("BURGER")}
                >
                  <img src={foodCategoryImg01} alt="" />
                  Burger
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "PIZZA" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("PIZZA")}
                >
                  <img src={foodCategoryImg02} alt="" />
                  Pizza
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "WRAPS" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("WRAPS")}
                >
                  <img src={foodCategoryImg03} alt="" />
                  Wraps
                </button>
              </div>
            </Col>

            {allProducts.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      </section>
   
  );
};

export default Home;
