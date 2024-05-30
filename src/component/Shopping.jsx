import React from 'react';
import './name.css';
import Header from './header';
import Footer from './Footer'

const ShoppingCart = () => {
  const products = [
    { 
      id: 1, 
      name: 'Smartphone', 
      description: 'A high-quality smartphone with advanced features.', 
      price: 299.99, 
      image: 'https://th.bing.com/th/id/OIP.nBhywvevNKvjMB5nATj5pQAAAA?rs=1&pid=ImgDetMain', 
      quantity: 1 
    },
    { 
      id: 2, 
      name: 'Laptop', 
      description: 'Powerful laptop for work and entertainment.', 
      price: 999.99, 
      image: 'https://th.bing.com/th/id/OIP.THrq2EBNeP-Rus4In14EyAHaEn?rs=1&pid=ImgDetMain', 
      quantity: 1 
    },
    { 
      id: 3, 
      name: 'Headphones', 
      description: 'Premium headphones with noise cancellation technology.', 
      price: 49.99, 
      image: 'https://th.bing.com/th/id/OIP.iOidMd_oe5vfAMD0-HvtOwHaHa?rs=1&pid=ImgDetMain', 
      quantity: 1 
    },
    { 
      id: 4, 
      name: 'Smart Watch', 
      description: 'Smartwatch with health and fitness tracking features.', 
      price: 149.99, 
      image: 'https://th.bing.com/th/id/OIP.CtDoZPMWqBe2pwKxS396wwHaHa?rs=1&pid=ImgDetMain', 
      quantity: 1 
    },
    { 
      id: 5, 
      name: 'Camera', 
      description: 'Professional-grade camera for capturing stunning photos and videos.', 
      price: 599.99, 
      image: 'https://th.bing.com/th/id/OIP.CnOJ1ciNRGAy2EdDghPe2wHaE2?rs=1&pid=ImgDetMain', 
      quantity: 1 
    },
    { 
      id: 6, 
      name: 'Wireless Speaker', 
      description: 'Portable wireless speaker for immersive audio experience.', 
      price: 79.99, 
      image: 'https://th.bing.com/th/id/OIP.kqTf1WmKaYL1rL5rVkXykwAAAA?rs=1&pid=ImgDetMain', 
      quantity: 1 
    },
  ];

  return (
    <div>
            <Header/>

          <div className='Shop-main'>
          <div className="shopping-cart">
      <h1>Shopping Cart</h1>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Quantity: {product.quantity}</p>
              <p className='price'>Price: ${product.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    <Footer/>

    </div>
  );
};

export default ShoppingCart;
