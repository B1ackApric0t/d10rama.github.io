(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{257:function(t,e,n){"use strict";var r=n(10),o=n(4),c=n(72),l=n(15),h=n(11),d=n(31),f=n(174),v=n(71),m=n(6),P=n(73),y=n(108).f,C=n(40).f,x=n(18).f,w=n(278).trim,S=o.Number,k=S.prototype,O="Number"==d(P(k)),T=function(t){var e,n,r,o,c,l,h,code,d=v(t,!1);if("string"==typeof d&&d.length>2)if(43===(e=(d=w(d)).charCodeAt(0))||45===e){if(88===(n=d.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(d.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+d}for(l=(c=d.slice(2)).length,h=0;h<l;h++)if((code=c.charCodeAt(h))<48||code>o)return NaN;return parseInt(c,r)}return+d};if(c("Number",!S(" 0o1")||!S("0b1")||S("+0x1"))){for(var M,E=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof E&&(O?m((function(){k.valueOf.call(n)})):"Number"!=d(n))?f(new S(T(e)),n,E):T(e)},A=r?y(S):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),N=0;A.length>N;N++)h(S,M=A[N])&&!h(E,M)&&x(E,M,C(S,M));E.prototype=k,k.constructor=E,l(o,"Number",E)}},258:function(t,e,n){var content=n(281);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("1c44f4db",content,!0,{sourceMap:!1})},259:function(t,e,n){var content=n(283);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("7bc9747e",content,!0,{sourceMap:!1})},260:function(t,e,n){var content=n(285);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("541d363f",content,!0,{sourceMap:!1})},261:function(t,e,n){var content=n(287);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("9e6158aa",content,!0,{sourceMap:!1})},265:function(t,e,n){"use strict";n(69),n(171),n(30);var r={name:"slide",props:["title"],data:function(){return{width:null}},inject:["carousel"],mounted:function(){this.$isServer||this.$el.addEventListener("dragstart",(function(t){return t.preventDefault()})),this.$el.addEventListener(this.carousel.isTouch?"touchend":"mouseup",this.onTouchEnd)},computed:{activeSlides:function(){for(var t=this.carousel,e=t.currentPage,n=t.breakpointSlidesPerPage,r=[],o=t.$children.filter((function(t){return t.$el&&t.$el.className.indexOf("VueCarousel-slide")>=0})).map((function(t){return t._uid})),i=0;i<n;){var c=o[e*n+i];r.push(c),i++}return r},isActive:function(){return this.activeSlides.indexOf(this._uid)>=0},isCenter:function(){var t=this.carousel.breakpointSlidesPerPage;return!(t%2==0||!this.isActive)&&this.activeSlides.indexOf(this._uid)===Math.floor(t/2)},isAdjustableHeight:function(){return this.carousel.adjustableHeight}},methods:{onTouchEnd:function(t){var e=this.carousel.isTouch&&t.changedTouches&&t.changedTouches.length>0?t.changedTouches[0].clientX:t.clientX,n=this.carousel.dragStartX-e;(0===this.carousel.minSwipeDistance||Math.abs(n)<this.carousel.minSwipeDistance)&&(this.$emit("slideclick",Object.assign({},t.currentTarget.dataset)),this.$emit("slide-click",Object.assign({},t.currentTarget.dataset)))}}},o=(n(284),n(29)),component=Object(o.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"VueCarousel-slide",class:{"VueCarousel-slide-active":this.isActive,"VueCarousel-slide-center":this.isCenter,"VueCarousel-slide-adjustableHeight":this.isAdjustableHeight},attrs:{tabindex:"-1","aria-hidden":!this.isActive,role:"tabpanel"}},[this._t("default")],2)}),[],!1,null,null,null);e.a=component.exports},276:function(t,e,n){n(2)({target:"Math",stat:!0},{sign:n(277)})},277:function(t,e){t.exports=Math.sign||function(t){return 0==(t=+t)||t!=t?t:t<0?-1:1}},278:function(t,e,n){var r=n(14),o="["+n(279)+"]",c=RegExp("^"+o+o+"*"),l=RegExp(o+o+"*$"),h=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(c,"")),2&t&&(n=n.replace(l,"")),n}};t.exports={start:h(1),end:h(2),trim:h(3)}},279:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},280:function(t,e,n){"use strict";n(258)},281:function(t,e,n){(e=n(38)(!1)).push([t.i,'.VueCarousel-navigation-button[data-v-57a1aab7]{position:absolute;top:50%;-webkit-box-sizing:border-box;box-sizing:border-box;color:#000;text-decoration:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;background-color:transparent;padding:0;cursor:pointer;outline:none}.VueCarousel-navigation-button[data-v-57a1aab7]:focus{outline:1px solid #add8e6}.VueCarousel-navigation-next[data-v-57a1aab7]{right:0;-webkit-transform:translateY(-50%) translateX(100%);transform:translateY(-50%) translateX(100%);font-family:"system"}.VueCarousel-navigation-prev[data-v-57a1aab7]{left:0;-webkit-transform:translateY(-50%) translateX(-100%);transform:translateY(-50%) translateX(-100%);font-family:"system"}.VueCarousel-navigation--disabled[data-v-57a1aab7]{opacity:.5;cursor:default}@font-face{font-family:system;font-style:normal;font-weight:300;src:local(".SFNSText-Light"),local(".HelveticaNeueDeskInterface-Light"),local(".LucidaGrandeUI"),local("Ubuntu Light"),local("Segoe UI Symbol"),local("Roboto-Light"),local("DroidSans"),local("Tahoma")}',""]),t.exports=e},282:function(t,e,n){"use strict";n(259)},283:function(t,e,n){(e=n(38)(!1)).push([t.i,".VueCarousel-pagination[data-v-47042a71]{width:100%;text-align:center}.VueCarousel-pagination--top-overlay[data-v-47042a71]{position:absolute;top:0}.VueCarousel-pagination--bottom-overlay[data-v-47042a71]{position:absolute;bottom:0}.VueCarousel-dot-container[data-v-47042a71]{display:inline-block;margin:0 auto;padding:0}.VueCarousel-dot[data-v-47042a71]{display:inline-block;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;background-clip:content-box;-webkit-box-sizing:content-box;box-sizing:content-box;padding:0;border-radius:100%;outline:none}.VueCarousel-dot[data-v-47042a71]:focus{outline:1px solid #add8e6}",""]),t.exports=e},284:function(t,e,n){"use strict";n(260)},285:function(t,e,n){(e=n(38)(!1)).push([t.i,".VueCarousel-slide{-ms-flex-preferred-size:inherit;flex-basis:inherit;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;-ms-flex-negative:0;flex-shrink:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-touch-callout:none;-webkit-tap-highlight-color:rgba(0,0,0,0);outline:none}.VueCarousel-slide-adjustableHeight{display:table;-ms-flex-preferred-size:auto;flex-basis:auto;width:100%}",""]),t.exports=e},286:function(t,e,n){"use strict";n(261)},287:function(t,e,n){(e=n(38)(!1)).push([t.i,".VueCarousel{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;position:relative}.VueCarousel--reverse{-webkit-box-orient:vertical;-webkit-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse}.VueCarousel-wrapper{width:100%;position:relative;overflow:hidden}.VueCarousel-inner{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-backface-visibility:hidden;backface-visibility:hidden}.VueCarousel-inner--center{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}",""]),t.exports=e},290:function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},302:function(t,e,n){"use strict";n(70),n(69),n(53),n(171),n(30),n(173),n(276),n(257),n(32),n(54),n(172),n(41);var r=n(101);var o=n(145);function c(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(o.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var l=n(24),h=n(35);var d={props:{autoplay:{type:Boolean,default:!1},autoplayTimeout:{type:Number,default:2e3},autoplayHoverPause:{type:Boolean,default:!0},autoplayDirection:{type:String,default:"forward"}},data:()=>({autoplayInterval:null}),destroyed(){this.$isServer||(this.$el.removeEventListener("mouseenter",this.pauseAutoplay),this.$el.removeEventListener("mouseleave",this.startAutoplay))},methods:{pauseAutoplay(){this.autoplayInterval&&(this.autoplayInterval=clearInterval(this.autoplayInterval))},startAutoplay(){this.autoplay&&(this.autoplayInterval=setInterval(this.autoplayAdvancePage,this.autoplayTimeout))},restartAutoplay(){this.pauseAutoplay(),this.startAutoplay()},autoplayAdvancePage(){this.advancePage(this.autoplayDirection)}},mounted(){!this.$isServer&&this.autoplayHoverPause&&(this.$el.addEventListener("mouseenter",this.pauseAutoplay),this.$el.addEventListener("mouseleave",this.startAutoplay)),this.startAutoplay()}};var f=(t,e,n)=>{let r;return()=>{const o=n&&!r;clearTimeout(r),r=setTimeout(()=>{r=null,n||t.apply(void 0)},e),o&&t.apply(void 0)}},v={name:"navigation",inject:["carousel"],props:{clickTargetSize:{type:Number,default:8},nextLabel:{type:String,default:"&#9654"},prevLabel:{type:String,default:"&#9664"}},computed:{canAdvanceForward:function(){return this.carousel.canAdvanceForward||!1},canAdvanceBackward:function(){return this.carousel.canAdvanceBackward||!1}},methods:{triggerPageAdvance:function(t){this.$emit("navigationclick",t)}}},m=(n(280),n(29)),P=Object(m.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"VueCarousel-navigation"},[n("button",{staticClass:"VueCarousel-navigation-button VueCarousel-navigation-prev",class:{"VueCarousel-navigation--disabled":!t.canAdvanceBackward},style:"padding: "+t.clickTargetSize+"px; margin-right: -"+t.clickTargetSize+"px;",attrs:{type:"button","aria-label":"Previous page",tabindex:t.canAdvanceBackward?0:-1},domProps:{innerHTML:t._s(t.prevLabel)},on:{click:function(e){return e.preventDefault(),t.triggerPageAdvance("backward")}}}),t._v(" "),n("button",{staticClass:"VueCarousel-navigation-button VueCarousel-navigation-next",class:{"VueCarousel-navigation--disabled":!t.canAdvanceForward},style:"padding: "+t.clickTargetSize+"px; margin-left: -"+t.clickTargetSize+"px;",attrs:{type:"button","aria-label":"Next page",tabindex:t.canAdvanceForward?0:-1},domProps:{innerHTML:t._s(t.nextLabel)},on:{click:function(e){return e.preventDefault(),t.triggerPageAdvance("forward")}}})])}),[],!1,null,"57a1aab7",null).exports,y={name:"pagination",inject:["carousel"],computed:{paginationPositionModifierName:function(){var t=this.carousel.paginationPosition;if(!(t.indexOf("overlay")<0))return t},paginationPropertyBasedOnPosition:function(){return this.carousel.paginationPosition.indexOf("top")>=0?"bottom":"top"},paginationCount:function(){return this.carousel&&this.carousel.scrollPerPage?this.carousel.pageCount:this.carousel.slideCount||0},dotContainerStyle:function(){var t=this.carousel;if(-1===t.maxPaginationDotCount)return{"margin-top":"".concat(2*t.paginationPadding,"px")};var e=2*t.paginationPadding,n=t.maxPaginationDotCount*(t.paginationSize+e);return{"margin-top":"".concat(2*t.paginationPadding,"px"),overflow:"hidden",width:"".concat(n,"px"),margin:"0 auto","white-space":"nowrap"}}},methods:{goToPage:function(t){this.$emit("paginationclick",t)},isCurrentDot:function(t){return t===this.carousel.currentPage},getDotTitle:function(t){return this.carousel.$children[t].title?this.carousel.$children[t].title:"Item ".concat(t)},dotStyle:function(t){var e=this.carousel,n={};if(n["margin-".concat(this.paginationPropertyBasedOnPosition)]="".concat(2*e.paginationPadding,"px"),Object.assign(n,{padding:"".concat(e.paginationPadding,"px"),width:"".concat(e.paginationSize,"px"),height:"".concat(e.paginationSize,"px"),"background-color":"".concat(this.isCurrentDot(t)?e.paginationActiveColor:e.paginationColor)}),-1===e.maxPaginationDotCount)return n;var r=e.paginationSize+2*e.paginationPadding,o=e.pageCount-e.maxPaginationDotCount,c=0-r*(e.currentPage>o?o:e.currentPage<=e.maxPaginationDotCount/2?0:e.currentPage-Math.ceil(e.maxPaginationDotCount/2)+1);return Object.assign(n,{"-webkit-transform":"translate3d(".concat(c,"px,0,0)"),transform:"translate3d(".concat(c,"px,0,0)"),"-webkit-transition":"-webkit-transform ".concat(e.speed/1e3,"s"),transition:"transform ".concat(e.speed/1e3,"s")})}}},C=(n(282),Object(m.a)(y,(function(){var t,e=this,n=e.$createElement,r=e._self._c||n;return r("div",{directives:[{name:"show",rawName:"v-show",value:e.carousel.pageCount>1,expression:"carousel.pageCount > 1"}],staticClass:"VueCarousel-pagination",class:(t={},t["VueCarousel-pagination--"+e.paginationPositionModifierName]=e.paginationPositionModifierName,t)},[r("div",{staticClass:"VueCarousel-dot-container",style:e.dotContainerStyle,attrs:{role:"tablist"}},e._l(e.paginationCount,(function(t,n){return r("button",{key:t+"_"+n,staticClass:"VueCarousel-dot",class:{"VueCarousel-dot--active":e.isCurrentDot(n)},style:e.dotStyle(n),attrs:{"aria-hidden":"false",role:"tab",title:e.getDotTitle(n),value:e.getDotTitle(n),"aria-label":e.getDotTitle(n),"aria-selected":e.isCurrentDot(n)?"true":"false"},on:{click:function(t){return e.goToPage(n)}}})})),0)])}),[],!1,null,"47042a71",null).exports),x=n(265);function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function S(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var k={onwebkittransitionend:"webkitTransitionEnd",onmoztransitionend:"transitionend",onotransitionend:"oTransitionEnd otransitionend",ontransitionend:"transitionend"},O=function(){for(var t in k)if(t in window)return k[t]},T={name:"carousel",beforeUpdate:function(){this.computeCarouselWidth()},components:{Navigation:P,Pagination:C,Slide:x.a},data:function(){return{browserWidth:null,carouselWidth:0,currentPage:0,dragging:!1,dragMomentum:0,dragOffset:0,dragStartY:0,dragStartX:0,isTouch:"undefined"!=typeof window&&"ontouchstart"in window,offset:0,refreshRate:16,slideCount:0,transitionstart:"transitionstart",transitionend:"transitionend",currentHeight:"auto"}},mixins:[d],provide:function(){return{carousel:this}},props:{adjustableHeight:{type:Boolean,default:!1},adjustableHeightEasing:{type:String},centerMode:{type:Boolean,default:!1},easing:{type:String,validator:function(t){return-1!==["ease","linear","ease-in","ease-out","ease-in-out"].indexOf(t)||t.includes("cubic-bezier")},default:"ease"},loop:{type:Boolean,default:!1},minSwipeDistance:{type:Number,default:8},mouseDrag:{type:Boolean,default:!0},touchDrag:{type:Boolean,default:!0},navigateTo:{type:[Number,Array],default:0},navigationClickTargetSize:{type:Number,default:8},navigationEnabled:{type:Boolean,default:!1},navigationNextLabel:{type:String,default:"&#9654"},navigationPrevLabel:{type:String,default:"&#9664"},paginationActiveColor:{type:String,default:"#000000"},paginationColor:{type:String,default:"#efefef"},paginationEnabled:{type:Boolean,default:!0},paginationPadding:{type:Number,default:10},paginationPosition:{type:String,default:"bottom"},paginationSize:{type:Number,default:10},perPage:{type:Number,default:2},perPageCustom:{type:Array},resistanceCoef:{type:Number,default:20},scrollPerPage:{type:Boolean,default:!0},spacePadding:{type:Number,default:0},spacePaddingMaxOffsetFactor:{type:Number,default:0},speed:{type:Number,default:500},tagName:{type:String,default:"slide"},value:{type:Number},maxPaginationDotCount:{type:Number,default:-1},rtl:{type:Boolean,default:!1}},watch:{value:function(t){t!==this.currentPage&&(this.goToPage(t),this.render())},navigateTo:{immediate:!0,handler:function(t){var e=this;"object"===Object(h.a)(t)?(0==t[1]&&(this.dragging=!0,setTimeout((function(){e.dragging=!1}),this.refreshRate)),this.$nextTick((function(){e.goToPage(t[0])}))):this.$nextTick((function(){e.goToPage(t)}))}},currentPage:function(t){this.$emit("pageChange",t),this.$emit("page-change",t),this.$emit("input",t)},autoplay:function(t){!1===t?this.pauseAutoplay():this.restartAutoplay()}},computed:{breakpointSlidesPerPage:function(){if(!this.perPageCustom)return this.perPage;var t=this.perPageCustom,e=this.browserWidth,n=t.sort((function(a,b){return a[0]>b[0]?-1:1})).filter((function(t){return e>=t[0]}));return n[0]&&n[0][1]||this.perPage},canAdvanceForward:function(){return this.loop||this.offset<this.maxOffset},canAdvanceBackward:function(){return this.loop||this.currentPage>0},currentPerPage:function(){return!this.perPageCustom||this.$isServer?this.perPage:this.breakpointSlidesPerPage},currentOffset:function(){return this.isCenterModeEnabled?0:this.rtl?1*(this.offset-this.dragOffset):-1*(this.offset+this.dragOffset)},isHidden:function(){return this.carouselWidth<=0},maxOffset:function(){return Math.max(this.slideWidth*(this.slideCount-this.currentPerPage)-this.spacePadding*this.spacePaddingMaxOffsetFactor,0)},pageCount:function(){return this.scrollPerPage?Math.ceil(this.slideCount/this.currentPerPage):this.slideCount-this.currentPerPage+1},slideWidth:function(){return(this.carouselWidth-2*this.spacePadding)/this.currentPerPage},isNavigationRequired:function(){return this.slideCount>this.currentPerPage},isCenterModeEnabled:function(){return this.centerMode&&!this.isNavigationRequired},transitionStyle:function(){var t="".concat(this.speed/1e3,"s"),e="".concat(t," ").concat(this.easing," transform");return this.adjustableHeight?"".concat(e,", height ").concat(t," ").concat(this.adjustableHeightEasing||this.easing):e},padding:function(){var t=this.spacePadding;return t>0&&t}},methods:{getNextPage:function(){return this.currentPage<this.pageCount-1?this.currentPage+1:this.loop?0:this.currentPage},getPreviousPage:function(){return this.currentPage>0?this.currentPage-1:this.loop?this.pageCount-1:this.currentPage},advancePage:function(t){t&&"backward"===t&&this.canAdvanceBackward?this.goToPage(this.getPreviousPage(),"navigation"):(!t||t&&"backward"!==t)&&this.canAdvanceForward&&this.goToPage(this.getNextPage(),"navigation")},goToLastSlide:function(){var t=this;this.dragging=!0,setTimeout((function(){t.dragging=!1}),this.refreshRate),this.$nextTick((function(){t.goToPage(t.pageCount)}))},attachMutationObserver:function(){var t=this,e=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;if(e){var n={attributes:!0,data:!0};if(this.adjustableHeight&&(n=S(S({},n),{},{childList:!0,subtree:!0,characterData:!0})),this.mutationObserver=new e((function(){t.$nextTick((function(){t.computeCarouselWidth(),t.computeCarouselHeight()}))})),this.$parent.$el)for(var r=this.$el.getElementsByClassName("VueCarousel-inner"),i=0;i<r.length;i++)this.mutationObserver.observe(r[i],n)}},handleNavigation:function(t){this.advancePage(t),this.pauseAutoplay(),this.$emit("navigation-click",t)},detachMutationObserver:function(){this.mutationObserver&&this.mutationObserver.disconnect()},getBrowserWidth:function(){return this.browserWidth=window.innerWidth,this.browserWidth},getCarouselWidth:function(){for(var t=this.$el.getElementsByClassName("VueCarousel-inner"),i=0;i<t.length;i++)t[i].clientWidth>0&&(this.carouselWidth=t[i].clientWidth||0);return this.carouselWidth},getCarouselHeight:function(){var t=this;if(!this.adjustableHeight)return"auto";var e=this.currentPerPage*(this.currentPage+1)-1,n=c(Array(this.currentPerPage)).map((function(n,r){return t.getSlide(e+r)})).reduce((function(t,e){return Math.max(t,e&&e.$el.clientHeight||0)}),0);return this.currentHeight=0===n?"auto":"".concat(n,"px"),this.currentHeight},getSlideCount:function(){var t=this;this.slideCount=this.$slots&&this.$slots.default&&this.$slots.default.filter((function(slot){return slot.tag&&null!==slot.tag.match("^vue-component-\\d+-".concat(t.tagName,"$"))})).length||0},getSlide:function(t){var e=this;return this.$children.filter((function(t){return null!==t.$vnode.tag.match("^vue-component-\\d+-".concat(e.tagName,"$"))}))[t]},goToPage:function(t,e){t>=0&&t<=this.pageCount&&(this.offset=this.scrollPerPage?Math.min(this.slideWidth*this.currentPerPage*t,this.maxOffset):this.slideWidth*t,this.autoplay&&!this.autoplayHoverPause&&this.restartAutoplay(),this.currentPage=t,"pagination"===e&&(this.pauseAutoplay(),this.$emit("pagination-click",t)))},onStart:function(t){2!=t.button&&(document.addEventListener(this.isTouch?"touchend":"mouseup",this.onEnd,!0),document.addEventListener(this.isTouch?"touchmove":"mousemove",this.onDrag,!0),this.startTime=t.timeStamp,this.dragging=!0,this.dragStartX=this.isTouch?t.touches[0].clientX:t.clientX,this.dragStartY=this.isTouch?t.touches[0].clientY:t.clientY)},onEnd:function(t){this.autoplay&&!this.autoplayHoverPause&&this.restartAutoplay(),this.pauseAutoplay();var e=this.isTouch?t.changedTouches[0].clientX:t.clientX,n=this.dragStartX-e;if(this.dragMomentum=n/(t.timeStamp-this.startTime),0!==this.minSwipeDistance&&Math.abs(n)>=this.minSwipeDistance){var r=this.scrollPerPage?this.slideWidth*this.currentPerPage:this.slideWidth;this.dragOffset=this.dragOffset+Math.sign(n)*(r/2)}this.rtl?this.offset-=this.dragOffset:this.offset+=this.dragOffset,this.dragOffset=0,this.dragging=!1,this.render(),document.removeEventListener(this.isTouch?"touchend":"mouseup",this.onEnd,!0),document.removeEventListener(this.isTouch?"touchmove":"mousemove",this.onDrag,!0)},onDrag:function(t){var e=this.isTouch?t.touches[0].clientX:t.clientX,n=this.isTouch?t.touches[0].clientY:t.clientY,r=this.dragStartX-e,o=this.dragStartY-n;if(!(this.isTouch&&Math.abs(r)<Math.abs(o))){t.stopImmediatePropagation(),this.dragOffset=r;var c=this.offset+this.dragOffset;this.rtl?0==this.offset&&this.dragOffset>0?this.dragOffset=Math.sqrt(this.resistanceCoef*this.dragOffset):this.offset==this.maxOffset&&this.dragOffset<0&&(this.dragOffset=-Math.sqrt(-this.resistanceCoef*this.dragOffset)):c<0?this.dragOffset=-Math.sqrt(-this.resistanceCoef*this.dragOffset):c>this.maxOffset&&(this.dragOffset=Math.sqrt(this.resistanceCoef*this.dragOffset))}},onResize:function(){var t=this;this.computeCarouselWidth(),this.computeCarouselHeight(),this.dragging=!0,this.render(),setTimeout((function(){t.dragging=!1}),this.refreshRate)},render:function(){this.rtl?this.offset-=Math.max(1-this.currentPerPage,Math.min(Math.round(this.dragMomentum),this.currentPerPage-1))*this.slideWidth:this.offset+=Math.max(1-this.currentPerPage,Math.min(Math.round(this.dragMomentum),this.currentPerPage-1))*this.slideWidth;var t=this.scrollPerPage?this.slideWidth*this.currentPerPage:this.slideWidth,e=t*Math.floor(this.slideCount/(this.currentPerPage-1)),n=e+this.slideWidth*(this.slideCount%this.currentPerPage);this.offset>(e+n)/2?this.offset=n:this.offset=t*Math.round(this.offset/t),this.offset=Math.max(0,Math.min(this.offset,this.maxOffset)),this.currentPage=this.scrollPerPage?Math.round(this.offset/this.slideWidth/this.currentPerPage):Math.round(this.offset/this.slideWidth)},computeCarouselWidth:function(){this.getSlideCount(),this.getBrowserWidth(),this.getCarouselWidth(),this.setCurrentPageInBounds()},computeCarouselHeight:function(){this.getCarouselHeight()},setCurrentPageInBounds:function(){if(!this.canAdvanceForward&&this.scrollPerPage){var t=this.pageCount-1;this.currentPage=t>=0?t:0,this.offset=Math.max(0,Math.min(this.offset,this.maxOffset))}},handleTransitionStart:function(){this.$emit("transitionStart"),this.$emit("transition-start")},handleTransitionEnd:function(){this.$emit("transitionEnd"),this.$emit("transition-end")}},mounted:function(){window.addEventListener("resize",f(this.onResize,this.refreshRate)),(this.isTouch&&this.touchDrag||this.mouseDrag)&&this.$refs["VueCarousel-wrapper"].addEventListener(this.isTouch?"touchstart":"mousedown",this.onStart),this.attachMutationObserver(),this.computeCarouselWidth(),this.computeCarouselHeight(),this.transitionstart=O(),this.$refs["VueCarousel-inner"].addEventListener(this.transitionstart,this.handleTransitionStart),this.transitionend=O(),this.$refs["VueCarousel-inner"].addEventListener(this.transitionend,this.handleTransitionEnd),this.$emit("mounted"),"backward"===this.autoplayDirection&&this.goToLastSlide()},beforeDestroy:function(){this.detachMutationObserver(),window.removeEventListener("resize",this.getBrowserWidth),this.$refs["VueCarousel-inner"].removeEventListener(this.transitionstart,this.handleTransitionStart),this.$refs["VueCarousel-inner"].removeEventListener(this.transitionend,this.handleTransitionEnd),this.$refs["VueCarousel-wrapper"].removeEventListener(this.isTouch?"touchstart":"mousedown",this.onStart)}};n(286),Object(m.a)(T,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"VueCarousel",class:{"VueCarousel--reverse":"top"===t.paginationPosition}},[n("div",{ref:"VueCarousel-wrapper",staticClass:"VueCarousel-wrapper"},[n("div",{ref:"VueCarousel-inner",class:["VueCarousel-inner",{"VueCarousel-inner--center":t.isCenterModeEnabled}],style:{transform:"translate("+t.currentOffset+"px, 0)",transition:t.dragging?"none":t.transitionStyle,"ms-flex-preferred-size":t.slideWidth+"px","webkit-flex-basis":t.slideWidth+"px","flex-basis":t.slideWidth+"px",visibility:t.slideWidth?"visible":"hidden",height:""+t.currentHeight,"padding-left":t.padding+"px","padding-right":t.padding+"px"}},[t._t("default")],2)]),t._v(" "),t.navigationEnabled?t._t("navigation",[t.isNavigationRequired?n("navigation",{attrs:{clickTargetSize:t.navigationClickTargetSize,nextLabel:t.navigationNextLabel,prevLabel:t.navigationPrevLabel},on:{navigationclick:t.handleNavigation}}):t._e()]):t._e(),t._v(" "),t.paginationEnabled?t._t("pagination",[n("pagination",{on:{paginationclick:function(e){return t.goToPage(e,"pagination")}}})]):t._e()],2)}),[],!1,null,null,null).exports}}]);