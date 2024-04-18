import { useGetHappinessByCategoryQuery } from '../../services/quotes';
import './quotescomponent.css';

export function QuotesComponent() {
  const { data, error, isLoading } = useGetHappinessByCategoryQuery('happiness')


  return (
    <div className="quotes">
      <h2 className='quotes-header'>Цитаты — лучший способ изучения мыслителей от Древнего мира до современности!</h2>

      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{
            data.map((quote): JSX.Element => {
              return (
                <p key={quote.author}>{quote.quote}</p>
              )
            })
          }</h3>
        </>
      ) : null}

      <div className='quotes-content'>
        <p className='quotes-place'>Место под вашу цитату</p>
        <p className='quotes-author'>© <span>Автор цитаты</span></p>
        <div className='quotes-content__block'>
          <span>Жми на кнопку и развивайся!</span>
          <button className='quotes-content__button'>Узнать цитату</button>
        </div>
      </div>
    </div>
  );
}