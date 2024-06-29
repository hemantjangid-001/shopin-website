import React from "react";
import styled from "styled-components";
import { categories } from "../Data";
import CategoriesItem from "./CategoriesItem";
import { mobile } from "../Response";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })};
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoriesItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
