<template>
  <div class="products-container">
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
  },
};
</script>

<style scoped>
.products-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  background-color: rgb(178, 240, 178);
  flex-wrap: wrap;
  padding: 1rem;
}
</style>
