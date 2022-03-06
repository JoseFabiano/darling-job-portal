import { Link } from 'react-router-dom';
import { Background, AlignImg } from './styles';
import { useHistory } from 'react-router-dom';
import api from '../../api';

export const NavbarMenuContratada = () => {
  var usuario = localStorage.getItem('profissional');
  var contratado = JSON.parse(usuario);
  const history = useHistory();
  const handler = () => {
    history.push('/');
  };
  async function logOut() {
    const resposta = await api
      .get(`/darlingjob/contratado/logout/${contratado.idContratado}`)
      .then((resposta) => {
        localStorage.clear();
        handler();
      })
      .catch((erro) => {
        console.log('Erro ao fazer logout.');
      });
  }

  return (
    <>
      <Background>
        <AlignImg>
          <Link to="/dash">
            <img src="dashboard.svg" alt="logo de dashboard" id="logo-dash" />
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
