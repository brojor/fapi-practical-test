<template>
  <div class="product-item">
    <div class="product-image">
      <img
        :src="require('@/assets/products/' + product.img)"
        :alt="`${product.name} (produktová fotografie)`"
      />
    </div>
    <div class="product-text">
      <div class="product-text-left">
        <div class="product-title">{{ product.name }}</div>
        <QuantityChanger />
      </div>
      <div class="product-text-right">
        <div>
          <p>Cena bez DPH: {{ priceWithoutTax(product.price).toFixed(2) }} Kč</p>
          <p>Cena s DPH: {{ product.price.toFixed(2) }} Kč</p>
        </div>
        <div class="total-price">
          <p>Cena celkem: {{ product.price.toFixed(2) }} Kč</p>
        </div>
        <button class="add-product">Přidat</button>
      </div>
    </div>
  </div>
</template>

<script>
import QuantityChanger from '@/components/QuantityChanger.vue';

export default {
  components: {
    QuantityChanger,
  },
  props: ['product'],
  methods: {
    priceWithoutTax(price) {
      return price - (price / 100) * 21;
    },
  },
};
</script>

<style>
.product-item {
  display: flex;
  width: 80%;
  margin: 0.5rem 1rem;
  background-color: #fff;
  border: 1px solid black;
  border-radius: 4px;
}
.product-image {
  width: 20%;
}
img {
  width: 100%;
  height: 100%;
}
.product-text {
  display: flex;
  flex-grow: 1;
  padding: 0.75rem;
}
.product-text-left {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  flex-grow: 1;
}
.product-title {
  flex-grow: 1;
  font-size: 1.4rem;
  font-weight: 500;
}
.amount-and-price {
  display: flex;
  justify-content: space-between;
}
.product-text-right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: right;
  font-size: 0.9rem;
}
.total-price {
  font-size: 1rem;
  font-weight: 500;
}
.add-product {
  font-size: 0.9rem;
  padding: 0.25rem 0.5rem;
  width: auto;
  margin-left: auto;
  margin: 0;
}
</style>
