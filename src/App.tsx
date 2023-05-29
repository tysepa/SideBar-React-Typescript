import React, { FC } from 'react';
import './App.css';
import Sidebar from "./components/sidebar";
import{BrowserRouter as Router, Route} from "react-router-dom";
import { Routes } from 'react-router-dom';
import Overview from './pages/overview';

const App: FC=()=> {
  return (
    <div >
    <Router>
      <Sidebar />
      <Routes>
        <Route  path='/overview' element={<Overview/>}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
