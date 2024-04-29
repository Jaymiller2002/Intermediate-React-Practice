import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const Title = () => {
  return (
    <h1>
      Home
    </h1>
  )
}


const App = () => {
  const [teamData, setTeamData] = useState(null);

  useEffect(() => {
    const savedTeamData = localStorage.getItem('teamData');
    if (savedTeamData) {
      setTeamData(JSON.parse(savedTeamData));
    }
  }, []);

  return (
    <div className="p-5 container" style={{color: "white"}}>
      <h1><Title /></h1>
      <Link to='./About'>{'Edit Team ->'}</Link>
      {teamData && (
        <div>
          <h2>Team Name: {teamData.name}</h2>
          <h3>Team Members</h3>
          {teamData.members.map((member, index) => (
            <div key={index}>
              <p>Name: {member.name}</p>
              <p>Role: {member.role}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
