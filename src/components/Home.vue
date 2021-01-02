<template>
  <div class="home">
    <h1>Trade or View your Portfolio</h1>
    <h6>You may Save & Load your Data</h6>
    <h6>Click on 'End Day' to begin a new Day!</h6>
    <hr />
    <p>Your Funds: {{ funds | currency }}</p>
  </div>
</template>

<script>
export default {
  components: {},
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
  },
};
</script>

<style scoped>
.home {
  margin: 20px;
}
</style>