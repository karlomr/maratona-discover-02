<h1 align="center">
  <img alt="JobsCalc" title="JobsCalc" src="https://i.imgur.com/Veqm7Gh.png" width="220px" />
</h1>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

<p align="center">
 <img src="https://img.shields.io/static/v1?label=PRs&message=welcome&color=49AA26&labelColor=000000" alt="PRs welcome!" />

  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26&labelColor=000000">
</p>

## 🚀 Tecnologias
Fiz alteração de em relação ao banco de dados utilizado no projeto do curso, na <b>Branch Hana</b> possui conexão com o banco de dados SAP Hana em modo <b>On-premise</b>:
<p>
<img src="https://imgur.com/vWxXKUN.png" title="icon" />
</p>

- Hana versão 2.00.045 ;
- @sap/hana-client (biblioteca NPM)
- Em trechos do código deixo os endereços onde poderá consultar as conexões, bem como explicações de como funcionam os drivers para Hana.
- Promise na conexão de banco e consequentemente async e await

<br>

## Observações: 
- Alguns dos parâmetros fornecidos em hana-client só estão disponíveis para a versão cloud do SAP. Como as parametrizações de SCHEMA e SET para DATABASE;
- Com isso, tive que fixar essas referências das DDL e DML executadas. 
- Outra solução seria coletar informações de conexão e banco em uma tela de conexão e posteriormente concatenar nas execuções;

<br>

## Fontes de referência aplicados para uso do SAP Hana:
- https://blogs.sap.com/2019/02/04/secure-user-store-for-the-sap-hana-service-by-the-sap-hana-academy/
- https://help.sap.com/viewer/f1b440ded6144a54ada97ff95dac7adf/2.7/en-US/4fe9978ebac44f35b9369ef5a4a26f4c.html
- https://developers.sap.com/tutorials/hana-clients-node.html
- https://www.npmjs.com/package/@sap/hana-client

<br><br>
<p align="center">
  <img alt="dev.finances" src=".github/jobscalc.png" width="100%">
</p>

Esse projeto foi desenvolvido com as seguintes tecnologias, na <b>branch main</b>:

- HTML
- CSS
- JavaScript
- NodeJS
- EJS
- Express
- SQLite

## 💻 Projeto

O JobsCalc é uma aplicação de estimativa de cálculo para projetos freelancer, onde é possível cadastrar e excluir jobs (projetos), obtendo uma estimativa de custo de cada job. Além disso, é possível traçar o valor da hora da pessoa que estará usando o sistema 💰

## 🔖 Layout

Você pode visualizar o layout do projeto através [desse link](https://www.figma.com/file/s4fytPFbDiSkv4GPSfKaLE/Jobs-Planning). É necessário ter conta no [Figma](https://figma.com) para acessá-lo.

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](.github/LICENSE.md) para mais detalhes.

---

Feito com ♥ by Rocketseat :wave: [Participe da nossa comunidade!](https://discordapp.com/invite/gCRAFhc)
