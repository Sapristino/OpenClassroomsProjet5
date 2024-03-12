import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import './styles/Header.scss';
import './styles/Footer.scss';
import './styles/NotFound.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <NotFound />
      <Footer />
    </div>
  );
}

export default App;
