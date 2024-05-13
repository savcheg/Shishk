import React from 'react';
import styles from './Home.module.css'
import Navbar from "../../components/Navbar/Navbar";
import Catalog from "../../components/Catalog/Catalog";

const Home = () => {
    return (
        <div className={styles.home}>
            <Navbar/>
            <Catalog title={'Популярное'}/>
            <Catalog title={'Каталог'}/>
        </div>
    );
};

export default Home;