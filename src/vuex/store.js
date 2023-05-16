import axios from "axios";
import { createStore } from "vuex";

const url = "http://localhost:3000/products";

const store = createStore({
  state() {
    return {
      products: [],
    };
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products;
    },
  },
  actions: {
    GET_PRODUCTS_FROM_API({ commit }) {
      return axios(url, {
        method: "GET",
      })
        .then((products) => {
          commit("SET_PRODUCTS_TO_STATE", products.data);
          return products;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
  },
  getters: {
    PRODUCTS(state) {
      return state.products;
    },
  },
});

export default store;
