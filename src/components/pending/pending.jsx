import React from "react";
import './pending.css';
import { Header } from "../header/header";
import { Container } from "../container/container";

export const Pending = ({
  history
}) => {
  return (
    <>
      <Header disabled />
      <Container>
        <span className="pending-text">Ожидайте проверки результатов!</span>
        <div className="back-ellipse">
          <div className="front-ellipse">
          </div>
        </div>
      </Container>
    </>
  )
}