<template>
  <div class="home">
    <div class="left-side">
      <LoginForm />
    </div>
    <div class="right-side">
      <Products class="products" />
    </div>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue';
import Products from '@/components/Products.vue';

export default {
  name: 'Home',
  components: {
    LoginForm,
    Products,
  },
};
</script>
<style scoped>
.home {
  flex-grow: 1;
  height: 100%;
  display: flex;
}
.left-side, .right-side {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media only screen and (max-width: 1210px) {
  .home {
    flex-direction: column-reverse;
    overflow: scroll;
  }
  .left-side, .right-side {
    width: 100%;
  }
}
</style>
