<template>
  <v-container
    class="fill-height"
    fluid
  >
    <v-layout wrap align-center justify-space-around>
      <v-flex lg8 md10 xs12>
        <Aboutview/>
      </v-flex>
    </v-layout>
  </v-container>           
</template>

<script>
// @ is an alias to /src
import Aboutview from '@/components/Aboutview.vue'

export default {
  name: 'About',
  components: {
    Aboutview,
  },
  data: function(){
      return {
      }
  },
}
</script>