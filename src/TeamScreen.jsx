import React, { useContext, useReducer } from 'react';
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
    default:
      return state;
  }
};

const TeamScreen = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleNameChange = (e) => {
    dispatch({ type: 'SET_NAME', payload: e.target.value });
  };

  const handleMemberChange = (index, e) => {
    const updatedMember = { ...state.members[index], [e.target.name]: e.target.value };
    dispatch({ type: 'SET_MEMBER', payload: { index, member: updatedMember } });
  };

  return (
    <div className="p-5">
      <Link to='/'>{'<- Back'}</Link>
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
    </div>
  );
};

export default TeamScreen;