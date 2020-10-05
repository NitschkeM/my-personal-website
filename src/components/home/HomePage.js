import React from "react";
import { Link } from "react-router-dom";

// import {SidebarCategories} from './SidebarCategories.js';
import SidebarCategories from './SidebarCategories.js';

// List of Categories in SideBar
// One element per Category
//  Have each element in markup
// OR
//  Generate elements based on list of categories

// Do I want Categories to expand
// OR
// Do I want Categories to be links?

import '../../styles/test-styles.css';

const categories = ['Learning', 'Math', 'Physics', 'Programming'];

const HomePage = () => (
  <>
    {/* <div style={styles.wrapper()}>
      <div style={styles.one()}>One</div>
      <div style={styles.two()}>Two</div>
      <div style={styles.three()}>Three</div>
      <div style={styles.four()}>Four</div>
      <div style={styles.five()}>Five</div>
      <div style={styles.six()}>Six</div>
    </div> */}
    {/* <div style={styles.wrapper()}>
      <div style style={styles.one()}>One</div>
      <div style={styles.two()}>Two</div>
      <div style={styles.three()}>Three</div>
    </div> */}
    <div className='wrapper'>
      <div className='header'>One</div>
      <div className='jumbotron'>One</div>
      <div className='sideBar'>
        <SidebarCategories categoryList={categories}/>
      </div>
      <div className='mainContent'>Two</div>
      {/* <div className='three'>Three</div> */}
    </div>

  </>
);

export default HomePage;

const styles = {
  wrapper: () => ({
    display: "grid",
    // gridTemplateColumns: "repeat(3, 1fr)",
    // gridTemplateColumns: "2fr minmax(max-content, 70%) 1fr",
    // gridTemplateColumns: "minmax(max-content, 300px) 1fr",
    gridTemplateColumns: "1fr minmax(100px, 70%)",

    // gridGap: "10px",
    // gridAutoRows: "minmax(100px, auto)",
  }),
  one: () => ({
    // gridColumn: "1 / 3",
    // gridRow: "1",
    backgroundColor: "cyan",
  }),
  two: () => ({
    // gridColumn: "2 / 4",
    // gridRow: "1 / 3",
    backgroundColor: "darkblue",
  }),
  three: () => ({
    // gridColumn: "1",
    // gridRow: "2 / 5",
    backgroundColor: "darkcyan",
  }),
};


// const styles = {
//   wrapper: () => ({
//     display: 'grid',
//     gridTemplateColumns: "repeat(3, 1fr)",
//     gridGap: "10px",
//     gridAutoRows: "minmax(100px, auto)",
//   }),
//   one: () => ({  
//     gridColumn: '1 / 3',
//     gridRow: '1',
//     backgroundColor: 'cyan'}),
//   two: () => ({  
//     gridColumn: '2 / 4',
//     gridRow: '1 / 3',
//     backgroundColor: 'darkblue'}),
//   three: () => ({  
//     gridColumn: '1',
//     gridRow: '2 / 5',
//     backgroundColor: 'darkcyan'}),
//   four: () => ({  
//     gridColumn: '3',
//     gridRow: '3',
//     backgroundColor: 'darkcyan'}),
//   five: () => ({  
//     gridColumn: '2',
//     gridRow: '4',
//     backgroundColor: 'darkcyan'}),
//   six: () => ({  
//     gridColumn: '3',
//     gridRow: '4',
//     backgroundColor: 'darkcyan'}),
// };










    {/* <div className="jumbotron">
      <h1>HomePage</h1>
      <Link to="about" className="btn btn-primary btn-lg">
        Link to AboutPage
      </Link>
    </div> */}

    {/* <div>
      <TestComponent />
    </div>

    <div>
      <TestComponent2 />
    </div>

    <>
      <DivComponent />
    </> */}


