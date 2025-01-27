"use client";

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TextBorderAnimation from "./../../components/animata/text/text-border-animation"; // ייבוא קומפוננטת TextBorderAnimation

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null;
  }

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <StyledPage>
      <div className="navbar">
        {/* אייקון ההמבורגר */}
        <div className="hamburger" onClick={toggleSidebar}>
          <svg viewBox="0 0 32 32" className={isOpen ? "open" : ""}>
            <path
              className="line line-top-bottom"
              d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
            />
            <path className="line" d="M7 16 27 16" />
          </svg>
        </div>

        {/* תפריט צדדי */}
        <div
          className={`sidebar  font-varela dotted-nav bg-grainy-blue ${
            isOpen ? "open" : ""
          }`}
        >
          <ul>
            <li>
              <a href="#home">
                <TextBorderAnimation text="בית" />
              </a>
            </li>
            <li>
              <a href="#services">
                <TextBorderAnimation text="השירותים שלי" />
              </a>
            </li>
            <li>
              <a href="#projects">
                <TextBorderAnimation text="עבודות אחרונות" />
              </a>
            </li>
            <li>
              <a href="#how-it-works">
                <TextBorderAnimation text="איך זה עובד" />
              </a>
            </li>
            <li>
              <a href="#about">
                <TextBorderAnimation text="קצת עליי" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </StyledPage>
  );
};

const StyledPage = styled.div`
  .navbar {
    position: relative;
  }

  /* סגנון ההמבורגר */
  .hamburger {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 200;
    cursor: pointer;
    width: 3em;
    height: 3em;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1461ed; /* כחול */
    border-radius: 50%;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  }

  .hamburger svg {
    height: 2em;
    stroke: white; /* צבע ההמבורגר - לבן */
    transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .hamburger svg.open {
    transform: rotate(-45deg);
  }

  .line {
    fill: none;
    stroke: white; /* צבע קווי ההמבורגר - לבן */
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 3;
    transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
      stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .line-top-bottom {
    stroke-dasharray: 12 63;
  }

  .hamburger svg.open .line-top-bottom {
    stroke-dasharray: 20 300;
    stroke-dashoffset: -32.42;
  }

  /* סגנון התפריט הצדדי */
  .sidebar {
    position: fixed;
    top: 0;
    right: -300px;
    width: 300px;
    height: 100%;
    background-color: #1461ed;
    color: white;
    transition: right 0.4s ease-in-out;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
    z-index: 100;
    overflow-y: auto;
    pointer-events: none; /* מונע אינטראקציה כשסגור */
    padding-top: 100px;
  }

  .sidebar.open {
    right: 0;
    pointer-events: auto; /* מאפשר אינטראקציה כשפתוח */
  }

  .sidebar ul {
    list-style: none;
    margin: 0;
    text-align: right;
    font-family: "Varela Round", sans-serif;
    margin-right: 20px;
  }

  .sidebar ul li {
    margin: 20px 0;
  }
`;

export default Navbar;
