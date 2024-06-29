import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background: teal;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Super Deal ! Save upto $50 on first order.</Container>;
};

export default Announcement;
