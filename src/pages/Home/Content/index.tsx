import styles from './Content.module.scss';
import brunopic from 'assets/bruno-profile.png';
import { forwardRef } from 'react';

const Content = forwardRef(({ contactNav }: any, ref: any) => {

    const contactClicked = () => { contactNav.current.scrollIntoView({ behavior: "smooth" }) };

    return (

        <>
        
            <div className={styles.content}>
                <div ref={ref} className={styles.column}>
                <div className={styles.mobile_img}>
                        <img src={brunopic} alt="profile" data-aos="fade-up-right" data-aos-duration="1000" />
                    </div>
                    <h2 data-aos="fade-down" data-aos-duration="1000">Hello, I'm Bruno</h2>



                    <h5 data-aos="fade-down" data-aos-duration="1000"><img src='/assets/Other/location.svg' />Dublin, Ireland</h5>
                    <p data-aos="fade-right" data-aos-duration="1000">
                        I love software development, maintaining and building web pages. I'm looking for new opportunities and challenges that allow me to expand my skill set ! Interested in hiring, talking or just discuss regarding any project ? I'm always available to listen to you, please contact me. 
                        <span className={styles.gif_coffee}>
                            <img src="/smile-coffee.gif" alt='smile' />
                            </span>
                            
                    </p>
                    <a onClick={contactClicked} data-aos="fade-right" data-aos-duration="1000">Contact Me</a>
                    <a href="assets/Bruno_Bignardi_CV.pdf" download>Resume</a>
                </div>

                <div className={styles.img}>
                    <img src={brunopic} alt="profile" data-aos="fade-up-right" data-aos-duration="1000" />
                </div>
            </div>

        </>
    )
})

export default Content