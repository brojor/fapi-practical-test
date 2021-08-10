<template>
  <div class="recap">
    <div class="container">
      <h1>Rekapitulace</h1>
      <select name="" id="" v-model="currency">
        <option v-for="currency in rates" :key="currency.code" :value="currency">{{
          `${currency.code} - (${currency.country})`
        }}</option>
      </select>
      <table>
        <tr>
          <th>Produkt</th>
          <th>Cena / ks (bez&#160;DPH)</th>
          <th>Počet kusů</th>
          <th>Cena celkem (bez&#160;DPH)</th>
          <th>Cena (s&#160;DPH)</th>
        </tr>
        <tr v-for="item in cart" :key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ priceWithoutVAT(item).toFixed(2) }} {{ currency.code }}</td>
          <td>{{ item.amount }}</td>
          <td>{{ totalPriceWithoutVAT(item).toFixed(2) }} {{ currency.code }}</td>
          <td>{{ totalPriceWithVAT(item).toFixed(2) }} {{ currency.code }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import rates from '@/rates.json';

export default {
  data() {
    return {
      currency: {
        country: 'Česká Republika',
        currency: 'koruna',
        quantity: 1,
        code: 'CZK',
        exchangeRate: 1,
      },
      rates,
    };
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
  },
  methods: {
    price(item) {
      return (item.price / this.currency.exchangeRate) * this.currency.quantity;
    },
    priceWithoutVAT(item) {
      const price = this.price(item);
      return price - (price / 100) * 21;
    },
    totalPriceWithoutVAT(item) {
      return this.priceWithoutVAT(item) * item.amount;
    },
    totalPriceWithVAT(item) {
      return this.price(item) * item.amount;
    },
    getString({ price, amount, name }) {
      price /= this.currency.exchangeRate / this.currency.quantity;
      const priceWithoutVAT = price - (price / 100) * 21;
      const totalPriceWithoutVAT = priceWithoutVAT * amount;
      const curr = this.currency.code;
      return `${name}.....${amount} x ${priceWithoutVAT.toFixed(
        2,
      )} ${curr} = ${totalPriceWithoutVAT.toFixed(2)} ${curr} + 21% DPH = ${(
        price * amount
      ).toFixed(2)} ${curr}`;
    },
  },
};
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 65%;
  width: 95%;
  padding: 2rem;
  max-width: 700px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 1px 4px;
}

.recap {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
h1 {
  margin-bottom: 2rem;
}
select {
  margin-bottom: 1rem;
  width: 95%;
  padding: 0.5rem 1rem;
  margin: 1rem;
  border: 1px solid rgb(65, 65, 65);
  border-radius: 4px;
}
table {
  width: 95%;
  border-radius: 4px;
  border-style: hidden; /* hide standard table (collapsed) border */
  box-shadow: 0 0 0 1px rgb(0, 0, 0); /* this draws the table border  */
  border-collapse: collapse;
  overflow: hidden;
}

th,
td {
  border: 1px solid black;
  padding: 0.5rem;
}
th {
  background-color: #acd2fc;
}
td {
  text-align: right;
  font-family: 'Roboto Mono', monospace;
  white-space: nowrap;
}
td:first-child {
  text-align-last: left;
}
tr:nth-child(2n + 3) {
  background-color: #e3f0ff;
}
</style>
