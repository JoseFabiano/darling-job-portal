import React, { useState } from 'react';
import api from '../../api';
import { Navbar } from '../../components/Navbar';
import { Respon } from '../../components/Respon';
import InputMask from 'react-awesome-mask-input';
import {
  BoxButton,
  BoxForm,
  BoxForm1,
  BoxInput,
  BoxInput1,
  BoxInput2,
  BoxInput3,
  CheckFeriado,
  CheckGender,
  CheckSemana,
  CheckService,
  CheckUser,
  Container,
  Form,
  Gender,
  Line,
  SelecionarOpcao,
  Title,
  CheckWords,
} from './styles';
import { Link, useHistory } from 'react-router-dom';

export const CadastroContratada = (props) => {
  const [cidade, setCidade] = useState();
  const [rua, setRua] = useState();
  const [bairro, setBairro] = useState();
  const [estado, setEstado] = useState();
  const [validCep, setInvalidCep] = useState();

  const [cpfDigitado, setCpf] = useState();
  const [dtNascimentoDigitado, setDtNascimento] = useState();
  const [sexoDigitado, setSexo] = useState();
  const [telefoneDigitado, setTelefone] = useState();
  const [celularDigitado, setCelular] = useState();
  const [rgDigitado, setRg] = useState();
  const [dtEmissaoDigitado, setDtEmissao] = useState();
  const [cep, setCep] = useState();
  const [estadoEmissorDigitado, setEstadoEmissor] = useState();
  const [numeroDigitado, setNumero] = useState();
  const [complementoDigitado, setComplemento] = useState();
  const [paisDigitado, setPais] = useState();
  const [dtServicoDigitado, setDtServico] = useState([]);
  const [tipoServico, setTipoServico] = useState([]);
  const [hrInicioDigitado, setHrInicio] = useState();
  const [hrTerminoDigitado, setHrTermino] = useState();
  const [trabFeriadosDigitado, setTrabFeriados] = useState();
  const [hrInicioFeriadosDigitado, setHrInicioFeriados] = useState();
  const [hrTerminoFeriadosDigitado, setHrTerminoFeriados] = useState();
  const [termoRespDigitado, setTermoResp] = useState();

  const history = useHistory();
  const handler = () => {
    history.push('/login');
  };

  async function pesquisacep(valor) {
    console.log(valor);
    try {
      const { data } = await api.get(`https://viacep.com.br/ws/${valor}/json/`);
      console.log(data);
      setBairro(data.bairro);
      setCidade(data.localidade);
      setRua(data.logradouro);
      setEstado(data.uf);
      setInvalidCep(false);
    } catch (error) {
      setInvalidCep(true);
      setBairro('');
      setCidade('');
      setRua('');
      setEstado('');
    }
  }

  async function cadastrarContratado(e) {
    e.preventDefault();

    api
      .post('http://34.235.26.14:8080/usuarios', {
        email: props.email,
        nome: props.nome,
        cpf: cpfDigitado,
        rg: rgDigitado,
        genero: sexoDigitado,
        data_nascimento: dtNascimentoDigitado,
        telefone_fixo: telefoneDigitado,
        telefone_celular: celularDigitado,
        senha: props.senha,
        tipo_servico: tipoServico,
        trabalhaFeriados: trabFeriadosDigitado,
        horario_inicio_dia: hrInicioDigitado,
        horarioFimDia: hrTerminoDigitado,
        horario_feriado_inicio: hrInicioFeriadosDigitado,
        horario_feriado_fim: hrTerminoFeriadosDigitado,
        role: 'teste',
        endereco: {
          endereco: rua,
          cep: cep,
          complemento: complementoDigitado,
          numero: numeroDigitado,
          bairro: bairro,
          pais: paisDigitado,
          estado: estado,
          cidade: cidade,
        },
      })
      .then((resposta) => {
        alert('Contratado cadastrado!');
        handler();
        console.log(api.data);
      })
      .catch((erro) => {
        console.log('Erro ao cadastrar contratado!', api.data);
      });

    console.log(props);
  }

  return (
    <>
      <Navbar />
      <Container>
        <form>
          <SelecionarOpcao id="group1">
            <label>
              <span>Contratante </span>
              <input
                type="radio"
                id="contratante"
                name="opcao"
                onChange={() =>
                  document.getElementById('contratante').checked
                    ? (document.getElementById('teste').style.display = 'none')
                    : null
                }
              />
            </label>
            <label>
              <input
                type="radio"
                id="contratado"
                onChange={() =>
                  document.getElementById('contratado').checked
                    ? (document.getElementById('teste').style.display = 'block')
                    : null
                }
                name="opcao"
              />
              <span> Contratado</span>
            </label>
          </SelecionarOpcao>
        </form>
        <Title>
          <h3>Dados pessoais</h3>
          <Line />
        </Title>
        <Form>
          <BoxForm>
            <BoxInput>
              <h3>*CPF:</h3>
              <InputMask
                type="text"
                name="document"
                mask={['999.999.999-99']}
                placeholder="Digite seu CPF"
                onChange={(e) => setCpf(e.target.value)}
              ></InputMask>
            </BoxInput>
            <BoxInput>
              <h3>*Data de nascimento:</h3>
              <InputMask
                type="text"
                name="date"
                mask={['99/99/9999']}
                onChange={(e) => setDtNascimento(e.target.value)}
                placeholder="dd/mm/aaaa"
              ></InputMask>
            </BoxInput>

            <CheckGender>
              <h3>*Sexo</h3>
              <Gender>
                <label>
                  <input
                    type="radio"
                    id="masculino"
                    onChange={() =>
                      document.getElementById('masculino').checked
                        ? setSexo('Masculino')
                        : null
                    }
                    name="gender"
                  />
                  <span>Masculino</span>
                </label>
                <label>
                  <input
                    type="radio"
                    id="feminino"
                    onChange={() =>
                      document.getElementById('feminino').checked
                        ? setSexo('Feminino')
                        : null
                    }
                    name="gender"
                  />
                  <span>Feminino</span>
                </label>
              </Gender>
            </CheckGender>
          </BoxForm>

          <BoxForm>
            <BoxInput1>
              <h3>Telefone:</h3>
              <InputMask
                type="text"
                name="document"
                mask={['(99) 9999-9999']}
                onChange={(e) => setTelefone(e.target.value)}
                placeholder="Digite Seu Telefone"
              ></InputMask>
            </BoxInput1>
            <BoxInput1>
              <h3>*Celular:</h3>
              <InputMask
                type="text"
                mask={['(99) 9 9999-9999']}
                onChange={(e) => setCelular(e.target.value)}
                placeholder="Digite seu celular"
              ></InputMask>
            </BoxInput1>
          </BoxForm>

          <BoxForm>
            <BoxInput2>
              <h3>*RG:</h3>
              <InputMask
                type="text"
                mask={['99.999.999-9']}
                onChange={(e) => setRg(e.target.value)}
                placeholder="Digite seu RG"
              ></InputMask>
            </BoxInput2>
            <BoxInput2>
              <h3>*Data de Emiss??o:</h3>
              <InputMask
                type="text"
                name="date"
                mask={['99/99/9999']}
                onChange={(e) => setDtEmissao(e.target.value)}
                placeholder="dd/mm/aaaa"
              ></InputMask>
            </BoxInput2>
            <BoxInput2>
              <h3>*Estado Emissor:</h3>
              <select
                id="emissor"
                onChange={(e) => setEstadoEmissor(e.target.value)}
                name="estado"
              >
                <option value="">-- Selecione --</option>
                <option value="AC">Acre</option>
                <option value="AL">Alagoas</option>
                <option value="AP">Amap??</option>
                <option value="AM">Amazonas</option>
                <option value="BA">Bahia</option>
                <option value="CE">Cear??</option>
                <option value="DF">Distrito Federal</option>
                <option value="ES">Esp??rito Santo</option>
                <option value="GO">Goi??s</option>
                <option value="MA">Maranh??o</option>
                <option value="MT">Mato Grosso</option>
                <option value="MS">Mato Grosso do Sul</option>
                <option value="MG">Minas Gerais</option>
                <option value="PA">Par??</option>
                <option value="PB">Para??ba</option>
                <option value="PR">Paran??</option>
                <option value="PE">Pernambuco</option>
                <option value="PI">Piau??</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="RN">Rio Grande do Norte</option>
                <option value="RS">Rio Grande do Sul</option>
                <option value="RO">Rond??nia</option>
                <option value="RR">Roraima</option>
                <option value="SC">Santa Catarina</option>
                <option value="SP">S??o Paulo</option>
                <option value="SE">Sergipe</option>
                <option value="TO">Tocantins</option>
                <option value="EX">Estrangeiro</option>
              </select>
            </BoxInput2>
          </BoxForm>
        </Form>
        <Title>
          <h3 id="titulo2">Endere??o</h3>
        </Title>
        {validCep && <span>CEP Invalido</span>}
        <BoxForm>
          <BoxInput2>
            <h3>*CEP:</h3>
            <input
              type="text"
              onChange={(e) => setCep(e.target.value)}
              onBlur={(e) => pesquisacep(e.target.value)}
              id="cep"
              placeholder=""
            ></input>
          </BoxInput2>
          <BoxInput2>
            <h3>*Endere??o:</h3>
            <input
              type="text"
              value={rua}
              name="rua"
              placeholder=""
              id="rua"
            ></input>
          </BoxInput2>
          <BoxInput2>
            <h3>*N??mero:</h3>
            <input
              type="number"
              onChange={(e) => setNumero(e.target.value)}
              placeholder=""
            ></input>
          </BoxInput2>
          <BoxInput2>
            <h3>Complemento:</h3>
            <input
              type="text"
              onChange={(e) => setComplemento(e.target.value)}
              id="complemento"
              placeholder="Ap 14 Bloco 2"
            ></input>
          </BoxInput2>
        </BoxForm>

        <BoxForm id="box">
          <BoxInput2>
            <h3>*Bairro:</h3>
            <input
              type="text"
              placeholder=""
              value={bairro}
              id="bairro"
            ></input>
          </BoxInput2>
          <BoxInput2>
            <h3>*Pa??s:</h3>
            <select
              name="paises"
              onChange={(e) => setPais(e.target.value)}
              id="paises"
            >
              <option value="Brasil" selected="selected">
                Brasil
              </option>
              <option value="Afeganist??o">Afeganist??o</option>
              <option value="??frica do Sul">??frica do Sul</option>
              <option value="Alb??nia">Alb??nia</option>
              <option value="Alemanha">Alemanha</option>
              <option value="Andorra">Andorra</option>
              <option value="Angola">Angola</option>
              <option value="Anguilla">Anguilla</option>
              <option value="Antilhas Holandesas">Antilhas Holandesas</option>
              <option value="Ant??rctida">Ant??rctida</option>
              <option value="Ant??gua e Barbuda">Ant??gua e Barbuda</option>
              <option value="Argentina">Argentina</option>
              <option value="Arg??lia">Arg??lia</option>
              <option value="Arm??nia">Arm??nia</option>
              <option value="Aruba">Aruba</option>
              <option value="Ar??bia Saudita">Ar??bia Saudita</option>
              <option value="Austr??lia">Austr??lia</option>
              <option value="??ustria">??ustria</option>
              <option value="Azerbaij??o">Azerbaij??o</option>
              <option value="Bahamas">Bahamas</option>
              <option value="Bahrein">Bahrein</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="Barbados">Barbados</option>
              <option value="Belize">Belize</option>
              <option value="Benim">Benim</option>
              <option value="Bermudas">Bermudas</option>
              <option value="Bielorr??ssia">Bielorr??ssia</option>
              <option value="Bol??via">Bol??via</option>
              <option value="Botswana">Botswana</option>
              <option value="Brunei">Brunei</option>
              <option value="Bulg??ria">Bulg??ria</option>
              <option value="Burkina Faso">Burkina Faso</option>
              <option value="Burundi">Burundi</option>
              <option value="But??o">But??o</option>
              <option value="B??lgica">B??lgica</option>
              <option value="B??snia e Herzegovina">B??snia e Herzegovina</option>
              <option value="Cabo Verde">Cabo Verde</option>
              <option value="Camar??es">Camar??es</option>
              <option value="Camboja">Camboja</option>
              <option value="Canad??">Canad??</option>
              <option value="Catar">Catar</option>
              <option value="Cazaquist??o">Cazaquist??o</option>
              <option value="Chade">Chade</option>
              <option value="Chile">Chile</option>
              <option value="China">China</option>
              <option value="Chipre">Chipre</option>
              <option value="Col??mbia">Col??mbia</option>
              <option value="Comores">Comores</option>
              <option value="Coreia do Norte">Coreia do Norte</option>
              <option value="Coreia do Sul">Coreia do Sul</option>
              <option value="Costa do Marfim">Costa do Marfim</option>
              <option value="Costa Rica">Costa Rica</option>
              <option value="Cro??cia">Cro??cia</option>
              <option value="Cuba">Cuba</option>
              <option value="Dinamarca">Dinamarca</option>
              <option value="Djibouti">Djibouti</option>
              <option value="Dominica">Dominica</option>
              <option value="Egito">Egito</option>
              <option value="El Salvador">El Salvador</option>
              <option value="Emirados ??rabes Unidos">
                Emirados ??rabes Unidos
              </option>
              <option value="Equador">Equador</option>
              <option value="Eritreia">Eritreia</option>
              <option value="Esc??cia">Esc??cia</option>
              <option value="Eslov??quia">Eslov??quia</option>
              <option value="Eslov??nia">Eslov??nia</option>
              <option value="Espanha">Espanha</option>
              <option value="Estados Federados da Micron??sia">
                Estados Federados da Micron??sia
              </option>
              <option value="Estados Unidos">Estados Unidos</option>
              <option value="Est??nia">Est??nia</option>
              <option value="Eti??pia">Eti??pia</option>
              <option value="Fiji">Fiji</option>
              <option value="Filipinas">Filipinas</option>
              <option value="Finl??ndia">Finl??ndia</option>
              <option value="Fran??a">Fran??a</option>
              <option value="Gab??o">Gab??o</option>
              <option value="Gana">Gana</option>
              <option value="Ge??rgia">Ge??rgia</option>
              <option value="Gibraltar">Gibraltar</option>
              <option value="Granada">Granada</option>
              <option value="Gronel??ndia">Gronel??ndia</option>
              <option value="Gr??cia">Gr??cia</option>
              <option value="Guadalupe">Guadalupe</option>
              <option value="Guam">Guam</option>
              <option value="Guatemala">Guatemala</option>
              <option value="Guernesei">Guernesei</option>
              <option value="Guiana">Guiana</option>
              <option value="Guiana Francesa">Guiana Francesa</option>
              <option value="Guin??">Guin??</option>
              <option value="Guin?? Equatorial">Guin?? Equatorial</option>
              <option value="Guin??-Bissau">Guin??-Bissau</option>
              <option value="G??mbia">G??mbia</option>
              <option value="Haiti">Haiti</option>
              <option value="Honduras">Honduras</option>
              <option value="Hong Kong">Hong Kong</option>
              <option value="Hungria">Hungria</option>
              <option value="Ilha Bouvet">Ilha Bouvet</option>
              <option value="Ilha de Man">Ilha de Man</option>
              <option value="Ilha do Natal">Ilha do Natal</option>
              <option value="Ilha Heard e Ilhas McDonald">
                Ilha Heard e Ilhas McDonald
              </option>
              <option value="Ilha Norfolk">Ilha Norfolk</option>
              <option value="Ilhas Cayman">Ilhas Cayman</option>
              <option value="Ilhas Cocos (Keeling)">
                Ilhas Cocos (Keeling)
              </option>
              <option value="Ilhas Cook">Ilhas Cook</option>
              <option value="Ilhas Fero??">Ilhas Fero??</option>
              <option value="Ilhas Ge??rgia do Sul e Sandwich do Sul">
                Ilhas Ge??rgia do Sul e Sandwich do Sul
              </option>
              <option value="Ilhas Malvinas">Ilhas Malvinas</option>
              <option value="Ilhas Marshall">Ilhas Marshall</option>
              <option value="Ilhas Menores Distantes dos Estados Unidos">
                Ilhas Menores Distantes dos Estados Unidos
              </option>
              <option value="Ilhas Salom??o">Ilhas Salom??o</option>
              <option value="Ilhas Virgens Americanas">
                Ilhas Virgens Americanas
              </option>
              <option value="Ilhas Virgens Brit??nicas">
                Ilhas Virgens Brit??nicas
              </option>
              <option value="Ilhas ??land">Ilhas ??land</option>
              <option value="Indon??sia">Indon??sia</option>
              <option value="Inglaterra">Inglaterra</option>
              <option value="??ndia">??ndia</option>
              <option value="Iraque">Iraque</option>
              <option value="Irlanda do Norte">Irlanda do Norte</option>
              <option value="Irlanda">Irlanda</option>
              <option value="Ir??">Ir??</option>
              <option value="Isl??ndia">Isl??ndia</option>
              <option value="Israel">Israel</option>
              <option value="It??lia">It??lia</option>
              <option value="I??men">I??men</option>
              <option value="Jamaica">Jamaica</option>
              <option value="Jap??o">Jap??o</option>
              <option value="Jersey">Jersey</option>
              <option value="Jord??nia">Jord??nia</option>
              <option value="Kiribati">Kiribati</option>
              <option value="Kuwait">Kuwait</option>
              <option value="Laos">Laos</option>
              <option value="Lesoto">Lesoto</option>
              <option value="Let??nia">Let??nia</option>
              <option value="Lib??ria">Lib??ria</option>
              <option value="Liechtenstein">Liechtenstein</option>
              <option value="Litu??nia">Litu??nia</option>
              <option value="Luxemburgo">Luxemburgo</option>
              <option value="L??bano">L??bano</option>
              <option value="L??bia">L??bia</option>
              <option value="Macau">Macau</option>
              <option value="Maced??nia">Maced??nia</option>
              <option value="Madag??scar">Madag??scar</option>
              <option value="Malawi">Malawi</option>
              <option value="Maldivas">Maldivas</option>
              <option value="Mali">Mali</option>
              <option value="Malta">Malta</option>
              <option value="Mal??sia">Mal??sia</option>
              <option value="Marianas Setentrionais">
                Marianas Setentrionais
              </option>
              <option value="Marrocos">Marrocos</option>
              <option value="Martinica">Martinica</option>
              <option value="Maurit??nia">Maurit??nia</option>
              <option value="Maur??cia">Maur??cia</option>
              <option value="Mayotte">Mayotte</option>
              <option value="Mold??via">Mold??via</option>
              <option value="Mong??lia">Mong??lia</option>
              <option value="Montenegro">Montenegro</option>
              <option value="Montserrat">Montserrat</option>
              <option value="Mo??ambique">Mo??ambique</option>
              <option value="Myanmar">Myanmar</option>
              <option value="M??xico">M??xico</option>
              <option value="M??naco">M??naco</option>
              <option value="Nam??bia">Nam??bia</option>
              <option value="Nauru">Nauru</option>
              <option value="Nepal">Nepal</option>
              <option value="Nicar??gua">Nicar??gua</option>
              <option value="Nig??ria">Nig??ria</option>
              <option value="Niue">Niue</option>
              <option value="Noruega">Noruega</option>
              <option value="Nova Caled??nia">Nova Caled??nia</option>
              <option value="Nova Zel??ndia">Nova Zel??ndia</option>
              <option value="N??ger">N??ger</option>
              <option value="Om??">Om??</option>
              <option value="Palau">Palau</option>
              <option value="Palestina">Palestina</option>
              <option value="Panam??">Panam??</option>
              <option value="Papua-Nova Guin??">Papua-Nova Guin??</option>
              <option value="Paquist??o">Paquist??o</option>
              <option value="Paraguai">Paraguai</option>
              <option value="Pa??s de Gales">Pa??s de Gales</option>
              <option value="Pa??ses Baixos">Pa??ses Baixos</option>
              <option value="Peru">Peru</option>
              <option value="Pitcairn">Pitcairn</option>
              <option value="Polin??sia Francesa">Polin??sia Francesa</option>
              <option value="Pol??nia">Pol??nia</option>
              <option value="Porto Rico">Porto Rico</option>
              <option value="Portugal">Portugal</option>
              <option value="Quirguist??o">Quirguist??o</option>
              <option value="Qu??nia">Qu??nia</option>
              <option value="Reino Unido">Reino Unido</option>
              <option value="Rep??blica Centro-Africana">
                Rep??blica Centro-Africana
              </option>
              <option value="Rep??blica Checa">Rep??blica Checa</option>
              <option value="Rep??blica Democr??tica do Congo">
                Rep??blica Democr??tica do Congo
              </option>
              <option value="Rep??blica do Congo">Rep??blica do Congo</option>
              <option value="Rep??blica Dominicana">Rep??blica Dominicana</option>
              <option value="Reuni??o">Reuni??o</option>
              <option value="Rom??nia">Rom??nia</option>
              <option value="Ruanda">Ruanda</option>
              <option value="R??ssia">R??ssia</option>
              <option value="Saara Ocidental">Saara Ocidental</option>
              <option value="Saint Martin">Saint Martin</option>
              <option value="Saint-Barth??lemy">Saint-Barth??lemy</option>
              <option value="Saint-Pierre e Miquelon">
                Saint-Pierre e Miquelon
              </option>
              <option value="Samoa Americana">Samoa Americana</option>
              <option value="Samoa">Samoa</option>
              <option value="Santa Helena, Ascens??o e Trist??o da Cunha">
                Santa Helena, Ascens??o e Trist??o da Cunha
              </option>
              <option value="Santa L??cia">Santa L??cia</option>
              <option value="Senegal">Senegal</option>
              <option value="Serra Leoa">Serra Leoa</option>
              <option value="Seychelles">Seychelles</option>
              <option value="Singapura">Singapura</option>
              <option value="Som??lia">Som??lia</option>
              <option value="Sri Lanka">Sri Lanka</option>
              <option value="Suazil??ndia">Suazil??ndia</option>
              <option value="Sud??o">Sud??o</option>
              <option value="Suriname">Suriname</option>
              <option value="Su??cia">Su??cia</option>
              <option value="Su????a">Su????a</option>
              <option value="Svalbard e Jan Mayen">Svalbard e Jan Mayen</option>
              <option value="S??o Crist??v??o e Nevis">
                S??o Crist??v??o e Nevis
              </option>
              <option value="S??o Marino">S??o Marino</option>
              <option value="S??o Tom?? e Pr??ncipe">S??o Tom?? e Pr??ncipe</option>
              <option value="S??o Vicente e Granadinas">
                S??o Vicente e Granadinas
              </option>
              <option value="S??rvia">S??rvia</option>
              <option value="S??ria">S??ria</option>
              <option value="Tadjiquist??o">Tadjiquist??o</option>
              <option value="Tail??ndia">Tail??ndia</option>
              <option value="Taiwan">Taiwan</option>
              <option value="Tanz??nia">Tanz??nia</option>
              <option value="Terras Austrais e Ant??rticas Francesas">
                Terras Austrais e Ant??rticas Francesas
              </option>
              <option value="Territ??rio Brit??nico do Oceano ??ndico">
                Territ??rio Brit??nico do Oceano ??ndico
              </option>
              <option value="Timor-Leste">Timor-Leste</option>
              <option value="Togo">Togo</option>
              <option value="Tonga">Tonga</option>
              <option value="Toquelau">Toquelau</option>
              <option value="Trinidad e Tobago">Trinidad e Tobago</option>
              <option value="Tun??sia">Tun??sia</option>
              <option value="Turcas e Caicos">Turcas e Caicos</option>
              <option value="Turquemenist??o">Turquemenist??o</option>
              <option value="Turquia">Turquia</option>
              <option value="Tuvalu">Tuvalu</option>
              <option value="Ucr??nia">Ucr??nia</option>
              <option value="Uganda">Uganda</option>
              <option value="Uruguai">Uruguai</option>
              <option value="Uzbequist??o">Uzbequist??o</option>
              <option value="Vanuatu">Vanuatu</option>
              <option value="Vaticano">Vaticano</option>
              <option value="Venezuela">Venezuela</option>
              <option value="Vietname">Vietname</option>
              <option value="Wallis e Futuna">Wallis e Futuna</option>
              <option value="Zimbabwe">Zimbabwe</option>
              <option value="Z??mbia">Z??mbia</option>
            </select>
          </BoxInput2>
          <BoxInput2>
            <h3>*Estado:</h3>
            <input type="text" value={estado} id="uf" name="estado"></input>
          </BoxInput2>
          <BoxInput2>
            <h3>Cidade:</h3>
            <input
              id="cidade"
              type="text"
              value={cidade}
              name="cidade"
              placeholder=""
            ></input>
          </BoxInput2>
        </BoxForm>
        <div id="teste" style={{ display: 'block' }}>
          <Title>
            <h3 id="titulo2">Detalhes do servi??o</h3>
          </Title>
          <BoxForm>
            <CheckService>
              <label>
                <input
                  type="radio"
                  id="baba"
                  name="service"
                  onChange={() =>
                    document.getElementById('baba').checked
                      ? setTipoServico('Bab??')
                      : null
                  }
                />
                <span>Bab??</span>
              </label>
              <label>
                <input
                  type="radio"
                  id="diarista"
                  name="service"
                  onChange={() =>
                    document.getElementById('diarista').checked
                      ? setTipoServico('Diarista')
                      : null
                  }
                />
                <span> Diarista</span>
              </label>
              <label>
                <input
                  type="radio"
                  id="cozinheira"
                  name="service"
                  onChange={() =>
                    document.getElementById('cozinheira').checked
                      ? setTipoServico('Cozinheira')
                      : null
                  }
                />
                <span> Cozinheira</span>
              </label>
            </CheckService>
          </BoxForm>
          <BoxForm>
            <BoxInput3>
              <h3>*Hor??rio inicio:</h3>
              <InputMask
                type="text"
                name="time"
                mask={['99:99']}
                onChange={(e) => setHrInicio(e.target.value)}
                placeholder="Hora de in??cio"
              ></InputMask>
            </BoxInput3>
            <BoxInput3>
              <h3 id="hTerminT">*Hor??rio termino:</h3>
              <InputMask
                id="hTermino"
                type="text"
                name="time"
                mask={['99:99']}
                onChange={(e) => setHrTermino(e.target.value)}
                placeholder=" Hora de t??rmino"
              ></InputMask>
            </BoxInput3>
          </BoxForm>
          <BoxForm>
            <CheckSemana>
              <label>
                <input
                  type="checkbox"
                  id="segunda"
                  name="semana"
                  onChange={() =>
                    document.getElementById('segunda').checked
                      ? setDtServico((dtServico) => [...dtServico, 'Segunda'])
                      : null
                  }
                />
                <span> Segunda</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  id="terca"
                  name="semana"
                  onChange={() =>
                    document.getElementById('terca').checked
                      ? setDtServico((dtServico) => [...dtServico, 'Ter??a'])
                      : null
                  }
                />
                <span> Ter??a</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  id="quarta"
                  name="semana"
                  onChange={() =>
                    document.getElementById('quarta').checked
                      ? setDtServico((dtServico) => [...dtServico, 'Quarta'])
                      : null
                  }
                />
                <span> Quarta</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  id="quinta"
                  name="semana"
                  onChange={() =>
                    document.getElementById('quinta').checked
                      ? setDtServico((dtServico) => [...dtServico, 'Quinta'])
                      : null
                  }
                />
                <span> Quinta</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  id="sexta"
                  name="semana"
                  onChange={() =>
                    document.getElementById('sexta').checked
                      ? setDtServico((dtServico) => [...dtServico, 'Sexta'])
                      : null
                  }
                />
                <span> Sexta</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  id="sabado"
                  name="semana"
                  onChange={() =>
                    document.getElementById('sabado').checked
                      ? setDtServico((dtServico) => [...dtServico, 'S??bado'])
                      : null
                  }
                />
                <span> Sab??do</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  id="domingo"
                  name="semana"
                  onChange={() =>
                    document.getElementById('domingo').checked
                      ? setDtServico((dtServico) => [...dtServico, 'Domingo'])
                      : null
                  }
                />
                <span> Domingo</span>
              </label>
            </CheckSemana>
          </BoxForm>
          <BoxForm1>
            <Title id="titulo5">
              <h3>Trabalha em feriados ?</h3>
            </Title>
            <CheckFeriado>
              <label>
                <input
                  type="radio"
                  id="simTrabFeriados"
                  onChange={() =>
                    document.getElementById('simTrabFeriados').checked
                      ? setTrabFeriados('Sim')
                      : null
                  }
                  name="feriado"
                />
                <span>Sim</span>
              </label>
              <label>
                <input
                  type="radio"
                  id="naoTrabFeriados"
                  onChange={() =>
                    document.getElementById('naoTrabFeriados').checked
                      ? setTrabFeriados('N??o')
                      : null
                  }
                  name="feriado"
                />
                <span>N??o</span>
              </label>
            </CheckFeriado>
          </BoxForm1>
          <BoxForm>
            <BoxInput3>
              <h3>*Hor??rio inicio:</h3>
              <InputMask
                type="text"
                name="time"
                mask={['99:99']}
                placeholder="Hora de in??cio"
                onChange={(e) => setHrInicioFeriados(e.target.value)}
              ></InputMask>
            </BoxInput3>
            <BoxInput3>
              <h3 id="hTerminT">*Hor??rio termino:</h3>
              <InputMask
                id="hTermino"
                type="text"
                name="time"
                mask={['99:99']}
                onChange={(e) => setHrTerminoFeriados(e.target.value)}
                placeholder=" Hora de t??rmino"
              ></InputMask>
            </BoxInput3>
          </BoxForm>
        </div>
        <Title>
          <h3 id="titulo3">Termo de Responsabilidade</h3>
        </Title>
        <Respon />
        <BoxForm>
          <BoxButton>
            <button onClick={cadastrarContratado}>Concordo</button>
            <button id="b1">Discordo</button>
          </BoxButton>
        </BoxForm>
      </Container>
    </>
  );
};
