import React, {useEffect} from 'react';
import Item from '../../components/Item'
import style from './style.module.css'
import {useDispatch} from 'react-redux'
import {locationChanged} from '../../redux/actions'
const DataDetails = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(locationChanged)
    }, [])

    return (
        <div className={style.container}>
            <h3>
                Weather Details
            </h3>
            <span>
                <Item playload={'Cloudy'} value={'12%'}/>
                <Item playload={'Humidity'} value={'78%'}/>
                <Item playload={'Wind'} value={'1km/h'}/>
                <Item playload={'Rain'} value={'0mm'}/>
            </span>
        </div>
    );
};

export default DataDetails;