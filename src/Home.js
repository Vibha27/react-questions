import './style.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="Home">
      <h3>React Maching Coding</h3>
      <ol>
        <li><Link to={'/todo-app'}>To-Do App</Link></li>
        <li><Link to={'/infinite-scroll'}>Infinite Scroll App using intersection observer</Link></li>
        <li><Link to={'/infinite-scroll-window'}>Infinite Scroll App using Window Inner Height</Link></li>
        <li><Link to={'/traffic-light'}>Traffic Signal App</Link></li>
        <li><Link to={'/nested-circles'}>Nested Circles App</Link></li>
        <li><Link to={'/pagination'}>Pagination App</Link></li>
        <li><Link to={'/typeahead'}>Typeahead App</Link></li>
        <li><Link to={'/counter'}>Counter App</Link></li>
        <li><Link to={'/breadcrumb'}>Breadcrumb App</Link></li>
        <li><Link to={'/nested-object'}>Dynamic Nested Object Representation App</Link></li>
        <li><Link to={'/accordion'}>Accordion for FAQs</Link></li>
        <li><Link to={'/phonenumber'}>PhoneNumber Formatter</Link></li>
        <li><Link to={'/slider'}>Slider</Link></li>
        <li><Link to={'/blogs'}>Blogs</Link></li>
        <li><Link to={'/sorting'}>Sorting Table</Link></li>
        <li><Link to={'/word-omitter'}>Word Omitter</Link></li>
        <li><Link to={'/file-explorer'}>File Explorer</Link></li>
        <li><Link to={'/progress-bar'}>Progress Bar</Link></li>
        <li><Link to={'/tictactoe'}>Tic Tac Toe Game</Link></li>
        <li><Link to={'/draw-circle-onclick'}>Draw Circle OnClick</Link></li>
        <br />
        <h4>Hooks</h4>
        <br />
        <li><Link to={'/debounced-hook'}>Debounced Hook</Link></li>
      </ol>
    </div>
  );
}

export default Home;
