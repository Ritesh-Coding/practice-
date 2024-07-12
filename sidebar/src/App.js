import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from './pages/Reports';
import Team from './pages/Team';
import Overview from './pages/Overview';
function App() {
  return (
   <BrowserRouter>
      <Sidebar/>
      <Routes>
        <Route path='/overview' element={<Overview />} />
        <Route path='/reports' element={<Reports/>} />
        <Route path='/reports/reports1' element={<ReportsOne/>} />
        <Route path='/reports/reports2' element={<ReportsTwo/>} />
        <Route path='/reports/reports3' element={<ReportsThree/>} />
        <Route path='/team' element={<Team/>} />
      </Routes>
   </BrowserRouter>  
    
  );
}

export default App;
