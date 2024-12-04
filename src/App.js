import React from 'react';
import './App.css';
// import { Home } from './components/Home'
import { Firebase } from './components/Firebase';
import { Routes,Route } from 'react-router-dom'

function App() {

  return (
    <div>  
         <Routes>
         <Route path = "/Firebase" element={<Firebase />}/>
          {/* <Route path=  "/Home" element={< Home />}/> */}
         </Routes>
      </div>
  );
}

export default App;
