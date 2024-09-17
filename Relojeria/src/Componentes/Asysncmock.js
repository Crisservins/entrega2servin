
const products = [
    {
      id: 1,
      name: 'Reloj Tissot Supersport Chrono para hombre de acero',
      description: 'Este magnífico reloj Tissot cronógrafo funciona con un movimiento de cuarzo de alta calidad...',
      image: '/assets/Imagenes/reloj1.jpg',
      price: 20000 
    },
    {
      id: 2,
      name: 'Reloj Tissot PR516 Chronograph para hombre de acero 1494172205100',
      description: 'El Tissot PR516 Cronógrafo Cuarzo: una versión contemporánea del diseño de 1970...',
      image: '/assets/Imagenes/reloj2.jpg',
      price: 50000 
    },
    {
      id: 3,
      name: 'Reloj Tissot PR516 Chronograph para hombre de acero 1494171104100',
      description: 'El reloj Tissot PR516 Cronógrafo Cuarzo es una versión contemporánea del diseño de 1970...',
      image: '/assets/Imagenes/reloj3.jpg',
      price: 30000 
    },
  ];
  
  
  export const getProductos = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products); 
      }, 100);
    });
  }
  
  
  export const getUnProducto = (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const producto = products.find(item => item.id === id); 
        resolve(producto);
      }, 100);
    });
  }
  
  // Función para obtener productos por categoría
  export const getProductosPorCategorias = (idCategoria) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        
        const producto = products.filter(item => item.idCat === idCategoria);
        resolve(producto);
      }, 100);
    });
  }
  