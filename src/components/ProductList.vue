<template>
  <ul class="catalog__list">
    <ProductItem></ProductItem>
  </ul>
</template>
<script>
import ProductItem from "./ProductItem.vue";
export default {
  components: { ProductItem },
};
</script>
