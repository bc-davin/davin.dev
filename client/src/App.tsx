import Navigation  from './ components/Navigation/navigation'
import Home from './ components/Home/home';
import './App.css';
function App() {
  return (
    <div id='root'>
      <div className='top'>
        <Navigation />
      </div>
      <div className='content'>
        <Home />
      </div>
    </div>
  );
}

export default App
