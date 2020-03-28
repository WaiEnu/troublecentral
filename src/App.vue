<template>
  <v-app>
    <v-content>
      <MyHeader/>
      <router-view/>
      <MyFooter/>
    </v-content>
  </v-app>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyFooter from './components/MyFooter.vue'

export default {
  name: 'App',
  components: {
    MyHeader,
    MyFooter
  },

  data: () => ({
    //
  }),
};
</script>
