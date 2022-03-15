import React, { useEffect } from "react";
import { getDatabase, ref, onValue, set } from "firebase/database";
import { useState } from "react";
import Styles from "./ResultModal.module.css";
import {
  Header,
  LeadershipHeader,
  LeadershipSection,
  Button,
  Profile,
  Score,
} from "./ResultModalStyled";
function compare(a, b) {
  if (a.score < b.score) {
    return 1;
  }
  if (a.score > b.score) {
    return -1;
  }
  return 0;
}

const ResultModal = ({ open, score, onClose, user, reload, isFirst }) => {
  var today = new Date();
  const getDate = () => {
    return (
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate() +
      "/" +
      today.getHours() +
      ":" +
      today.getMinutes()
    );
  };
  const [leadership, setLeadership] = useState([]);
  useEffect(() => {
    const db = getDatabase();
    if (isFirst)
      set(ref(db, "leadership/" + user.id), {
        name: user.name,
        score,
        id: user.id,
        date: getDate(),
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
            date: getDate(),
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
      <div className={Styles.overlay_styles} />
      <div className={Styles.modal_styles + " b"}>
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
