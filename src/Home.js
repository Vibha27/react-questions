import './style.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="Home">
      <h3>React Maching Coding</h3>
      <ol>
        <li><Link to={'/todo-app'}>To-Do App</Link></li>
        <li><Link to={'/infinite-scroll'}>Infinite Scroll App</Link></li>
        <li><Link to={'/traffic-light'}>Traffic Signal App</Link></li>
        <li><Link to={'/nested-circles'}>Nested Circles App</Link></li>
        <li><Link to={'/pagination'}>Pagination App</Link></li>
        <li><Link to={'/typeahead'}>Typeahead App</Link></li>
        <li><Link to={'/counter'}>Counter App</Link></li>
        <li><Link to={'/breadcrumb'}>Breadcrumb App</Link></li>
        <li><Link to={'/nested-object'}>Dynamic Nested Object Representation App</Link></li>
      </ol>
    </div>
  );
}

export default Home;
