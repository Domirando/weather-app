import styles from './style.module.css'
import CitiesList from '../CitiesList'
import Search from '../../Features/Search'
import DataDetails from '../../Features/DataDetails'

function WeatherDetails() {
    return (
        <div className={styles.container}>
            <div className={styles.searchCities}>
                <Search/>
                <CitiesList/>
            </div>
            <hr/>
            <DataDetails/>
            <hr/>
        </div>
    )
}

export default WeatherDetails