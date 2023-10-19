require("dotenv").config();

const URL = process.env.URL;

const getClosingPrice = async (symbol) => {
  const res = await fetch(URL + symbol.toUpperCase());
  const data = await res.json();

  // Just return name, closing price and percentage change
  data.info === null
    ? null
    : {
        name: data["info"]["full_name"],
        price: data["price"]["today_price"],
        percentage_change: data["price"]["percent_change"],
      };
};
