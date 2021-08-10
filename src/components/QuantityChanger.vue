<template>
  <div class="quantity-changer">
    <p>Počet kusů:</p>
    <div class="btn decrease" @click="decrease">-</div>
    <input type="number" v-model="itemAmount" />
    <div class="btn increase" @click="increase">+</div>
  </div>
</template>

<script>
export default {
  props: ['amount'],
  computed: {
    itemAmount: {
      get() {
        return this.amount;
      },
      set(newValue) {
        this.$emit('changeVal', Number(newValue));
      },
    },
  },
  methods: {
    increase() {
      this.itemAmount += 1;
    },
    decrease() {
      if (this.itemAmount !== 0) {
        this.itemAmount -= 1;
      }
    },
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
  cursor: pointer;
  user-select: none
}
.btn:active {
  color: white;
  background-color: #016cdb;
}
</style>
