import React from "react";
import { Link } from "react-router";
import styled from "styled-components";

export default function Logo() {
  return (
    <LogoText>
      <Link to="/">R.</Link>
    </LogoText>
  );
}

const LogoText = styled.h1`
  font-family: cursive;
  font-size: ${(props) => props.theme.fontxxxl};
  color: ${(props) => props.theme.text};
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
`;
