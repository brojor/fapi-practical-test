<template>
  <div class="recap">
    <div class="container">
      <h1>Rekapitulace</h1>
      <select name="" id="" :value="currency.code" @change="currencyChanged">
        <option v-for="currency in currencies" :key="currency.code" :value="currency.code">{{
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
export default {
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    currencies() {
      return this.$store.state.currencies;
    },
    currency() {
      return this.$store.state.selectedCurrency;
    },
  },
  methods: {
    currencyChanged(event) {
      this.$store.dispatch('changeCurrence', event.target.value);
    },
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
  border-style: hidden;
  box-shadow: 0 0 0 1px rgb(0, 0, 0);
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
