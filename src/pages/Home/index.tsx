import Navbar from "./Navbar";
import styles from "./Home.module.scss";
import Content from "./Content";
import About from "./About";



const Home = () => {
    return (
        <main className={styles.home}>
            <Navbar />
            <div className={styles.container}>
                <Content />
                <About />
                
            </div>
        </main>
    )
}

export default Home