import list from './iconsList.json';
import styles from './Icons.module.scss'

const Icons = () => {
    return (
        <>
            <ul>
                {list.map((item) => (
                <li key={item.id}>
                    <i>
                        <img src={item.svg} alt={item.name} className={`${styles.icon} ${styles[item.hoverColor]}`} />
                        <p>{item.name}</p>
                    </i>
                    
                </li>
            ))}

            </ul>
        </>

    )
}

export default Icons