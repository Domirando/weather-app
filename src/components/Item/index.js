import styles from './style.module.css'
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {fetchWeather} from "../../redux/actions";
const Item = ({playload, value}) => {
    const dispatch = useDispatch()
    let myFunc = () => dispatch(fetchWeather(playload))
    return (
        <div className={styles.container}>
            <p onClick={myFunc}>{playload}</p>
            <p>{value}</p>
        </div>
    )
}
export default Item