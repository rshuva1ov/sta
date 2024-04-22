import React from 'react';
import './hero.css';

export const Hero = () => {

  const style = {
    listStyleType: 'disc'
  };

  return (
    <>
      <div className='hero-image'>
        <div className='container'>
          <div className='hero'>
            <h1 className='hero-header'>
              Официальные диллеры Komatsu,<br />
              Epiroc и Manitou в России
            </h1>

            <ol className='hero__list' style={style}>
              <li className='hero__list-item'>Подбор техники под ваши задачи</li>
              <li className='hero__list-item'>Выкуп и доставка оборудования</li>
              <li className='hero__list-item'>Техническое обслуживание 24/7</li>
            </ol>

            <p className='hero-text'>
              Оставьте заявку по почте <a href="mailto:frontend.test@mail.ru">frontend.test@mail.ru</a>.<br />
              Наши менеджеры свяжутся с вами в течение 15 минут.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
