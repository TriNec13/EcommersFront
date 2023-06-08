import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../redux/actions/actions";
import { Producto, Loading } from '../components/index';
import styles from '../css/Productos.module.css';

function Productos() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.allProducts);
  const currentPage = useSelector((state) => state.currentPage);

  useEffect(() => {
    console.log("currentPage:", currentPage);
    dispatch(actions.getAllProducts(currentPage));
  }, [dispatch, currentPage]);

  // Función para cambiar a la siguiente página
  const goToNextPage = () => {
    console.log("Se presiono")
    dispatch(actions.setCurrentPage(currentPage + 1));
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      dispatch(actions.setCurrentPage(currentPage - 1));
    }
  };

  return (
    <div className={styles.Productos}>
      {allProducts ? (allProducts.map((p) => {
        console.log('dentro', allProducts);
        return (
          <Producto 
            key={p.id}
            id={p.id}
            name={p.name}
            image={p.image}
            price={p.price}
          />
        )
      })) : console.log('fuera', allProducts) (<Loading />)}
      {currentPage > 1 && (
          <button onClick={goToPreviousPage}>Atrás</button>
        )}
      <button onClick={goToNextPage}>Siguiente</button>
    </div>
  );
}

export default Productos;