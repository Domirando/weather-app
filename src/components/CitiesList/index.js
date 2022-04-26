import Item from '../Item'
import { useSelector } from 'react-redux'
function CitiesList() {
    let cities = useSelector(state => state.location.cities)
    let searchCity = useSelector(state => state.searchCity)
    return (
        <div>
            {cities.filter(item => {
                if(searchCity === "")
                    return item
                else if(item.toLowerCase().includes(searchCity.toLowerCase()))
                    return item
            }).map((item, index) => (
                <Item key={index} playload={item}/>
            ))}
        </div>
    )
}

export default CitiesList