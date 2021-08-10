<template>
  <div class="product-item">
    <div class="image-container">
      <img
        :src="require('@/assets/products/' + product.img)"
        :alt="`${product.name} (produktová fotografie)`"
      />
    </div>
    <div class="product-info">
      <h5>{{ product.name }}</h5>
      <p>{{ product.price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['product'],
};
</script>

<style>
.product-item {
  background-color: #fff;
  width: 30%;
  height: 25%;
  border: 1px solid black;
  border-radius: 4px;
}
.image-container {
  background-color: red;
  height: 80%;
}
img {
  width: 100%;
  height: 100%;
}
.product-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0.25rem;
}
</style>
