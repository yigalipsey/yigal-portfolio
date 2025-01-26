"use client";

import React from "react";
import styled from "styled-components";
import NextImage from "next/image";
import facebookImage from "../../public/images/fittnes.png";

const Testi = () => {
  const cardData = [
    {
      id: 1,
      title: "Project 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      title: "Project 2",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 3,
      title: "Project 3",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      id: 4,
      title: "Project 4",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 5,
      title: "Project 5",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
    },
    {
      id: 6,
      title: "Project 6",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.",
    },
    {
      id: 7,
      title: "Project 7",
      description:
        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.",
    },
    {
      id: 8,
      title: "Project 8",
      description:
        "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae.",
    },
  ];

  return (
    <StyledWrapper>
      <div className="cards-container">
        {cardData.map((card) => (
          <div key={card.id} className="card">
            <NextImage
              src={facebookImage}
              alt={card.title}
              className="card__image"
              layout="fill"
              objectFit="cover"
            />
            <div className="card__content">
              <p className="card__title">{card.title}</p>
              <p className="card__description">{card.description}</p>
              <button className="card__button">Live Demo</button>
              <button className="card__button secondary">Source Code</button>
            </div>
          </div>
        ))}
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .cards-container {
    display: flex;
    flex-direction: column; /* Set flex direction to column */
    gap: 20px;
    padding: 20px;
    overflow-y: auto; /* Enable vertical scrolling */
    -ms-overflow-style: none;
    scrollbar-width: none; /* Firefox */
  }

  .cards-container::-webkit-scrollbar {
    display: none;
  }

  .card {
    position: relative;
    width: 350px; /* Set width instead of min-width */
    aspect-ratio: 16/9;
    background-color: #f2f2f2;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    perspective: 1000px;
    box-shadow: 0 0 0 5px #ffffff80;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card svg {
    width: 48px;
    fill: #333;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card__image {
    width: 100%;
    height: 100%;
  }

  .card:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
  }

  .card__content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    background-color: #f2f2f2;
    transform: rotateX(-90deg);
    transform-origin: bottom;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card:hover .card__content {
    transform: rotateX(0deg);
  }

  .card__title {
    margin: 0;
    font-size: 20px;
    color: #333;
    font-weight: 700;
  }

  .card:hover svg {
    scale: 0;
  }

  .card__description {
    margin: 10px 0 10px;
    font-size: 12px;
    color: #777;
    line-height: 1.4;
  }

  .card__button {
    padding: 15px;
    border-radius: 8px;
    background: #777;
    border: none;
    color: white;
  }

  .secondary {
    background: transparent;
    color: #777;
    border: 1px solid #777;
  }
`;

export default Testi;
