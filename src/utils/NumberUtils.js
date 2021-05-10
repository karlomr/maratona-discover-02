//const { apiBancoCentral }  = require('../service/apiBancoCentral');
import axios from "axios";

const apiBancoCentral = axios.create({
  baseURL: "https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/",
});

function getExchange(currency, dateStart, dateEnd) {
  return new Promise((resolve, reject) => {
    apiBancoCentral
      .get(
        `CotacaoMoedaPeriodoFechamento(codigoMoeda=@codigoMoeda,dataInicialCotacao=@dataInicialCotacao,dataFinalCotacao=@dataFinalCotacao)?@codigoMoeda='${currency}'&@dataInicialCotacao='${dateStart}'&@dataFinalCotacao='${dateEnd}'&$top=100&$orderby=dataHoraCotacao%20asc&$format=json&$select=cotacaoCompra`
      )
      .then((response) => {
        resolve(response.data.value.map((value) => value.cotacaoCompra));
      })
      .catch((err) => {
        reject("ops! ocorreu um erro" + err);
      });
  });
}

const NumberUtils = {
  //plan consume service with monetary option
  monetary(value, currency = "BRL") {
    return Intl.NumberFormat("pt-BR", {
      //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
      style: "currency",
      currency: currency, //about currency: https://www.currency-iso.org/en/home/tables/table-a1.html
    }).format(value);
  },

  async quotationExchange(currency, dateStart, dateEnd) {
    return  await getExchange(currency, dateStart, dateEnd);
  }
};

export default NumberUtils;