import Navbar from "./Navbar";
import styles from "./Home.module.scss";
//import { ReactComponent as Brunopic } from "/assets/bruno-profile.png";


const Home = () => {
    return (
        <main className={styles.home}>
        <Navbar />
        </main>
    )
}

export default Home