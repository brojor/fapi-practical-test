<template>
  <div class="home">
    <div class="form">
      <LoginForm />
    </div>
    <div class="products">products</div>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue';

export default {
  name: 'Home',
  components: {
    LoginForm,
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

}
@media only screen and (max-width: 768px) {
  .home {
    flex-direction: column;
  }
}
</style>
