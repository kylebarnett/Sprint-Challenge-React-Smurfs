import React from 'react';
import { Link } from 'react-router-dom';

const SmurfCard = props => {
  const smurf = props.smurfs.find(item => {
    return `${item.id}` === props.match.params.id
  })
  return (
    <div className="Smurf">
      {!props.smurfs.length ? <h1>Loading Data...</h1> : (
        <div>
          <h3>{smurf.name}</h3>
          <strong>{smurf.height} tall</strong>
          <p>{smurf.age} smurf years old</p>
        </div>
      )}
    </div >
  );
};

SmurfCard.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default SmurfCard;

