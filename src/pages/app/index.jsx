import './index.scss';

// navegação - link
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div className="pagina-app pagina">

      <header className='cabecalho'>

          <h1 className='titulo'>Estudos de ReactJS <i className="fas fa-star"></i></h1>

      </header>

      <section className='secao'>
        <h1>Estudando ReactJS</h1>

        {/* <input type="text" placeholder='Digite aqui'/>
        <br /><br />
          <select>
            <option>Item 1</option>
            <option>Item 2</option>
          </select>
        <br /><br />
        <button> Clique aqui! </button> */}
      
        <ul>
          <li>
            <Link to='/contato'>Ir para contato</Link>
          </li>
        </ul>
      </section>
    </div>
  );
}

