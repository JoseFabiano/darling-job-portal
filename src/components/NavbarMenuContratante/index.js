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
    const resposta = await api.get(`/darlingjob/contratante/logout/${contratante.idContratante}`)
    .then((resposta) => {
      localStorage.clear();
      handler()
    }).catch((erro) => {
      console.log("Erro ao sair da conta.");
    });
  }

  return (
    <>
      <Background>
        <AlignImg>
          <Link to="/propostaContratante">
            <img
              src="notificacao.svg"
              alt="logo de notificação"
              id="logo-notific"
            />
          </Link>

          <Link to="/busca">
            <img src="lupa.svg" alt="logo de busca" id="logo-busca" />
          </Link>

          <Link to="/chatContratante">
            <img src="chat.svg" alt="logo de chat" id="logo-chat" />
          </Link>

          <Link to="/perfilContratante">
            <img src="user-white.svg" alt="logo de user" id="logo-user" />
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
