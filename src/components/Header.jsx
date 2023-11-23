import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  border-bottom: 1px solid #1d1d1d;
`;

const Logo = styled.h4`
  width: fit-content;
  cursor: pointer;
`;

const Title = styled.h4`
  width: fit-content;
`;

export default function Header() {
  const navi = useNavigate();
  return (
    <HeaderContainer>
      <Logo onClick={() => navi("/")}>TodoList_Redux</Logo>
      <Title>Standard_TimeAttack</Title>
    </HeaderContainer>
  );
}
