import React from "react";
import './panding.css';
import { Header } from "../header/header";
import { Container } from "../container/container";

export const Panding = () => {
  return (
    <>
      <Header />
      <Container>
        <span className="panding-text">Ожидайте проверки результатов!</span>
        <div className="back-ellipse">
          <div className="front-ellipse">
          </div>
        </div>
      </Container>
    </>
  )
}