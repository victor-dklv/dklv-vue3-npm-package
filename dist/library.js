'use strict';

var vue = require('vue');

var script$1 = {
  name: 'DklvImageSlider',
  props: ['image1', 'image2'],
  data(){
    return {
      slide: false,
      sliderWidth: "50%"
    }
  },
  methods:{
    doSlideTouch(e){
      let width = document.getElementById("imageSliderContainer").offsetWidth;
      if(e.type !== "mousemove"){
          this.sliderWidth = (e.touches[0].clientX/width*100) + "%";
      }else {
        if(this.slide){
          this.sliderWidth = (e.offsetX/width*100) + "%";
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
};

const _hoisted_1$1 = ["src"];
const _hoisted_2$1 = ["src"];
const _hoisted_3$1 = {
  width: "100%",
  height: "100%"
};
const _hoisted_4$1 = { id: "myClip" };
const _hoisted_5 = ["width"];

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", {
    class: "slider",
    id: "imageSliderContainer",
    onMousedown: _cache[0] || (_cache[0] = (...args) => ($options.startSlide && $options.startSlide(...args))),
    onMousemove: _cache[1] || (_cache[1] = (...args) => ($options.doSlideTouch && $options.doSlideTouch(...args))),
    onMouseup: _cache[2] || (_cache[2] = (...args) => ($options.stopSlide && $options.stopSlide(...args))),
    onTouchmove: _cache[3] || (_cache[3] = (...args) => ($options.doSlideTouch && $options.doSlideTouch(...args)))
  }, [
    vue.createElementVNode("img", {
      src: $options.beforeImage,
      class: "sliderImage",
      draggable: "false"
    }, null, 8 /* PROPS */, _hoisted_1$1),
    vue.createElementVNode("img", {
      style: {"clip-path":"url(#myClip)"},
      src: $options.afterImage,
      class: "sliderImage",
      draggable: "false"
    }, null, 8 /* PROPS */, _hoisted_2$1),
    (vue.openBlock(), vue.createElementBlock("svg", _hoisted_3$1, [
      vue.createElementVNode("clipPath", _hoisted_4$1, [
        vue.createElementVNode("rect", {
          width: $data.sliderWidth,
          height: "100%",
          id: "clippath"
        }, null, 8 /* PROPS */, _hoisted_5)
      ])
    ])),
    vue.createElementVNode("div", {
      class: "sliderButton",
      style: vue.normalizeStyle('left: ' + $data.sliderWidth)
    }, null, 4 /* STYLE */)
  ], 32 /* HYDRATE_EVENTS */))
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$1 = "\n.slider[data-v-3143918b]{\r\n  position: relative;\r\n  height: 500px;\r\n  overflow: hidden;\n}\n.sliderImage[data-v-3143918b]{\r\n  height: 100%;\r\n  width: 100%;\r\n  position: absolute;\r\n  object-fit: cover;\r\n  object-position: center;\n}\n.sliderButton[data-v-3143918b]{\r\n  width:50px;\r\n  height:50px;\r\n  background:rgb(0, 0, 0);\r\n  position:absolute;\r\n  top:50%;\r\n  transform:translate(-50%,-50%);\r\n  border-radius:50%;\r\n  user-select:none;\r\n  pointer-events: none;\n}\r\n";
styleInject(css_248z$1);

script$1.render = render$1;
script$1.__scopeId = "data-v-3143918b";
script$1.__file = "src/components/DklvImageSlider.vue";

var script = {
    name: "DklvImageCarousel",
    props:[
        'images',
        'height'
    ],
    data(){
        return {
            curIndex: 0,
            loaded:false,
            loadedImages: [],
            loadedHeight: 0,
            created: false,
        }
    },
    created(){
        if(!this.images){
            this.loadedImages = [
                "https://www.w3schools.com/howto/img_nature_wide.jpg",
                "https://www.w3schools.com/howto/img_snow_wide.jpg",
                "https://www.w3schools.com/howto/img_lights_wide.jpg",
                "http://images.ctfassets.net/skkgb8fetgpj/26f0kFTj6XTDMK8x6hwb2M/cca6c1a0aee94bcbf4afeae04e5d489d/pexels-a__kos-szabo__-440731.jpg"
            ];
        }
        if(!this.height){
            this.loadedHeight = 0;
        }
        this.created = true;
    },
    computed:{
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
                }else {
                    return "height: " + this.loadedHeight + "px;";
                }
            }

            
        }
    },
    mounted(){
        if(this.created){
            this.loaded = true;
        }
    },
    methods:{
        position(val){
            if(this.curIndex < 0){
                this.curIndex = this.loadedImages.length-1;
            }else if(this.curIndex >= this.loadedImages.length){
                this.curIndex = 0;
            }
            return "left: " + (val -this.curIndex) *100 + "%";
        }
    }
};

const _withScopeId = n => (vue.pushScopeId("data-v-1363c60a"),n=n(),vue.popScopeId(),n);
const _hoisted_1 = ["src"];
const _hoisted_2 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/vue.createElementVNode("button", { class: "btn nextButton" }, null, -1 /* HOISTED */));
const _hoisted_3 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/vue.createElementVNode("button", { class: "btn prevButton" }, null, -1 /* HOISTED */));
const _hoisted_4 = { class: "bullets" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", {
    class: "carousel",
    style: vue.normalizeStyle($options.carouselHeight)
  }, [
    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.loadedImages, (image, index) => {
      return (vue.openBlock(), vue.createElementBlock("img", {
        class: "images",
        key: image,
        src: image,
        style: vue.normalizeStyle($options.position(index))
      }, null, 12 /* STYLE, PROPS */, _hoisted_1))
    }), 128 /* KEYED_FRAGMENT */)),
    _hoisted_2,
    vue.createElementVNode("div", {
      class: "btnBg btnRightBg",
      onClick: _cache[0] || (_cache[0] = $event => ($data.curIndex++))
    }),
    _hoisted_3,
    vue.createElementVNode("div", {
      class: "btnBg btnLeftBg",
      onClick: _cache[1] || (_cache[1] = $event => ($data.curIndex--))
    }),
    vue.createElementVNode("div", _hoisted_4, [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.loadedImages, (image, index) => {
        return (vue.openBlock(), vue.createElementBlock("div", {
          key: index,
          class: vue.normalizeClass(["bullet", index == $data.curIndex?'activeBullet':''])
        }, null, 2 /* CLASS */))
      }), 128 /* KEYED_FRAGMENT */))
    ])
  ], 4 /* STYLE */))
}

var css_248z = "\n.carousel[data-v-1363c60a]{\r\n    position: relative;\r\n    /* height: 200px; */\r\n    overflow: hidden;\n}\n.images[data-v-1363c60a]{\r\n    position: absolute;\r\n    width:100%;\r\n    object-position: center;\r\n    object-fit: cover;\r\n    height: 100%;\r\n    transition: 1s all ease;\n}\n.btnBg[data-v-1363c60a]{\r\n    position: absolute;\r\n    width: 60px;\r\n    height: 100%;\r\n    background: rgba(0,0,0,0);\r\n    cursor: pointer;\r\n    transition: 0.2s all ease;\n}\n.btnBg[data-v-1363c60a]:hover, .btn[data-v-1363c60a]:hover {\r\n    background: rgba(0,0,0,0.2);\n}\n.btnLeftBg[data-v-1363c60a]{\r\n    left: 0;\n}\n.btnRightBg[data-v-1363c60a]{\r\n    right: 0;\n}\n.btn[data-v-1363c60a]{\r\n    position: absolute;\r\n    background: none;\r\n    outline: none;\r\n    border: none;\r\n    top: 50%;\r\n    transform: translateY(-50%) rotate(45deg);\r\n    width: 20px;\r\n    height: 20px;\n}\n.prevButton[data-v-1363c60a]{\r\n    left:20px;\r\n    border-left: 5px solid rgba(255, 255, 255, 0.637);\r\n    border-bottom: 5px solid rgba(255, 255, 255, 0.637);\n}\n.nextButton[data-v-1363c60a]{\r\n    right:20px;\r\n    border-right: 5px solid rgba(255, 255, 255, 0.637);\r\n    border-top: 5px solid rgba(255, 255, 255, 0.637);\n}\n.bullets[data-v-1363c60a]{\r\n    position: absolute;\r\n    bottom: 20px;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    display: flex;\r\n    gap: 10px;\n}\n.bullet[data-v-1363c60a]{\r\n    width: 10px;\r\n    height: 10px;\r\n    border-radius: 50%;\r\n    background: none;\r\n    border: 2px solid white\n}\n.activeBullet[data-v-1363c60a]{\r\n    background: rgb(255, 230, 0);\r\n    border: 2px solid rgb(255, 230, 0);\n}\r\n";
styleInject(css_248z);

script.render = render;
script.__scopeId = "data-v-1363c60a";
script.__file = "src/components/DklvImageCarousel.vue";

var components = { DklvImageSlider: script$1, DklvImageCarousel: script };

const plugin = {
    install(Vue) {
        for (const prop in components) {
            if (components.hasOwnProperty(prop)) {
                const component = components[prop];
                Vue.component(component.name, component);
            }
        }
    }
};

module.exports = plugin;
