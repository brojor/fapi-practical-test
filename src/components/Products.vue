<template>
  <div class="products-container">
    <h2 class="total-price">Celkem: {{ totalPrice }} Kč</h2>
    <ProductItem v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>

<script>
import ProductItem from '@/components/ProductItem.vue';

export default {
  components: {
    ProductItem,
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    totalPrice() {
      return this.$store.getters.totalPrice.toFixed(2);
    },
  },
};
</script>

<style scoped>
.products-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  max-width: 700px;
  background-color: rgb(160, 241, 255);
}
.total-price {
  margin: 1rem;
  font-size: 1.4rem
}
</style>
