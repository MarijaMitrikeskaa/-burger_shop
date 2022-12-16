import React, { useState } from "react";
import CommonSection from "../components/UI/common-section/CommonSection";

import { Container, Row, Col } from "reactstrap";

import products from "../dummy_data/food_data";
import ProductCard from "../components/UI/product-card/ProductCard";
import ReactPaginate from "react-paginate";

import "../styles/all-foods.css";
import "../styles/pagination.css";

const AllFoods = () => {

  const [pageNumber, setPageNumber] = useState(0);

  const product = products.map((item) => {
    return item
  });

  const productPerPage = 12;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = product.slice(
    visitedPage,
    visitedPage + productPerPage
  );

  const pageCount = Math.ceil(product.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (

   

      <section>
           <CommonSection title="All Foods" />
        <Container>
          <Row>
            {displayPage.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">
                <ProductCard item={item} />
              </Col>
            ))}

            <div>
              <ReactPaginate
                pageCount={pageCount}
                onPageChange={changePage}
                previousLabel={"Prev"}
                nextLabel={"Next"}
                containerClassName=" paginationBttns "
              />
            </div>
          </Row>
        </Container>
      </section>
  
  );
};

export default AllFoods;
