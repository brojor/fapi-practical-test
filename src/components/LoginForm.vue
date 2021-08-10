<template>
  <form action="" class="container" @submit.prevent>
    <p class="message">
      Vyplňte prosím své základní údaje, jakmile zpracujeme Vaši objednávku, budeme Vás kontaktovat.
    </p>
    <FormItem
      v-for="(data, formType, index) in form"
      :key="index"
      :type="formType"
      :formItemData="data"
      @valChange="form[formType].value = $event"
    />
    <button @click="submit">Odeslat</button>
  </form>
</template>

<script>
import FormItem from './FormItem.vue';

export default {
  name: 'login',
  components: {
    FormItem,
  },

  data() {
    return {
      form: {
        fullName: { value: '', error: '', placeholder: 'Jméno a příjmení' },
        email: { value: '', error: '', placeholder: 'E-mail' },
        phone: { value: '', error: '', placeholder: 'Telefon' },
      },
    };
  },
  computed: {
    error() {
      return Object.values(this.form).some((item) => item.error.length > 0);
    },
  },
  methods: {
    removeErrors() {
      Object.keys(this.form).forEach((key) => {
        this.form[key].error = '';
      });
    },
    submit() {
      this.removeErrors();
      this.validateFullName();
      this.validateEmail();
      this.validatePhone();
      if (!this.error) {
        setTimeout(() => {
          this.sendData();
        }, 100);
      }
    },
    sendData() {
      const dataToSend = Object.keys(this.form).reduce((obj, key) => {
        console.log(obj[key]);
        obj[key] = this.form[key].value;
        return obj;
      }, {});
      alert(
        `Validace úspěšná - odesílám následující data:\n${JSON.stringify(dataToSend, null, 4)}`,
      );
    },
    validateFullName() {
      const regName = /^[a-žA-Ž]+ [a-žA-Ž]+$/;
      if (!regName.test(this.form.fullName.value)) {
        this.form.fullName.error = 'Není uvedeno platné jméno a příjmení';
      }
    },
    validateEmail() {
      const regEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!regEmail.test(this.form.email.value)) {
        this.form.email.error = 'E-mailová adresa je zadaná chybně';
      }
    },
    validatePhone() {
      const regPhone = /^(\+420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/;
      if (!regPhone.test(this.form.phone.value)) {
        this.form.phone.error = 'Telefonní číslo je zadáno chybně';
      }
    },
  },
};
</script>

<style>
.container {
  height: 95%;
  width: 95%;
  max-width: 700px;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 1px 4px;
}

label[for='fullName']:before {
  background: url('../assets/user.svg') center / contain no-repeat;
}
label[for='phone']:before {
  background: url('../assets/phone.svg') center / contain no-repeat;
}
label[for='email']:before {
  background: url('../assets/email.svg') center / contain no-repeat;
}
button {
  margin: 1rem;
  padding: 1rem;
  width: 80%;
  border: none;
  border-radius: 0.4rem;
  background-color: #016cdb;
  color: white;
  font-size: 1.4rem;
  font-family: 'Avenir Next', 'Avenir', sans-serif;
  font-weight: 600;
  margin-bottom: 4rem;
  cursor: pointer;
}
button:active {
  background-color: #549be7;
}

.message {
  width: 80%;
  text-align: center;
  margin: 1.5em 0;
  font-size: 1.2rem;
}
</style>
