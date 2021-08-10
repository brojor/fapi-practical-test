import { createStore } from 'vuex';
import parseRates from '@/helpers/parseRates';

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
    currencies: [],
    selectedCurrency: {
      country: 'Česká Republika',
      currency: 'koruna',
      quantity: 1,
      code: 'CZK',
      exchangeRate: 1,
    },
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
    SET_CURRENCY_RATES(state, rates) {
      console.log({ rates });
      const essentialRate = {
        country: 'Česká Republika',
        currency: 'koruna',
        quantity: 1,
        code: 'CZK',
        exchangeRate: 1,
      };
      state.currencies = [essentialRate, ...rates];
    },
    SET_SELECTED_CURRENCY(state, currency) {
      state.selectedCurrency = currency;
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
    fetchExhangeRates({ commit }) {
      const corsProxyUrl = 'https://thingproxy.freeboard.io/fetch/';
      const CNBUrl = 'https://www.cnb.cz/cs/financni-trhy/devizovy-trh/kurzy-devizoveho-trhu/kurzy-devizoveho-trhu/denni_kurz.txt';
      fetch(`${corsProxyUrl}${CNBUrl}`)
        .then((response) => response.text())
        .then((data) => {
          const parsedData = parseRates(data);
          commit('SET_CURRENCY_RATES', parsedData);
        });
    },
    changeCurrence({ state, commit }, code) {
      console.log({ code });
      const selectedCurrency = state.currencies.find((currency) => currency.code === code);
      console.log({ selectedCurrency });
      commit('SET_SELECTED_CURRENCY', selectedCurrency);
    },
  },
  getters: {
    totalPrice: (state) => {
      const totalPrice = state.cart.reduce((acc, item) => {
        const { exchangeRate, quantity } = state.selectedCurrency;
        return acc + (item.price / exchangeRate) * item.amount * quantity;
      }, 0);
      return `${totalPrice.toFixed(2)} ${state.selectedCurrency.code}`;
    },
  },
});
