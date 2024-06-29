import React, { useState } from "react";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import styled from "styled-components";
import { sliderItems } from "../Data";
import { mobile } from "../Response";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow-x: hidden;
  ${mobile({ display: "none" })};
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: green;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "20px"};
  right: ${(props) => props.direction === "right" && "20px"};
  opacity: 0.5;
  cursor: pointer;
  margin: auto;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  display: flex;
  width: 100vw;
  height: 100%;
  align-items: center;
  background-color: ${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  width: 50vw;
`;

const Image = styled.img`
  height: 90%;
  margin-left: 5rem;
`;

const InfoContainer = styled.div`
  width: 50vw;
  padding: 3rem;
`;

const Title = styled.h1`
  padding: 0;
  margin: 0;
  font-size: 70px;
`;

const Desc = styled.p`
  font-size: 20px;
  margin: 50px 0;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background: transparent;
  cursor: pointer;
  font-size: 16px;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex((slideIndex) => {
        return slideIndex > 0 ? slideIndex - 1 : 2;
      });
    } else {
      setSlideIndex((slideIndex) => {
        return slideIndex < 2 ? slideIndex + 1 : 0;
      });
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ChevronLeftOutlinedIcon />
      </Arrow>

      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img}></Image>
            </ImgContainer>

            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>

      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ChevronRightOutlinedIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
