import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Verticalcards.css"

function Verticalcards(props) {
  return (
    <div >
    <Card className='card1' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.x.image} height="150px" width="100px"/>
      <Card.Body>
        <Card.Title>{props.x.cname}</Card.Title>
        <Card.Text>
          {props.x.content}
        </Card.Text>
        <Button variant="primary">View Details</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Verticalcards