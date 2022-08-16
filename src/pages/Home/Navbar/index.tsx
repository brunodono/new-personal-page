import styles from './Navbar.module.scss';


const Navbar = ( {homeNav, skillsNav, projectsNav, contactNav}:any) => {

  const homeClicked = () => {homeNav.current.scrollIntoView({ behavior:"smooth" })};
  const skillsClicked = () => {skillsNav.current.scrollIntoView({ behavior:"smooth" })};
  const projectClicked = () => {projectsNav.current.scrollIntoView({ behavior:"smooth" })};
  const contactClicked = () => {contactNav.current.scrollIntoView({ behavior:"smooth" })};


    return (
        <nav>
          <a href="#top" className={styles.logo}>Bruno Bignardi</a>
          <ul>
            <li><a onClick={homeClicked}>Home</a></li>
            <li><a onClick={skillsClicked}>Skills</a></li>
            <li><a onClick={projectClicked}>Projects</a></li>
            <li><a onClick={contactClicked}>Contact</a></li>
          </ul>
        </nav>
    )
}

export default Navbar