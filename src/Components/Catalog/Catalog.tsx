import { nanoid } from '@reduxjs/toolkit';
import { IData } from '../../app/data';
import './catalog.css';

interface ICatalog {
  title: string,
  data: IData[],
}

export const Catalog = ({ title, data }: ICatalog) => {
  return (
    <div className='container'>
      <div className='catalog'>
        <h2 className='catalog-heading'>
          {title}
        </h2>

        <ul className='catalog__list'>
          {data.map(elem => {
            return (
              <li className='catalog__list-item' key={nanoid()}>
                <img src={elem.imageName} alt={`Бренд ${elem.brand}`} />
                {elem.text}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
}
