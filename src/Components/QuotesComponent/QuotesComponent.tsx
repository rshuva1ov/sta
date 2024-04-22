import { useSelector } from 'react-redux';
import { store } from '../../app/store';
import { fetchPosts, getQuotesError, getQuotesStatus, selectAllQuotes } from '../../features/quotes/quotesSlice';
import './quotescomponent.css';
import { nanoid } from '@reduxjs/toolkit';

export const QuotesComponent = () => {
  const quotes = useSelector(selectAllQuotes);
  const quotesStatus = useSelector(getQuotesStatus);
  const error = useSelector(getQuotesError);

  let content;
  if (quotesStatus === 'loading') {
    content = <p className='quotes-place'>"Loading..."</p>;
  } else if (quotesStatus === 'idle') {
    content = quotes.map(quote => {
      return (
        <div className='quotes-content__box' key={nanoid()}>
          <p className='quotes-place'>{quote.quote}</p>
          <p className='quotes-author'>© <span>{quote.author}</span></p>
        </div>
      )
    })
  }
  else if (quotesStatus === 'succeeded') {
    content = quotes.map(quote => {
      return (
        <div className='quotes-content__box' key={nanoid()}>
          <p className='quotes-place'>{quote.quote}</p>
          {quote.author ? <p className='quotes-author'>© <span>{quote.author}</span></p> : 'Автор не указан'}
        </div>
      )
    })
  } else if (quotesStatus === 'failed') {
    content = <p>{error}</p>;
  }


  return (
    <div className='background-gray'>
      <div className="container">
        <div className="quotes">
          <h2 className='quotes-header'>Цитаты — лучший способ изучения мыслителей от Древнего мира до современности!</h2>

          <div className='quotes-content'>
            {content}
            <div className='quotes-content__block'>
              <span>Жми на кнопку и развивайся!</span>
              <button className='quotes-content__button' onClick={() => store.dispatch(fetchPosts())}>Узнать цитату</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}