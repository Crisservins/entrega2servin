import React from 'react';
import { useParams } from 'react-router-dom';

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

function ProductDetail() {
  const { id } = useParams(); //
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>Producto no encontrado</h2>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} style={{ width: '300px', height: 'auto' }} />
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p> 
    </div>
  );
}

export default ProductDetail;
