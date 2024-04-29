import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Title = () => {
  return (
    <h1>
      Home
    </h1>
  )
}

const App = () => {
  return (
<div>
  <Title />
  <Link to='./About'>Edit Team</Link>
</div>
  );
};

export default App;
