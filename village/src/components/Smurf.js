import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Icon, Image } from 'semantic-ui-react';

const Smurf = props => {
  return (
    <Card>
      <Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" wrapped ui={false} />
      <Card.Content>
        <Link to={`/edit-smurf-form/${props.id}`}><Card.Header>{props.name}</Card.Header></Link>
        <Card.Meta><span className="date">{props.height} cm tall</span></Card.Meta>
        <Card.Description>{props.name} is {props.age} years old</Card.Description>
      </Card.Content>
    </Card >
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

