import React from 'react';

const Menu = ({ menu }) => (
  <div className="menu">
    {menu.map((item) => (
      <div key={item.id} className="menu-item">
        <h2>{item.name}</h2>
        <img src={item.image.url} alt={item.name} />
        <p>{item.description}</p>
        <p className="price">${item.price.toFixed(2)}</p>
      </div>
    ))}
  </div>
);

export default Menu;

