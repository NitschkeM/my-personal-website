import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => (
  <div>
    <h1>AboutPage</h1>
    <p>Paragraph</p>
    <Link to="" className="btn btn-primary btn-lg">
      Home
    </Link>

    <div style={styles.testStyle1()}>Here Is Div</div>
    
    {/* Passing two style function to the style property results in the last style function passed overriding the first one. */}
    {/* <div style={styles.testStyle1(), styles.testStyle2()}>Here Is Div</div> */} 
  </div>
);

export default AboutPage;

const styles = {
  testStyle1: () =>({
    backgroundColor: 'aqua'
  }),
  testStyle2: () =>({
    color: 'yellow'
  })
}