//jshint esversion: 9
import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";

const InputArea = ({ onClicked }) => {
  const [state, setState] = useState("");
  const updateList = (event) => {
    setState(event.target.value);
  };
  return (
    <Form
      onSubmit={(event) => {
        onClicked(state, setState, event);
      }}
    >
      <Form.Row>
        <Form.Control
          placeholder="To-do Item"
          name="listItem"
          type="text"
          value={state}
          onChange={updateList}
          className="input"
        />
        <Button
          as={Col}
          onClick={(event) => {
            onClicked(state, setState, event);
          }}
          className="submit"
        >
          Add Item
        </Button>
      </Form.Row>
    </Form>
  );
};

export default InputArea;
