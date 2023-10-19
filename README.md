# NEPSE API Wrapper

A simple NEPSE API wrapper to get closing price of every stock listed on NEPSE.

### # Usage

``` js
  const { getClosingPrice } = require("./index");

  getClosingPrice("Nabil").then((res) => console.log(res));

```

**Output:**
```js
  {
      name: 'Nabil Bank Limited',
      price: '580',
      percentage_change: '0.08481764206955'
  }
`````

###### TODO
- Price increase for a day
