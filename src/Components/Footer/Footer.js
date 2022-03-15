import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillCode,
} from "react-icons/ai";
import Styles from "./Footer.module.css";
import { Container, FooterContainer, Link, Text } from "./FooterStyled";
const Footer = () => {
  return (
    <Container>
      <FooterContainer>
        <Link href="https://github.com/Suleyman1406" target="_blank">
          <AiFillGithub className={Styles.icon} />
        </Link>
        <Link href="https://www.linkedin.com/in/dadashow/" target="_blank">
          <AiFillLinkedin className={Styles.icon} />
        </Link>
        <Link href="https://www.instagram.com/suleyman._.14/" target="_blank">
          <AiFillInstagram className={Styles.icon} />
        </Link>
        <Link
          href="https://www.facebook.com/profile.php?id=100009527858530"
          target="_blank"
        >
          <AiFillFacebook className={Styles.icon} />
        </Link>
        <Link href="https://twitter.com/Suleyman141406" target="_blank">
          <AiFillTwitterCircle className={Styles.icon} />
        </Link>
        <Link
          href="https://github.com/Suleyman1406/DadaMemoryGame"
          target="_blank"
        >
          <AiFillCode className={Styles.icon} />
        </Link>
        <Text href="https://dadashow.me/">
          Designed & Built by <br />{" "}
          <span style={{ fontSize: "1rem" }}>Suleyman Dadashov</span>
        </Text>
      </FooterContainer>
    </Container>
  );
};

export default Footer;
