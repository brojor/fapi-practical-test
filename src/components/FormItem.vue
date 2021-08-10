<template>
  <label :for="type">
    <input type="text" :name="type" v-model="val" :placeholder="formItemData.placeholder" />
  </label>
  <p v-if="formItemData.error" class="error">{{ formItemData.error }}</p>
</template>

<script>
export default {
  props: ['type', 'formItemData'],
  computed: {
    val: {
      get() {
        return this.formItemData.value;
      },
      set(newValue) {
        this.$emit('valChange', newValue);
      },
    },
  },
};
</script>

<style scoped>
label {
  width: 80%;
  position: relative;
  display: flex;
}

label:before {
  content: '';
  position: absolute;
  left: 10px;
  top: 0;
  bottom: 0;
  margin-top: -4px;
  width: 30px;
}
input {
  width: 100%;
  height: 2.5rem;
  padding: 0.75rem 0;
  padding-left: 3.3rem;
  color: #222;
  font-size: 1.2rem;
  box-shadow: none;
  border: none;
  border: 1px solid #333;
  margin: 1rem 0;
  border-radius: 0.4rem;
}
.error {
  color: red;
  margin-top: -0.75rem;
}
</style>
