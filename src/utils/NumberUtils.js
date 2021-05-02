module.exports = {
  //plan consume service with monetary option
  monetary(value, currency = "BRL") {
    return Intl.NumberFormat("pt-BR", {
      //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
      style: "currency",
      currency: currency, //about currency: https://www.currency-iso.org/en/home/tables/table-a1.html
    }).format(value);
  },

  valueCurrency(value) {
    return {
      BRL: this.monetary(value), //brl is default
      USD: this.monetary(value / 5.44,"USD"),
      EUR: this.monetary(value / 6.54,"EUR"),
    };
  },
  
};
