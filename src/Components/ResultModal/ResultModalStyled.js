import styled from "styled-components";

export const Header = styled.h3`
  font-size: 25px;
  margin-bottom: 0;
  margin-top: 0;
  @media only screen and (max-width: 700px) {
    font-size: 18px;
  }
`;

export const LeadershipSection = styled.div`
  padding: 10px 20px;
`;

export const LeadershipHeader = styled.h4`
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

export const Profile = styled.div`
  padding: 10px;
  border-bottom: 1px solid rgba(220, 220, 220, 0.5);
  opacity: ${(props) => (props.e ? "1" : "0.8")};
  font-weight: ${(props) => (props.e ? "700" : "")};
`;

export const Score = styled.span`
  float: right;
`;
export const Button = styled.button`
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
