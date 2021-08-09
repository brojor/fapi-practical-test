<template>
  <form action="" class="container" @submit.prevent>
    <p class="message">
      Vyplňte prosím své základní údaje, jakmile zpracujeme Vaši objednávku, budeme Vás kontaktovat.
    </p>
    <label for="username">
      <input
        type="text"
        name="username"
        v-model="form.fullName.value"
        placeholder="Jméno a příjmení"
      />
    </label>
    <p v-if="form.fullName.error.length" class="error">{{ form.fullName.error }}</p>
    <label for="email">
      <input type="text" name="email" v-model="form.email.value" placeholder="e-mail" />
    </label>
    <p v-if="form.email.error.length" class="error">{{ form.email.error }}</p>
    <label for="phone">
      <input type="text" name="phone" v-model="form.phone.value" placeholder="Telefon" />
    </label>
    <p v-if="form.phone.error.length" class="error">{{ form.phone.error }}</p>

    <button @click="submit">Odeslat</button>
  </form>
</template>

<script>
export default {
  name: 'login',

  data() {
    return {
      form: {
        fullName: { value: '', error: '' },
        email: { value: '', error: '' },
        phone: { value: '', error: '' },
      },
    };
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
      this.sendData();
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
        this.form.fullName.error = 'Není uvedeno celé jméno a příjmení';
      }
    },
    validateEmail() {
      const regEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!regEmail.test(this.form.email.value)) {
        this.form.email.error = 'E-mailová adresa je zadaná chybně';
      }
    },
    validatePhone() {
      console.log('phone: ', this.form.phone.value);
      const regPhone = /^(\+420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/;
      if (!regPhone.test(this.form.phone.value)) {
        this.form.phone.error = 'Telefonní číslo je zadáno chybně';
      }
    },
  },
};
</script>

<style scoped>
.container {
  height: 95%;
  width: 90%;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}

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
label[for='username']:before {
  background: url('../assets/user.svg') center / contain no-repeat;
}
label[for='phone']:before {
  background: url('../assets/phone.svg') center / contain no-repeat;
}
label[for='email']:before {
  background: url('../assets/email.svg') center / contain no-repeat;
}

input {
  width: 100%;
  height: 2.5rem;
  padding: 0.75rem 0;
  padding-left: 3.3rem;
  color: #222;
  font-size: 1.2rem;
  box-shadow: none;
  /* background-color: #262d2d; */
  border: none;
  border: 1px solid #333;
  margin: 1rem 0;
  border-radius: 0.4rem;
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
}

.message {
  width: 80%;
  text-align: center;
  margin: 1.5em 0;
  font-size: 1.2rem;
}
.error {
  color: red;
  margin-top: -0.75rem;
}
</style>
