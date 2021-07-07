import React, { useState, useEffect } from 'react';
require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);

const initialSmurf = {
  name: '',
  age: '',
  height: ''
}

const EditSmurfForm = props => {
  const [smurf, setSmurf] = useState(initialSmurf)

  const { match, smurfs } = props

  useEffect(() => {
    const smurfId = match.params.smurfId
    const smurfToUpdate = smurfs.find(smurf => {
      return `${smurf.id}` === smurfId
    })
  }, [match, smurfs])

  const handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    
  }

  return (
    <div className="SmurfForm">
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleInputChange}
          placeholder="name"
          value={smurf.name}
          name="name"
        />
        <input
          onChange={handleInputChange}
          placeholder="age"
          value={smurf.age}
          name="age"
        />
        <input
          onChange={handleInputChange}
          placeholder="height"
          value={smurf.height}
          name="height"
        />
        <button type="submit">Edit Smurf</button>
      </form>
    </div>
  );
}

export default EditSmurfForm;
