<template>
  <v-footer
    fixed
    color="transparent"
    dark>
      <v-spacer></v-spacer>
      <a href="/" >
        <img v-bind:src="item"
            height="35"
            position="center center"
            contain
            alt="">
      </a>
      <v-spacer></v-spacer>
  </v-footer>
</template>
<style lang="scss">
  .v-footer {
    background-size: contain;
    background-position: center center;
    background-image: url("../assets/common/footer.png");
  }
</style>
<script>
  export default {
    name: 'MyFooter',

    data: () => ({
      item:  require('../assets/common/footerIcon.png')
    }),
  }
</script>
