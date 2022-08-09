import Navbar from "./Navbar";
import styles from "./Home.module.scss";
import Content from "./Content";
import About from "./Content/About";
import Background from "./Background";
import ScrollContact from "./ScrollContact";



const Home = () => {
    return (
        <main className={styles.home}>
            <Background />
            <Navbar />
            <div className={styles.container}>
                <Content />
                <About />


                <ScrollContact />                
            </div>
        </main>
    )
}

export default Home