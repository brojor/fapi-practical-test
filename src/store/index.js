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
    cart: [],
  },
  mutations: {
    ADD_TO_CART(state, item) {
      state.cart.push(item);
    },
    REMOVE_FROM_CART(state, itemId) {
      state.cart = state.cart.filter((item) => item.id !== itemId);
    },
    MUTATE_AMOUNT(state, { itemId, newValue }) {
      const currentItem = state.cart.find((item) => item.id === itemId);
      currentItem.amount = Number(newValue);
    },
  },
  actions: {
    addToCart({ state, commit }, itemId) {
      const { id, name, price } = state.products.find((item) => item.id === itemId);
      commit('ADD_TO_CART', {
        id,
        name,
        price,
        amount: 1,
      });
    },
  },
  getters: {
    totalPrice: (state) => state.cart.reduce((acc, item) => acc + item.price * item.amount, 0),
  },
});
