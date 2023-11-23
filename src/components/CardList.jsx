import React from "react";
import styled from "styled-components";

const ListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default function CardList({ children }) {
  return <ListContainer>{children}</ListContainer>;
}
