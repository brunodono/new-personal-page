import styles from './Background.module.scss';

const Background = () => {
    return (
        <>
            <div className={styles.bgcircles}>
                <div className={styles.bgcircles__circle1}></div>
                <div className={styles.bgcircles__circle2}></div>
                <div className={styles.bgcircles__circle3}></div>
                <div className={styles.bgcircles__circle4}></div>
                <div className={styles.bgcircles__circle5}></div>
            </div>
            <div className={styles.bggreen}></div>
        </>

    )
}

export default Background