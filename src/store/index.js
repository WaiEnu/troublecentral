import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawer: false,
    index: -1,
    ali: [],
    alX: [2,2,0,3,0,3,0,1,2,3,0,1,3,3,0,3,0,2,2,3],
    dna: ['A','G','T','C'],
    rna: ['U','C','A','G'],
    cdn:[[['F','F','L','L'],['S','S','S','S'],['Y','Y','x','x'],['C','C','x','W']],[['L','L','L','L'],['P','P','P','P'],['H','H','Q','Q'],['R','R','R','R']],[['I','I','I','M'],['T','T','T','T'],['N','N','K','K'],['S','S','R','R']],[['V','V','V','V'],['A','A','A','A'],['D','D','E','E'],['G','G','G','G']]],
  },
  getters: {
    index: function (state){
      return state.index;
    },
    alX: function (state){
      return state.alX;
    },
    dna: function (state){
      return state.dna;
    },
    rna: function (state){
      return state.rna;
    },
    cdn: function (state){
      return state.cdn;
    },
    DnaSeq: function (state) {
      let letters=state.alX;
      let newseq=[]
      for (var i = 0; i < letters.length; i++) {
        const l = letters[i]
        newseq.push( {'id':i,'text':state.dna[l]});
      }
      return newseq
    },
    RnaSeq: function (state) {
      let letters=state.alX;
      let newseq=[]
      for (var i = 0; i < letters.length; i++) {
        const l = letters[i]
        newseq.push( {'id':i,'text':state.rna[l]});
      }
      return newseq
    },
    makecodon: function (state){
      let codon = [];
      let s=state.index
      if(s+1>0){
        let letters = state.alX;
        const n = 2;
        let i = 1;
        let d = s + n;
        while(d < letters.length){
          let val=state.cdn[letters[d-n]][letters[d-n+1]][letters[d-n+2]];
          let attr = (val === "M" ||  val === "x") ? 'r' : '';
          codon.push({'id':i,'text':val, 'class':attr});
          if(val=="x"){break;}
          d += 3;
          i ++;
        }
      }
      return codon;
    },
  },
  mutations: {
    changeIndex: function (state,item) {
      state.index=item;
    },
    getAlignX(state, payload) {
      state.alX = payload.alX;
    },
  },
  actions: {
    changeIndex: function (state,item) {
      state.commit('changeIndex', item);
    },
    async getAlignX(context) {
      const payload = {
        alX: [],
      };
      await axios.get('http://127.0.0.1:5000/dna')
      .then((res) => {
        payload.alX = res.data.seq;
      });
      context.commit('getAlignX', payload);
    },
  },
  modules: {
  }
})