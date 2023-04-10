import './App.css'
import {About,Home,Service,Education,Contact} from './pages'
import { Route,Switch,Redirect } from 'react-router-dom';
import { useEffect } from 'react';
import CanvasNest from 'canvas-nest.js';
import { useRef } from 'react';
import './App.css'
function App() {
  const myRef = useRef(null);
  useEffect(() => {  
    const config = {
      color: '#DDE8DC',
      opacity: 0.7,
      count: 200,
    };  
    // Using config rendering effect at 'element'.
    const cn = new CanvasNest(myRef.current, config);   
    // destroy
    return () => {
      cn.destroy();
    }
},[]);
  return (
    <div className='app' ref={myRef}>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/service" component={Service} />
        <Route path="/education" component={Education} />
        <Route path="/contact" component={Contact} />
        <Redirect to="/home" from='/' /> 
      </Switch>
    </div>
  )
}

export default App
