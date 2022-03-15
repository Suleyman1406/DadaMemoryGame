import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: rgba(230, 206, 255);
  padding: 5px 0px 50px;
  position: absolute;
  bottom: 0;

  @media only screen and (max-height: 1100px) {
    position: relative;
  }
  @media only screen and (max-width: 1100px) {
    padding: 5px 0px 40px;
  }
  @media only screen and (max-width: 800px) {
    padding: 5px 0px 30px;
  }
  @media only screen and (max-width: 600px) {
    padding: 5px 0px 20px;
  }
`;

export const FooterContainer = styled.div`
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  text-align: center;
  @media only screen and (max-width: 1400px) {
    width: 60%;
  }
  @media only screen and (max-width: 1100px) {
    width: 70%;
    margin-top: 30px;
  }
  @media only screen and (max-width: 800px) {
    width: 80%;
    margin-top: 20px;
  }
  @media only screen and (max-width: 600px) {
    width: 90%;
    margin-top: 15px;
  }
`;

export const Text = styled.a`
  display: block;
  font-size: 1.4rem;
  margin-top: 15px;
  color: rgba(0, 0, 0, 0.4);
  text-decoration: none;
  transition: 0.2s all;
  padding: 5px;
  &:hover {
    color: rgba(0, 0, 0, 0.8);
  }

  @media only screen and (max-width: 800px) {
    margin-top: 10px;
    font-size: 1.3rem;
  }
  @media only screen and (max-width: 600px) {
    font-size: 1.1rem;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: black;
`;
