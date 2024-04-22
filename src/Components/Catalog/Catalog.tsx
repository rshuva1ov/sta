import { IData } from '../../App';
import './catalog.css';

interface ICatalog {
  title: string,
  data: IData[],
}

export const Catalog = ({ title, data }: ICatalog) => {
  return (
    <div className='catalog container'>
      <h2 className='catalog-heading'>
        {title}
      </h2>

      <ul className='catalog__list'>
        {data.map(elem => {
          return (
            <li className='catalog__list-item'>
              <img src={elem.imageName} alt={`Бренд ${elem.brand}`} />
              {elem.text}
            </li>
          )
        })}
      </ul>
    </div>
  );
}
