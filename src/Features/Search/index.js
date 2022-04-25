import React from 'react';
import styles from "./style.module.css";
import {useState} from "react";

const Search = () => {
    let [placeholder, setPlaceholder] = useState('Another location')
    let handleChange = (e) => {
        setPlaceholder(e.target.value)
        console.log(placeholder)
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