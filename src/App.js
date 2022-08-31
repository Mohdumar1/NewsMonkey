import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const routes = [
  { path: '/', category: 'general', country: 'in' },
  { path: '/business', category: 'business', country: 'in' },
  { path: '/entertainment', category: 'entertainment', country: 'in' },
  { path: '/health', category: 'health', country: 'in' },
  { path: '/science', category: 'science', country: 'in' },
  { path: '/sports', category: 'sports', country: 'in' },
  { path: '/technology', category: 'technology', country: 'in' },
];

export default class App extends Component {
  /**
   *  Your react-router wasn't installed
   *  I'm assuming you install react-router-dom as dev dependency
   *  Always map components if only values are changing, this will help you in a long run
   *  I used one array of data in two different places, now you don't have to change two files.
   */

  render() {
    return (
      <BrowserRouter>
        <Navbar routes={routes} />

        <Routes>
          {routes.map(({ path, category, country }) => (
            <Route
             
              path={path}
              element={<News  key={category} country={country} category={category} pagesize={10} />}
            />
          ))}
        </Routes>
      </BrowserRouter>
    );
  }
}