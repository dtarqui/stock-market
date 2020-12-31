<template>
  <div>
    <Stock v-for="(stock, index) in stocks" :key="index" :stock="stock"></Stock>
  </div>
</template>

<script>
import Stock from "./Stock";
export default {
  data: () => ({}),
  components: {
    Stock,
  },
  computed: {
    stocks() {
      return this.$store.getters.stocks;
    },
  },
};
</script>

<style>
</style>