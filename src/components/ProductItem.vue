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
        <QuantityChanger :amount="amount" @changeVal="amount = $event" />
      </div>
      <div class="product-text-right">
        <div>
          <p>Bez DPH: {{ priceWithoutTax(product.price).toFixed(2) }} Kč</p>
          <p>S DPH: {{ product.price.toFixed(2) }} Kč</p>
        </div>
        <div class="total-price">
          <p>Celkem: {{ (product.price * amount).toFixed(2) }} Kč</p>
        </div>
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
  data() {
    return {
      amount: 0,
    };
  },
  methods: {
    priceWithoutTax(price) {
      return price - (price / 100) * 21;
    },
  },
  watch: {
    amount(val, oldVal) {
      if (oldVal === 0) {
        this.$store.dispatch('addToCart', this.product.id);
      } else if (val === 0) {
        this.$store.commit('REMOVE_FROM_CART', this.product.id);
      } else {
        this.$store.commit('MUTATE_AMOUNT', { itemId: this.product.id, newValue: this.amount });
      }
    },
  },
};
</script>

<style>
.product-item {
  display: flex;
  width: 95%;
  margin: 0.5rem 1rem;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 1px 4px;
  border-radius: 4px;
  overflow: hidden;
}
.product-image {
  width: 20%;
  min-width: 100px;
  height: auto;
  overflow: hidden;
}
img {
  width: 100%;
  height: 100%;
  transition-duration: 1s;
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
  justify-content: space-between;
  flex-grow: 1;
}
.product-title {
  flex-grow: 1;
  font-size: 1.4rem;
  font-weight: 500;
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
.product-item:hover img {
  transform: scale(1.2);
}
</style>
