(window.webpackJsonp=window.webpackJsonp||[]).push([[9,3],{302:function(t,e,r){var content=r(306);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(82).default)("46f4b350",content,!0,{sourceMap:!1})},303:function(t,e,r){"use strict";var n=0;function o(t){if(!n){var s=document.createElement("script");s.setAttribute("src",t),document.body.appendChild(s),n=new Promise((function(t){s.onload=function(){t(window.twttr)}}))}return n}var l={id:{type:String,required:!0},sourceType:{type:String},slug:{type:String},options:Object};t.exports={addPlatformScript:o,twitterEmbedComponent:function(t){return{data:function(){return{isLoaded:!1,isAvailable:!1}},props:Object.assign({},l,t.props),mounted:function(){var e,r=this;e="profile"===this.sourceType?{sourceType:this.sourceType,screenName:this.id}:"list"===this.sourceType?{sourceType:this.sourceType,ownerScreenName:this.id,slug:this.slug}:this.id,Promise.resolve(window.twttr?window.twttr:o("//platform.twitter.com/widgets.js")).then((function(n){return t.embedComponent(n,e,r.$el,r.options)})).then((function(data){r.isAvailable=void 0!==data,r.isLoaded=!0}))},render:function(t){if(this.isLoaded&&this.isAvailable)return t("div",{class:this.$props.widgetClass});if(this.isLoaded&&!this.isAvailable&&this.$props.errorMessage){var e=t("div",{class:this.$props.errorMessageClass,domProps:{innerHTML:this.$props.errorMessage}});return t("div",[e])}return t("div",{class:this.$props.widgetClass},this.$slots.default)}}}}},305:function(t,e,r){"use strict";r(302)},306:function(t,e,r){var n=r(81)((function(i){return i[1]}));n.push([t.i,".NuxtLogo{-webkit-animation:appear 1s;animation:appear 1s}.diogreen{fill:#54da71}@-webkit-keyframes appear{0%{opacity:0}}@keyframes appear{0%{opacity:0}}",""]),n.locals={},t.exports=n},308:function(t,e,r){t.exports=r.p+"img/memolily_ogp.76b315e.png"},309:function(t,e,r){t.exports=r.p+"img/hitoyane_ogp.93b1b17.png"},310:function(t,e,r){t.exports=r.p+"img/amehazu_ogp.00dfd45.jpg"},311:function(t,e,r){"use strict";r.r(e);r(305);var n=r(35),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{staticClass:"NuxtLogo",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 185.26 53.29"}},[r("defs",[r("style",[t._v(".diogreen{fill:#54DA71;}")])]),t._v(" "),r("g",{attrs:{id:"layer_2","data-name":"layer 2"}},[r("g",{attrs:{id:"layer_1-2","data-name":"layer 1"}},[r("polygon",{staticClass:"diogreen",attrs:{points:"70.29 44.49 66.18 44.49 65.96 45.49 70.08 45.49 70.29 44.49"}}),t._v(" "),r("polygon",{staticClass:"diogreen",attrs:{points:"65.52 47.48 69.64 47.48 69.86 46.48 65.74 46.48 65.52 47.48"}}),t._v(" "),r("polygon",{staticClass:"diogreen",attrs:{points:"73.39 45.37 63.78 53.29 65.36 53.29 74.96 45.37 73.39 45.37"}}),t._v(" "),r("polygon",{staticClass:"diogreen",attrs:{points:"73.12 48.68 72.74 50.47 73.76 50.47 74.14 48.68 73.12 48.68"}}),t._v(" "),r("polygon",{staticClass:"diogreen",attrs:{points:"75.96 48.68 74.94 48.68 74.56 50.47 75.58 50.47 75.96 48.68"}}),t._v(" "),r("polygon",{staticClass:"diogreen",attrs:{points:"88.75 46.48 89.04 45.09 88.02 45.09 87.73 46.48 81.83 46.48 81.62 47.48 86.76 47.48 79.87 53.29 81.42 53.29 87.34 48.31 86.28 53.29 87.3 53.29 88.54 47.48 90.09 47.48 90.3 46.48 88.75 46.48"}}),t._v(" "),r("polygon",{staticClass:"diogreen",attrs:{points:"96.72 46.48 96.5 47.48 103.8 47.48 96.77 53.28 96.78 53.29 98.33 53.29 106.58 46.48 96.72 46.48"}}),t._v(" "),r("polygon",{staticClass:"diogreen",attrs:{points:"97.14 44.49 96.93 45.49 105.4 45.49 105.62 44.49 97.14 44.49"}}),t._v(" "),r("polygon",{staticClass:"diogreen",attrs:{points:"121.47 46.48 111.61 46.48 111.39 47.48 118.69 47.48 114.15 51.23 115.77 53.29 117.05 53.29 115.54 51.38 121.47 46.48"}}),t._v(" "),r("path",{staticClass:"diogreen",attrs:{d:"M27.5,7.43a9.88,9.88,0,0,0-1.62-2.88A10.43,10.43,0,0,0,17.56.82H.43L0,2.87H17.56a8.44,8.44,0,0,1,6.73,3,8.88,8.88,0,0,1,1.56,7.55c-1.27,6-7.21,11-13.24,11H8l2.22-10.53H8.1L5.46,26.41h7.15c7,0,13.79-5.65,15.25-12.59A12.3,12.3,0,0,0,28,9.65l5.23-4.32L28.83,26.41h2.1L36.48,0Z"}}),t._v(" "),r("path",{staticClass:"diogreen",attrs:{d:"M71.41,14.64,86.58,33.85h2.5l-7.2-9.11L94.1,14.64h9.31l-2.64,12.58L127.26,5.33l-4.61,21.89,26.5-21.89-4.6,21.89,15.22-12.58h9.31l-2.47,11.77h2.1l2.47-11.77h13.67l.41-2.06H171.62L174.26,0,147.77,21.89,152.37,0,125.88,21.89,130.48,0,104,21.89,108.59,0l-28,23.13-6.7-8.49H78.8a8.61,8.61,0,0,0,8.13-6.7,5.94,5.94,0,0,0-1.09-5.07A5.75,5.75,0,0,0,81.28.82H68.68L66.2,12.58H62.11a10.6,10.6,0,0,0-2.18-8A10.44,10.44,0,0,0,51.61.82c-7,0-13.79,5.64-15.25,12.58a10.85,10.85,0,0,0,2,9.27,10.47,10.47,0,0,0,8.33,3.74c6.67,0,13.23-5.21,15-11.77h4.08L63.29,26.41H65.4l2.47-11.76Zm-33-.82c1.27-6,7.21-10.95,13.24-10.95a8.64,8.64,0,0,1,6.11,2.31L39.28,20.42A9.18,9.18,0,0,1,38.37,13.82Zm21.52-.42c-1.27,6-7.2,11-13.23,11A8.6,8.6,0,0,1,40.54,22L59,6.8A9.08,9.08,0,0,1,59.89,13.4Zm8.41-.82,2-9.71H81.28a3.7,3.7,0,0,1,3,1.3,3.92,3.92,0,0,1,.68,3.35,6.58,6.58,0,0,1-6.12,5.06Zm28.3,0,8.77-7.25-1.53,7.25Zm72.91,0h-7.24L171,5.33Z"}})])])])}),[],!1,null,null,null);e.default=component.exports},312:function(t,e,r){t.exports=r.p+"img/d10ramafull.dd098f8.svg"},313:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"Tweet",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"Moment",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(e,"Timeline",{enumerable:!0,get:function(){return l.default}});var n=c(r(314)),o=c(r(315)),l=c(r(316));function c(t){return t&&t.__esModule?t:{default:t}}},314:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=(0,r(303).twitterEmbedComponent)({embedComponent:function(t){for(var e,r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return(e=t.widgets).createTweetEmbed.apply(e,n)},props:{errorMessage:{type:String,default:"Whoops! We couldn't access this Tweet."},errorMessageClass:{type:String,required:!1},widgetClass:{type:String,required:!1}}}),o=n;e.default=o},315:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=(0,r(303).twitterEmbedComponent)({embedComponent:function(t){for(var e,r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return(e=t.widgets).createMoment.apply(e,n)},props:{errorMessage:{type:String,default:"Whoops! We couldn't access this Moment."},errorMessageClass:{type:String,required:!1},widgetClass:{type:String,required:!1}}}),o=n;e.default=o},316:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=(0,r(303).twitterEmbedComponent)({embedComponent:function(t){for(var e,r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return(e=t.widgets).createTimeline.apply(e,n)},props:{errorMessage:{type:String,default:"Whoops! We couldn't access this Timeline."},errorMessageClass:{type:String,required:!1},widgetClass:{type:String,required:!1}}}),o=n;e.default=o},325:function(t,e,r){var content=r(382);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(82).default)("0af05f02",content,!0,{sourceMap:!1})},381:function(t,e,r){"use strict";r(325)},382:function(t,e,r){var n=r(81)((function(i){return i[1]}));n.push([t.i,'.container{margin:0 auto;justify-content:center;align-items:center;text-align:center}::-moz-selection{background:#54dc71;color:#f1f1f1}::selection{background:#54dc71;color:#f1f1f1}::-moz-selection{background:#54dc71;color:#f1f1f1}.Montserrat-300i{font-family:"Montserrat",sans-serif;font-weight:700;font-style:italic}.diofooter{background:linear-gradient(180deg,rgba(84,220,113,0),rgba(84,220,113,.6))}',""]),n.locals={},t.exports=n},400:function(t,e,r){"use strict";r.r(e);var n=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:" m-auto"},[n("div",{staticClass:"w-3/8 mt-8"},[n("h2",{staticClass:"text-diogreen text-center text-4xl m-auto Montserrat-300i"},[t._v("wanted")]),t._v(" "),n("div",{staticClass:"lg:flex justify-center items-center lg:w-5/6 m-auto"},[n("p",{staticClass:"text-gray-200 text-left p-3 tracking-widest mt-5"},[t._v("\n          2020年 6月に結成されたビジュアルノベル製作サークルです。"),n("br"),t._v("\n          これまでフリーのビジュアルノベルを3作リリースしています。\n          ")])]),t._v(" "),n("div",{staticClass:"lg:flex justify-center items-center lg:w-5/6 w-2/3 m-auto"},[n("a",{staticClass:" w-1/3 hover:opacity-75 p-3",attrs:{href:"/memolily",target:"_blank"}},[n("img",{staticClass:"rounded-lg",attrs:{src:r(308),alt:""}}),t._v(" "),n("p",{staticClass:"text-white text-center p-2 text-sm"},[t._v("めもりり "),n("span",{staticClass:"opacity-75"},[t._v("2020/10/10公開")])])]),t._v(" "),n("a",{staticClass:" w-1/3 hover:opacity-75 p-3",attrs:{href:"/hitoyane",target:"_blank"}},[n("img",{staticClass:"rounded-lg",attrs:{src:r(309),alt:""}}),t._v(" "),n("p",{staticClass:"text-white text-center p-2 text-sm"},[t._v("ひとつ屋根の下なのに "),n("span",{staticClass:"opacity-75"},[t._v("2021/2/28公開")])])]),t._v(" "),n("a",{staticClass:" w-1/3 hover:opacity-75 p-3",attrs:{href:"/amehazu",target:"_blank"}},[n("img",{staticClass:"rounded-lg",attrs:{src:r(310),alt:""}}),t._v(" "),n("p",{staticClass:"text-white text-center p-2 text-sm"},[t._v("雨にして人を外れ "),n("span",{staticClass:"opacity-75"},[t._v("2021/8/25公開")])])])]),t._v(" "),n("h3",{staticClass:"text-white text-center text-2xl block p-3 mt-3"},[t._v("メンバー募集")]),t._v(" "),n("div",{staticClass:"lg:flex flex-col content-center justify-center items-center lg:w-5/6 m-auto"},[n("p",{staticClass:"text-gray-200 text-left p-3 tracking-widest inline-block"},[t._v("\n          もっとクオリティの高い作品をつくるために、現在下記サークルメンバーを募集しています。"),n("br"),t._v("\n          私達と一緒に心に残るビジュアルノベルを作りませんか。"),n("br"),t._v("\n          ゲーム製作の経験/未経験は問いません。\n          ")]),t._v(" "),n("ul",{staticClass:"p-3 text-white inline-block"},[n("li",[n("span",{staticClass:"text-diogreen"},[t._v("●")]),t._v(" イラストレーター(CLIPSTUDIO PAINT/Photoshopなど)")]),t._v(" "),n("li",{staticClass:"pl-8"},[t._v("背景、キャラクターイラストが描ける方")]),t._v(" "),n("li",[n("span",{staticClass:"text-diogreen"},[t._v("●")]),t._v(" スクリプター(tyranoscript)")]),t._v(" "),n("li",{staticClass:"pl-8"},[t._v("tyranoscriptに習熟していて、作業ができる方")])]),t._v(" "),n("p",{staticClass:"text-gray-200 text-left p-3 tracking-widest  inline-block"},[t._v("\n          注意事項"),n("br"),t._v("\n          ・Discordでリモート会議、進捗報告を毎週日曜に行います。"),n("br"),t._v("\n          ・まずは下記フォームにてお問い合わせいただき、その後Discord上で面談を行います。\n          ")]),t._v(" "),n("a",{staticClass:"button--dio m-5 text-center",attrs:{href:"https://docs.google.com/forms/d/e/1FAIpQLSeSRyZXkvvUvDlKi0eaI-O4Peuv3fWL8SEAcL1e28syUmTT8g/viewform?usp=sf_link",target:"_blank"}},[t._v("\n           お問い合わせはこちら\n          ")]),t._v(" "),n("p",{staticClass:"text-sm lg:text-center text-white mb-8 m-5 mt-0 "},[t._v("\n          （Googleフォームが開きます）\n          ")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lg:w-3/4 w-11/12 m-auto  mb-8"},[n("h2",{staticClass:"text-diogreen text-center text-4xl m-auto Montserrat-300i"},[t._v("about")]),t._v(" "),n("div",{staticClass:"lg:flex justify-center items-center lg:w-5/6 m-auto"},[n("img",{staticClass:"p-5 w-2/3 lg:w-full m-auto lg:h-64 flex-shrink",attrs:{src:r(312)}}),t._v(" "),n("p",{staticClass:"text-gray-200 text-left p-3 tracking-widest "},[t._v("\n          2020 年 6 月に結成されたビジュアルノベル製作サークル。"),n("br"),t._v("\n          発起人のくろあんずの召集の下、東北のとある演劇団体で出会ったメンバーを中心に構成されている。\n          演劇活動で培われたスキルを活かし、心に残るビジュアルノベルを作るべく活動している。\n        ")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"w-full diofooter mt-12"},[r("p",{staticClass:"text-white text-sm text-center p-8 pt-12"},[t._v("\n          © 2021 D10RAMA All Rights Reserved.\n      ")])])}],o=r(313),l=(r(307),r(304),{components:{Timeline:o.Timeline},head:function(){return{meta:[{hid:"og:title",property:"og:title",content:"D10RAMAメンバー募集"},{hid:"og:site_name",property:"og:site_name",content:"D10RAMA"},{hid:"og:type",property:"og:type",content:"website"},{hid:"og:description",property:"og:description",content:"ビジュアルノベル製作サークル「D10RAMA」メンバー募集サイト"},{hid:"og:url",property:"og:url",content:"https://d10rama.com/wanted/"}]}}}),c=(r(381),r(35)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"top"}},[r("div",{staticClass:"h-full w-full"},[r("a",{attrs:{href:"https://d10rama.com"}},[r("Logo",{staticClass:"lg:w-1/3 w-4/5 lg:mt-32 mt-20 m-auto"})],1)]),t._v(" "),r("div",[t._m(0),t._v(" "),t._m(1),t._v(" "),r("Nuxt"),t._v(" "),t._m(2)],1)])}),n,!1,null,null,null);e.default=component.exports;installComponents(component,{Logo:r(311).default})}}]);