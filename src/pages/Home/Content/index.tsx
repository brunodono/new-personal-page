import styles from './Content.module.scss';
import brunopic from 'assets/bruno-profile.png';

const Content = () => {
    return (

        <>

            <div className={styles.content}>
                <div className={styles.column}>
                    <h2 data-aos="fade-down" data-aos-duration="1000">Hello, I'm Bruno</h2>
                    <p data-aos="fade-right" data-aos-duration="1000">
                    I love software development, maintaining and building web pages. I'm seeking for new opportunities and challenges that allow me to expand my skill set ! Interested in hiring, talking or just discuss regarding any project ? I'm always available to listen to you, please contact me. <span>smile</span>
                    </p>
                    <a href="#home" data-aos="fade-right" data-aos-duration="1000">Contact Me</a>
                    <a href="#home" data-aos="fade-right" data-aos-duration="1000">Resume</a>
                    
                </div>

                <div className={styles.img}>
                        <img src={brunopic} alt="profile" className={styles.shape} data-aos="fade-up-right" data-aos-duration="1000" />
                    </div>
            </div>

        </>
    )
}

export default Content