<template>
    <div class="slider" id="imageSliderContainer" @mousedown="startSlide" @mousemove="doSlideTouch" @mouseup="stopSlide"  @touchmove="doSlideTouch">
      <img :src="beforeImage" class="sliderImage" draggable="false">
      <img style="clip-path: url(#myClip)" :src="afterImage" class="sliderImage" draggable="false">
      <svg width="100%" height="100%">
        <clipPath id="myClip">
          <rect :width="sliderWidth + '%'" height="100%" id="clippath"/>
        </clipPath>
      </svg>
      <div class="sliderButton ball" :style="'left: ' + sliderWidth + '%'"></div>
      <div class="sliderButton bar top" :style="'left: ' + sliderWidth + '%'"></div>
      <div class="sliderButton bar bottom" :style="'left: ' + sliderWidth + '%'"></div>
      <div class="sliderButton left" :style="'left: ' + (sliderWidth-1) + '%'"></div>
      <div class="sliderButton right" :style="'left: ' + (sliderWidth+1) + '%'"></div>
    </div>
</template>
<script>
export default {
  name: 'DklvImageSlider',
  props: ['image1', 'image2'],
  data(){
    return {
      slide: false,
      sliderWidth: 50
    }
  },
  methods:{
    doSlideTouch(e){
      let width = document.getElementById("imageSliderContainer").offsetWidth;
      if(e.type !== "mousemove"){
          this.sliderWidth = (e.touches[0].clientX/width*100)
      }else{
        if(this.slide){
          this.sliderWidth = (e.offsetX/width*100)
        }
      }
    },
    startSlide(){
      this.slide = true;
    },
    stopSlide(){
      this.slide = false;
    }
  },
  computed:{
    beforeImage(){
      if(!this.image1){
        return "http://images.ctfassets.net/skkgb8fetgpj/26f0kFTj6XTDMK8x6hwb2M/cca6c1a0aee94bcbf4afeae04e5d489d/pexels-a__kos-szabo__-440731.jpg";
      }
      return this.image1
    },
    afterImage(){
      if(!this.image2){
        return "https://gumlet.assettype.com/dtnext/2022-08/2bea531d-a062-4045-b289-deb9c98ee313/Land.jpg?w=1200&h=675&auto=format%2Ccompress&fit=max";
      }
      return this.image2
    }
  }
}
</script>

<style scoped>
.slider{
  position: relative;
  height: 500px;
  overflow: hidden;
}
.sliderImage{
  height: 100%;
  width: 100%;
  position: absolute;
  object-fit: cover;
  object-position: center;
  cursor: pointer;
}
.sliderButton{
  position:absolute;
  user-select:none;
  pointer-events: none;
  top:50%;
}
.sliderButton.bar{
  height: 50%;
  width: 3px;
  transform: translateX(-50%);
  background: rgba(255, 255, 255, 1)
}
.sliderButton.bar.top{
  top:-25px;
  
}
.sliderButton.bar.bottom{
  top:initial;
  bottom:-25px;
}
.sliderButton.ball{
  width:50px;
  height:50px;
  background:rgba(255, 255, 255, 0);
  border-radius:50%;
  transform: translate(-50%,-50%);
  border: 3px solid white;
}
.sliderButton.left{
  transform:  rotate(45deg) translate(-50%,-50%);
  width:5px;
  height:5px;
  border-left: 3px solid white;
  border-bottom: 3px solid white;
    transform-origin: 0 0;
    line-height: 5px;

}
.sliderButton.right{
  transform: rotate(225deg) translate(-50%,-50%);
  width:5px;
  height:5px;
  border-bottom: 3px solid white;
  border-left: 3px solid white;
    transform-origin: 0 0;
    line-height: 5px;

}
</style>