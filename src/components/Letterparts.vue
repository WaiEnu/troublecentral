<template>
<v-card class="mt-4">
  <v-img
    :src="item"
    alt=""
    position="left top"
    class="bgImg">
    <v-container
      class="fill-height pa-4"
      fluid>
      <v-row no-gutters="">
        <v-col cols="2">
          <v-img
            :src="require('@/assets/about/tape.png')"
            width="80"
            height="80"
            contain
            alt=""
            class="mx-auto">
          </v-img>
        </v-col>
        <v-col cols="10">
          <ul class="list pl-0">
            <transition-group name="flip">
              <template v-for="item in letterX">
                <li :key="item.id" class="item" :id="item.id">
                  <div class="item__text dna" :class="item.text"></div>
                </li>
              </template>
            </transition-group>
          </ul>
        </v-col>
      </v-row>
      <v-row no-gutters="">
        <v-col cols="2">
          <v-img
            :src="require('@/assets/about/copy.png')"
            width="80"
            height="80"
            contain
            alt=""
            class="mx-auto">
          </v-img>
        </v-col>
        <v-col cols="10">
          <ul class="list pl-0">
            <transition-group name="flip">
              <template v-for="item in copyX">
                <li :key="item.id" class="item" :id="item.id">
                  <div class="item__text rna" :class="item.text" @click="onIndexClick(item.id)"></div>
                </li>
              </template>
            </transition-group>
          </ul>
        </v-col>
      </v-row>
      <v-row no-gutters="">
        <v-col cols="2">
          <v-img
            :src="require('@/assets/about/transfar.png')"
            width="60"
            height="60"
            contain
            alt=""
            class="mx-auto">
          </v-img>
        </v-col>
        <v-col cols="10">
          <ul class="list pl-0">
            <transition-group name="flip">
              <template v-for="item in codonX">
                <li :key="item.id" class="item" :id="item.id">
                  <div class="item__text trna" :class="item.class">{{ item.text }}</div>
                </li>
              </template>
            </transition-group>
          </ul>
        </v-col>
      </v-row>
      <v-row no-gutters="">
        <v-col cols="4" class="text-center px-0 py-2">
          <v-btn class="lbtn body-1 font-weight-medium pa-2" depressed text color="gray" @click="showDialog()">Robot</v-btn>
          <app-dialog :success="isRobot" v-on:call-next="next" ref="dialog"></app-dialog>
        </v-col>
        <v-col cols="4" class="text-center px-0 py-2">
          <v-btn class="lbtn body-1 font-weight-medium py-2 px-4" depressed text color="gray" @click="showTable()">Hint</v-btn>
          <app-table ref="table"></app-table>
        </v-col>
        <v-col cols="4" class="text-center px-0 py-2">
          <v-btn class="lbtn body-1 font-weight-medium pa-2" depressed text color="gray" @click="reset()">Reset</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-img>
</v-card>
</template>
<style lang="scss">
.dna{
	background-size: 100% 100%;
  &.A{background-image:url('../assets/data/D_Adenin.png')}
  &.G{background-image:url('../assets/data/D_Guanin.png')}
  &.T{background-image:url('../assets/data/D_Timin.png')}
  &.C{background-image:url('../assets/data/D_Citosin.png')}
}
.rna{
	background-size: 100% 100%;
  &.U{background-image:url('../assets/data/R_Urasil.png')}
  &.C{background-image:url('../assets/data/R_Citosin.png')}
  &.A{background-image:url('../assets/data/R_Adenin.png')}
  &.G{background-image:url('../assets/data/R_Guanin.png')}
}
.trna{
	background-size: 100% 100%;
  background-image:url('../assets/data/tRNA.png');
}
.lbtn{
	background-size: 100% 100%;
  background-image:url('../assets/letter/button.png');
}
</style>
<script>
// import l_ from 'lodash'
  import LetterpartsTable from "@/components/LetterpartsTable.vue";
  import LetterpartsDialog from "@/components/LetterpartsDialog.vue";
  import { mapActions } from 'vuex'

  export default {
  name: 'Letterparts',
  components: {
    appTable: LetterpartsTable,
    appDialog: LetterpartsDialog,
  },
  data() {
    return {
      item:  require('@/assets/letter/caset.png'),
      alX: this.$store.getters['alX'],
      dna: this.$store.getters['dna'],
      rna: this.$store.getters['rna'],
      cdn: this.$store.getters['cdn'],
    }
  },
  mounted () {
    this.$store.dispatch('getAlignX').then((res)=>{
      this.$store.commit('getAlignX', res.data.seq )
      return;
    })
  },
  computed: {
    letterX: function (){
      return this.$store.getters['DnaSeq']
    },
    copyX: function (){
      return this.$store.getters['RnaSeq']
    },
    codonX: function (){
      return this.$store.getters['makecodon']
    },
    isRobot: function () {
      return this.Robot()
    },
  },
  methods: {
    Robot: function () {
      let letters = this.$store.getters['makecodon'];
      let flg=false;
      if(letters.length>1){
        flg = (letters[0].text === "M" &&  letters[letters.length-1].text === "x");
      }
      return flg;
    },
    ...mapActions(['changeIndex','getAlignX']),
    onIndexClick: function (id) {
        this.changeIndex(id)
    },
    showTable: function () {
      this.$refs.table.open();
    },
    showDialog: function () {
      this.$refs.dialog.open();
    },
    next: function () {
      this.getAlignX()
      this.changeIndex(-1)
    },
    reset: function () {
      this.changeIndex(-1)
      this.getAlignX()
    },
  }
}
</script>