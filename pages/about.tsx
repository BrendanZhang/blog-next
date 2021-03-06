import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Swiper from "../components/swiper/swiper";
import {
  scaleAndFade,
  scrollDown,
  scrollUp
} from "../components/common/animation";
// import scrollEvent from "../components/common/scrollEvent"

const About = () => {
  const [count, setCount] = useState(0);
  const router = useRouter();
  // useEffect(() => scrollEvent(), [])
  const { slog } = router.query;
  const swiperSize = {
    height: 50,
    width: 100
  };
  return (
    <div>
      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        variants={scrollDown}
      >
        <Swiper size={swiperSize} />
        <div className="main">
          这个页面是 about 但是我不知道怎么样让他们两个合起来
        </div>
      </motion.div>
      <style jsx>{`
        .main {
          height: 100vh;
          width: 1400px;
          background: #666;
          margin: auto;
        }
      `}</style>
    </div>
  );
};

export default About;
