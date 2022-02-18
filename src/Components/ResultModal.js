import React, { useEffect } from "react";
import styled from "styled-components";
import { getDatabase, ref, onValue, set } from "firebase/database";
import { useState } from "react";

const MODAL_STYLES = {
  position: "fixed",
  top: "45%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFF",
  padding: "50px 30px",
  zIndex: 1000,
  borderRadius: 2,
  width: "40%",
  boxShadow:
    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .2)",
  zIndex: 1000,
};

const Header = styled.h3`
  font-size: 25px;
  margin-bottom: 0;
  margin-top: 0;
  @media only screen and (max-width: 700px) {
    font-size: 18px;
  }
`;

const LeadershipSection = styled.div`
  padding: 10px 20px;
`;

const LeadershipHeader = styled.h4`
  font-size: 22px;
  display: block;

  padding: 10px;
  margin: 0;
  margin-bottom: 20px;
  padding-left: 0;
  border-bottom: 2px dashed #ba68c8;
  @media only screen and (max-width: 700px) {
    font-size: 16px;
  }
`;

const Profile = styled.div`
  padding: 10px;
  border-bottom: 1px solid rgba(220, 220, 220, 0.5);
  opacity: ${(props) => (props.e ? "1" : "0.8")};
  font-weight: ${(props) => (props.e ? "700" : "")};
`;

const Score = styled.span`
  float: right;
`;
const Button = styled.button`
  text-align: center;
  float: right;
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 18px;
  background-color: #ba68c8;
  color: white;
  border: none;
  border-radius: 5px;
  margin-right: 25px;
  transition: 0.2s all;
  &:hover {
    opacity: 0.7;
  }
  @media only screen and (max-width: 700px) {
    font-size: 16px;
    padding: 8px 16px;
  }
`;

function compare(a, b) {
  if (a.score < b.score) {
    return 1;
  }
  if (a.score > b.score) {
    return -1;
  }
  return 0;
}

const ResultModal = ({
  open,
  score,
  onClose,
  user,
  reload,
  isFirst,
  setIsFirst,
}) => {
  const [leadership, setLeadership] = useState([]);
  useEffect(() => {
    const db = getDatabase();
    if (isFirst)
      set(ref(db, "leadership/" + user.id), {
        name: user.name,
        score,
        id: user.id,
      })
        .then(() => {
          getLeadership(db);
        })
        .catch((error) => {
          console.log(error);
        });
    else {
      const starCountRef = ref(db, "leadership");
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        let index = Object.keys(data).findIndex(user.id);
        let oldScore = Object.values(data)[index].score;
        if (score > oldScore) {
          set(ref(db, "leadership/" + user.id), {
            name: user.name,
            score,
          });
        }
        setLeadership(Object.values(data).sort(compare));
      });
    }
  }, []);

  const getLeadership = (db) => {
    const starCountRef = ref(db, "leadership");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setLeadership(Object.values(data).sort(compare));
    });
  };
  const playAgain = () => {
    onClose();
    reload();
  };

  return (
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES} className="b">
        <Header>
          Congratulations <span style={{ color: "#ba68c8" }}>{user.name}</span>,
          you have completed the game.
        </Header>
        <LeadershipSection>
          <LeadershipHeader>Leadership</LeadershipHeader>
          <Profile
            style={{
              fontSize: 20,
              fontWeight: 700,
              paddingTop: 0,
              border: "none",
            }}
          >
            Name
            <Score>Score</Score>
          </Profile>
          {leadership &&
            leadership.map(
              (p, i) =>
                i < 10 && (
                  <Profile
                    key={i}
                    style={
                      i + 1 === leadership.length
                        ? { borderBottom: "1px dashed #ba68c8" }
                        : {}
                    }
                    e={p.id === user.id}
                  >
                    <span
                      style={{
                        fontWeight: 700,
                        marginLeft: "-15px",
                        opacity: 1,
                      }}
                    >
                      {i + 1 + "."}
                    </span>

                    {" " + p.name}
                    <Score>{p.score}</Score>
                  </Profile>
                )
            )}

          <Profile
            style={{
              border: "none",
              opacity: 1,
              fontWeight: 700,
              marginLeft: "2px",
            }}
          >
            {user.name}
            <Score>{score}</Score>
          </Profile>
        </LeadershipSection>
        <Button onClick={playAgain}>Play Again</Button>
      </div>
    </>
  );
};

export default ResultModal;
