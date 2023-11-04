import { useEffect, useRef } from 'react';
import './App.scss';
import Home from './pages/Home';
import Login from './pages/Login';


function App() {
  const contentRef = useRef();

  return (
    <div className="App">
      <div className='content' ref={contentRef}>
        <Home />
      </div>
    </div>
  );
}

export default App;
