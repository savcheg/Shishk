import React from 'react';
import styles from './Input.module.css'

const Input = ({type, label, placeholder, state, setState}) => {
    return (
        <div className={styles.input_box}>
            <label htmlFor="">{label}</label>
            <input type={type} placeholder={placeholder} value={state} onChange={setState}/>
        </div>
    );
};

export default Input;