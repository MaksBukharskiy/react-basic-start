import logo from "/public/logo-name.svg";
import { useState } from "react";
// import "./Header.css";
import { styled } from "styled-components";

const HeaderContainer = styled.header`
  height: 50px;
  display: flex;
  padding: 0 2rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  background: #fafafa;
`;

export default function Header() {
  const [now, setNow] = useState(new Date());

  setInterval(() => setNow(new Date()), 1000);

  return (
    <HeaderContainer>
      <img src={logo} alt={name} />
      {/* <h3>Result University</h3> */}

      <span>Время сейчас: {now.toLocaleTimeString()}</span>
    </HeaderContainer>
  );
}
