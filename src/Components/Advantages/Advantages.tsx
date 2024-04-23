import './advantages.css';
import offices from '../../images/offices-image.jpg';
import outsource from '../../images/outsource-image.jpg';
import fiveh from '../../images/500-image.jpg';
import office from '../../images/office-image.jpg';
import servicing from '../../images/servicing-image.jpg';
import contractor from '../../images/contractor-image.jpg';

export function Advantages() {
  return (
    <div className='background-gray'>
      <div className='container'>
        <div className='advantages'>
          <h2 className='advantages-header'>
            Наши преимущества
          </h2>

          <ul className='advantage__list'>
            {/* Офисы по всей стране */}
            <li className="advantages__list-item">
              <img src={offices} alt='Офисы по всей стране' className='advantages__list-image'></img>
              <div className='advantages__list-content'>
                <h3 className='advantages__list-heading'>
                  Офисы по всей стране
                </h3>
                <p className='advantages__list-text'>
                  Мы  — официальный дистрибьютор крупнейших производителей горнодобывающей техники.
                </p>
              </div>
            </li>
            {/* Аутсорс */}
            <li className="advantages__list-item">
              <img src={outsource} alt='=Аутсорс по ВЭД' className='advantages__list-image'></img>
              <div className='advantages__list-content'>
                <h3 className='advantages__list-heading'>
                  Аутсорс по ВЭД
                </h3>
                <p className='advantages__list-text'>
                  Поможем с доставкой, таможенным оформлением и прохождением таможни.
                </p>
              </div>
            </li>
            {/* 500 */}
            <li className="advantages__list-item">
              <img src={fiveh} alt='500 лет на рынке' className='advantages__list-image'></img>
              <div className='advantages__list-content'>
                <h3 className='advantages__list-heading'>
                  500 лет на рынке
                </h3>
                <p className='advantages__list-text'>
                  Знаем этот рынок с этапа зарождения до проблематики сферы сегодняшнего дня. Предоставим обучение вашим специалистам бесплатно!
                </p>
              </div>
            </li>
            {/* Офис */}
            <li className="advantages__list-item">
              <img src={office} alt='Офис в вашем городе' className='advantages__list-image'></img>
              <div className='advantages__list-content'>
                <h3 className='advantages__list-heading'>
                  Офис в вашем городе
                </h3>
                <p className='advantages__list-text'>
                  8 представительств в крупных регинах России. Предоставим персональную консультацию с выездом
                  на предприятие в любом городе страны.
                </p>
              </div>
            </li>
            {/* Обслуживание */}
            <li className="advantages__list-item">
              <img src={servicing} alt='Обслуживание 24/7' className='advantages__list-image'></img>
              <div className='advantages__list-content'>
                <h3 className='advantages__list-heading'>
                  Обслуживание 24/7
                </h3>
                <p className='advantages__list-text'>
                  Укомплектованный штат в 90 человек позволяет реагировать на ваши запросы в любое время суток.
                </p>
              </div>
            </li>
            {/* Подрядные */}
            <li className="advantages__list-item">
              <img src={contractor} alt='Подрядные горные работы' className='advantages__list-image'></img>
              <div className='advantages__list-content'>
                <h3 className='advantages__list-heading'>
                  Подрядные горные работы
                </h3>
                <p className='advantages__list-text'>
                  Полный цикл работ по добыче, транспортировке сырья и обработке сыпучих материалов.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
