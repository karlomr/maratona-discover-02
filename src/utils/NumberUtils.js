module.exports = {
  //plan consume service with monetary option
  monetary(value,currency="BRL") {
    return Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: currency,
    }).format(value);
  },
};
