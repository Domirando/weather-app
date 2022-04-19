import React from 'react';
import styles from "./style.module.css";
import {useState} from "react";

const Search = () => {
    let [placeholder, setPlaceholder] = useState('Another location')
    return (
        <div className={styles.search}>
            <input placeholder={placeholder} onChange={e=>setPlaceholder(e.target.value)}/>
            <input type='submit' onClick={() => console.log(placeholder)} value={'search'}/>
        </div>
    );
};

export default Search;