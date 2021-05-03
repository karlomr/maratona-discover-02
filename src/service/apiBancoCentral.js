import axios from "axios";

// Pode ser algum servidor executando localmente: 
// http://localhost:3000

const apiBancoCentral = axios.create({
  baseURL: "https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/",
});

export default apiBancoCentral;