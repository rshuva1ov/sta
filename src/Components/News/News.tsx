import './news.css';
import colleagues from '../../images/colleagues-image.jpg'
import workers from '../../images/workers-image.jpg'
import mine from '../../images/mine-image.jpg'
import tractor from '../../images/tractor-image.jpg'

export function News() {

  const style = {
    listStyleType: 'none'
  };


  return (
    <div className='container'>
      <div className='news'>
        <h2 className='news-heading'>
          Новости
        </h2>

        <ul className='news__list' style={style}>

          <li className="news__list-item">
            <img src={colleagues} alt='Коллеги' className='news__list-image'></img>
            <div className='news__list-content'>
              <p className='news__list-date'>05 сентября 2019</p>
              <p className='news__list-text'>Поздравляем всех коллег
                с днем шахтера! Спасибо, за ваш тяжелый и опасный труд! Мы ценим вас и приглашаем в нашу команду! Звоните в кадровый отдел:
                <a href="tel:+79999990909"> 8 (999) 999 09-09</a> (Ирина).
              </p>
            </div>
          </li>

          <li className="news__list-item">
            <img src={workers} alt='Рабочие' className='news__list-image'></img>
            <div className='news__list-content'>
              <p className='news__list-date'>26 августа 2022</p>
              <p className='news__list-text'>Поздравляем всех коллег
                с днем шахтера! Спасибо, за ваш тяжелый и опасный труд! Мы ценим вас и приглашаем в нашу команду! Звоните в кадровый отдел:
                <a href="tel:+79999990909"> 8 (999) 999 09-09</a> (Ирина).
              </p>
            </div>
          </li>

          <li className="news__list-item">
            <img src={mine} alt='Шахта' className='news__list-image'></img>
            <div className='news__list-content'>
              <p className='news__list-date'>05 сентября 2019</p>
              <p className='news__list-text'>Поздравляем всех коллег
                с днем шахтера! Спасибо, за ваш тяжелый и опасный труд! Мы ценим вас и приглашаем в нашу команду! Звоните в кадровый отдел:
                <a href="tel:+79999990909"> 8 (999) 999 09-09</a> (Ирина).
              </p>
            </div>
          </li>

          <li className="news__list-item">
            <img src={tractor} alt='Трактор' className='news__list-image'></img>
            <div className='news__list-content'>
              <p className='news__list-date'>26 августа 2022</p>
              <p className='news__list-text'>Поздравляем всех коллег
                с днем шахтера! Спасибо, за ваш тяжелый и опасный труд! Мы ценим вас и приглашаем в нашу команду! Звоните в кадровый отдел:
                <a href="tel:+79999990909"> 8 (999) 999 09-09</a> (Ирина).
              </p>
            </div>
          </li>

        </ul>
      </div>
    </div>
  );
}
