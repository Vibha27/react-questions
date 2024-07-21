import './style.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="Home">
      <h3>React Maching Coding</h3>
      <ol>
        <li><Link to={'/todo-app'}>To-Do App</Link></li>
        <li><Link to={'/infinite-scroll'}>Infinite Scroll App</Link></li>
      </ol>
    </div>
  );
}

export default Home;
