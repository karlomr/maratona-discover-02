import axios  from "axios";

const apiCNPJ = axios.create({
  baseURL: "https://h-apigateway.conectagov.estaleiro.serpro.gov.br/api-cnpj-basica/v2/basica/",
});

export default apiCNPJ;
