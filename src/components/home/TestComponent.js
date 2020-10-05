import React from "react";
import {Button} from 'react-bootstrap'
import '../../styles/test-styles.css';

const TestComponent = () => (
  <>
    <Button variant="primary">Primary</Button>{" "}
    <Button variant="secondary">Secondary</Button>{" "}
    <Button variant="success">Success</Button>{" "}
    <Button variant="warning">Warning</Button>{" "}
    <Button variant="danger">Danger</Button>{" "}
    <Button variant="info">Info</Button>
    <Button variant="light">Light</Button>{" "}
    <Button variant="dark">Dark</Button>
    <Button variant="link">Link</Button>
  </>
);

const TestComponent2 = () => (
    <>
      <Button variant="primary">Primary</Button>{" "}
      <Button variant="secondary">Secondary</Button>{" "}
      <Button variant="success">Success</Button>{" "}
      <Button variant="warning">Warning</Button>{" "}
      <Button variant="danger">Danger</Button>{" "}
      <Button variant="info">Info</Button>
      <Button variant="light">Light</Button>{" "}
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>
    </>
  );

const DivComponent = () => (
    <>
    <div className='div1'>Div1</div>
    <div className='div2'>Div2</div>
    <div className='div3'>Div3</div>
    </>
);

// export default TestComponent;

export {
    TestComponent,
    TestComponent2,
    DivComponent
};