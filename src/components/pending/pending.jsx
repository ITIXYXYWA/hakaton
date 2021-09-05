import React, { useEffect } from "react";
import './pending.css';
import { Header } from "../header/header";
import { Container } from "../container/container";
import { getConverData, oneMoreFun } from "../../api/send";

export const Pending = ({
  history
}) => {

  useEffect(() => {
    oneMoreFun()

    const enr = setInterval(() => {
      if (localStorage.getItem('checks') !== null) {
        setTimeout(() => {
          const checkers = JSON.parse(localStorage.getItem('checks'))
          const primaryCheck = Object.keys(checkers).some((el) => {
            console.log(el);
            return el.check === false;
          });

          if (primaryCheck === false) {
            console.log(primaryCheck)
            window.location.href = '/accept'
          } else {
            window.location.href = '/error'
            console.log(primaryCheck)
          }
        }, 3000)
        clearInterval(enr);
      }
    }, 1000)
  }, [])

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