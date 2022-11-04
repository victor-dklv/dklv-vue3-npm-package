<template>
    <div class="carousel" :style="carouselHeight">
        <img class="images" v-for="(image, index) in loadedImages" :key="image" :src="image" :style="position(index)"/>
        <button class="btn nextButton" ></button>
        <div class="btnBg btnRightBg" @click="curIndex++; scrollInterval=false"></div>
        <button class="btn prevButton" ></button>
        <div class="btnBg btnLeftBg" @click="curIndex--;scrollInterval=false"></div>
        <div class="bullets">
            <div v-for="(image, index) in loadedImages" :key="index" class="bullet" :class="index == curIndex?'activeBullet':''"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "DklvImageCarousel",
    props:[
        'images',
        'height',
        'autoscroll',
    ],
    data(){
        return{
            curIndex: 0,
            loaded:false,
            scrollInterval: true,
        }
    },
    computed:{
        loadedImages(){
            if(!this.images){
                return [
                "https://www.w3schools.com/howto/img_nature_wide.jpg",
                "https://www.w3schools.com/howto/img_snow_wide.jpg",
                "https://www.w3schools.com/howto/img_lights_wide.jpg",
                "http://images.ctfassets.net/skkgb8fetgpj/26f0kFTj6XTDMK8x6hwb2M/cca6c1a0aee94bcbf4afeae04e5d489d/pexels-a__kos-szabo__-440731.jpg"
                ];
            }
            return this.images
        },
        loadedHeight(){
            if(!this.height){
                return 0;
            }
            return this.height;
        },
        loadedAutoscroll(){
            if(!this.autoscroll){
                return true;
            }
            return this.autoscroll;
        },
        carouselHeight(){
            if(this.loaded){
                if(!this.height || this.height == 0){
                    var car = document.getElementsByClassName('images');
                    for (let i = 0; i < car.length; i++) {
                        const el = car[i];
                        if(el.naturalHeight < this.loadedHeight || this.loadedHeight == 0){
                            this.loadedHeight = el.naturalHeight;
                        }
                    }
                    return "height: " + this.loadedHeight + "px;";
                }else{
                    return "height: " + this.loadedHeight + "px;";
                }
            }
        }
    },
    mounted(){
        if(this.loadedAutoscroll){
            setInterval(() => {
                if(this.scrollInterval){
                    this.curIndex++;
                }
            }, 5000);
        }
        this.loaded = true;
    },
    methods:{
        position(val){
            if(this.curIndex < 0){
                this.curIndex = this.loadedImages.length-1;
            }else 
            if(this.curIndex >= this.loadedImages.length){
                this.curIndex = 0;
            }
            return "left: " + (val -this.curIndex) *100 + "%";
        }
    }
}
</script>

<style scoped>
.carousel{
    position: relative;
    /* height: 200px; */
    overflow: hidden;
}
.images{
    position: absolute;
    width:100%;
    object-position: center;
    object-fit: cover;
    height: 100%;
    transition: 1s all ease;
}
.btnBg{
    position: absolute;
    width: 60px;
    height: 100%;
    background: rgba(0,0,0,0);
    cursor: pointer;
    transition: 0.2s all ease;
}
.btnBg:hover, .btn:hover {
    background: rgba(0,0,0,0.2);
}
.btnLeftBg{
    left: 0;
}
.btnRightBg{
    right: 0;
}
.btn{
    position: absolute;
    background: none;
    outline: none;
    border: none;
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
    width: 20px;
    height: 20px;
}
.prevButton{
    left:20px;
    border-left: 5px solid rgba(255, 255, 255, 0.637);
    border-bottom: 5px solid rgba(255, 255, 255, 0.637);

}
.nextButton{
    right:20px;
    border-right: 5px solid rgba(255, 255, 255, 0.637);
    border-top: 5px solid rgba(255, 255, 255, 0.637);
}
.bullets{
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 10px;
}
.bullet{
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: none;
    border: 2px solid white
}
.activeBullet{
    background: rgb(255, 230, 0);
    border: 2px solid rgb(255, 230, 0);
}
</style>