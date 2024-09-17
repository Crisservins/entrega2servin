import React from 'react';
import { Link } from 'react-router-dom';
import './Catalog.css'; 

const products = [
  {
    id: 1,
    name: 'Reloj Tissot Supersport Chrono para hombre de acero',
    description: 'Este magnífico reloj Tissot cronógrafo funciona con un movimiento de cuarzo de alta calidad...',
    price: 20000, 
    image: '/public/Imagenes/reloj1.jpg'  
  },
  {
    id: 2,
    name: 'Reloj Tissot PR516 Chronograph para hombre de acero 1494172205100',
    description: 'El Tissot PR516 Cronógrafo Cuarzo: una versión contemporánea del diseño de 1970...',
    price: 50000, 
    image: '/public/Imagenes/reloj2.jpg' 
  },
  {
    id: 3,
    name: 'Reloj Tissot PR516 Chronograph para hombre de acero 1494171104100',
    description: 'El reloj Tissot PR516 Cronógrafo Cuarzo es una versión contemporánea del diseño de 1970...',
    price: 30000, 
    image: '/public/Imagenes/reloj3.jpg' 
  },
];


function Catalog() {
  return (
    <div className="catalog">
      <h1>Catálogo de Productos</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p> 
            <Link to={`/product/${product.id}`}>Ver Detalle</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalog;
