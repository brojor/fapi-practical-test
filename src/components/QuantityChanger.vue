<template>
  <div class="quantity-changer">
    <p>Počet kusů:</p>
    <div class="btn decrease">-</div>
    <input type="number" v-model="amount" />
    <div class="btn increase">+</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      amount: 0,
    };
  },
};
</script>

<style scoped>
.quantity-changer {
  display: flex;
  align-items: center;
}
input {
  width: 1.5rem;
  height: 1.5rem;
  text-align: center;
}
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.btn {
  width: 1.5rem;
  height: 1.5rem;
  border: 1px solid #016cdb;
  margin: 0.5rem;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #016cdb;
  font-weight: 600;
}
</style>
