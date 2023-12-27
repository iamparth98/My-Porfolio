import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const portfolioList = [
  {
    id: 1,
    title: "Social Media App",
    img: "https://images.freeimages.com/images/large-previews/c31/colors-1383652.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam hic dolores sit. Expedita, quam! At maxime delectus molestiae aperiam sunt id, dolore ullam nam blanditiis odit odio! Unde, recusandae qui?",
  },
  {
    id: 2,
    title: "Social Media App",
    img: "https://images.freeimages.com/images/large-previews/c31/colors-1383652.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam hic dolores sit. Expedita, quam! At maxime delectus molestiae aperiam sunt id, dolore ullam nam blanditiis odit odio! Unde, recusandae qui?",
    techUsed: "React, Readux, FramerMotion, NodeJS",
  },
  {
    id: 3,
    title: "Social Media App",
    img: "https://images.freeimages.com/images/large-previews/c31/colors-1383652.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam hic dolores sit. Expedita, quam! At maxime delectus molestiae aperiam sunt id, dolore ullam nam blanditiis odit odio! Unde, recusandae qui?",
    techUsed: "React, Readux, FramerMotion, NodeJS",
  },
  {
    id: 4,
    title: "Social Media App",
    img: "https://images.freeimages.com/images/large-previews/c31/colors-1383652.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam hic dolores sit. Expedita, quam! At maxime delectus molestiae aperiam sunt id, dolore ullam nam blanditiis odit odio! Unde, recusandae qui?",
    techUsed: "React, Redux, FramerMotion, NodeJS",
  },
];

const SingleProject = ({ project }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [300, -300]);
  return (
    <section className="container">
      <div className="wrapper">
        <div className="imgContainer">
          <img src={project.img} alt="project-Image" ref={ref} />
        </div>
        <motion.div className="textContainer" style={{ y }}>
          <h2>{project.title}</h2>
          <p>{project.desc}</p>
          <button>See Demo</button>
        </motion.div>
      </div>
    </section>
  );
};

function Portfolio() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Work</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {portfolioList.map((project) => {
        return <SingleProject project={project} key={project.id} />;
      })}
    </div>
  );
}
export default Portfolio;
