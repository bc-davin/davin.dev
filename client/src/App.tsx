import Navigation  from './ components/navigation'

function App() {
  return (
    <div id='root'>
      <div className='top'>
        <Navigation />
      </div>
      <div className='content'>
        {/* Your content goes here */}
        <p>Your content here...</p>
      </div>
    </div>
  );
}

export default App
