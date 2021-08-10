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
  background: rgb(250, 221, 223);
  background: linear-gradient(
    126deg,
    rgba(250, 221, 223, 1) 0%,
    rgba(140, 200, 186, 0.12648809523809523) 49%,
    rgba(250, 221, 223, 1) 100%
  );
}
</style>
