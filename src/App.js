import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";




export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <News/>
        
        <Navbar/>

        <Routes>  
          <Route path="/" element={<News country="in" category="general" pagesize={10}/>} />
          <Route path="/business" element={<News country="in" category="business" pagesize={10}/>} />
          <Route path="/entertainment" element={<News country="in" category="entertainment" pagesize={10}/>} />
          <Route path="/general" element={<News country="in" category="general" pagesize={10}/>} />
          <Route path="/health" element={<News country="in" category="health" pagesize={10}/>} />
          <Route path="/science" element={<News country="in" category="science" pagesize={10}/>} />
          <Route path="/sports" element={<News country="in" category="sports" pagesize={10}/>} />
        </Routes>

      </BrowserRouter>
    )
  }
}




