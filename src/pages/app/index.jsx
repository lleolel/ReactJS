import './index.scss';

// navegação - link
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">

          <h1 className='titulo'>Estudos de ReactJS <i className="fas fa-star"></i></h1>

        <ul>
          <li>
            <Link to='/contato'>Ir para contato</Link>
          </li>
        </ul>
    </div>
  );
}

