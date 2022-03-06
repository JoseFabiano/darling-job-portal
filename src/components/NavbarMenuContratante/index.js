import { Link } from 'react-router-dom';
import { Background, AlignImg } from './styles';
import { useHistory } from 'react-router-dom';
import api from '../../api';

export const NavbarMenuContratante = () => {
  var usuario = localStorage.getItem('contratante');
  var contratante = JSON.parse(usuario);
  const history = useHistory();
  const handler = () => {
    history.push('/');
  };
  async function logOut() {
    const resposta = await api
      .get(`/darlingjob/contratante/logout/${contratante.idContratante}`)
      .then((resposta) => {
        localStorage.clear();
        handler();
      })
      .catch((erro) => {
        console.log('Erro ao sair da conta.');
      });
  }

  return (
    <>
      <Background>
        <AlignImg>
          <Link to="/busca">
            <img src="lupa.svg" alt="logo de busca" id="logo-busca" />
          </Link>

          <img
            src="logout.svg"
            alt="logo de logout"
            id="logo-logout"
            onClick={logOut}
          />
        </AlignImg>
      </Background>
    </>
  );
};
