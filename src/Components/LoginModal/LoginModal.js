import { nanoid } from "nanoid";
import React from "react";
import { useState } from "react";
import Styles from "./LoginModal.module.css";
import { Header, Text, Input, Button } from "./LoginModalStyled";

export default function LoginModal({ open, onClose, setUser }) {
  const [value, setValue] = useState("");
  if (open) return null;

  const saveUser = (e) => {
    if (e) e.preventDefault();
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
      <div className={Styles.overlay_styles} />
      <div className={Styles.modal_styles + " a"}>
        <Header>Welcome</Header>
        <Text>Please enter your name:</Text>
        <form onSubmit={saveUser}>
          <Input
            value={value}
            maxLength="15"
            onChange={(e) => setValue(e.target.value)}
            type="text"
            placeholder="Enter your name..."
          />
          <Button onClick={saveUser}>Enter</Button>
        </form>
      </div>
    </>
  );
}
