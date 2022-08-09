import styles from '../../Content/Content.module.scss';
import Icons from './Icons';

const About = () => {
  return (
    <>

<div className={styles.gears}>
        <div className={styles.gear}>
          <img src="assets/gear.png" alt='gear' className={styles.gear1} />
        </div>
        <div className={styles.gear}>
          <img src="assets/gear.png" alt='gear' className={styles.gear2} />
        </div>
      </div>
      <div className={`${styles.content} ${styles.right}`}>

        <div className={styles.column}>
          <h2 data-aos="fade-down" data-aos-duration="1000">Skills</h2>
          <p data-aos="fade-right" data-aos-duration="1000">
            Here are some technologies I’ve been working with recently
          </p>
          <div className={styles.devicons}>
            <Icons />

          </div>
        </div>
      </div>


    </>

  )
}

export default About