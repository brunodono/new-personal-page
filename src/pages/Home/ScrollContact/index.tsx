import styles from './ScrollContact.module.scss';

const ScrollContact = () => {
    return (
    
    <>

        <h2  className="mob-connect enabledisable page-scroll">
          <h6 className="low-highlight-hazeskin">Developed by Bruno Bignardi</h6>
        </h2>
        <ul className={styles.socialsites}>
          <li>
            <a href="https://github.com/brunodono" target="blank"><img src="/assets/ContactIcons/githubcolor.svg" alt="github" /></a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/bruno-bignardi/" target="blank"><img src="/assets/ContactIcons/linkedincolor.svg" alt="linkedin" /></a>
          </li>
          <li>
            <a href="https://www.facebook.com/bruno.bignard" target="blank"><img src="/assets/ContactIcons/facebookcolor.svg" alt="facebook" /></a>
          </li>
          <li>
            <a href="https://www.instagram.com/brunobignardi/" target="blank"><img src="/assets/ContactIcons/instagramcolor.svg" alt="instagram" /></a>
          </li>
        </ul>

        </>

    )
}

export default ScrollContact