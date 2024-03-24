import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import './App.css';


function App() {

  const currTheme =localStorage.getItem('currTheme');
  const[theme, setTheme] = useState(currTheme ? currTheme : 'light');

  useEffect(()=>{
    localStorage.setItem('currTheme', theme);
  }, [theme])

  return (
    <>
      <div className= {`container ${theme}`}>
        <Navbar theme={theme} setTheme={setTheme}/>
        <Slider/>
        
      </div>

  
      

    </>

  );
}

export default App;
