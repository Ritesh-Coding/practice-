import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Login} from "./component/login";

import {Navigation} from './component/navigation';
import {Logout} from './component/logout';
function App() {    
  return (
  
      <BrowserRouter>
        <Navigation></Navigation>
        <Routes>
         
          <Route path="/login" element={<Login/>}/>
          <Route path="/logout" element={<Logout/>}/>
        </Routes>
      </BrowserRouter>)
}
      
export default App;