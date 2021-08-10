<template>
  <div class="about">
    <h1>Rekapitulace</h1>
    <select name="" id="" v-model="currency">
      <option v-for="currency in rates" :key="currency.code" :value="currency">{{
        `${currency.code} - (${currency.country})`
      }}</option>
    </select>
    <table>
      <tr>
        <th>Produkt</th>
        <th>Cena / ks (bez DPH)</th>
        <th>Počet kusů</th>
        <th>Cena celkem (bez DPH)</th>
        <th>Cena (s DPH)</th>
      </tr>
      <tr v-for="item in cart" :key="item.id">
        <td>{{ item.name }}</td>
        <td>{{ priceWithoutVAT(item).toFixed(2) }} {{currency.code}}</td>
        <td>{{ item.amount }}</td>
        <td>{{ totalPriceWithoutVAT(item).toFixed(2) }} {{currency.code}}</td>
        <td>{{ totalPriceWithVAT(item).toFixed(2) }} {{currency.code}}</td>
      </tr>
    </table>
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
.about {
  flex-grow: 1;
}
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
  padding: 0.5rem;

}
td {
  text-align: right;
}
</style>
