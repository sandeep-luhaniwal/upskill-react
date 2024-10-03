import './App.css';
import Footer from './components/common/Footer';

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import NavBar from './components/common/NavBar';
import CardsBuy from './components/home-page/CardsBuy';
import PropsCard from './components/home-page/PropsCard';
import PropsPage from './components/common/PropsPage';
import UserContextProvider from './context/UserContextProvider';
import { Router, Routes } from 'react-router-dom';
function App() {
  return (
    <div className='overflow-clip'>
      <UserContextProvider>
        <NavBar />
        <CardsBuy />
        {/* <PropsPage /> */}
        <Routes>
          <Router elemnt/>
        </Routes>

      </UserContextProvider>
    </div>);
}
export default App;
