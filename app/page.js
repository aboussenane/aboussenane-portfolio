"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import "./styles/Home.css";
import Footer from "./Components/Footer";
import { useEffect, useRef, useState } from "react";

import { motion, useInView } from "framer-motion";
import Splash from "./Components/Splash";
import ProgressBar from "./Components/ProgressBar";
//Typography
//3d element


//sound fx
//skills table with progress bars

function applyCSS() {
  const property = document.getElementById("cssProperty").value;
  const value = document.getElementById("cssValue").value;
  if (property && value) {
    document.querySelector(".target").style.setProperty(property, value);
  }
}
const slidingTitle = {
  hidden: { opacity: 0, x: -50 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2,
    },
  }),
};
const slidingHeader = {
  hidden: { opacity: 0, x: -50 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.04,
      type: "spring",
      stiffness: 100,
      ease: "linear",
    },
  }),
};
const AnimatedTitle = ({ title, variant, cName }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <h1 ref={ref} className={cName}>
      {title.split("").map((letter, index) => (
        <motion.span
          key={index}
          custom={index}
          variants={variant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {letter}
        </motion.span>
      ))}
    </h1>
  );
};
function Home() {
  
  const headerTitleRef = useRef(null);
  const headerTitleInView = useInView(headerTitleRef, { once: false });

  const mobileHeaderTitleRef = useRef(null);
  const mobileHeaderTitleInView = useInView(mobileHeaderTitleRef, { once: false });

  const titleCircleRef = useRef(null);
  const titleCircleRefInView = useInView(titleCircleRef, { once: false });
  
  const projectsTitleRef = useRef(null);
  const projectsTitleInView = useInView(projectsTitleRef, { once: false });

  const projectsRef = useRef(null);
  const projectsInView = useInView(projectsRef, { once: false });

  const featureTitleRef = useRef(null);
  const featureTitleInView = useInView(featureTitleRef, { once: false });

  const experienceRef = useRef(null);
  const experienceInView = useInView(experienceRef, { once: false });

  const testimonialRef = useRef(null);
  const testimonialInView = useInView(testimonialRef, { once: false });
  const skillsRef = useRef(null);
  const skillsInView = useInView(skillsRef, { once: false });

  const projects = [
    {
      title: "Booking-Calendar",
      description:
        "A booking calendar that allows users to book appointments and view their bookings.",
      techStack: ["React", "Javascript", "NextJS","PostgreSQL"],
      url: "https://booking-calendar-ten.vercel.app/",
      imageUrl: "/booking-calendar.PNG",
    },
    {
      title: "Caeterra",
      description:
        "A landing page for an Ottawa based property managment company. Designed and implemented a simple site which showcases the buisness's services and accomplishements from start to finish.",
      techStack: ["React", "Javascript", "ChakraUI"],
      url: "https://www.caeterra.ca/",
      imageUrl: "/caeterra.PNG",
    },
    {
      title: "Document Generator",
      description:
        "A nodeJS electron app which accesses data from a CRM app and use it to create folders and autofill documents. Saved hours in collective time by automating simple repetitive tasks.",
      techStack: ["Javascript", "Node.JS"],
      url: "https://github.com/aboussenane/PipedriveDocGenerator",
      imageUrl: "/docGen.PNG",
    },
    {
      title: "Time Logger",
      description:
        "A React app which logs the exact time a button is clicked along with a comment.",
      techStack: ["React", "Javascript", "CSS"],
      url: "https://master.d1rdr4srhzrrq8.amplifyapp.com/",
      imageUrl: "/time-logger.PNG",
    },
  ];
  const experience = [
    {
      title: "Kiuloper - Web Developer Intern",
      duration: "",
      description:
        "Implemented business critical features to an existing PHP application. Solved complex problems in an Agile development environment. Solved invoicing database issues when handling orders with multiple vendors, Created Sign Up and Login popups and pages for the application. Followed Figma design closely and exceeded expectations by completing work promptly. Generated html content dynamically.",
      techStack: ["PHP", "MYSQL", "Javascript", "HTML", "CSS", "JQuery"],
      imageUrl: "/inwitFeedback.PNG",
    },
    {
      title: "Cascadia Carbon - Frontend developer Intern",
      duration: "",
      description:
        "Worked as part of a team to implement re-design of React, Next-Js website. Optimized web pages to reduce load time by 40%. Refactored site to facilitate future content updates. Added content and components as needed.",
      techStack: ["React", "Javascript", "ChakraUI"],
      imageUrl: "/",
    },
    {
      title: "Ubineer - NLP/Regex developer Intern",
      duration: "",
      description:
        "Created regex patterns to efficiently capture past and future natural language data. Utilized clean code principles which resulted in robust patterns which were utilized in production and LLM training. Took on a leadership role in which I held weekly team meetings to help train new interns.",
      techStack: ["Python", "Regex"],
      imageUrl: "/ubineerFeedback.PNG",
    },
    {
      title: "MusicalMoon - React-Native Intern",
      duration: "",
      description:
        "Implemented a comprehensive navigation system for a dynamic mobile application, featuring intuitive top, bottom, and side navbars to enhance user experience and accessibility. Developed the application's 'skeleton', establishing a robust framework and a user-friendly music player, thereby laying the groundwork for scalable features and seamless user interaction.",
      techStack: ["React-Native", "Javascript"],
      imageUrl: "/",
    },
    {
      title: "BKL Consultants - Technician",
      duration: "June 2022 - present",
      description:
        "Created various scripts to perform routine file management, data analyses and reporting. Programming apps to facilitate the engineering team workflow through API. Helping to research and ease transition of large databases onto new platforms with the help of API automations. Creating comprehensive operating procedures for equipment and software to ensure smooth functioning of all processes. Accessed remote equipment via SSH and HTTP request. Managed and set up FTP/SFTP servers.",
      techStack: ["Python", "Node.JS", "Javascript", "Powershell"],
      imageUrl: "/",
    },
  ];
 


  return (
    <main className={styles.main}>
      
          <Navbar />
          <div id="home" className="Title-header">
            <div className="Header-circle"></div>
            <motion.div
              className="Header-title"
              ref={headerTitleRef}
              initial={{ x: -100, opacity: 0 }}
              animate={
                headerTitleInView
                  ? { x: 0, opacity: 1 }
                  : { x: -100, opacity: 0 }
              }
              transition={{ duration: 0.5 }}
            >
              <h2>ADEL BOUSSENANE | frontend developer</h2>
            </motion.div>
          </div>
          <section className="Title">
            <motion.div
              className="Title-container"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="Title-circle"
                ref={titleCircleRef}
                transition={{ duration: 0.5 }}
                initial={{ width: "0vw", height: "0vh", opacity: 0, y: 300 }}
                animate={
                  titleCircleRefInView
                    ? {
                        width: "min(30vw, 30vh)",
                        height: "min(30vw, 30vh)",
                        opacity: 1,
                        y: 0,
                      }
                    : { width: "0vw", height: "0vh", opacity: 0, y: 300 }
                }
              ></motion.div>
              <AnimatedTitle title="ADEL" variant={slidingTitle} />
            </motion.div>
            <motion.div
              className="Header-title-mobile"
              ref={mobileHeaderTitleRef}
              initial={{ x: -100, opacity: 0 }}
              animate={
                mobileHeaderTitleInView
                  ? { x: 0, opacity: 1 }
                  : { x: -100, opacity: 0 }
              }
              transition={{ duration: 0.5 }}
            >
              <h2>ADEL BOUSSENANE | frontend developer</h2>
            </motion.div>
          </section>
          <section className="avatar">
            <img
              src="/ab-avatar.JPG"
              alt="Adel Boussenane"
              className="avatar-image"
            />
          </section>
          <section id="projects" className="Projects">
            <AnimatedTitle
              cName="projects-title"
              title="SOME PROJECTS I'VE BUILT"
              variant={slidingHeader}
            />
            <div className="feature-project-container">
              <a
                href="https://github.com/aboussenane/armoury-frontend"
                target="_blank"
                rel="noreferrer"
                className="project-title"
              >
                <motion.img
                  src="./armoury.PNG"
                  className="feature-project"
                  ref={projectsTitleRef}
                  initial={{ x: -100, opacity: 0 }}
                  animate={
                    projectsTitleInView
                      ? { x: 0, opacity: 1 }
                      : { x: -100, opacity: 0 }
                  }
                  transition={{ duration: 0.5 }}
                ></motion.img>
              </a>
              <motion.div
                className="feature-info"
                ref={featureTitleRef}
                initial={{ x: -100, opacity: 0 }}
                animate={
                  featureTitleInView
                    ? { x: 0, opacity: 1 }
                    : { x: -100, opacity: 0 }
                }
                transition={{ duration: 0.5 }}
              >
                <h1>Armoury</h1>
                <p>
                A full stack, cross-platform application that allows users to create, view, and manage inventory, as well as reservations. It's still under construction<br />
                  Built with React-Native, Typescript, NodeJS and PostgreSQL.
                </p>
              </motion.div>
            </div>
            <motion.div
              className="projects-container"
              ref={projectsRef}
              initial={{ x: -100, opacity: 0 }}
              animate={
                projectsInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }
              }
              transition={{ duration: 0.5 }}
            >
              {projects.map((project, index) => (
                <div className="project-cell" key={index}>
                  <Projects {...project} />
                  <div className="projects-info">
                    <motion.h1
                      initial={{ x: -100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {project.title}
                    </motion.h1>
                    <p>{project.description}</p>
                    <p>Tech Stack: {project.techStack.join(", ")}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </section>
          <section id="experience" className="Experience">
            <AnimatedTitle
              cName="experience-title"
              title="MY WORK EXPERIENCE"
              variant={slidingHeader}
            />
            <motion.div
              className="experience-container"
              ref={experienceRef}
              initial={{ y: 200, opacity: 0 }}
              animate={
                experienceInView ? { y: 0, opacity: 1 } : { y: 200, opacity: 0 }
              }
              transition={{ duration: 0.5 }}
            >
              {experience.map((item, index) => (
                <div className="experience-info" key={index}>
                  <div className="experience-text">
                    <motion.h1
                      initial={{ x: -100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {item.title}
                    </motion.h1>
                    <p>{item.duration}</p>
                    <div className="divider-horizontal"></div>
                    <p>{item.description}</p>
                    <br />
                    <p>Tech Stack: {item.techStack.join(", ")}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <AnimatedTitle
              cName="testimonials-title"
              title="PROJECT FEEDBACK"
              variant={slidingHeader}
            />
            <motion.div
              className="testimonials-container"
              ref={testimonialRef}
              initial={{ x: -100, opacity: 0 }}
              animate={
                testimonialInView
                  ? { x: 0, opacity: 1 }
                  : { x: -100, opacity: 0 }
              }
              transition={{ duration: 0.5 }}
            >
              <div className="testimonial-text">
                <h3 className="testimonial-quote">
                  "Great work with high quality designs that match perfectly
                  with the UX files."
                </h3>
                <p className="testimonial-author">
                  Mohammad Tahvili - Kiuloper
                </p>
              </div>
              <div className="testimonial-text">
                <h3 className="testimonial-quote">
                  "Did great work expecially picking up the stack."
                </h3>
                <p className="testimonial-author">Andi Kerenxhi - Ubineer</p>
              </div>
            </motion.div>
          </section>
          <section id="skills" className="Skills">
          <AnimatedTitle
              cName="testimonials-title"
              title="SKILLS"
              variant={slidingHeader}
            />
            <motion.div
              className="skills-container"
              ref={skillsRef}
              initial={{ x: -100, opacity: 0 }}
              animate={
                skillsInView
                  ? { x: 0, opacity: 1 }
                  : { x: -100, opacity: 0 }
              }
              transition={{ duration: 0.5 }}
            >
            <label htmlFor="html">HTML</label>
              <ProgressBar percentage={95} title="HTML" />

              <label htmlFor="css">CSS</label>
              <ProgressBar percentage={95} title="CSS" />

              <label htmlFor="react">React</label>
              <ProgressBar percentage={90} title="React" />

              <label htmlFor="javascript">Javascript</label>
              <ProgressBar percentage={85} title="Javascript" />

              <label htmlFor="python">Python</label>
              <ProgressBar percentage={80} title="Python" />

              <label htmlFor="sql">SQL</label>
              <ProgressBar percentage={60} title="SQL" />

              <label htmlFor="cpp">C++</label>
              <ProgressBar percentage={30} title="C++" />

              <label htmlFor="tailwindcss">TailwindCss</label>
              <ProgressBar percentage={70} title="TailwindCss" />

              <label htmlFor="typescript">Typescript</label>
              <ProgressBar percentage={80} title="Typescript" />

              <label htmlFor="Juggling">Juggling</label>
              <ProgressBar percentage={10} title="Juggling" />
              </motion.div>
          </section>
          <section id="contact" className="Contact">
            <h1 className="contact-title">GET IN TOUCH</h1>
            <div className="contact-grid">
              <a
                href="mailto:aboussenane@gmail.com?subject=Interest%20in%20Your%20Portfolio&body=Hi%20Adel%2C%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20am%20interested%20in%20discussing%20potential%20collaboration%20opportunities.%20Please%20let%20me%20know%20a%20convenient%20time%20to%20talk.%0D%0A%0D%0AThank%20you%2C%0D%0A%5BYour%20Name%5D"
                className="social"
                target="_blank"
                rel="noopener noreferrer"
               
              >
                <div className="contact-container">EMAIL</div>
              </a>
              <a
                href="https://www.linkedin.com/in/adel-boussenane-28545317a/"
                className="social"
              >
                <div className="contact-container">LINKEDIN</div>
              </a>
              <a href="https://github.com/aboussenane" className="social">
                <div className="contact-container">GITHUB</div>
              </a>
            </div>
          </section>

          <Footer />
        
    </main>
  );
}
export default Splash(Home); 