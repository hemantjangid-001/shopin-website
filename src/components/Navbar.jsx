import React from "react";
import styled from "styled-components";
import { GoSearch } from "react-icons/go";
import { Badge } from "@mui/material";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import { mobile } from "../Response";

const Container = styled.div`
  height: 60px;
  padding-bottom: 1rem;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.3);
  z-index: 3;
  ${mobile({ height: "50px" })};
`;

const Wrapper = styled.div`
  padding: 0px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "0px" })};
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({ marginLeft: "8px" })};
`;

const Input = styled.input`
  border: none;

  ${mobile({ width: "50px" })};

  &:focus {
    outline: none;
  }
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })};
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({
    fontSize: "22px",
    marginLeft: "5px",
    marginRight: "-15px",
    paddingRight: "0px",
  })};
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ justifyContent: "center", flex: 2 })};
`;

const LogoItem = styled.span`
  color: ${(props) => (props.type === "filled" ? "coral" : "teal")};
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })};
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search"></Input>
            <GoSearch style={{ color: "gray", fontSize: 15 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>
            <LogoItem type="filled">SHOP</LogoItem>
            <LogoItem>IN</LogoItem>
          </Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGNIN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <LocalGroceryStoreOutlinedIcon color="action" />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
