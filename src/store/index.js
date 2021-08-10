import { createStore } from 'vuex';

export default createStore({
  state: {
    products: [
      {
        id: 1,
        name: 'Budík',
        price: 249,
        img: 'alarmClock.jpeg',
      },
      {
        id: 2,
        name: 'Donut',
        price: 29.9,
        img: 'donuts.jpeg',
      },
      {
        id: 3,
        name: 'Třešně',
        price: 69.9,
        img: 'cherry.jpeg',
      },
      {
        id: 4,
        name: 'Mandarinka',
        price: 49.9,
        img: 'tangerine.jpeg',
      },
      // {
      //   id: 5,
      //   name: 'Banán',
      //   price: 34.9,
      //   img: 'banana.jpeg',
      // },
      // {
      //   id: 6,
      //   name: 'Telefon',
      //   price: 2999,
      //   img: 'phone.jpeg',
      // },
      // {
      //   id: 7,
      //   name: 'Brokolice',
      //   price: 39.9,
      //   img: 'broccoli.jpeg',
      // },
      // {
      //   id: 8,
      //   name: 'Sluchátka',
      //   price: 1490,
      //   img: 'phones.jpeg',
      // },
      // {
      //   id: 9,
      //   name: 'Avokádo',
      //   price: 24.9,
      //   img: 'avocado.jpeg',
      // },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
