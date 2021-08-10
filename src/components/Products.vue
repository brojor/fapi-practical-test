<template>
  <div class="products-container">
    <h2>Celkem: {{ totalPrice }} Kč</h2>
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
  width: 50%;
  height: 100%;
  background-color: rgb(178, 240, 178);
}
</style>
