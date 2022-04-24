import styles from './style.module.css'
import {fetchWeather} from '../../redux/actions'
import {useSelector, useDispatch} from 'react-redux'
import {useEffect} from 'react'
function Weather() {
    const currentState = useSelector(state => state.weatherInfo)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchWeather())
    }, [])
    return (
        <div className={styles.container}>
            <header>
                <p className={styles.logo}>the.weather</p>
            </header>
            <div className={styles.details}>
                <h1>26&deg;</h1>
                <div className={styles.selector}>
                <span>
                    <p>{currentState.city}</p>
                    <p>10:34-Tuesday, 22 Oct &apos;19</p>
                </span>
                <span>
                    <p className={styles.sun}>&#9788;</p>
                    <p>Sunny</p>
                </span>
                </div>
            </div>
        </div>
    )
}

export default Weather