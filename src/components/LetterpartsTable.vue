<template>
  <!-- <v-dialog v-model="table" width="60vw" max-width="500"> -->
  <v-dialog v-model="table" width="60vw" max-width="500">
    <v-card>
    <v-img
      :src="item"
      position="left top"
      alt=""
      class="bgImg">
        <v-card-title class="headline transparent lighten-2" primary-title>
          始まりの合図を探せ！
        </v-card-title>
      <v-card-text>
        <v-container
          class="pa-0"
          fluid>
          <v-row no-gutters="">
            <v-col cols="12" class="pa-2">
              <div class="title">遺伝暗号は始まりの合図AUGから始まり、終わりの合図(UAA,UAC,UCA)でおわる。</div>
            </v-col>
          </v-row>
          <v-row no-gutters="">
            <v-col cols="6" class="text-center pa-2">
              <div class="title">せいこう！</div>
              <v-img
                :src="result[0].src"
                contain
                alt=""
                width="auto"
                height="20vmin" 
                class="Img">
              </v-img>
            </v-col>
            <v-col cols="6" class="text-center pa-2">
              <div class="title">しっぱい…</div>
              <v-img
                :src="result[1].src"
                contain
                alt=""
                width="auto"
                height="20vmin" 
                class="Img">
              </v-img>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text> 

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          @click="close()">
          OK
        </v-btn>
      </v-card-actions>
    </v-img>
    </v-card>
  </v-dialog>
</template>

<script>

export default {
  data() {
    return {
      table: false,
      item:  require('@/assets/about/pagecnt.png'),
      result: [
        {'id':1,'src':require('@/assets/data/Robot.png')}
        ,{'id':2,'src':require('@/assets/data/roboNGpng.png')}
      ],
    };
  },
  methods: {
    open() {
      this.table = true;
    },
    close() {
      this.table = false;
    }
  }
}
</script>
