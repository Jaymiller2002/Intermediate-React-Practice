import { Link } from "react-router-dom"
import React from 'react';
import About from './About';

const Title = () => {
  return (
    <h1>
      <Link to='./About'>Hello World!</Link>
    </h1>
  )
}



const App = () => {
  return (
    <div>
      <About />
    </div>
  );
};

export default App;
