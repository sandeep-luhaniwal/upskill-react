import './App.css';
import Footer from './components/common/Footer';

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import NavBar from './components/common/NavBar';
import CardsBuy from './components/home-page/CardsBuy';
import PropsCard from './components/home-page/PropsCard';
import PropsPage from './components/common/PropsPage';
import UserContextProvider from './context/UserContextProvider';
function App() {
  return (
    <div className='overflow-clip'>
     <UserContextProvider>
     <NavBar />
      <CardsBuy />
      {/* <PropsPage /> */}

     </UserContextProvider>
    </div> );
}
export default App;
