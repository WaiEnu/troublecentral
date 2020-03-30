<template>
<v-card class="mt-4">
  <v-img
    :src="item"
    position="left top"
    alt=""
    class="bgImg">
    <v-carousel
      height="100%"
      hide-delimiter-background
      show-arrows-on-hover>
      <v-carousel-item
        v-for="slide in slides"
        :key="slide.id">
        <v-sheet
          light=""
          color="transparent">
          <v-container
            class="fill-height">
            <v-row no-gutters="">
              <v-col cols="12">
                <div class="display-3 slideH">
                  {{ slide.title }}
                </div>
              </v-col>
            </v-row>
            <v-row no-gutters="">
              <v-col cols="4" class="text-center pa-2">
              <v-img
                :src="slide.src"
                contain
                alt=""
                class="Img">
              </v-img>
              </v-col>
              <v-col cols="8" class="pa-2">
                <div class="display-1">
                  {{ slide.text }}
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </v-img>
</v-card>
</template>

<style lang="scss">
.slideH{
  background-image: url('../assets/about/titleLine.png') ;
  background-position: bottom center;
	background-size:contain;
}
.slideH::before{
	content:"";
	display:inline-block;
	width:1em;
	height:1em;
	background:url('../assets/about/titleP.png') no-repeat;
	background-size:contain;
}
</style>
<script>
export default {
  name: 'Aboutview',
  data () {
    return {
      item: require('@/assets/about/pagecnt.png'),
      slides: [
        {'id':1,'title':'DNA','text':'細胞の核という部分の中にはDNAがあります','src':require('@/assets/about/tape.png')}
        ,{'id':2,'title':'設計図','text':'DNAは遺伝子、つまり生命の設計図です','src':require('@/assets/about/copy.png')}
        ,{'id':3,'title':'遺伝子','text':'三つの組み合わせで一つの文字を表します','src':require('@/assets/about/transfar.png')}
      ],
    }
  },
}
</script>
