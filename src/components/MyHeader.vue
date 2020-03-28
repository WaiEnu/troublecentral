<template>
  <v-app-bar
    fixed
    color="transparent"
    src="../assets/common/header2.png">
    <template v-slot:img="{ props }">
      <v-img
        v-bind="props"
        position="bottom center"
        cover
      ></v-img>
    </template>
    <v-tabs 
        grow
        v-for="item in items"
        :key="item.title">
      <v-tab class="mx-0" :to=item.link >{{ item.title }}</v-tab>
    </v-tabs>
  </v-app-bar>
</template>

<script>
  export default {
    name: 'MyHeader',
    data () {
      return {
        items: [
          { title: 'Top', icon: 'mdi-home', link: '/' },
          { title: 'About', icon: 'mdi-clipboard-list-outline', link: '/about' },
          { title: 'Letter', icon: 'mdi-dashboard', link: '/letter' },
        ],
      }
    }
  }
</script>