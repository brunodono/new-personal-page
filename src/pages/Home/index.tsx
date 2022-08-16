import Navbar from "./Navbar";
import styles from "./Home.module.scss";
import Content from "./Content";
import About from "./Content/About";
import Background from "./Background";
import ScrollContact from "./ScrollContact";
import Projects from "./Content/Projects";
import Contact from "./Content/Contact";
import { useRef } from "react";



const Home = () => {

    const homeNav = useRef(null);
    const skillsNav = useRef(null);
    const projectsNav = useRef(null);
    const contactNav = useRef(null);

    return (
        <main className={styles.home}>
            <Background />
            <Navbar homeNav={homeNav} skillsNav={skillsNav} projectsNav={projectsNav} contactNav={contactNav} />
            <div className={styles.container}>
                <Content ref={homeNav} contactNav={contactNav} />
                <About ref={skillsNav}/>
                <Projects ref={projectsNav} />
                <Contact ref={contactNav} />
                <ScrollContact />                
            </div>
        </main>
    )
}

export default Home