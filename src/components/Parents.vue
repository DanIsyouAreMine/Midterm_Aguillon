<template>
  <div>
    <h1>Product Management</h1>
    <ProductForm @add-product="addProduct" />
    <ProductList :products="products" @update-product="updateProduct" />
  </div>
</template>

<script>
import ProductForm from '../components/ProductForm.vue'
import ProductList from '../components/ProductList.vue'

export default {
  components: { ProductForm, ProductList },
  data() {
    return {
      products: [],
    }
  },
  methods: {
    addProduct(newProduct) {
      this.products.push(newProduct)
    },
    updateProduct({ index, product }) {
      this.$set(this.products, index, product)
    },
  },
}
</script>
