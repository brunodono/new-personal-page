import styles from './ScrollContact.module.scss';

const ScrollContact = () => {
    return (
    
    <>

        <h2  className="mob-connect enabledisable page-scroll">
          <span className="low-highlight-hazeskin">Connect with me</span>
        </h2>
        <ul className={styles.socialsites}>
          <li>
            <a href="https://github.com/brunodono" target="blank"><i className={styles.fagithub}>git</i></a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/bruno-bignardi/" target="blank"><i className={styles.falinkedin}></i>link</a>
          </li>
          <li>
            <a href="https://www.facebook.com/bruno.bignard" target="blank"><i className={styles.fafacebook}></i>face</a>
          </li>
          <li>
            <a href="https://www.instagram.com/brunobignardi/" target="blank"><i className={styles.fainstagram}></i>insta</a>
          </li>
        </ul>

        </>

    )
}

export default ScrollContact