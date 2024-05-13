import React from 'react';
import styles from './Navbar.module.css'
import Button from "../../UI/Button/Button";

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <p className={styles.logo}>Реальные шишки</p>
        </div>
    );
};

export default Navbar;