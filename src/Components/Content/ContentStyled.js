import styled from "styled-components";

export const Container = styled.div`
  width: 800px;
  margin: 5px auto 30px;
  background-color: white;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 5px;
  @media only screen and (max-width: 900px) {
    width: 90%;
  }
`;
export const Header = styled.div`
  box-sizing: border-box;
  padding: 20px 25px;
  font-size: 30px;
  border-radius: 5px;
  width: 800px;
  background-color: white;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  margin: 20px auto 20px auto;
  @media only screen and (max-width: 900px) {
    width: 90%;
    font-size: 20px;
  }
`;

export const CardsContainer = styled.div`
  width: 600px;
  margin: auto;

  padding: 20px 20px 20px 30px;
  border-radius: 5px;
  @media only screen and (max-width: 900px) {
    width: 500px;
    padding: 15px 15px 15px 20px;
  }
  @media only screen and (max-width: 700px) {
    width: 85%;
    padding: 10px 10px 10px 15px;
  }
`;
export const ImageCard = styled.div`
  background-color: ${(props) =>
    props.isFind ? "rgba(215,215,215)" : "rgba(220,220,220)"};
  position: absolute;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  width: 90%;
  height: 100%;
  align-items: center;
  cursor: pointer;
  font-size: 28px;
  transition: 1s all;
  z-index: ${(props) => (props.isOpen ? "999" : "1")};
  transform: ${(props) => (props.isOpen ? "rotateY(0)" : "rotateY(180deg)")};

  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
`;
export const QuestionMarkCard = styled.div`
  background-color: rgba(220, 220, 220);
  position: absolute;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  width: 90%;
  height: 100%;
  align-items: center;
  cursor: pointer;
  font-size: 30px;
  color: rgba(0, 0, 0, 0.6);
  box-shadow: ${(props) =>
    props.isFind
      ? "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px"
      : "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px"};
  transition: 1s all;
  z-index: ${(props) => (props.isOpen ? "999" : "1")};
  transform: ${(props) =>
    props.isOpen ? "rotateY(360deg)" : "rotateY(180deg)"};
`;
export const Card = styled.div`
  width: 20%;
  height: 90px;
  position: relative;
  margin: 5px auto;
  display: inline-block;
  &:hover {
    opacity: 0.8;
  }

  @media only screen and (max-width: 900px) {
    height: 85px;
  }
  @media only screen and (max-width: 700px) {
    height: 75px;
  }
  @media only screen and (max-width: 490px) {
    height: 55px;
  }
`;
export const Score = styled.h3`
  margin: 0;
`;
export const ScoreContainer = styled.div`
  padding: 15px 15px 5px 25px;
  position: relative;
`;
export const ScoreInfo = styled.p`
  margin: 0;
  margin-top: 10px;
  margin-left: 25px;
  color: rgba(140, 140, 140);
  @media only screen and (max-width: 700px) {
    margin-left: 5px;
    font-size: 14px;
  }
`;
export const Red = styled.span`
  color: red;
`;
export const Green = styled.span`
  color: #00c853;
`;
export const Reload = styled.button`
  position: absolute;
  top: 13px;
  right: 15px;
  background-color: transparent;
  border-color: transparent;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  background-color: #ffeb3b;
  padding: 2px;
  color: white;
  font-weight: 700;
  transition: 0.2s all;
  &:hover {
    transform: translateY(-2px);
    cursor: pointer;
  }
`;

export const Span = styled.span`
  transform: "translateY(2px)";
  @media only screen and (max-width: 400px) {
    display: none;
  }
`;
