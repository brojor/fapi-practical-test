<template>
  <header>
    <router-link to="/"
      ><h1>FAPI <span class="no-mobile">- praktický test</span></h1></router-link
    >
    <h1 class="total-price">Celkem: {{ totalPrice }}</h1>
  </header>
</template>

<script>
export default {
  computed: {
    totalPrice() {
      return this.$store.getters.totalPrice;
    },
  },
};
</script>

<style scoped>
.home {
  flex-grow: 1;
  height: 100%;
  display: flex;
}
header {
  width: 100%;
  height: 3rem;
  background-color: #016cdb;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
h1 {
  color: #fff;
  font-size: 1.2rem;
  margin: 0 1rem;
}
a {
  text-decoration: none;
}
</style>
