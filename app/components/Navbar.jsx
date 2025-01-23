"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  console.log("isOpen", isOpen);

  return (
    <div style={container}>
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
        style={nav}
      >
        <motion.div
          style={background}
          variants={sidebarVariants}
          className="bg-grainy-blue "
        />
        <motion.div
          style={dottedBackground}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={dottedBackgroundVariants}
        />
        <Navigation />
        <MenuToggle toggle={() => setIsOpen(!isOpen)} />
      </motion.nav>
    </div>
  );
};

const navVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const Navigation = () => (
  <motion.ul style={list} variants={navVariants}>
    <MenuItem text="דף הבית" href="/" />
    <MenuItem text="פרוייקטים" href="/projects" />
    <MenuItem text="שירותים" href="/services" />
  </motion.ul>
);

const itemVariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      x: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    x: 50,
    opacity: 0,
    transition: {
      x: { stiffness: 1000 },
    },
  },
};

const MenuItem = ({ text, href }) => {
  return (
    <motion.li
      style={listItem}
      variants={itemVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <a href={href} style={menuLink} className="font-varela">
        {text}
      </a>
    </motion.li>
  );
};

const sidebarVariants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at calc(100% - 40px) 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at calc(100% - 40px) 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const dottedBackgroundVariants = {
  open: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  closed: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="#fff"
    strokeLinecap="round"
    {...props}
  />
);

const MenuToggle = ({ toggle }) => (
  <button style={toggleContainer} onClick={toggle} className="bg-grainy-blue">
    <div style={iconWrapper}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </div>
  </button>
);

const useDimensions = (ref) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    if (ref.current) {
      dimensions.current.width = ref.current.offsetWidth;
      dimensions.current.height = ref.current.offsetHeight;
    }
  }, [ref]);

  return dimensions.current;
};

const container = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 1000,
  pointerEvents: "none",
};

const nav = {
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  width: "300px",
  pointerEvents: "auto",
};

const background = {
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  width: "300px",
};

const dottedBackground = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
  backgroundSize: "15px 15px",
  backgroundPosition: "center bottom",
  maskImage:
    "linear-gradient(to top, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 0.5) 30%, rgba(0, 0, 0, 0) 60%)",
  maskSize: "100% 100%",
  maskRepeat: "no-repeat",
  zIndex: 1,
  pointerEvents: "none",
};

const toggleContainer = {
  position: "fixed",
  outline: "none",
  border: "none",
  cursor: "pointer",
  top: 18,
  right: 15,
  width: 50,
  height: 50,
  borderRadius: "50%",
  zIndex: 1001,
};

const iconWrapper = {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const list = {
  padding: "25px",
  position: "absolute",
  top: "80px",
  width: "230px",
  right: "20px",
  zIndex: 2,
};

const listItem = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: 0,
  margin: "0 0 15px 0",
  cursor: "pointer",
  width: "100%",
};

const menuLink = {
  color: "#fff",
  textDecoration: "none",
  fontSize: "1.5rem",
  width: "100%",
  padding: "10px 0",
  textAlign: "right",
};

export default NavBar;
