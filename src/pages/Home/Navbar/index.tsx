import styles from './Navbar.module.scss';

const Navbar = () => {
    return (
        <nav>
          <a href="#top" className={styles.logo}>Bruno Bignardi</a>
          <ul>
            <li><a className={styles.page__active} href="#top">Home</a></li>
            <li><a href="#about" className={styles.page}>Skills</a></li>
            <li><a href="#projects" className={styles.page} >Projects</a></li>
            <li><a href="#contact" className={styles.enabledisablepage}>Contact</a></li>
          </ul>
        </nav>
    )
}

export default Navbar