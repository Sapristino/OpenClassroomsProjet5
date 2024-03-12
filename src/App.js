import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import NotFound from './components/NotFound';
import './styles/Header.scss';
import './styles/Footer.scss';
import './styles/NotFound.scss';
import './styles/Home.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path ="*" element={<NotFound />} /> {/* Route par défaut si aucune autre route ne correspond */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;