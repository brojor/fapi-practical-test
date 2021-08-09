<template>
  <MyHeader />
  <router-view></router-view>
  <MyFooter />
</template>

<script>
import MyHeader from '@/components/MyHeader.vue';
import MyFooter from '@/components/MyFooter.vue';

export default {
  components: {
    MyHeader,
    MyFooter,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.form {
  background-color: pink;
  flex-grow: 1;
}
.products {
  background-color: rgb(178, 240, 178);
  flex-grow: 1;
}
@media only screen and (max-width: 768px) {
  .main {
    flex-direction: column;
  }
}
</style>
