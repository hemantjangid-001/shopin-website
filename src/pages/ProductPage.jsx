import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import RemoveCircleOutlinedIcon from "@mui/icons-material/RemoveCircleOutlined";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import { mobile } from "../Response";

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  margin: 50px;
  ${mobile({ margin: "0px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
  height: 90vh;
  ${mobile({ width: "100vw" })}
`;

const Image = styled.img`
  height: 100%;
  ${mobile({ width: "100%" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 400;
`;

const Desc = styled.p``;

const Price = styled.span`
  font-size: 40px;
  font-weight: 400;
`;

const FilterContainer = styled.div`
  margin: 30px 0;
  display: flex;
  width: 50%;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
  margin-right: 10px;
`;

const FilterColor = styled.div`
  height: 20px;
  width: 20px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  margin-right: 10px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  padding: 5px;

  &:focus {
    outline: none;
  }
`;

const FilterSizeOption = styled.option`
  padding: 10px;
  margin: 10px;
`;

const AddContainer = styled.div`
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Amount = styled.div`
  height: 30px;
  width: 30px;
  border: 1px solid teal;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 5px;
  margin: 5px;
  font-weight: 500;
  font-size: 20px;
`;

const Button = styled.button`
  background-color: coral;
  padding: 10px 20px;
  color: white;
  border: 2px solid transparent;
  cursor: pointer;
  font-weight: 700;
  transition: all 0.5s ease;

  &:hover {
    background-color: transparent;
    color: coral;
    border: 2px solid coral;
  }
`;

const ProductPage = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src="https://5.imimg.com/data5/SELLER/Default/2020/10/CD/IZ/IY/12789060/mens-jackets-500x500.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Denim Jacket</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            voluptate iste voluptates facilis repellendus quasi atque tempore
            consequatur molestias, nulla fugiat eaque vel nisi, eos impedit
            quas. Incidunt fugiat repellendus aliquam, similique facere quae
            earum repellat suscipit aperiam. Nisi aliquid in praesentium vel
            atque velit, alias nam tempore est perferendis accusamus illo
            debitis provident, reiciendis laborum ullam asperiores fugit
            veritatis eum nihil eaque ipsum ipsa repellat sapiente! Itaque,
            eligendi!
          </Desc>
          <Price>₹ 2000</Price>

          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="green" />
              <FilterColor color="black" />
              <FilterColor color="grey" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <RemoveCircleOutlinedIcon />
              <Amount>1</Amount>
              <AddCircleOutlinedIcon />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default ProductPage;
