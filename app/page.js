
'use client';
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import "./styles/Home.css";
import Footer from "./Components/Footer";
import { useEffect, useRef } from 'react';

export default function Home() {
  const projectTitleRef = useRef(null);

  useEffect(() => {
    // Only execute this code in a client-side environment
    if (typeof window !== "undefined" && window.IntersectionObserver) {
      const observer = new IntersectionObserver(
        
        (entries) => {
          entries.forEach(entry => {
            
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { root: null,  // Defaults to the browser viewport if not specified
        rootMargin: '0px',
        threshold: 1  }
      );

      if (projectTitleRef.current) {
        observer.observe(projectTitleRef.current);
      }

      return () => {
        if (observer) observer.disconnect();
      };
    }
  }, []);
  const headTitleRef = useRef(null);

  useEffect(() => {
    // Only execute this code in a client-side environment
    if (typeof window !== "undefined" && window.IntersectionObserver) {
      const observer = new IntersectionObserver(
        
        (entries) => {
          entries.forEach(entry => {
            
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { root: null,  // Defaults to the browser viewport if not specified
        rootMargin: '0px',
        threshold: 1  }
      );

      if (headTitleRef.current) {
        observer.observe(headTitleRef.current);
      }

      return () => {
        if (observer) observer.disconnect();
      };
    }
  }, []);
  const titleRef = useRef(null);

  useEffect(() => {
    // Only execute this code in a client-side environment
    if (typeof window !== "undefined" && window.IntersectionObserver) {
      const observer = new IntersectionObserver(
        
        (entries) => {
          entries.forEach(entry => {
            
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { root: null,  // Defaults to the browser viewport if not specified
        rootMargin: '0px',
        threshold: 1  }
      );

      if (titleRef.current) {
        observer.observe(titleRef.current);
      }

      return () => {
        if (observer) observer.disconnect();
      };
    }
  }, []);
  const mobileTitleRef = useRef(null);

  useEffect(() => {
    // Only execute this code in a client-side environment
    if (typeof window !== "undefined" && window.IntersectionObserver) {
      const observer = new IntersectionObserver(
        
        (entries) => {
          entries.forEach(entry => {
            
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { root: null,  // Defaults to the browser viewport if not specified
        rootMargin: '0px',
        threshold: 1  }
      );

      if (mobileTitleRef.current) {
        observer.observe(mobileTitleRef.current);
      }

      return () => {
        if (observer) observer.disconnect();
      };
    }
  }, []);
  const featureRef = useRef(null);

  useEffect(() => {
    // Only execute this code in a client-side environment
    if (typeof window !== "undefined" && window.IntersectionObserver) {
      const observer = new IntersectionObserver(
        
        (entries) => {
          entries.forEach(entry => {
            
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { root: null,  // Defaults to the browser viewport if not specified
        rootMargin: '0px',
        threshold: 0.2  }
      );

      if (featureRef.current) {
        observer.observe(featureRef.current);
      }

      return () => {
        if (observer) observer.disconnect();
      };
    }
  }, []);
  const featureTitleRef = useRef(null);

  useEffect(() => {
    // Only execute this code in a client-side environment
    if (typeof window !== "undefined" && window.IntersectionObserver) {
      const observer = new IntersectionObserver(
        
        (entries) => {
          entries.forEach(entry => {
            
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { root: null,  // Defaults to the browser viewport if not specified
        rootMargin: '0px',
        threshold: 1  }
      );

      if (featureTitleRef.current) {
        observer.observe(featureTitleRef.current);
      }

      return () => {
        if (observer) observer.disconnect();
      };
    }
  }, []);
  const projectsRef = useRef(null);

  useEffect(() => {
    // Only execute this code in a client-side environment
    if (typeof window !== "undefined" && window.IntersectionObserver) {
      const observer = new IntersectionObserver(
        
        (entries) => {
          entries.forEach(entry => {
            
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { root: null,  // Defaults to the browser viewport if not specified
        rootMargin: '0px',
        threshold: 0.1  }
      );

      if (projectsRef.current) {
        observer.observe(projectsRef.current);
      }

      return () => {
        if (observer) observer.disconnect();
      };
    }
  }, []);

  const experienceRef = useRef(null);

  useEffect(() => {
    // Only execute this code in a client-side environment
    if (typeof window !== "undefined" && window.IntersectionObserver) {
      const observer = new IntersectionObserver(
        
        (entries) => {
          entries.forEach(entry => {
            
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { root: null,  // Defaults to the browser viewport if not specified
        rootMargin: '0px',
        threshold: 0.2 }
      );

      if (experienceRef.current) {
        observer.observe(experienceRef.current);
      }

      return () => {
        if (observer) observer.disconnect();
      };
    }
  }, []);
  const experienceTitleRef = useRef(null);

  useEffect(() => {
    // Only execute this code in a client-side environment
    if (typeof window !== "undefined" && window.IntersectionObserver) {
      const observer = new IntersectionObserver(
        
        (entries) => {
          entries.forEach(entry => {
            
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { root: null,  // Defaults to the browser viewport if not specified
        rootMargin: '0px',
        threshold: 0.2 }
      );

      if (experienceTitleRef.current) {
        observer.observe(experienceTitleRef.current);
      }

      return () => {
        if (observer) observer.disconnect();
      };
    }
  }, []);

  const testimonialsRef = useRef(null);

  useEffect(() => {
    // Only execute this code in a client-side environment
    if (typeof window !== "undefined" && window.IntersectionObserver) {
      const observer = new IntersectionObserver(
        
        (entries) => {
          entries.forEach(entry => {
            
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { root: null,  // Defaults to the browser viewport if not specified
        rootMargin: '0px',
        threshold: 0.2 }
      );

      if (testimonialsRef.current) {
        observer.observe(testimonialsRef.current);
      }

      return () => {
        if (observer) observer.disconnect();
      };
    }
  }, []);

  const testimonialsTitleRef = useRef(null);

  useEffect(() => {
    // Only execute this code in a client-side environment
    if (typeof window !== "undefined" && window.IntersectionObserver) {
      const observer = new IntersectionObserver(
        
        (entries) => {
          entries.forEach(entry => {
            
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { root: null,  // Defaults to the browser viewport if not specified
        rootMargin: '0px',
        threshold: 0.2 }
      );

      if (testimonialsTitleRef.current) {
        observer.observe(testimonialsTitleRef.current);
      }

      return () => {
        if (observer) observer.disconnect();
      };
    }
  }, []);
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
      title: "Ubineer - NLP/Regex developer Intern",
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
      <div id="home" className="Title-header">  
        <div className="Header-circle">
        </div>
        <div ref={headTitleRef}  className="Header-title" >
          <h2>ADEL BOUSSENANE | frontend developer.</h2>
        </div>  
      </div>
     <section  className="Title"> 
      <div ref={titleRef} className="Title-container">
      <div className="Title-circle">
        </div>
      <h1>ADEL</h1>
      </div>
      <div ref={mobileTitleRef} className="Header-title-mobile">
          <h2>ADEL BOUSSENANE | frontend developer.</h2>
        </div>  
    </section>
    <section className="Video">
      <video autoPlay muted loop>
        <source src="/rain-video.mp4" type="video/mp4" />
      </video>
    </section>
    <section id="projects" className="Projects">
    <h1 ref={projectTitleRef} className="projects-title">SOME PROJECTS I'VE BUILT.</h1>
    <a href="https://booking-calendar-ten.vercel.app/" target="_blank" rel="noreferrer" className="project-title">
      <img src="./booking-calendar.PNG" ref={featureRef} className="feature-project">
      </img>
      </a>
    <div ref={featureTitleRef} className="feature-info">
      <h1>Booking Calendar</h1>
      <p>A booking calendar that allows users to book appointments and view their bookings. <br/>Built with React, Javascript, and PostgreSQL.</p>
      <p><a href="https://booking-calendar-ten.vercel.app/" target="_blank" rel="noreferrer">View the project here</a>.</p>
    </div>
    
    <div ref={projectsRef} className="projects-container">
      <div className="project-cell" >
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
    <section id="experience" className="Experience">
    <h1 ref={experienceTitleRef} className="experience-title">MY WORK EXPERIENCE.</h1>
    <div className="experience-container" ref={experienceRef} >
      {experience.map((item) => (
        <>
        
        
        <div className="experience-info">
          <div className="experience-text">
            <h1>{item.title}</h1>
            <p>{item.duration}</p>
            <div className="divider-horizontal"></div>
            <p>{item.description}</p>
            <br/>
            <p>Tech Stack: {item.techStack.join(", ")}</p>
          </div>
        </div>
        </>
      ))}
      </div>
      <h1 ref={testimonialsTitleRef} className="testimonials-title">TESTIMONIALS</h1>
      <div ref={testimonialsRef} className="testimonials-carousel">
        
        <img className="testimonials-image" src="/inwitFeedback.PNG" alt="Kiuloper Feedback" />
        <img className="testimonials-image" src="/ubineerFeedback.PNG" alt="Kiuloper Feedback" />
        <div className="testimonials-spacer"></div>
      </div>
    </section>

    <section id="contact" className="Contact">
      <h1 className="contact-title">GET IN TOUCH.</h1>
      <div className="contact-grid">
        <a href="mailto:aboussenane@gmail.com?subject=Interest%20in%20Your%20Portfolio&body=Hi%20Adel%2C%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20am%20interested%20in%20discussing%20potential%20collaboration%20opportunities.%20Please%20let%20me%20know%20a%20convenient%20time%20to%20talk.%0D%0A%0D%0AThank%20you%2C%0D%0A%5BYour%20Name%5D" className="social" target="_blank" rel="noopener noreferrer" className="social">
          <div className="contact-container">
            EMAIL
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
      </div>
    </section>
    <Footer />

    </main>
  );
}
