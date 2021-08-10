<template>
  <div class="home">
    <div class="form">
      <LoginForm />
    </div>
    <Products />
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
.form {
  background-color: pink;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.products {
  background-color: rgb(178, 240, 178);
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
@media only screen and (max-width: 768px) {
  .home {
    flex-direction: column;
  }
}
</style>
