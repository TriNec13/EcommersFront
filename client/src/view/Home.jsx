import React from 'react';
import { Productos, Carousel } from '../components/index';
import styles from '../css/Home.module.css'

const Home = () => {
  console.log('producto ', Productos)
  return (
    <div>
      <div className={styles.General}>
        <h1>Destacados de la semana</h1>
        <Carousel />
        <h1>este es un H1 principio</h1>
        <Productos />
        <h1>este es un H1 final</h1>
      </div>
      
    </div>
  );
}

export default Home;