import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Detail from './pages/Detail';
import Favs from './pages/Favs';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { GlobalContext } from './context/GlobalContext';
import './App.css';

const App = () => {
  const { state } = useContext(GlobalContext);

  return (
    <div className={state.theme}>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dentist/:id" element={<Detail />} />
            <Route path="/favs" element={<Favs />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
