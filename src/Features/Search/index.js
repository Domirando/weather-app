import React from 'react';
import styles from "./style.module.css";
import {useState, useEffect} from "react";
import {useDispatch} from 'react-redux'
import {searchTerm} from '../../redux/actions'

const Search = () => {
    let [placeholder, setPlaceholder] = useState('Another location')
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(searchTerm(placeholder))
    }, [placeholder])
    let handleChange = (e) => {
        setPlaceholder(e.target.value)
    }
    let handleSubmit = (e) => {
        e.prevetDefault()
        setPlaceholder(e.target.value)
    }
    return (
        <div className={styles.search}>
            <input placeholder={placeholder} onChange={handleChange}/>
            <input type='submit' onClick={() => console.log(placeholder)} value={'search'}/>
        </div>
    );
};

export default Search;