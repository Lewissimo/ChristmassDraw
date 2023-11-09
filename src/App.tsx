import { useContext, useEffect, useRef, useState } from 'react';
import './stylesApp/App.scss';
import Home from './pages/Home';
import Login from './pages/Login';
import { MobileContext, swiperState } from './context/MobileContext';
import { BrowserRouter, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AuthContext from './context/authContext/AuthContext';
import { width } from '@mui/system';


function App() {
  const [message, setMessage] = useState<string | null>(null);
  const MobileState = useContext(MobileContext);
  const auth = useContext(AuthContext);
 

  const contentRef = useRef<HTMLDivElement | null>(null);
  const ProtectedRoute = ({ children } : {children: any}) => {
    if (!auth?.user) {
      
      return <Navigate to="/login" />;
    }
    

      if(contentRef.current){
        // contentRef.current.style.width = '200px';
        // contentRef.current.style.height = '300px';
  
      }
      if(contentRef.current){
        // contentRef.current.style.animation = '2s increase forwards';
      }
   
    return children
  };



  useEffect(()=>{
    switch(MobileState?.slidePosition){
      case swiperState.letterSpace:
        setMessage('Napisz swój list');
      break;
      case swiperState.mainBoard:
        setMessage('Kliknij na prezencij i sprawdź kogo masz');
      break;
      case swiperState.users:
        setMessage('Użytkownicy');
      break;
    }
  },[])
  return (
    <div className="App">
      {auth?.user ? <div className='navigationSpace'><ArrowBackIosIcon/>{message}<ArrowForwardIosIcon/></div>: ''}
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
