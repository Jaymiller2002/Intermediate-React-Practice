import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="p-5">
      <Link to="./TeamScreen">Edit Team</Link>
      <h1>About Page</h1>
    </div>
  );
};

export default About;
