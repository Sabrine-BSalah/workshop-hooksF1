import React, { useState } from 'react'
import { Form, Button } from "react-bootstrap"
import './App.css';
import Counter from './components/Counter'


function App() {

  const [show, setShow] = useState(false)
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");


  return (
    <div className="App">
      <div >

        {/* inputs firstName, lastname */}
        <div>
          <Form.Control type="text"
            placeholder="Enter your firstName ..."
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          /><br />

          <Form.Control type="text"
            placeholder="Enter your lastName ..."
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          /><br />
        </div>
        <br />

        {/* Show button */}
        <Button variant="info"
          onClick={() => setShow(!show)}
          className="toggle">{show ? "Hide Counter" : "Show Counter"}
        </Button>
      </div>

      {/* {show===true ? <Counter /> : null} */}
      {show && <Counter firstName={firstName} lastName={lastName} />}
    </div>
  );
}

export default App;
