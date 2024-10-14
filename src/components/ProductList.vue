<template>
  <div>
    <ul>
      <li v-for="(product, index) in products" :key="index">
        <span>{{ product.name }} - ${{ product.price }}</span>
        <button @click="editProduct(index)">Edit</button>
      </li>
    </ul>
    <ProductForm
      v-if="editingIndex !== null"
      :product="products[editingIndex]"
      @add-product="updateProduct"
    />
  </div>
</template>

<script>
import ProductForm from './ProductForm.vue'

export default {
  components: { ProductForm },
  props: {
    products: Array,
  },
  data() {
    return {
      editingIndex: null,
    }
  },
  methods: {
    editProduct(index) {
      this.editingIndex = index
    },
    updateProduct(updatedProduct) {
      this.$emit('update-product', {
        index: this.editingIndex,
        product: updatedProduct,
      })
      this.editingIndex = null
    },
  },
}
</script>
