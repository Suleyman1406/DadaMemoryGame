import React, { useState } from "react";
import styled from "styled-components";
import { FaQuestion } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { close, closeAll, compare, reload, select } from "../redux/CardSlice";
import { IoReloadCircleSharp } from "react-icons/io5";
import LoginModal from "./LoginModal";
import ResultModal from "./ResultModal";
import { useEffect } from "react";
const Container = styled.div`
  width: 800px;
  margin: 5px auto 30px;
  background-color: white;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 5px;
  @media only screen and (max-width: 900px) {
    width: 90%;
  }
`;
const Header = styled.div`
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

const CardsContainer = styled.div`
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
const ImageCard = styled.div`
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
const QuestionMarkCard = styled.div`
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
const Card = styled.div`
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
const Score = styled.h3`
  margin: 0;
`;
const ScoreContainer = styled.div`
  padding: 15px 15px 5px 25px;
  position: relative;
`;
const ScoreInfo = styled.p`
  margin: 0;
  margin-top: 10px;
  margin-left: 25px;
  color: rgba(140, 140, 140);
  @media only screen and (max-width: 700px) {
    margin-left: 5px;
    font-size: 14px;
  }
`;
const Red = styled.span`
  color: red;
`;
const Green = styled.span`
  color: #00c853;
`;
const Reload = styled.button`
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
  }
`;

const Span = styled.span`
  transform: "translateY(2px)";
  @media only screen and (max-width: 400px) {
    display: none;
  }
`;

const Content = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState({});
  const [isFinish, setIsFinish] = useState(false);
  const [isFirst, setIsFirst] = useState(true);
  const dispatch = useDispatch();
  const list = useSelector((state) => state.cardReducer.cards);
  const selected = useSelector((state) => state.cardReducer.selected);
  const totalSelect = useSelector((state) => state.cardReducer.totalSelect);
  const score = useSelector((state) => state.cardReducer.point);
  const found = useSelector((state) => state.cardReducer.found);
  const handleClick = (name, id) => {
    const b = selected;
    dispatch(select({ name: name, id }));
    if (b !== "")
      setTimeout(() => {
        dispatch(compare({ name: name, id }));
      }, 1000);
  };
  const reloadGame = () => {
    dispatch(closeAll());
    setIsOpen(false);
    setTimeout(() => {
      dispatch(reload());
      setIsOpen(true);
    }, 1000);
  };

  useEffect(() => {
    if (found === 15) {
      setIsFinish(true);
    }
  }, [found]);
  return (
    <>
      <Header>
        {user.name ? "Hi " + user.name + ", w" : "W"}elcome to{" "}
        <span style={{ color: "#ba68c8" }}>Dada</span> Memory Game
      </Header>
      <LoginModal
        open={isLogged}
        onClose={() => setIsLogged(true)}
        setUser={setUser}
      />
      {isFinish && (
        <ResultModal
          open={isFinish}
          onClose={() => setIsFinish(false)}
          score={score}
          user={user}
          reload={reloadGame}
          isFirst={isFirst}
          setIsFirst={setIsFirst}
        />
      )}
      <Container>
        <ScoreContainer>
          <Score>
            Your score: <span style={{ color: "#ba68c8" }}>{score}</span>
          </Score>
          <ScoreInfo>
            Your start score is 200. Each correct gives <Green>50</Green>{" "}
            points, each wrong takes <Red>10</Red> points.
          </ScoreInfo>
          <Reload onClick={reloadGame}>
            <IoReloadCircleSharp style={{ fontSize: 20, marginRight: 5 }} />
            <Span>Reload Game</Span>
          </Reload>
        </ScoreContainer>
        <CardsContainer>
          {list.map((item, id) => {
            return (
              <Card key={id}>
                <QuestionMarkCard
                  isOpen={!item.isOpen}
                  onClick={() =>
                    totalSelect < 2 && isOpen ? handleClick(item.name, id) : ""
                  }
                >
                  <FaQuestion />
                </QuestionMarkCard>
                <ImageCard
                  isFind={item.isFind}
                  isOpen={item.isOpen}
                  onClick={() =>
                    !item.isFind && isOpen ? dispatch(close(id)) : ""
                  }
                >
                  <img
                    style={{ width: "80%" }}
                    src={"images/" + item.name + ".png"}
                    alt="error"
                  />
                </ImageCard>
              </Card>
            );
          })}
        </CardsContainer>
      </Container>
    </>
  );
};

export default Content;
