import React from "react";
import styled from "styled-components";
import Product from "./Product";
import { popularProducts } from "../Data";

const Container = styled.div`
  display: flex;
  margin: 5px;
  flex-wrap: wrap;
`;

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
