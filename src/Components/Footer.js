import React from "react";
import { BsGithub } from "react-icons/bs";
import styled from "styled-components";
import { css } from "styled-components";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillCode,
} from "react-icons/ai";
const Container = styled.div`
  width: 100%;
  background-color: rgba(230, 206, 255);
  padding: 5px 0px 50px;

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

const FooterContainer = styled.div`
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

const Text = styled.a`
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

const Link = styled.a`
  text-decoration: none;
  color: black;
`;

const Icon = css`
  font-size: 40px;
  background-color: white;
  border-radius: 50%;
  padding: 5px;
  margin: 10px;
  color: rgba(0, 0, 0, 0.8);
  box-shadow: rgba(255, 255, 255, 0.82) 0px 2px 4px 0px,
    rgba(255, 255, 255, 1) 0px 2px 16px 0px;
  transition: 0.2s color, 0.5s box-shadow;
  &:hover {
    color: rgba(0, 0, 0, 1);
    box-shadow: rgba(255, 255, 255, 0.25) 0px 54px 55px,
      rgba(255, 255, 255, 0.12) 0px -12px 30px,
      rgba(255, 255, 255, 0.12) 0px 4px 6px,
      rgba(255, 255, 255, 0.17) 0px 12px 13px,
      rgba(255, 255, 255, 0.09) 0px -3px 5px;
  }
  @media only screen and (max-width: 800px) {
    margin: 5px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 35px;
    margin: 4px;
  }
  @media only screen and (max-width: 400px) {
    font-size: 32px;
    margin: 3px;
  }
`;

const GithubIcon = styled(AiFillGithub)`
  ${Icon}
`;

const LinkedinIcon = styled(AiFillLinkedin)`
  ${Icon}
`;

const InstagramIcon = styled(AiFillInstagram)`
  ${Icon}
`;

const FacebookIcon = styled(AiFillFacebook)`
  ${Icon}
`;

const TwitterIcon = styled(AiFillTwitterCircle)`
  ${Icon}
`;

const CodeIcon = styled(AiFillCode)`
  ${Icon}
`;

const Footer = () => {
  return (
    <Container>
      <FooterContainer>
        <Link href="https://github.com/Suleyman1406" target="_blank">
          <GithubIcon />
        </Link>
        <Link
          href="https://www.linkedin.com/in/suleyman-dadashov-54136a178/"
          target="_blank"
        >
          <LinkedinIcon />
        </Link>
        <Link href="https://www.instagram.com/suleyman._.14/" target="_blank">
          <InstagramIcon />
        </Link>
        <Link
          href="https://www.facebook.com/profile.php?id=100009527858530"
          target="_blank"
        >
          <FacebookIcon />
        </Link>
        <Link href="https://twitter.com/Suleyman141406" target="_blank">
          <TwitterIcon />
        </Link>
        <Link
          href="https://github.com/Suleyman1406/PatikaReduxWork3"
          target="_blank"
        >
          <CodeIcon />
        </Link>
        <Text href="https://dadashow.netlify.app/">
          Designed & Built by <br />{" "}
          <span style={{ fontSize: "1rem" }}>Suleyman Dadashov</span>
        </Text>
      </FooterContainer>
    </Container>
  );
};

export default Footer;
