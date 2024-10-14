<template>
  <div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
    }
  },
  methods: {
    addProduct(product) {
      this.products.push(product)
    },
    updateProduct({ product, index }) {
      this.products.splice(index, 1, product)
    },
  },
}
</script>
