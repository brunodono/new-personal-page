import list from './iconsList.json';
import styles from './Icons.module.scss'

const Icons = () => {
    return (
        <>
            <table>
                <tr>
                {list.map((item) => (
                <td key={item.id}>
                        <img src={item.svg} alt={item.name} className={`${styles.icon} ${styles[item.hoverColor]}`} />
                        <p>{item.name}</p>
                </td>
            ))}
</tr>
            </table>
        </>

    )
}

export default Icons