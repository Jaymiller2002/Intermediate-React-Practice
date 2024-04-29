import React, { useState } from 'react';

const About = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState('');
  const [members, setMembers] = useState([{ name: '', role: '' }, { name: '', role: '' }, { name: '', role: '' }, { name: '', role: '' }]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleMemberChange = (index, e) => {
    const updatedMembers = [...members];
    updatedMembers[index] = { ...updatedMembers[index], [e.target.name]: e.target.value };
    setMembers(updatedMembers);
  };

  const handleSave = () => {
    const filteredMembers = members.filter(member => member.name !== '' && member.role !== '');
    // Handle saving data here
    console.log("Saved Data:", { name, members: filteredMembers });
    setIsEdit(false); // Switch back to Home screen after saving
  };

  return (
    <div>
      <h1>{isEdit ? 'Edit Team Screen' : 'Home Screen'}</h1>
      <label>
        Team Name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <h2>Team Members</h2>
      {members.map((member, index) => (
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
      {isEdit && (
        <button onClick={handleSave}>Save</button>
      )}
      {!isEdit && (
        <button onClick={() => setIsEdit(true)}>Edit Team</button>
      )}
    </div>
  );
};

export default About;
