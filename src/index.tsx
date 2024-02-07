import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MobileContextApp from './context/MobileContext';
import {AuthContextProvider} from './context/authContext/AuthContext';
import ManageContentContextProvider from './context/elementsOnBoardContext/ElementsOnBoardContext';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
  <AuthContextProvider>
      <ManageContentContextProvider>
        <MobileContextApp>
            <App />
        </MobileContextApp>
      </ManageContentContextProvider>
  </AuthContextProvider>
  </React.StrictMode>
);

// mozesz usunac reportWebVitals() jezeli nie uzywasz 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
