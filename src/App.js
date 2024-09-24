import './App.css';
import Footer from './components/common/Footer';

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import NavBar from './components/common/NavBar';
import CardsBuy from './components/home-page/CardsBuy';
import PropsCard from './components/home-page/PropsCard';
import PropsPage from './components/common/PropsPage';
function App() {
  return (
    <div className='overflow-clip'>
      {/* <NavBar /> */}
      {/* <CardsBuy /> */}
      <PropsPage />

    </div>
  );
}
export default App;
