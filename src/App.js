import './App.css';
import Faq from './components/Faq/Faq';
import Header from './components/Header/Header';
import Items from './components/Items/Items';

function App() {
  return (
    <div className='app-content'>
      <Header></Header>
      <Items></Items>
      <Faq></Faq>
    </div>
  );
}

export default App;
