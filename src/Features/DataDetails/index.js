import React, {useEffect} from 'react';
import Item from '../../components/Item'
import style from './style.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {locationChanged} from '../../redux/actions'
const DataDetails = () => {
    const currentState = useSelector(state => state)

    return (
        <div className={style.container}>
            <h3>
                Weather Details
            </h3>
            <span>
                <Item playload={'Cloudy'} value={`${currentState.cloudy}%`}/>
                <Item playload={'Humidity'} value={`${currentState.humidity}%`}/>
                <Item playload={'Wind'} value={`${currentState.wind} km/h`}/>
                <Item playload={'Rain'} value={'0mm'}/>
            </span>
        </div>
    );
};

export default DataDetails;