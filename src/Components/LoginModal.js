import { nanoid } from "nanoid";
import React from "react";
import { useState } from "react";
import styled from "styled-components";

const MODAL_STYLES = {
  position: "fixed",
  top: "45%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFF",
  padding: "50px 25px",
  zIndex: 1000,
  borderRadius: 2,
  transition: "0.5s all",
  width: "30%",
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
  margin-left: 15px;
  font-size: 25px;
  margin-bottom: 30px;
`;
const Text = styled.p`
  margin-left: 20px;
  padding: 2px;
  font-size: 18px;
`;
const Input = styled.input`
  border: 1px solid rgba(220, 220, 220);
  transition: 0.2s border;
  border-radius: 2px;
  width: 80%;
  margin-left: 20px;
  font-size: 16px;
  display: block;
  margin-bottom: 20px;
  padding: 8px;
  &:hover {
    border: 1px solid rgba(220, 220, 220, 0.6);
  }
  &:focus {
    outline: 2px solid #ba68c8;
  }
`;
const Button = styled.button`
  text-align: center;
  float: left;
  margin-top: 20px;
  margin-left: 20px;
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
`;

export default function LoginModal({ open, onClose, setUser }) {
  const [value, setValue] = useState("");
  if (open) return null;

  const saveUser = () => {
    if (value) {
      setUser({ name: value, id: nanoid() });
      setValue("");
      onClose();
    } else {
      alert("Name cannot be empty.");
    }
  };

  return (
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES} className="a">
        <Header>Welcome</Header>
        <Text>Please enter your name:</Text>
        <Input
          value={value}
          maxLength="15"
          onChange={(e) => setValue(e.target.value)}
          type="text"
          placeholder="Enter your name..."
        />
        <Button onClick={saveUser}>Enter</Button>
      </div>
    </>
  );
}
