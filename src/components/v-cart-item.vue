<template>
  <div class="v-cart-item">
    <img
      :src="require('../assets/images/' + cart_item_data.image)"
      alt="Купить кофту в МСК"
      class="v-cart-item__image"
    />
    <div class="cart-item__info">
      <p>{{ cart_item_data.name }}</p>
      <p>{{ cart_item_data.price.toFixed(2) }}</p>
      <p>{{ cart_item_data.article }}</p>
    </div>
    <div class="cart-item__quantity">
      <p>Qty:</p>
      {{ cart_item_data.quantity }}
    </div>
    <button @click="deleteFromCart">Detele</button>
  </div>
</template>

<script>
export default {
  name: "v-cart-item",
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    deleteFromCart() {
      this.$emit("deleteFromCart");
    },
  },
  computed: {},
};
</script>

<style lang="scss">
.v-cart-item {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 8px 0 #e0e0e0;
  margin: 16px;
  padding: 16px;
  &__image {
    max-width: 50px;
  }
}
</style>
