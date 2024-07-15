import 'swiper/swiper-bundle.css';
import './assets/boxicons-2.1.4/css/boxicons.min.css';
import './App.scss';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import Router from './config/Router';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
