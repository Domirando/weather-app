import styles from './style.module.css'
const Item = ({playload, value}) => {
    return (
        <div className={styles.container}>
            <p>{playload}</p>
            <p>{value}</p>
        </div>
    )
}
export default Item