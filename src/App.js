import './App.css';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import DataFetchingComponent from './components/home-page/DataFetchingComponent';
import NavBar from './components/common/NavBar';
import Footer from './components/common/Footer';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/pages/Home';
import SignUp from './components/pages/SignUp';
import SignIn from './components/pages/SignIn';
import GithubLink from './components/pages/GithubLink';
import { useEffect } from 'react';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    const timeout = setTimeout(scrollToTop, 300);
    return () => clearTimeout(timeout);
  }, [pathname]);
  return (
    <div className='overflow-clip'>
      <NavBar />

      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/photos' Component={DataFetchingComponent} />
        <Route path='/sign-up' Component={SignUp} />
        <Route path='/sign-in' Component={SignIn} />
        <Route path='/github' Component={GithubLink} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
