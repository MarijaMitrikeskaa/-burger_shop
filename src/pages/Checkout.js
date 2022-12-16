import React from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../components/UI/BackgroundSection";


import "../styles/checkout.css";

const Checkout = () => {

  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);

  return (
      <section>
      <CommonSection title="Checkout" />

        <Container>
          <Row>
            <Col lg="8" md="6">
              
              <form className="checkout__form">
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    required
            
                  />
                </div>

                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="form__group">
                  <input
                    type="number"
                    placeholder="Phone number"
                    required
                  />
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Country"
                    required
                  />
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="City"
                    required
                  />
                </div>
                <div className="form__group">
                  <input
                    type="number"
                    placeholder="Postal code"
                    required
                  />
                </div>
                <button type="submit" className="addTOCart__btn">
                  Payment
                </button>
              </form>
            </Col>

            <Col lg="4" md="6">
              <div className="checkout__bill">
                <div className="checkout__total">
                  <h5 className="d-flex align-items-center justify-content-between">
                    Total: <span>{cartTotalAmount} den</span>
                  </h5>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
 
  );
};

export default Checkout;
