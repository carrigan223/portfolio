import React from "react";
import styled from "@emotion/styled";
import Layout from "../components/layout";
import { css } from "@emotion/react";
import { Link } from "gatsby";
import { Navbar, Nav, Container, Row, Col, NavLink } from "react-bootstrap";

const TextContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

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
    20%,
    24%,
    55% {
      text-shadow: none;
      box-shadow: none;
    }
  }
`;

const StyledText = styled("p")`
  font-size: 1rem;
  color: white;
  font-family: "Press Start 2P";
`;

export default function Home() {
  return (
    <Layout>
      <Container>
        <Row>
            <Col>Hello world</Col>
        </Row>
      </Container>
    </Layout>
  );
}
