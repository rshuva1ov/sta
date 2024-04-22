import './header.css';

export const Header = () => {
  return (
    <div className="container">
      <div className='header'>
        <a href='/' className='header-logo'>LOGO</a>
        <p className='header-text'>Запчасти и спецтехника для горнодобывающей отрасли</p>
        <div className='header-contacts'>
          <a href="mailto:frontend.test@mail.ru">frontend.test@mail.ru</a>
          <a href="tel:+7499999-99-99">+7 499 999-99-99</a>
        </div>
      </div>
    </div>
  );
}
