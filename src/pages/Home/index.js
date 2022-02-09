import React from 'react';
import { NavbarHome } from '../../components/NavbarHome';
import {
  BackgroundHome1,
  BackgroundHome2,
  Busca,
  Conecting,
  Feed,
  Feed2,
  Feed3,
  FeedEstrela,
  FeedGeral,
  FeedTexto,
  Line,
  Line2,
  Org,
  Org2,
  Org3,
  Redes,
  Rodape,
  WorkSec,
  WorkSec2,
  WorkSec3,
} from './styles';

export const Home = () => {
  return (
    <>
      <NavbarHome />
      <BackgroundHome1>
        <img src="logo-robo-estrelas.svg" alt="logo do projeto com estrelas" id="logo-estrelas"/>
      </BackgroundHome1>
      <BackgroundHome2>
      <img src="conect.svg" alt="logo conect" id="logo-conect" />
      </BackgroundHome2>
      <Conecting>
        <h1>Conectando</h1>
        <p>
          Darling Job veio para inovar sua visão de aplicativos de trabalho,
          aqui pensamos em você, independente de qual lado da moeda esteja.
        </p>
      </Conecting>
      <WorkSec>
        
        <WorkSec2>
        <p id="seguranca">“Sua segurança é nossa prioridade”</p>
        <p>
          Nosso sistema de cadastro, verifica antecendentes criminais em ambos
          os lados. Verificamos sua identidade, assim evitando fraudes e contas
          fakes.
        </p>

        </WorkSec2>
        <WorkSec3>
        <h1>Trabalhe com Segurança</h1>
            <img src="protect.svg" alt="logo proteção" id="logo-protect" />
        </WorkSec3>
      </WorkSec>


      <Org>
        <Org2>
        <h1>Organize sua Vida</h1>
        <p id="organiza">“Organize sua vida”</p>
        <p>
          Disponibilizamos as ferramentas que vão te dar controle de sua renda.
          Além disso, uma agenda virtual, marcando os dias disponiveis e
          indisponiveis, com avisos diarios de seus trabalhos.
        </p>
        </Org2>
        <Org3>
          <img src="invest.svg" alt="logo organização" id="logo-invest" />
        </Org3>
      </Org>


      <Busca>
        <h1>Busque os Locais Mais Próximos</h1>
        <img src="map.svg" alt="mapa de busca" id="mapa-busca" />
      </Busca>

<FeedGeral>
      <Feed>
        <Feed2>
        <h1>Feedbacks e Avaliações</h1>
        <FeedTexto>
        <p>
          “Ótima diarista, sempre muito pontual, trabalho impecável e rápido,
          contrataria novamente sem duvidas.“
        </p>
        </FeedTexto>
        <h2 id="contratado">Contratado</h2>
        <img src="empresaria.svg" alt="logo da contratada" id="logo-empresaria"/>
        <FeedEstrela>
        <img src="estrelas.svg" alt="estrelas de avaliação" id="estrelas-aval"/>
        </FeedEstrela>
        <h3>Rosana</h3>

        </Feed2>

        <Feed3>
        <FeedTexto>
        <p id="p-right">
          “Senhor muito educado e respeitoso, foi um prazer conhecê-lo. casa
          linda e facil de limpar.“
        </p>
        </FeedTexto>
        <h2 id="h2-right">Contratante</h2>
        <img src="empresario.svg" alt="logo do contratante" id="logo-empresario"/>
        <FeedEstrela>
        <img src="estrelas.svg" alt="estrelas de avaliação" id="estrelas-aval-right"/>
        </FeedEstrela>
        <h3 id="h3-right">Aldemir</h3>   
        </Feed3>
      </Feed>
      </FeedGeral>

      <Rodape>
        <Redes>
        <img src="facebook.svg" alt="logo do facebook" id="face" />
        <img src="instagram.svg" alt="logo do instagram" id="insta" />
        <img src="linkedin.svg" alt="logo do linkedin" id="link" />
        </Redes>
        <img src="logo-robo.svg" alt="logo do rodapé" id="logo-rod" />
        <Line />
        <Line2 />
        <h1>Darling.job@hotmail.com</h1>
      </Rodape>
    </>
  );
};
