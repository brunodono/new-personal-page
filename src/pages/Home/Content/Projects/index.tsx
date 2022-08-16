import styles from '../Content.module.scss';
import projects from './projects.json';
import { forwardRef } from 'react';



const Projects = forwardRef((props, ref:any) => {

    return (
        <>
            <div ref={ref} className={styles.column}>
                <h2 data-aos="fade-down" data-aos-duration="1000">Projects</h2>
                <p data-aos="fade-right" data-aos-duration="1000">
                    Some projects created using the above technologies:
                </p>

                {projects.map((project) => (
                    <div className={styles.projects}>
                        <div className={styles.info}>
                            <div className={styles.info_titleabout}>
                                <h3>{project.title}</h3>
                                <h4>{project.info}</h4>
                            </div>
                            <div className={styles.info_links}>
                                <a href={project.live} target="blank">See Live</a>
                                <a href={project.code} target="blank">Source Code</a>
                            </div>
                        </div>

                        <div className={styles.hoverzoom}>
                            <a href={project.live} target="blank">See Live</a>
                            <img src={project.image} alt="teste" />
                        </div>

                    </div>
                ))}
                <div className={styles.seemore}>
                <a href='https://github.com/brunodono?tab=repositories' target='blank' >See more</a>
                </div>       
            </div>

        </>

    )
})

export default Projects