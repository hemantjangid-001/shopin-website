import React from "react";
import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { mobile } from "../Response";

const Container = styled.div`
  display: flex;
  background: #eee;
  ${mobile({ flexDirection: "column" })};
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })};
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  list-style: none;
  width: 50%;
  margin-bottom: 10px; ;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img``;

const Logo = styled.h1`
  margin-bottom: 0;
  font-weight: 700;
`;

const Desc = styled.p``;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>SHOPPIFY</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
          suscipit enim dolorem perferendis cumque explicabo velit voluptas
          praesentium eligendi aut amet delectus placeat quia iste, ipsa,
          eveniet ab officiis fugit!
        </Desc>
        <SocialContainer>
          <SocialIcon color="385999">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon color="E60023">
            <PinterestIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Helpful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>WishList</ListItem>
          <ListItem>Term & Condition</ListItem>
        </List>
      </Center>
      <Right>
        <Title></Title>
        <ContactItem>
          <LocationOnIcon style={{ marginRight: "10px" }} />
          Lords City, 200 feet Road, Alwar, Rajasthan
        </ContactItem>
        <ContactItem>
          <LocalPhoneIcon style={{ marginRight: "10px" }} />
          +91 123 456 7890
        </ContactItem>
        <ContactItem>
          <EmailOutlinedIcon style={{ marginRight: "10px" }} />
          shoppify@gmail.com
        </ContactItem>
        <Payment src="" />
      </Right>
    </Container>
  );
};

export default Footer;
