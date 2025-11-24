import { useContext, useEffect, useRef, useState } from 'react';
import './stylesApp/App.scss';
import Home from './pages/Home';
import Login from './pages/Login';
import { BrowserRouter, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import AuthContext from './context/authContext/AuthContext';


function App() {
  const auth = useContext(AuthContext);
 

  const contentRef = useRef<HTMLDivElement | null>(null);
  const ProtectedRoute = ({ children } : {children: any}) => {
    if (!auth?.user) {
      
      return <Navigate to="/login" />;
    }
       
    return children
  };



  return (
    <div className="App">
      <div className='content' ref={contentRef}>    
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<ProtectedRoute> 
  
                  <Home />
            </ProtectedRoute>} />
            <Route path='/login' element={
       
              <Login />
            }/>
          </Route>
        </Routes>
      </BrowserRouter>    
      </div>
    </div>
  );
}

export default App;
