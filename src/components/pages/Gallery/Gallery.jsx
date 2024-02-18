import React from 'react';
import ViewCardCars from '../../utils/ViewsCardCars/ViewCardCars';
import SendMessage from '../../utils/SendMessage/SendMessage';
import { listCars } from '../../../assets/datas/cars.datas.js';
import '../../../index.css';

export default function Gallery() {
  const length = listCars.length;
  return (
    <>
      <article className="container-fluid p-0 my-0">
        <section className="section-paire">
          <div></div>
          <div className="section-title">Gallérie de voitures en vente </div>
        </section>
        <section className="section-impaire">
          <ViewCardCars listArray={listCars} NumbreOfCars={length} />
        </section>
        <br />
        <SendMessage />
      </article>
    </>
  );
}
