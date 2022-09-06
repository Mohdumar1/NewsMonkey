import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

const routes = [
  { path: '/', category: 'general', country: 'in' },
  { path: '/business', category: 'business', country: 'in' },
  { path: '/entertainment', category: 'entertainment', country: 'in' },
  { path: '/health', category: 'health', country: 'in' },
  { path: '/science', category: 'science', country: 'in' },
  { path: '/sports', category: 'sports', country: 'in' },
  { path: '/technology', category: 'technology', country: 'in' },
];

const App = () => {
  /**
   *  Your react-router wasn't installed
   *  I'm assuming you install react-router-dom as dev dependency
   *  Always map components if only values are changing, this will help you in a long run
   *  I used one array of data in two different places, now you don't have to change two files.
   */

  const [progress, setProgress] = useState(0);


  

  
    return (
      <BrowserRouter>
        <Navbar routes={routes} />

        <LoadingBar color='#f11946' height={3} progress={progress} />

        <Routes>
          {routes.map(({ path, category, country}) => (
            <Route
            
              path={path}
              element={<News  setProgress={setProgress} key={category} country={country} category={category} pagesize={10} />}
            />
          ))}
        </Routes>
      </BrowserRouter>
    );
  }

  export default App;

