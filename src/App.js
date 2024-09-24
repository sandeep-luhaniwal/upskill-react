import './App.css';
import Footer from './components/common/Footer';

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import NavBar from './components/common/NavBar';
import CardsBuy from './components/home-page/CardsBuy';
function App() {
  return (
    <div className='overflow-clip'>
      <NavBar />
      <CardsBuy />
      {/* <Footer /> */}
    </div>
  );
}
export default App;
