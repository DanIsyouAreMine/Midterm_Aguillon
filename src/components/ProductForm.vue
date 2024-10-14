<template>
  <form @submit.prevent="submitProduct">
    <input v-model="productName" placeholder="Product Name" required />
    <input
      v-model.number="productPrice"
      type="number"
      placeholder="Price"
      required
    />
    <textarea
      v-model="productDescription"
      placeholder="Description"
      required
    ></textarea>
    <button type="submit">Add Product</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      productName: '',
      productPrice: 0,
      productDescription: '',
    }
  },
  methods: {
    submitProduct() {
      const newProduct = {
        name: this.productName,
        price: this.productPrice,
        description: this.productDescription,
      }
      this.$emit('add-product', newProduct)
      this.resetForm()
    },
    resetForm() {
      this.productName = ''
      this.productPrice = 0
      this.productDescription = ''
    },
  },
}
</script>
