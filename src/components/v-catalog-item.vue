<template>
  <div class="v-catalog-item">
    <img
      :src="require('../assets/images/' + product_data.image)"
      alt="Купить кофту в МСК"
      class="v-catalog-item__image"
    />
    <p class="v-catalog-item__name">{{ product_data.name }}</p>
    <p class="v-catalog-item__price">{{ product_data.price.toFixed(2) }} р</p>
    <button @click="addToCart" class="v-catalog-item__add_to_cart_btn btn">
      Add to cart
    </button>
  </div>
</template>

<script>
export default {
  name: "v-catalog-item",
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    addToCart() {
      this.$emit("addToCart", this.product_data);
    },
  },
};
</script>

<style lang="scss">
.v-catalog-item {
  flex-basis: 25%;
  box-shadow: 0 0 8px 0 #e0e0e0;
  margin: 16px;
  padding: 16px;
  &__image {
    width: 100px;
  }
}
</style>
