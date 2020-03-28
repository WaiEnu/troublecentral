<template>
  <v-dialog v-model="dialog" width="60vw" height="60vmin" max-width="500" max-height="500">
    <v-card>
      <v-img
        :src="item"
        position="left top"
        alt=""
        class="bgImg">
        <v-card-title class="headline transparent lighten-2" primary-title>
          <span v-if="success">せいこう！</span>
          <span v-else>しっぱい…</span>
        </v-card-title>
        <v-card-text class="px-2 py-0 justify-center" v-if="success">
          <v-img
            :src="result[0].src"
            contain
            alt=""
            width="auto"
            height="40vmin" 
            class="">
          </v-img>
        </v-card-text>
        <v-card-text class="px-2 py-0 justify-center" v-else>
          <v-img
            :src="result[1].src"
            contain
            alt=""
            width="auto"
            height="40vmin" 
            class="">
          </v-img>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            v-if="success"
            color="primary"
            @click="goesNext()">
            OK
          </v-btn>
          <v-btn
            v-else
            color="primary"
            @click="close()">
            もう一回
          </v-btn>
        </v-card-actions>
      </v-img>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props:["success"],
  data() {
    return {
      dialog: false,
      item:  require('@/assets/about/pagecnt.png'),
      result: [
        {'id':1,'src':require('@/assets/data/Robot.png')}
        ,{'id':2,'src':require('@/assets/data/roboNGpng.png')}
      ],
    };
  },
  computed: {
  },
  methods: {
    open: function () {
      this.dialog = true;
    },
    close: function () {
      this.dialog = false;
    },
    goesNext: function () {
      this.dialog = false;
      this.$emit('call-next')
    },
  }
}
</script>
