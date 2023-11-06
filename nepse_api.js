require("dotenv").config();

const URL = process.env.URL;

const getClosingPrice = async (symbol) => {
  const res = await fetch(URL + symbol.toUpperCase());
  const data = await res.json();

  if (data.info === null) return null;

  // Just return name, closing price and percentage change
  const d = {
    name: data["info"]["full_name"],
    price: data["price"]["today_price"],
    percentage_change: data["price"]["percent_change"],
  };
  return d;
};

module.exports = { getClosingPrice };
