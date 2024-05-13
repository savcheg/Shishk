import React from 'react';
import styles from './Catalog.module.css'
import Card from "../Card/Card";

const Catalog = ({title}) => {
    return (
        <div className={styles.catalog}>
            <h1 className={styles.catalog__title}>{title}</h1>
            <div className={styles.list}>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>

            </div>
        </div>
    );
};

export default Catalog;