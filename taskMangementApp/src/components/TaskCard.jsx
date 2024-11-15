import React from 'react'
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';




const Taskcard = () => {
  return (
    <>
      <div>
        <Link to={'/dashboard'} style={{ textDecoration: 'none' }}>
          <Card style={{ width: '18rem', backgroundColor: 'white' }} >
            <Card.Body>
              <Card.Title>Daily Task</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Creatt your Own</Card.Subtitle>
              <Card.Text>
                You Can add edit and remove task here
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
      </div>
    </>
  )
}

export default Taskcard