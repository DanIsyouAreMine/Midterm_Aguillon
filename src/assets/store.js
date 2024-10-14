import { createStore } from 'vuex'

const store = createStore({
  state: {
    products: [],
  },
  mutations: {
    addProduct(state, newProduct) {
      state.products.push(newProduct)
    },
    updateProduct(state, { index, product }) {
      state.products[index] = product
    },
  },
  actions: {
    addProduct({ commit }, newProduct) {
      commit('addProduct', newProduct)
    },
    updateProduct({ commit }, payload) {
      commit('updateProduct', payload)
    },
  },
  getters: {
    products: state => state.products,
  },
})

export default store
