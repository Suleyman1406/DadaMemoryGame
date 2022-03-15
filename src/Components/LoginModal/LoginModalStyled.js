import styled from "styled-components";

export const Header = styled.h3`
  margin-left: 15px;
  font-size: 25px;
  margin-bottom: 30px;
`;
export const Text = styled.p`
  margin-left: 20px;
  padding: 2px;
  font-size: 18px;
`;
export const Input = styled.input`
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
export const Button = styled.button`
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
