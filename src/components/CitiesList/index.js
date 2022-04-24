import Item from '../Item'
import { useSelector } from 'react-redux'
function CitiesList() {
    const cities = useSelector(state => state.location.cities)
    return (
        <div>
            {cities.map((item, index) => (
                <Item key={index} playload={item}/>
            ))}
        </div>
    )
}

export default CitiesList