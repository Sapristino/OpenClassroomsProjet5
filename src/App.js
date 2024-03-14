import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Article from './pages/Article';
import NotFound from './pages/NotFound';
import About from './pages/About';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/article/:id' element={<Article />} />
          <Route path='/about' element={<About />} />
          <Route path ="*" element={<NotFound />} /> {/* Route par défaut si aucune autre route ne correspond */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;