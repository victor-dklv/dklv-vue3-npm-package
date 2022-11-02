'use strict';

var vue = require('vue');

var script = {
  name: 'DklvImageSlider',
  props: ['image1', 'image2'],
  data(){
    return {
      slide: false,
      sliderWidth: "50%"
    }
  },
  methods:{
    doSlide(e){
      if(this.slide){
        let width = document.getElementById("imageSliderContainer").offsetWidth;
        this.sliderWidth = (e.offsetX/width*100) + "%";
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

const _hoisted_1 = ["src"];
const _hoisted_2 = ["src"];
const _hoisted_3 = {
  width: "100%",
  height: "100%"
};
const _hoisted_4 = { id: "myClip" };
const _hoisted_5 = ["width"];

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", {
    class: "slider",
    id: "imageSliderContainer",
    onMousedown: _cache[0] || (_cache[0] = (...args) => ($options.startSlide && $options.startSlide(...args))),
    onMousemove: _cache[1] || (_cache[1] = (...args) => ($options.doSlide && $options.doSlide(...args))),
    onMouseup: _cache[2] || (_cache[2] = (...args) => ($options.stopSlide && $options.stopSlide(...args)))
  }, [
    vue.createElementVNode("img", {
      src: $options.beforeImage,
      class: "sliderImage",
      draggable: "false"
    }, null, 8 /* PROPS */, _hoisted_1),
    vue.createElementVNode("img", {
      style: {"clip-path":"url(#myClip)"},
      src: $options.afterImage,
      class: "sliderImage",
      draggable: "false"
    }, null, 8 /* PROPS */, _hoisted_2),
    (vue.openBlock(), vue.createElementBlock("svg", _hoisted_3, [
      vue.createElementVNode("clipPath", _hoisted_4, [
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

var css_248z = "\n.slider[data-v-3143918b]{\r\n  position: relative;\r\n  height: 500px;\r\n  overflow: hidden;\n}\n.sliderImage[data-v-3143918b]{\r\n  height: 100%;\r\n  width: 100%;\r\n  position: absolute;\r\n  object-fit: cover;\r\n  object-position: center;\n}\n.sliderButton[data-v-3143918b]{\r\n  width:50px;\r\n  height:50px;\r\n  background:white;\r\n  position:absolute;\r\n  top:50%;\r\n  transform:translate(-50%,-50%);\r\n  border-radius:50%;\r\n  user-select:none;\r\n  pointer-events: none;\n}\r\n";
styleInject(css_248z);

script.render = render;
script.__scopeId = "data-v-3143918b";
script.__file = "src/components/DklvImageSlider.vue";

var components = { DklvImageSlider: script };

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
