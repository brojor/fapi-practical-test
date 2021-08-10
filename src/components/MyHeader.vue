<template>
  <header>
    <h1>FAPI - praktický test</h1>
    <h1 class="total-price">Celkem: {{ totalPrice }} Kč</h1>
  </header>
</template>

<script>
export default {
  computed: {
    totalPrice() {
      return this.$store.getters.totalPrice.toFixed(2);
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
</style>
