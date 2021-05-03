const moment  = require('moment');
const NumberUtils = require("../utils/NumberUtils");

module.exports = {

    async valueCurrency(value) {

        const dateEnd = moment().format('MM-DD-YYYY').toString();
        const dateStart = moment().subtract(4,'days').format('MM-DD-YYYY').toString();       
        
        const exchangeUsd = await NumberUtils.quotationExchange("USD",dateStart, dateEnd);
        const exchangeEur = await NumberUtils.quotationExchange("EUR",dateStart, dateEnd);
        return {
          BRL: NumberUtils.monetary(value), //brl is default
          USD: NumberUtils.monetary(value / exchangeUsd , "USD"),
          EUR: NumberUtils.monetary(value / exchangeEur, "EUR"),
        };
      },
}