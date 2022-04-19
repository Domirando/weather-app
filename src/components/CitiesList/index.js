import Item from '../Item'

function CitiesList() {
    let uzb_cities = ['Toshkent', 'Samarqand', 'Fargo`na', 'Xiva', 'Andijon']
    return (
        <div>
            {uzb_cities.map((item, index) => (
                <Item key={index} playload={item}/>
            ))}
        </div>
    )
}

export default CitiesList