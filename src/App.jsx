import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TeamScreen from './TeamScreen';
import About from './About';

const Title = () => {
  return (
    <h1>
      Hello World!
    </h1>
  )
}

const App = () => {
  return (
<div>
  <Link to='./About'>About</Link>
</div>
  );
};

export default App;
