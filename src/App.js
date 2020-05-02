//jshint esversion: 9
import React, { useState } from 'react';
import './App.css';
import Header from "./components/Header";
import List from "./components/List";
import { Form, Button, Col } from "react-bootstrap";

const today = new Date();
const year = today.getFullYear();

function App() {
  const [state, setState] = useState("");
  const [list, setList] = useState([]);

  const updateList = (event)=> {
        setState(event.target.value);
    };
  
  const addItem = (event) => {
    event.preventDefault();
    setList(prevItems => [...prevItems, state]);
    setState("");
  };

  const handleClick = id => {
    setList(list.filter((item, index) => index !== id ));
  };

  return (
    <div className="out-container">

      <nav >
        <div className="container">Todo App</div>
      </nav>

      <div className="container main" >
        <Header />
        <Form>
          <Form.Row>
              <Form.Control placeholder="To-do Item"
                  name="listItem"
                  type="text"
                  value={state}
                  onChange={updateList}
                  className="input"                    
              />
              <Button as={Col} variant="warning" onClick={addItem} className="submit">
                  Add Item
              </Button>
          </Form.Row>
      </Form>
      
        <hr />
        <ul className="to-do-items">
        {list.map((item, index) => <List onChecked={handleClick} 
                                         key={index} 
                                         listText={item} 
                                         id={index}  
                                         /> )}
      </ul>
      </div>

      <footer className="page-footer font-small blue primary">
        <div className="footer-copyright text-center py-3">© {year} Copyright: Brighton</div>
      </footer>
    </div>

  );
}

export default App;
