import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./Components/Navbar";
import "./styles/Home.css";
export default function Home() {
  return (
    <main className={styles.main}>
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
    <h1>SOME PROJECTS I'VE BUILT.</h1>
    </section>
      <Navbar />
    </main>
  );
}
