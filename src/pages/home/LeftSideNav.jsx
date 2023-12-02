import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftSideNav = () => {

    const [items, setItems] = useState([]);
    useEffect(() => {
      fetch("categories.json")
        .then((res) => res.json())
        .then((data) => setItems(data));
    }, []);
    return (
        <div>
        <h1 className="font-medium text-lg mb-5">All Categories</h1>
        {items.map((item) => (
          <NavLink to={`/item/${item.id}`} key={item.id} className="block cursor-pointer my-7">{item.name}</NavLink>
        ))}
      </div>
    );
};

export default LeftSideNav;