import axios  from "axios";

const apiBancoCentral = axios.create({
  baseURL: "https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/",
});

export default apiBancoCentral;
