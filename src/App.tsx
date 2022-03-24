import React, { useEffect, useState } from 'react'
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import Navigations from './components/Navigations'
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';
import Loaderpage from './components/Loaderpage'

function App() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    window.addEventListener('load', function(){
      setLoading(false)
    })
  }, [])
  
  return (
    <Router>
      <div className="App">
        {loading ? <Loaderpage/> :
          <div>
            <Navigations/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Portfolio' element={<Portfolio/>}></Route>
          <Route path='/Contact' element={<Contact/>}></Route>
        </Routes>
          </div> 
        }
        
      </div>
    </Router>
  );
}

export default App;
