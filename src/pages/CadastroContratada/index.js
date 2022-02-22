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
    history.push('/loginContratado');
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

    api.post('http://localhost:8080/usuarios', {
        email: props.email,
        nome: props.nome,
        cpf: cpfDigitado,
        rg: rgDigitado,
        genero: sexoDigitado,
        dataNascimento: dtNascimentoDigitado,
        telefoneFixo: telefoneDigitado,
        telefoneCelular: celularDigitado,
        senha: props.senha,
        tipoServico: tipoServico,
        diasDisponiveis: dtServicoDigitado,
        trabalhaFeriados: trabFeriadosDigitado,
        horarioInicio: hrInicioDigitado,
        horarioFim: hrTerminoDigitado,
        horarioFeriadoInicio: hrInicioFeriadosDigitado,
        horarioFeriadoFim: hrTerminoFeriadosDigitado,
        endereco:  {
          endereco: rua,
          cep: cep,
          complemento: complementoDigitado,
          numero: numeroDigitado,
          bairro: bairro,
          pais: paisDigitado,
          estado: estado,
          cidade: cidade
        }
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
                    ?  document.getElementById('teste').style.display = 'none'
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
                    ?  document.getElementById('teste').style.display = 'block'
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
              <h3>*Data de Emissão:</h3>
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
                <option value="AP">Amapá</option>
                <option value="AM">Amazonas</option>
                <option value="BA">Bahia</option>
                <option value="CE">Ceará</option>
                <option value="DF">Distrito Federal</option>
                <option value="ES">Espírito Santo</option>
                <option value="GO">Goiás</option>
                <option value="MA">Maranhão</option>
                <option value="MT">Mato Grosso</option>
                <option value="MS">Mato Grosso do Sul</option>
                <option value="MG">Minas Gerais</option>
                <option value="PA">Pará</option>
                <option value="PB">Paraíba</option>
                <option value="PR">Paraná</option>
                <option value="PE">Pernambuco</option>
                <option value="PI">Piauí</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="RN">Rio Grande do Norte</option>
                <option value="RS">Rio Grande do Sul</option>
                <option value="RO">Rondônia</option>
                <option value="RR">Roraima</option>
                <option value="SC">Santa Catarina</option>
                <option value="SP">São Paulo</option>
                <option value="SE">Sergipe</option>
                <option value="TO">Tocantins</option>
                <option value="EX">Estrangeiro</option>
              </select>
            </BoxInput2>
          </BoxForm>
        </Form>
        <Title>
          <h3 id="titulo2">Endereço</h3>
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
            <h3>*Endereço:</h3>
            <input
              type="text"
              value={rua}
              name="rua"
              placeholder=""
              id="rua"
            ></input>
          </BoxInput2>
          <BoxInput2>
            <h3>*Número:</h3>
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
            <h3>*País:</h3>
            <select
              name="paises"
              onChange={(e) => setPais(e.target.value)}
              id="paises"
            >
              <option value="Brasil" selected="selected">
                Brasil
              </option>
              <option value="Afeganistão">Afeganistão</option>
              <option value="África do Sul">África do Sul</option>
              <option value="Albânia">Albânia</option>
              <option value="Alemanha">Alemanha</option>
              <option value="Andorra">Andorra</option>
              <option value="Angola">Angola</option>
              <option value="Anguilla">Anguilla</option>
              <option value="Antilhas Holandesas">Antilhas Holandesas</option>
              <option value="Antárctida">Antárctida</option>
              <option value="Antígua e Barbuda">Antígua e Barbuda</option>
              <option value="Argentina">Argentina</option>
              <option value="Argélia">Argélia</option>
              <option value="Armênia">Armênia</option>
              <option value="Aruba">Aruba</option>
              <option value="Arábia Saudita">Arábia Saudita</option>
              <option value="Austrália">Austrália</option>
              <option value="Áustria">Áustria</option>
              <option value="Azerbaijão">Azerbaijão</option>
              <option value="Bahamas">Bahamas</option>
              <option value="Bahrein">Bahrein</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="Barbados">Barbados</option>
              <option value="Belize">Belize</option>
              <option value="Benim">Benim</option>
              <option value="Bermudas">Bermudas</option>
              <option value="Bielorrússia">Bielorrússia</option>
              <option value="Bolívia">Bolívia</option>
              <option value="Botswana">Botswana</option>
              <option value="Brunei">Brunei</option>
              <option value="Bulgária">Bulgária</option>
              <option value="Burkina Faso">Burkina Faso</option>
              <option value="Burundi">Burundi</option>
              <option value="Butão">Butão</option>
              <option value="Bélgica">Bélgica</option>
              <option value="Bósnia e Herzegovina">Bósnia e Herzegovina</option>
              <option value="Cabo Verde">Cabo Verde</option>
              <option value="Camarões">Camarões</option>
              <option value="Camboja">Camboja</option>
              <option value="Canadá">Canadá</option>
              <option value="Catar">Catar</option>
              <option value="Cazaquistão">Cazaquistão</option>
              <option value="Chade">Chade</option>
              <option value="Chile">Chile</option>
              <option value="China">China</option>
              <option value="Chipre">Chipre</option>
              <option value="Colômbia">Colômbia</option>
              <option value="Comores">Comores</option>
              <option value="Coreia do Norte">Coreia do Norte</option>
              <option value="Coreia do Sul">Coreia do Sul</option>
              <option value="Costa do Marfim">Costa do Marfim</option>
              <option value="Costa Rica">Costa Rica</option>
              <option value="Croácia">Croácia</option>
              <option value="Cuba">Cuba</option>
              <option value="Dinamarca">Dinamarca</option>
              <option value="Djibouti">Djibouti</option>
              <option value="Dominica">Dominica</option>
              <option value="Egito">Egito</option>
              <option value="El Salvador">El Salvador</option>
              <option value="Emirados Árabes Unidos">
                Emirados Árabes Unidos
              </option>
              <option value="Equador">Equador</option>
              <option value="Eritreia">Eritreia</option>
              <option value="Escócia">Escócia</option>
              <option value="Eslováquia">Eslováquia</option>
              <option value="Eslovênia">Eslovênia</option>
              <option value="Espanha">Espanha</option>
              <option value="Estados Federados da Micronésia">
                Estados Federados da Micronésia
              </option>
              <option value="Estados Unidos">Estados Unidos</option>
              <option value="Estônia">Estônia</option>
              <option value="Etiópia">Etiópia</option>
              <option value="Fiji">Fiji</option>
              <option value="Filipinas">Filipinas</option>
              <option value="Finlândia">Finlândia</option>
              <option value="França">França</option>
              <option value="Gabão">Gabão</option>
              <option value="Gana">Gana</option>
              <option value="Geórgia">Geórgia</option>
              <option value="Gibraltar">Gibraltar</option>
              <option value="Granada">Granada</option>
              <option value="Gronelândia">Gronelândia</option>
              <option value="Grécia">Grécia</option>
              <option value="Guadalupe">Guadalupe</option>
              <option value="Guam">Guam</option>
              <option value="Guatemala">Guatemala</option>
              <option value="Guernesei">Guernesei</option>
              <option value="Guiana">Guiana</option>
              <option value="Guiana Francesa">Guiana Francesa</option>
              <option value="Guiné">Guiné</option>
              <option value="Guiné Equatorial">Guiné Equatorial</option>
              <option value="Guiné-Bissau">Guiné-Bissau</option>
              <option value="Gâmbia">Gâmbia</option>
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
              <option value="Ilhas Feroé">Ilhas Feroé</option>
              <option value="Ilhas Geórgia do Sul e Sandwich do Sul">
                Ilhas Geórgia do Sul e Sandwich do Sul
              </option>
              <option value="Ilhas Malvinas">Ilhas Malvinas</option>
              <option value="Ilhas Marshall">Ilhas Marshall</option>
              <option value="Ilhas Menores Distantes dos Estados Unidos">
                Ilhas Menores Distantes dos Estados Unidos
              </option>
              <option value="Ilhas Salomão">Ilhas Salomão</option>
              <option value="Ilhas Virgens Americanas">
                Ilhas Virgens Americanas
              </option>
              <option value="Ilhas Virgens Britânicas">
                Ilhas Virgens Britânicas
              </option>
              <option value="Ilhas Åland">Ilhas Åland</option>
              <option value="Indonésia">Indonésia</option>
              <option value="Inglaterra">Inglaterra</option>
              <option value="Índia">Índia</option>
              <option value="Iraque">Iraque</option>
              <option value="Irlanda do Norte">Irlanda do Norte</option>
              <option value="Irlanda">Irlanda</option>
              <option value="Irã">Irã</option>
              <option value="Islândia">Islândia</option>
              <option value="Israel">Israel</option>
              <option value="Itália">Itália</option>
              <option value="Iêmen">Iêmen</option>
              <option value="Jamaica">Jamaica</option>
              <option value="Japão">Japão</option>
              <option value="Jersey">Jersey</option>
              <option value="Jordânia">Jordânia</option>
              <option value="Kiribati">Kiribati</option>
              <option value="Kuwait">Kuwait</option>
              <option value="Laos">Laos</option>
              <option value="Lesoto">Lesoto</option>
              <option value="Letônia">Letônia</option>
              <option value="Libéria">Libéria</option>
              <option value="Liechtenstein">Liechtenstein</option>
              <option value="Lituânia">Lituânia</option>
              <option value="Luxemburgo">Luxemburgo</option>
              <option value="Líbano">Líbano</option>
              <option value="Líbia">Líbia</option>
              <option value="Macau">Macau</option>
              <option value="Macedônia">Macedônia</option>
              <option value="Madagáscar">Madagáscar</option>
              <option value="Malawi">Malawi</option>
              <option value="Maldivas">Maldivas</option>
              <option value="Mali">Mali</option>
              <option value="Malta">Malta</option>
              <option value="Malásia">Malásia</option>
              <option value="Marianas Setentrionais">
                Marianas Setentrionais
              </option>
              <option value="Marrocos">Marrocos</option>
              <option value="Martinica">Martinica</option>
              <option value="Mauritânia">Mauritânia</option>
              <option value="Maurícia">Maurícia</option>
              <option value="Mayotte">Mayotte</option>
              <option value="Moldávia">Moldávia</option>
              <option value="Mongólia">Mongólia</option>
              <option value="Montenegro">Montenegro</option>
              <option value="Montserrat">Montserrat</option>
              <option value="Moçambique">Moçambique</option>
              <option value="Myanmar">Myanmar</option>
              <option value="México">México</option>
              <option value="Mônaco">Mônaco</option>
              <option value="Namíbia">Namíbia</option>
              <option value="Nauru">Nauru</option>
              <option value="Nepal">Nepal</option>
              <option value="Nicarágua">Nicarágua</option>
              <option value="Nigéria">Nigéria</option>
              <option value="Niue">Niue</option>
              <option value="Noruega">Noruega</option>
              <option value="Nova Caledônia">Nova Caledônia</option>
              <option value="Nova Zelândia">Nova Zelândia</option>
              <option value="Níger">Níger</option>
              <option value="Omã">Omã</option>
              <option value="Palau">Palau</option>
              <option value="Palestina">Palestina</option>
              <option value="Panamá">Panamá</option>
              <option value="Papua-Nova Guiné">Papua-Nova Guiné</option>
              <option value="Paquistão">Paquistão</option>
              <option value="Paraguai">Paraguai</option>
              <option value="País de Gales">País de Gales</option>
              <option value="Países Baixos">Países Baixos</option>
              <option value="Peru">Peru</option>
              <option value="Pitcairn">Pitcairn</option>
              <option value="Polinésia Francesa">Polinésia Francesa</option>
              <option value="Polônia">Polônia</option>
              <option value="Porto Rico">Porto Rico</option>
              <option value="Portugal">Portugal</option>
              <option value="Quirguistão">Quirguistão</option>
              <option value="Quênia">Quênia</option>
              <option value="Reino Unido">Reino Unido</option>
              <option value="República Centro-Africana">
                República Centro-Africana
              </option>
              <option value="República Checa">República Checa</option>
              <option value="República Democrática do Congo">
                República Democrática do Congo
              </option>
              <option value="República do Congo">República do Congo</option>
              <option value="República Dominicana">República Dominicana</option>
              <option value="Reunião">Reunião</option>
              <option value="Romênia">Romênia</option>
              <option value="Ruanda">Ruanda</option>
              <option value="Rússia">Rússia</option>
              <option value="Saara Ocidental">Saara Ocidental</option>
              <option value="Saint Martin">Saint Martin</option>
              <option value="Saint-Barthélemy">Saint-Barthélemy</option>
              <option value="Saint-Pierre e Miquelon">
                Saint-Pierre e Miquelon
              </option>
              <option value="Samoa Americana">Samoa Americana</option>
              <option value="Samoa">Samoa</option>
              <option value="Santa Helena, Ascensão e Tristão da Cunha">
                Santa Helena, Ascensão e Tristão da Cunha
              </option>
              <option value="Santa Lúcia">Santa Lúcia</option>
              <option value="Senegal">Senegal</option>
              <option value="Serra Leoa">Serra Leoa</option>
              <option value="Seychelles">Seychelles</option>
              <option value="Singapura">Singapura</option>
              <option value="Somália">Somália</option>
              <option value="Sri Lanka">Sri Lanka</option>
              <option value="Suazilândia">Suazilândia</option>
              <option value="Sudão">Sudão</option>
              <option value="Suriname">Suriname</option>
              <option value="Suécia">Suécia</option>
              <option value="Suíça">Suíça</option>
              <option value="Svalbard e Jan Mayen">Svalbard e Jan Mayen</option>
              <option value="São Cristóvão e Nevis">
                São Cristóvão e Nevis
              </option>
              <option value="São Marino">São Marino</option>
              <option value="São Tomé e Príncipe">São Tomé e Príncipe</option>
              <option value="São Vicente e Granadinas">
                São Vicente e Granadinas
              </option>
              <option value="Sérvia">Sérvia</option>
              <option value="Síria">Síria</option>
              <option value="Tadjiquistão">Tadjiquistão</option>
              <option value="Tailândia">Tailândia</option>
              <option value="Taiwan">Taiwan</option>
              <option value="Tanzânia">Tanzânia</option>
              <option value="Terras Austrais e Antárticas Francesas">
                Terras Austrais e Antárticas Francesas
              </option>
              <option value="Território Britânico do Oceano Índico">
                Território Britânico do Oceano Índico
              </option>
              <option value="Timor-Leste">Timor-Leste</option>
              <option value="Togo">Togo</option>
              <option value="Tonga">Tonga</option>
              <option value="Toquelau">Toquelau</option>
              <option value="Trinidad e Tobago">Trinidad e Tobago</option>
              <option value="Tunísia">Tunísia</option>
              <option value="Turcas e Caicos">Turcas e Caicos</option>
              <option value="Turquemenistão">Turquemenistão</option>
              <option value="Turquia">Turquia</option>
              <option value="Tuvalu">Tuvalu</option>
              <option value="Ucrânia">Ucrânia</option>
              <option value="Uganda">Uganda</option>
              <option value="Uruguai">Uruguai</option>
              <option value="Uzbequistão">Uzbequistão</option>
              <option value="Vanuatu">Vanuatu</option>
              <option value="Vaticano">Vaticano</option>
              <option value="Venezuela">Venezuela</option>
              <option value="Vietname">Vietname</option>
              <option value="Wallis e Futuna">Wallis e Futuna</option>
              <option value="Zimbabwe">Zimbabwe</option>
              <option value="Zâmbia">Zâmbia</option>
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
        <div id='teste' style={{ display: 'block' }}>
        <Title>
          <h3 id="titulo2">Detalhes do serviço</h3>
        </Title>
        <BoxForm>
          <CheckService>
            <label>
              <input 
              type="radio" 
              id="baba" 
              name="service" 
              onChange={() => document.getElementById('baba').checked ? setTipoServico("Babá") : null} />
              <span>Babá</span>
            </label>
            <label>
              <input 
              type="radio" 
              id="diarista" 
              name="service" 
              onChange={() => document.getElementById('diarista').checked ? setTipoServico("Diarista") : null} />
             <span> Diarista</span>
            </label>
            <label>
              <input 
              type="radio" 
              id="cozinheira" 
              name="service" 
              onChange={() => document.getElementById('cozinheira').checked ? setTipoServico("Cozinheira") : null} />
            <span> Cozinheira</span>
            </label>
          </CheckService>
        </BoxForm>
        <BoxForm>
          <BoxInput3>
            <h3>*Horário inicio:</h3>
            <InputMask
              type="text"
              name="time"
              mask={['99:99']}
              onChange={(e) => setHrInicio(e.target.value)}
              placeholder="Hora de início"
            ></InputMask>
          </BoxInput3>
          <BoxInput3>
            <h3 id="hTerminT">*Horário termino:</h3>
            <InputMask
              id="hTermino"
              type="text"
              name="time"
              mask={['99:99']}
              onChange={(e) => setHrTermino(e.target.value)}
              placeholder=" Hora de término"
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
              onChange={() => document.getElementById('segunda').checked ? setDtServico(dtServico => [...dtServico, "Segunda"]) : null} />
            <span>  Segunda</span>
            </label>
            <label>
              <input 
              type="checkbox" 
              id="terca" 
              name="semana"
              onChange={() => document.getElementById('terca').checked ? setDtServico(dtServico => [...dtServico, "Terça"]) : null } />
            <span>  Terça</span>
            </label>
            <label>
              <input 
              type="checkbox" 
              id="quarta" 
              name="semana" 
              onChange={() => document.getElementById('quarta').checked ? setDtServico(dtServico => [...dtServico, "Quarta"]) : null } />
            <span>  Quarta</span>
            </label>
            <label>
              <input 
              type="checkbox" 
              id="quinta" 
              name="semana"
              onChange={() => document.getElementById('quinta').checked ? setDtServico(dtServico => [...dtServico, "Quinta"]) : null } />
            <span>  Quinta</span>
            </label>
            <label>
              <input 
              type="checkbox" 
              id="sexta" 
              name="semana" 
              onChange={() => document.getElementById('sexta').checked ? setDtServico(dtServico => [...dtServico, "Sexta"]) : null } />
           <span> Sexta</span>
            </label>
            <label>
              <input 
              type="checkbox" 
              id="sabado" 
              name="semana" 
              onChange={() => document.getElementById('sabado').checked ? setDtServico(dtServico => [...dtServico, "Sábado"]) : null} />
            <span>  Sabádo</span>
            </label>
            <label>
              <input 
              type="checkbox" 
              id="domingo" 
              name="semana" 
              onChange={() => document.getElementById('domingo').checked ? setDtServico(dtServico => [...dtServico, "Domingo"]) : null} />
            <span>  Domingo</span>
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
                    ? setTrabFeriados('Não')
                    : null
                }
                name="feriado"
              />
            <span>Não</span>
            </label>
          </CheckFeriado>
        </BoxForm1>
        <BoxForm>
          <BoxInput3>
            <h3>*Horário inicio:</h3>
            <InputMask
              type="text"
              name="time"
              mask={['99:99']}
              placeholder="Hora de início"
              onChange={(e) => setHrInicioFeriados(e.target.value)}
              placeholder="Hora de início"
            ></InputMask>
          </BoxInput3>
          <BoxInput3>
            <h3 id="hTerminT">*Horário termino:</h3>
            <InputMask
              id="hTermino"
              type="text"
              name="time"
              mask={['99:99']}
              onChange={(e) => setHrTerminoFeriados(e.target.value)}
              placeholder=" Hora de término"
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