<template>
  <v-container
    class="fill-height"
    fluid
  >
    <v-layout wrap align-center justify-space-around>
      <v-flex lg8 md8 xs10>
        <Letterparts/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// @ is an alias to /src
import Letterparts from '@/components/Letterparts.vue'

export default {
  name: 'Letter',
  components: {
    Letterparts,
  },
  data: function(){
      return {
      }
  },
}
</script>