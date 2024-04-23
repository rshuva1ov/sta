import './App.css';
import { Advantages } from './Components/Advantages';
import { Catalog } from './Components/Catalog';
import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import { Hero } from './Components/Hero';
import { News } from './Components/News';
import { Quotes } from './Components/Quotes';
import { data1, data2 } from './app/data';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Catalog title={'Каталог техники'} data={data1} />
      <Catalog title={'Каталог запчастей'} data={data2} />
      <Advantages />
      <News />
      <Quotes />
      <Footer />
    </>
  );
}

export default App;

