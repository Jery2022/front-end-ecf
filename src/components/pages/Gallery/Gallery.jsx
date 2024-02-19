import React from 'react';
import ViewCardCars from '../../utils/ViewsCardCars/ViewCardCars';
import SendMessage from '../../utils/SendMessage/SendMessage';
import { listCars } from '../../../assets/datas/cars.datas.js';
import ViewPagination from '../../utils/ViewPagination/ViewPagination';
//import Landing from '../Landing/Landing';

import '../../../index.css';
import BaseCarousel from '../../utils/Carousels/BaseCarousels.jsx';

export default function Gallery() {
  const length = listCars.length;
  return (
    <>
      <article className="container-fluid p-0 my-0">
        <BaseCarousel />
        <section className="section-paire">
          <div className="section-title">Gallérie de voitures en vente </div>
          <div>Filtre</div>
        </section>
        <section className="section-impaire">
          <ViewCardCars listArray={listCars} NumbreOfCars={length} />
          <ViewPagination />
        </section>
        <br />
        <SendMessage />
      </article>
    </>
  );
}
