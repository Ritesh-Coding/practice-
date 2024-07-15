import React from 'react'
import Sidebar from '../SideBar/SideBar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ReportsOne,Reports,ReportsTwo,ReportsThree } from '../Pages/Dashboard/Reports';
import Team from '../Pages/Leaves/Team';
import Overview from '../Pages/Attendance/Overview';
const MainPage = () => {
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
  ) 
}

export default MainPage