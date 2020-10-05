import React from 'react';
import { Link } from 'react-router-dom';


import '../../styles/test-styles.css';

const WritingPage = () => (
  <div>
    <h1>WritingPage</h1>
    <p>Paragraph</p>
    <Link to="" className="btn btn-primary btn-lg">
      Home
    </Link>
    <div class="wrapper">
      <div class="one">One</div>
      <div class="two">Two</div>
      <div class="three">Three</div>
      <div class="four">Four</div>
      <div class="five">Five</div>
      <div class="six">Six</div>
    </div>
  </div>
);

export default WritingPage;

