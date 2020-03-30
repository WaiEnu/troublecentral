<template>
  <v-container
    class="fill-height"
    fluid
  >
    <v-layout wrap align-center justify-space-around>
      <v-flex lg8 md10 xs12>
        <CodonSlot/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// @ is an alias to /src
import CodonSlot from '@/components/CodonSlot.vue'

export default {
  name: 'Top',
  components: {
    CodonSlot,
  },
  data: function(){
    return {
      //item:  require('@/assets/common/topView.png')
    }
  },
}
</script>