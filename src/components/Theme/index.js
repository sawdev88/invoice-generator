import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Card, Button } from 'react-bootstrap'
import doc from '../images/document.png'

export default(props) => {
  return(
    <div>
      <h1>Select Theme</h1>

      <div className="mt-4">
        <Card style={{ width: '18rem' }} className="template-card">
          <Card.Img variant="top" src={ doc } />
          <Card.Body>
            <Card.Title>Default</Card.Title>
            <Card.Text>
              Tried and true
            </Card.Text>
            <Link className="btn btn-primary" to="/generator">Select</Link>
          </Card.Body>
        </Card>

      </div>
    </div>
  )
}
