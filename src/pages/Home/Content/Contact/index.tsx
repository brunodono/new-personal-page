import { forwardRef } from 'react';
import styles from '../../Content/Content.module.scss';


const Contact = forwardRef((props, ref:any ) => {
    return (
        
        <>
            <div ref={ref} className={styles.column}>
            <h2 data-aos="fade-down" data-aos-duration="1000">Contact</h2>
                <p data-aos="fade-right" data-aos-duration="1000">
                    Connect with me:
                </p>
                <div className={styles.contact_icons}>
                    <div className={styles.contact_mailphone}>
                        <a><h3> <img src='/assets/Other/email.svg' alt='email' /> E-mail: bruno_bignard@hotmail.com </h3> </a>
                        <a><h3> <img src='/assets/Other/phone.svg' alt='phone'/> / <img src='/assets/Other/whatsapp.svg' /> Phone: (+353) 83 416 2615</h3> </a>
                    </div>
                    <div className={styles.contact_media}>
                        <a href="https://www.instagram.com/brunobignardi/" target="blank"><h3> <img src='/assets/ContactIcons/instagramcolor.svg' alt='instagram'/> Instagram</h3> </a>
                        <a href="https://www.facebook.com/bruno.bignard" target="blank"><h3> <img src='/assets/ContactIcons/facebookcolor.svg' alt='facebook'/> Facebook</h3> </a>
                        <a href="https://www.linkedin.com/in/bruno-bignardi/" target="blank"><h3> <img src='/assets/ContactIcons/linkedincolor.svg' alt='linkedin'/> Linkedin</h3> </a>
                    </div>
                </div>
            </div>

        </>

    )
})

export default Contact