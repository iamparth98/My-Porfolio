import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    y: 10,
    opacity: 0,
    transition: {
      duration: 2,
      repeat: "infinity",
    },
  },
};
const sliderTextVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-320%",
    transition: {
      duration: 25,
      repeat: "infinity",
      repeatType: "Mirror",
    },
  },
};

function Hero() {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>PARTH TIWARI</motion.h2>
          <div className="Title">
            <motion.h1 variants={textVariants}>Frontend Developer,</motion.h1>
            <h3>
              with expertise in crafting engaging and user-friendly web
              experiences. I specialize in bringing ideas to life through clean
              and efficient code. Explore my portfolio to discover the exciting
              projects I&apos;ve worked on.
            </h3>
          </div>

          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
              See the latest works
            </motion.button>
            <motion.button variants={textVariants}>Contact me</motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
        <motion.div
          className="slidingTextContainer"
          variants={sliderTextVariants}
          initial="initial"
          animate="animate"
        >
          React Redux Javascript Node
        </motion.div>
        <div className="imageContainer">
          <img src="/Homepage.png" alt="" />
        </div>
      </div>
    </div>
  );
}
export default Hero;
