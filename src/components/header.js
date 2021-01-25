import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Link } from "gatsby";
import { Navbar, Nav, Container, Row, Col, NavLink } from "react-bootstrap";

const StyledHeader = styled("div")`
  /* Base font size */
  font-size: 10px;

  /* Set neon color */
  /* --neon-text-color: #f40;
  --neon-border-color: #08f; */

  --neon-text-color: teal;
  --neon-border-color: teal;

  background: #000;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledH1 = styled("h1")`
  font-size: 3rem;
  font-weight: 200;
  font-style: italic;
  font-family: "Press Start 2P", sans-serif;

  color: #fff;
  border: 0.4rem solid #fff;
  border-radius: 2rem;
  text-transform: uppercase;
  animation: flicker 1.5s infinite alternate;
  padding: 2rem 3rem 2rem 2rem;

  :-moz-selection {
    background-color: var(--neon-border-color);
    color: var(--neon-text-color);
  }

  ::selection {
    background-color: var(--neon-border-color);
    color: var(--neon-text-color);
  }

  :focus {
    outline: none;
  }

  /* Animate neon flicker */
  @keyframes flicker {
    0%,
    9%,
    11%,
    19%,
    21%,
    23%,
    25%,
    54%,
    56%,
    100% {
      text-shadow: -0.2rem -0.2rem 1rem #fff, 0.2rem 0.2rem 1rem #fff,
        0 0 2rem var(--neon-text-color), 0 0 4rem var(--neon-text-color),
        0 0 6rem var(--neon-text-color), 0 0 8rem var(--neon-text-color),
        0 0 10rem var(--neon-text-color);

      box-shadow: 0 0 0.5rem #fff, inset 0 0 0.5rem #fff,
        0 0 2rem var(--neon-border-color),
        inset 0 0 2rem var(--neon-border-color),
        0 0 4rem var(--neon-border-color),
        inset 0 0 4rem var(--neon-border-color);
    }
    /* 20%,
    24%,
    55% {
      text-shadow: none;
      box-shadow: none;
    } */
  }
`;

const StyledText = styled("p")`
  font-size: 1rem;
  color: white;
  font-family: "Press Start 2P";
`;

export default function Header() {
  return (
    <>
      <StyledHeader>
        <StyledH1>Andrew Carrigan</StyledH1>
        <StyledText>Jumping Down The JS RabbitHole</StyledText>
        <Nav sticky="top" bg="dark" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <NavLink to="/" activeClassName="current-page">
                Home
              </NavLink>
              <NavLink to="/about" activeClassName="current-page">
                About
              </NavLink>
              <NavLink to="/contact" activeClassName="current-page">
                Contact
              </NavLink>
              <NavLink to="/tutorials" activeClassName="current-page">
                Tutorials
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Nav>
      </StyledHeader>
    </>
  );
}
