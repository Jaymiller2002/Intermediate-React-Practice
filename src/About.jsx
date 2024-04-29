import React, { useReducer } from 'react';
import { Link } from 'react-router-dom';

const initialState = {
  name: '',
  members: [{ name: '', role: '' }, { name: '', role: '' }, { name: '', role: '' }, { name: '', role: '' }]
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload };
    case 'SET_MEMBER':
      const updatedMembers = [...state.members];
      updatedMembers[action.payload.index] = action.payload.member;
      return { ...state, members: updatedMembers };
    case 'SUBMIT':
      // Handle form submission here
      console.log('Submitting:', state);
      // Save team data to local storage
      localStorage.setItem('teamData', JSON.stringify(state));
      return state; // No need to reset state
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

const About = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleNameChange = (e) => {
    dispatch({ type: 'SET_NAME', payload: e.target.value });
  };

  const handleMemberChange = (index, e) => {
    const updatedMember = { ...state.members[index], [e.target.name]: e.target.value };
    dispatch({ type: 'SET_MEMBER', payload: { index, member: updatedMember } });
  };

  const handleSubmit = () => {
    dispatch({ type: 'SUBMIT' });
    // Clear inputs by resetting state to initial values
    dispatch({ type: 'RESET' });
  };

  return (
    <div className="p-5">
      <Link to='/'>{'<- Home'}</Link>
      <h1>Edit Team Screen</h1>
      <label>
        Team Name:
        <input type="text" value={state.name} onChange={handleNameChange} />
      </label>
      <h2>Team Members</h2>
      {state.members.map((member, index) => (
        <div key={index}>
          <label>
            Name:
            <input type="text" name="name" value={member.name} onChange={(e) => handleMemberChange(index, e)} />
          </label>
          <label>
            Role:
            <input type="text" name="role" value={member.role} onChange={(e) => handleMemberChange(index, e)} />
          </label>
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default About;
