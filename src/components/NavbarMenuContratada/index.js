import { Link } from 'react-router-dom';
import { Background, AlignImg } from './styles';
import { useHistory } from 'react-router-dom';
import api from '../../api';


export const NavbarMenuContratada = () => {
  var usuario = localStorage.getItem('contratado');
  var contratado = JSON.parse(usuario);
  const history = useHistory();
  const handler = () => {
    history.push('/');
  };
  async function logOut() {
    const resposta = await api.get(`/darlingjob/contratado/logout/${contratado.idContratado}`)
    .then((resposta) => {
      localStorage.clear();
      handler();
    }).catch((erro) => {
      console.log("Erro ao fazer logout.");
    });
  }

  return (
    <>
      <Background>
        <AlignImg>
          <Link to="/propostaContratada">
            <img
              src="notificacao.svg"
              alt="logo de notificação"
              id="logo-notific"
            />
          </Link>

          {/* <Link to="/calendarioContratada">
          <img src="calendario.svg" alt="logo de calendário" id="logo-calend" />
          </Link> */}

          <Link to="/dash">
            <img src="dashboard.svg" alt="logo de dashboard" id="logo-dash" />
          </Link>

          <Link to="/chatContratada">
            <img src="chat.svg" alt="logo de chat" id="logo-chat" />
          </Link>

          <Link to="/perfilContratada">
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
