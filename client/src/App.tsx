import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/navigation';
import Home from './components/Home/home';
import Footer from './components/Footer/footer';
import './App.css';

function App() {
  return (
    <Router>
      <div id='root'>
        <div className='top'>
          <Navigation />
        </div>
        <div className='content'>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Add more routes here */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
