import React from 'react';
// import { useState } from 'react';

function Categories({ value, eventCategory }) {
  console.log(value);
  // const [activeIndex, setActiveIndex] = useState(0);

  const categories = ['Все', 'Мясная', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  // const onClickCategory = (index) => {
  //   setActiveIndex(index);
  // };

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, i) => (
          <li key={i} onClick={() => eventCategory(i)} className={value === i ? 'active' : ''}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
