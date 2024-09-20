import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Bem-vindo ao teste de personalidade</h1>
      <Link to="/questions">
        <button>Iniciar Teste</button>
      </Link>
    </div>
  );
}

export default Home;
