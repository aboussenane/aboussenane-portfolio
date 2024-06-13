

import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import "./styles/Home.css";
export default function Home() {
  //https://www.zero.nyc/
  const projects = [
    {
      title: "Caeterra",
      description: "A landing page for an Ottawa based property managment company. Designed and implemented a simple site which showcases the buisness's services and accomplishements from start to finish.",
      techStack: ["React", "Javascript", "ChakraUI"],
      url: "https://www.caeterra.ca/",
      imageUrl: "/caeterra.PNG",
    },
    {
      title: "Document Generator",
      description: "A nodeJS electron app which accesses data from a CRM app and use it to create folders and autofill documents. Saved hours in collective time by automating simple repetitive tasks.",
      techStack: ["Javascript", "Node.JS"],
      url: "https://github.com/aboussenane/PipedriveDocGenerator",
      imageUrl: "/docGen.PNG",
    },
    {
      title: "Time Logger",
      description: "A React app which logs the exact time a button is clicked along with a comment.",
      techStack: ["React", "Javascript","CSS"],
      url: "https://master.d1rdr4srhzrrq8.amplifyapp.com/",
      imageUrl: "/time-logger.PNG",
    },

  ];
  const experience = [
    {
      title: "Kiuloper - Web Developer Intern",
      duration: "80 hours",
      description: "Implemented business critical features to an existing PHP application. Solved complex problems in an Agile development environment. Solved invoicing database issues when handling orders with multiple vendors, Created Sign Up and Login popups and pages for the application. Followed Figma design closely and exceeded expectations by completing work promptly. Generated html content dynamically.",
      techStack: ["PHP", "MYSQL", "Javascript", "HTML", "CSS", "JQuery"],
      imageUrl: "/inwitFeedback.PNG",
    },
    {
      title: "Cascadia Carbon - Frontend developer Intern",
      duration: "80 hours",
      description: "Worked as part of a team to implement re-design of React, Next-Js website. Optimized web pages to reduce load time by 40%. Refactored site to facilitate future content updates. Added content and components as needed.",
      techStack: ["React", "Javascript", "ChakraUI"],
      imageUrl: "/",
    },
    {
      title: "Ubineer - NLP/Regex developer Intern - 160 hours",
      duration: "160 hours",
      description: "Created regex patterns to efficiently capture past and future natural language data. Utilized clean code principles which resulted in robust patterns which were utilized in production and LLM training. Took on a leadership role in which I held weekly team meetings to help train new interns.",
      techStack: ["Python", "Regex"],
      imageUrl: "/ubineerFeedback.PNG",
    },
    {
      title: "MusicalMoon - React-Native Intern",
      duration: "80 hours",
      description: "Designed and implemented a comprehensive navigation system for a dynamic mobile application, featuring intuitive top, bottom, and side navbars to enhance user experience and accessibility. Developed the application's 'skeleton', establishing a robust framework and a user-friendly music player, thereby laying the groundwork for scalable features and seamless user interaction.",
      techStack: ["React-Native", "Javascript"],
      imageUrl: "/",
    },
    {
      title: "BKL Consultants - Technician",
      duration: "June 2022 - present",
      description: "Created various scripts to perform routine file management, data analyses and reporting. Programming apps to facilitate the engineering team workflow through API. Helping to research and ease transition of large databases onto new platforms with the help of API automations. Creating comprehensive operating procedures for equipment and software to ensure smooth functioning of all processes. Accessed remote equipment via SSH and HTTP request. Managed and set up FTP/SFTP servers.",
      techStack: ["Python", "Node.JS", "Javascript","Powershell"],
      imageUrl: "/",
    },
  ];
  return (
    <main className={styles.main}>
    <Navbar />
      <div className="Title-header">  
        <div className="Header-circle">
        </div>
        <div className="Header-title">
          <h2>ADEL BOUSSENANE | frontend developer.</h2>
        </div>  
      </div>
     <section className="Title"> 
      <div className="Title-container">
      <div className="Title-circle">
        </div>
      <h1>ADEL</h1>
      </div>
      <div className="Header-title-mobile">
          <h2>ADEL BOUSSENANE | frontend developer.</h2>
        </div>  
    </section>
    <section className="Video">
      <video autoPlay muted loop>
        <source src="/rain-video.mp4" type="video/mp4" />
      </video>
    </section>
    <section className="Projects">
    <h1 className="projects-title">SOME PROJECTS I'VE BUILT.</h1>
    <a href="https://booking-calendar-ten.vercel.app/" target="_blank" rel="noreferrer" className="project-title">
      <img src="./booking-calendar.PNG" className="feature-project">
      </img>
      </a>
    <div className="feature-info">
      <h1>Booking Calendar</h1>
      <p>A booking calendar that allows users to book appointments and view their bookings. Built with React, Javascript, and PostgreSQL.</p>
      <p><a href="https://booking-calendar-ten.vercel.app/" target="_blank" rel="noreferrer">View the project here</a>.</p>
    </div>
    
    <div className="projects-container">
      <div className="projects-cell">
        {projects.map((project) => (
          <>
          <Projects key={project.title} {...project} />
          
          <div className="projects-info">
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <p>Tech Stack: {project.techStack.join(", ")}</p>
          </div>
          </>
        ))}
        </div>
      </div>
    
    </section>
    <section className="Experience">
    <h1 className="experience-title">MY WORK EXPERIENCE.</h1>
    <div className="experience-container">
      {experience.map((item) => (
        <>
        
        
        <div className="experience-info">
          <div className="experience-text">
            <h1>{item.title}</h1>
            <p>{item.duration}</p>
            <p>{item.description}</p>
            <p>Tech Stack: {item.techStack.join(", ")}</p>
          </div>
        </div>
        </>
      ))}
      </div>
      <h1 className="testimonials-title">TESTIMONIALS</h1>
      <div className="testimonials-carousel">
        
        <img className="testimonials-image" src="/inwitFeedback.PNG" alt="Kiuloper Feedback" />
        <img className="testimonials-image" src="/ubineerFeedback.PNG" alt="Kiuloper Feedback" />
        <div className="testimonials-spacer"></div>
      </div>
    </section>

    <section className="Contact">
      <h1 className="contact-title">GET IN TOUCH.</h1>
        <a href="mailto:aboussenane@gmail.com?subject=Interest%20in%20Your%20Portfolio&body=Hi%20Adel%2C%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20am%20interested%20in%20discussing%20potential%20collaboration%20opportunities.%20Please%20let%20me%20know%20a%20convenient%20time%20to%20talk.%0D%0A%0D%0AThank%20you%2C%0D%0A%5BYour%20Name%5D" className="social">
          <div className="contact-container">
            ABOUSSENANE@GMAIL.COM
          </div>
        </a>
        <a href="https://www.linkedin.com/in/adel-boussenane-28545317a/" className="social">
          <div className="contact-container">
          LINKEDIN
          </div>
        </a>
        <a href="https://github.com/aboussenane" className="social">
          <div className="contact-container">
          GITHUB
          </div>
        </a>
    </section>
      

    </main>
  );
}
