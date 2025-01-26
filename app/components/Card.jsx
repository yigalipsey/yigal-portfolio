"use client";
import React, { useState } from "react";
import styled from "styled-components";

const Card = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <StyledWrapper>
      <div className={`card ${isActive ? "active" : ""}`}>
        <div className="star star-1" />
        <div className="star star-2" />
        <div className="star star-3" />
        <div className="star star-4" />
        <div className="star star-5" />
        <div className="star star-6" />
        <div className="star star-7" />
        <div className="card-info">
          <span>To the moon!</span>
        </div>
        <svg className="moon" viewBox="0 0 20 20">
          <path d="M 10 9 z z M 7.007 6.552 c 0 -2.259 0.795 -4.33 2.117 -5.955 C 4.34 1.042 0.594 5.07 0.594 9.98 c 0 5.207 4.211 9.426 9.406 9.426 c 2.94 0 5.972 -1.354 7.696 -3.472 c -0.289 0.026 -0.987 0.044 -1.283 0.044 C 11.219 15.979 7.007 11.759 7.007 6.552 z" />
        </svg>
        <svg className="rocket" viewBox="48.0129 48.1783 416 415.6">
          <path d="M461.81,53.81a4.4,4.4,0,0,0-3.3-3.39c-54.38-13.3-180,34.09-248.13,102.17a294.9,294.9,0,0,0-33.09,39.08c-21-1.9-42-.3-59.88,7.5-50.49,22.2-65.18,80.18-69.28,105.07a9,9,0,0,0,9.8,10.4l81.07-8.9a180.29,180.29,0,0,0,1.1,18.3,18.15,18.15,0,0,0,5.3,11.09l31.39,31.39a18.15,18.15,0,0,0,11.1,5.3,179.91,179.91,0,0,0,18.19,1.1l-8.89,81a9,9,0,0,0,10.39,9.79c24.9-4,83-18.69,105.07-69.17,7.8-17.9,9.4-38.79,7.6-59.69a293.91,293.91,0,0,0,39.19-33.09C427.82,233.76,474.91,110.9,461.81,53.81ZM298.66,213.67a42.7,42.7,0,1,1,60.38,0A42.65,42.65,0,0,1,298.66,213.67Z" />
        </svg>
      </div>

      <button onClick={toggleActive} className="toggle-button">
        {isActive ? "Deactivate" : "Activate"} Card
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 290px;
    height: 350px;
    background: linear-gradient(
      135deg,
      rgba(48, 48, 48, 1) 48%,
      rgba(0, 0, 0, 1) 100%
    );
    background-size: 300%, 300%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border-radius: 15px;
    box-shadow: 5px 5px 15px 5px #000000;
    overflow: hidden;
    transition: all 1s ease;
  }

  .moon {
    width: 70px;
    height: 70px;
    top: 15%;
    right: 120px;
    position: absolute;
    fill: white;
    transform: rotate(-20deg);
    transition: all 1s ease;
  }

  .rocket {
    width: 70px;
    height: 70px;
    bottom: -2%;
    left: -2%;
    position: absolute;
    fill: white;
    transition: all 1.9s ease;
  }

  .star {
    position: absolute;
    background: radial-gradient(
      circle,
      rgba(251, 239, 63, 1) 0%,
      rgba(255, 253, 212, 1) 100%
    );
    clip-path: polygon(
      50% 0%,
      61% 35%,
      98% 35%,
      68% 57%,
      79% 91%,
      50% 70%,
      21% 91%,
      32% 57%,
      2% 35%,
      39% 35%
    );
  }

  .star-1 {
    width: 100px;
    height: 100px;
    bottom: 90px;
    left: -15px;
    transition: all 1s ease;
  }

  .star-2 {
    width: 150px;
    height: 150px;
    top: -10%;
    left: -10%;
    transition: all 0.5s ease;
  }

  .star-3 {
    width: 100px;
    height: 100px;
    bottom: 5%;
    right: -15px;
    transition: all 0.3s ease;
  }

  .star-4 {
    width: 20px;
    height: 20px;
    top: 4%;
    right: 5px;
    transition: all 1.4s ease;
  }

  .star-5 {
    width: 20px;
    height: 20px;
    bottom: 24%;
    right: 45%;
    animation: rotate 3s normal linear infinite;
  }

  .star-6 {
    width: 20px;
    height: 20px;
    top: 14%;
    right: 25%;
    animation: rotate 5s normal linear infinite;
  }

  .star-7 {
    width: 40px;
    height: 40px;
    top: 34%;
    right: 65%;
    animation: rotate 5s normal linear infinite;
  }

  .card-info span {
    font-size: 1.2em;
    color: white;
    font-weight: 600;
    text-transform: uppercase;
    transition: all 1s ease;
  }

  .card.active {
    background: rgb(48, 48, 48);
    background: linear-gradient(
      135deg,
      rgba(48, 48, 48, 1) 10%,
      rgba(0, 0, 0, 1) 90%
    );
    background-size: 100%, 100%;
  }

  .card.active .star-1,
  .card.active .star-3 {
    background: linear-gradient(
      90deg,
      rgba(255, 241, 0, 1) 0%,
      rgba(246, 249, 93, 1) 77%,
      rgba(238, 255, 0, 1) 100%
    );
    transform: scale(1.2) rotate(10deg);
  }

  .card.active .star-2,
  .card.active .star-4,
  .card.active .star-5 {
    background: linear-gradient(
      90deg,
      rgba(255, 241, 0, 1) 0%,
      rgba(246, 249, 93, 1) 77%,
      rgba(238, 255, 0, 1) 100%
    );
    transform: scale(1.2) rotate(-150deg);
  }

  .card.active .rocket {
    transform: scale(0.3) translate(450px, -730px) rotate(-260deg);
  }

  .card.active .card-info span {
    font-size: 1.5em;
  }

  .toggle-button {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 16px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .toggle-button:hover {
    background-color: #45a049;
  }
`;

export default Card;
