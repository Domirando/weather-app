import styles from './style.module.css'
import {useSelector} from 'react-redux'

function Weather() {
    const currentState = useSelector(state => state)
    return (
        <div className={styles.container}>
            <header>
                <p className={styles.logo}>the.weather</p>
            </header>
            <div className={styles.details}>
                <h1>{currentState.temp}&deg;</h1>
                <div className={styles.selector}>
                <span>
                    <p>{currentState.city}</p>
                    <p>10:34-Tuesday, 22 Oct &apos;19</p>
                </span>
                <span>
                    <img src={`https://openweathermap.org/img/w/${currentState.icon}.png`}/>
                    <p>{currentState.weather}</p>
                </span>
                </div>
            </div>
        </div>
    )
}

export default Weather