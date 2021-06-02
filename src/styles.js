// import { createGlobalStyle } from "styled-components";

import styled from "styled-components";

export const HeadTitle = styled.h1`
  text-align: center;
  h3 {
    font-size: medium;
  }
`;

export const FullBody = styled.div`
  text-align: center;
  align-items: center;
  background-color: #FFFFFF;
  mainColor : : "#475B5A";
`;

export const DivTwo = styled.div`
  margin: 50px;
  & p {
    font-size: medium;
  }
`;

export const DivThree = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageEDIT = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  border: crimson;
`;

export const ImageTwo = styled.img`
  width: 150px;
  height: 150px;
`;
