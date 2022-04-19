import styles from './style.module.css'

function Weather () {
    return (
        <div className={styles.container}>
            <header><p className={styles.logo}>the.weather</p></header>
        </div>
    )
}
export default Weather