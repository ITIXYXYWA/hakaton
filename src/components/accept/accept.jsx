import React from "react";
import './accept.css';
import { Header } from "../header/header";
import { Container } from "../container/container";

export const Accept = () => {
  return (
    <>
      <Header noActive />
      <Container>
        <svg className='accept-img' width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0)">
            <path d="M52.4106 0H48.5474V64H52.4106C58.7848 64 64.0001 58.7847 64.0001 52.4105V11.5895C64.0001 5.21525 58.7848 0 52.4106 0Z" fill="#A5C244" />
            <path d="M60.1369 11.5895V52.4104C60.1369 58.7846 54.9216 63.9999 48.5474 63.9999H11.5895C5.21525 64 0 58.7847 0 52.4105V11.5895C0 5.21525 5.21525 0 11.5895 0H48.5472C54.9215 0 60.1369 5.21525 60.1369 11.5895Z" fill="#CFEB6B" />
            <path d="M22.8421 50.011C22.1581 50.0108 21.5027 49.739 21.0198 49.2555L8.47948 36.6986C7.47423 35.6922 7.47548 34.0615 8.48198 33.0563C9.48848 32.0511 11.1191 32.0523 12.1242 33.0588L22.8428 43.7918L51.8767 14.7441C52.8822 13.738 54.5128 13.7376 55.519 14.7432C56.5251 15.7489 56.5253 17.3795 55.5198 18.3855L24.6636 49.2562C24.1805 49.7395 23.5252 50.011 22.8421 50.011Z" fill="white" />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="64" height="64" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <h1 className='accept-title'>Все проверки прошли успешно!</h1>
        <a href="/?" className="go-back">
          <span className='go-back-arrow'>
            <svg width="43" height="16" viewBox="0 0 43 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.292892 7.29289C-0.0976295 7.68342 -0.0976295 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41422 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM43 7L1 7V9L43 9V7Z" fill="#C0C0C0" />
            </svg>
          </span>
          <span className='go-back-text'>вернуться назад</span>
        </a>
      </Container>
    </>
  )
}