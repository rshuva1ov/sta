import './App.css';
import { Catalog } from './Components/Catalog';
import { Header } from './Components/Header';
import { Hero } from './Components/Hero';
import { QuotesComponent } from './Components/QuotesComponent';
import catalog1 from './images/catalog-image1.svg'
import catalog2 from './images/catalog-image2.svg'
import catalog3 from './images/catalog-image3.svg'
import catalog4 from './images/catalog-image4.svg'
import catalog5 from './images/catalog-image5.svg'
import catalog6 from './images/catalog-image6.svg'


export interface IData {
  imageName: string,
  brand: string,
  text: string
}

const data1: IData[] = [
  { imageName: catalog1, brand: 'Komatsu', text: 'Komatsu' },
  { imageName: catalog2, brand: 'Epiroc', text: 'Epiroc' },
  { imageName: catalog3, brand: 'Manitou Group', text: 'Manitou' },
  { imageName: catalog4, brand: '75 Hensley', text: 'Komatsu' },
  { imageName: catalog5, brand: 'KVX', text: 'KVX' },
];

const data2: IData[] = [
  { imageName: catalog1, brand: 'Komatsu', text: 'Komatsu' },
  { imageName: catalog2, brand: 'Epiroc', text: 'Epiroc' },
  { imageName: catalog3, brand: 'Manitou Group', text: 'Manitou' },
  { imageName: catalog6, brand: 'Прочее', text: 'Прочее' },
];

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Catalog title={'Каталог техники'} data={data1} />
      <Catalog title={'Каталог запчастей'} data={data2} />
      <QuotesComponent />
    </>
  );
}

export default App;

