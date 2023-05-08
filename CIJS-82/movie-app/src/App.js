
import './App.css';
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage';
import AboutUs from './pages/AboutUs/AboutUs';
import MovieDetail from './pages/MovieDetail/MovieDetail'
import SearchPage from './pages/SearchPage/SearchPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import Header from './layouts/Header/Header'
import Footer from './layouts/Footer/Footer'
function App() {
  return (
    <div className="App container">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/about-us' element={<AboutUs />}/>
        <Route path='/movie/:id' element={<MovieDetail />}/>
        <Route path='/search' element={<SearchPage />}/>
        <Route path='/*' element={<NotFoundPage />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
