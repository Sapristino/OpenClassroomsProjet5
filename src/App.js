import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Article from './components/Article';
import NotFound from './components/NotFound';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/article/:id' element={<Article />} />
          <Route path ="*" element={<NotFound />} /> {/* Route par défaut si aucune autre route ne correspond */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;