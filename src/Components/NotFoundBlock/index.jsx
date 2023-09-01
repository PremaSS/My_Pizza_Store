import React from 'react';

import styles from './NotFoundBlock.module.scss';

console.log(styles);

const NotFoundBlock = () => {
  return (
    <div className={styles.main}>
      <h1>
        {'404 '}
        <br />
        <span>🤔</span>
        <br />
        Ничего не найдено
      </h1>
      <p className={styles.description}>
        К сожалению данная страница отсутсвует в нашем интернет-магазине
      </p>
    </div>
  );
};

export default NotFoundBlock;
