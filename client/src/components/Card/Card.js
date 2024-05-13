import React from 'react';
import styles from './Card.module.css'

const Card = () => {
    return (
        <div className={styles.card}>
            <div className={styles.image}></div>
            <p className={styles.title}>Наименование</p>
            <p className={styles.description}>Описание товара</p>
            <button className={styles.button}>
                В корзину
            </button>
        </div>
    );
};

export default Card;