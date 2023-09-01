import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import Categories from '../Components/Categories';
import Sort from '../Components/Sort';
import PizzaBlock from '../Components/PizzaList';
import Skeleton from '../Components/PizzaList/Skeleton';

const Main = () => {
  const [pizzaData, setPizza] = useState([]);
  const [loadPizza, setLoadPizza] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [sortId, setSortId] = useState({ name: 'популярности', sortProperty: 'rating' });

  useEffect(() => {
    setLoadPizza(true);

    const sortBy = sortId.sortProperty.replace('-', '');
    const order = sortId.sortProperty.includes('-') ? 'asc' : 'desc';
    const category = categoryId > 0 ? `category=${categoryId}` : '';

    fetch(
      `https://64dbdd52593f57e435b17d51.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`,
    )
      .then((res) => res.json())
      .then((arr) => {
        setPizza(arr);
        setLoadPizza(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortId]);
  console.log(categoryId, sortId);
  return (
    <>
      <div className="content__top">
        <Categories value={categoryId} eventCategory={(id) => setCategoryId(id)} />
        <Sort value={sortId} eventSort={(id) => setSortId(id)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {loadPizza
          ? [...new Array(10)].map((_, index) => <Skeleton key={index} />)
          : pizzaData.map((obj) => (
              <PizzaBlock
                title={obj.title}
                price={obj.price}
                image={obj.imageUrl}
                sizes={obj.sizes}
                types={obj.types}
                key={obj.id}
              />
            ))}
      </div>
    </>
  );
};

export default Main;
