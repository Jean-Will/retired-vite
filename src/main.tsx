import React from 'react';
import ReactDOM from 'react-dom/client';
import Calc from './Components/Calc/Calc.tsx';
import "./Components/Calc/Calc.css";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    
    <Calc />
  </React.StrictMode>,
)
