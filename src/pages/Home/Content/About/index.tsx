import styles from '../../Content/Content.module.scss';
import Icons from './Icons';
import { forwardRef } from 'react';

const About = forwardRef((props, ref:any) => {
  return (
    <>
        <div ref={ref} className={styles.column}>
          <h2 data-aos="fade-down" data-aos-duration="1000">Skills</h2>
          <p data-aos="fade-right" data-aos-duration="1000">
            I plan on being a FullStack Web Developer, although for now I am focusing on FrontEnd. 
          </p>
          <p data-aos="fade-right" data-aos-duration="1000"> 
            Here are some technologies I’ve been working with recently:
          </p>
          <div className={styles.devicons}>
            <Icons />
          </div>
        </div>
      


    </>

  )
})

export default About