(window.webpackJsonp=window.webpackJsonp||[]).push([[6,3],{309:function(t,e,r){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},310:function(t,e,r){var content=r(314);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(69).default)("46f4b350",content,!0,{sourceMap:!1})},311:function(t,e,r){"use strict";var n=0;function o(t){if(!n){var s=document.createElement("script");s.setAttribute("src",t),document.body.appendChild(s),n=new Promise((function(t){s.onload=function(){t(window.twttr)}}))}return n}var l={id:{type:String,required:!0},sourceType:{type:String},slug:{type:String},options:Object};t.exports={addPlatformScript:o,twitterEmbedComponent:function(t){return{data:function(){return{isLoaded:!1,isAvailable:!1}},props:Object.assign({},l,t.props),mounted:function(){var e,r=this;e="profile"===this.sourceType?{sourceType:this.sourceType,screenName:this.id}:"list"===this.sourceType?{sourceType:this.sourceType,ownerScreenName:this.id,slug:this.slug}:this.id,Promise.resolve(window.twttr?window.twttr:o("//platform.twitter.com/widgets.js")).then((function(n){return t.embedComponent(n,e,r.$el,r.options)})).then((function(data){r.isAvailable=void 0!==data,r.isLoaded=!0}))},render:function(t){if(this.isLoaded&&this.isAvailable)return t("div",{class:this.$props.widgetClass});if(this.isLoaded&&!this.isAvailable&&this.$props.errorMessage){var e=t("div",{class:this.$props.errorMessageClass,domProps:{innerHTML:this.$props.errorMessage}});return t("div",[e])}return t("div",{class:this.$props.widgetClass},this.$slots.default)}}}}},313:function(t,e,r){"use strict";r(310)},314:function(t,e,r){var n=r(68)((function(i){return i[1]}));n.push([t.i,".NuxtLogo{-webkit-animation:appear 1s;animation:appear 1s}.diogreen{fill:#54da71}@-webkit-keyframes appear{0%{opacity:0}}@keyframes appear{0%{opacity:0}}",""]),n.locals={},t.exports=n},316:function(t,e,r){t.exports=r.p+"img/memolily_ogp.76b315e.png"},317:function(t,e,r){t.exports=r.p+"img/hitoyane_ogp.93b1b17.png"},318:function(t,e,r){t.exports=r.p+"img/amehazu_ogp.00dfd45.jpg"},319:function(t,e,r){"use strict";r.r(e);r(313);var n=r(35),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{staticClass:"NuxtLogo",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 185.26 53.29"}},[r("defs",[r("style",[t._v(".diogreen{fill:#54DA71;}")])]),t._v(" "),r("g",{attrs:{id:"layer_2","data-name":"layer 2"}},[r("g",{attrs:{id:"layer_1-2","data-name":"layer 1"}},[r("polygon",{staticClass:"diogreen",attrs:{points:"70.29 44.49 66.18 44.49 65.96 45.49 70.08 45.49 70.29 44.49"}}),t._v(" "),r("polygon",{staticClass:"diogreen",attrs:{points:"65.52 47.48 69.64 47.48 69.86 46.48 65.74 46.48 65.52 47.48"}}),t._v(" "),r("polygon",{staticClass:"diogreen",attrs:{points:"73.39 45.37 63.78 53.29 65.36 53.29 74.96 45.37 73.39 45.37"}}),t._v(" "),r("polygon",{staticClass:"diogreen",attrs:{points:"73.12 48.68 72.74 50.47 73.76 50.47 74.14 48.68 73.12 48.68"}}),t._v(" "),r("polygon",{staticClass:"diogreen",attrs:{points:"75.96 48.68 74.94 48.68 74.56 50.47 75.58 50.47 75.96 48.68"}}),t._v(" "),r("polygon",{staticClass:"diogreen",attrs:{points:"88.75 46.48 89.04 45.09 88.02 45.09 87.73 46.48 81.83 46.48 81.62 47.48 86.76 47.48 79.87 53.29 81.42 53.29 87.34 48.31 86.28 53.29 87.3 53.29 88.54 47.48 90.09 47.48 90.3 46.48 88.75 46.48"}}),t._v(" "),r("polygon",{staticClass:"diogreen",attrs:{points:"96.72 46.48 96.5 47.48 103.8 47.48 96.77 53.28 96.78 53.29 98.33 53.29 106.58 46.48 96.72 46.48"}}),t._v(" "),r("polygon",{staticClass:"diogreen",attrs:{points:"97.14 44.49 96.93 45.49 105.4 45.49 105.62 44.49 97.14 44.49"}}),t._v(" "),r("polygon",{staticClass:"diogreen",attrs:{points:"121.47 46.48 111.61 46.48 111.39 47.48 118.69 47.48 114.15 51.23 115.77 53.29 117.05 53.29 115.54 51.38 121.47 46.48"}}),t._v(" "),r("path",{staticClass:"diogreen",attrs:{d:"M27.5,7.43a9.88,9.88,0,0,0-1.62-2.88A10.43,10.43,0,0,0,17.56.82H.43L0,2.87H17.56a8.44,8.44,0,0,1,6.73,3,8.88,8.88,0,0,1,1.56,7.55c-1.27,6-7.21,11-13.24,11H8l2.22-10.53H8.1L5.46,26.41h7.15c7,0,13.79-5.65,15.25-12.59A12.3,12.3,0,0,0,28,9.65l5.23-4.32L28.83,26.41h2.1L36.48,0Z"}}),t._v(" "),r("path",{staticClass:"diogreen",attrs:{d:"M71.41,14.64,86.58,33.85h2.5l-7.2-9.11L94.1,14.64h9.31l-2.64,12.58L127.26,5.33l-4.61,21.89,26.5-21.89-4.6,21.89,15.22-12.58h9.31l-2.47,11.77h2.1l2.47-11.77h13.67l.41-2.06H171.62L174.26,0,147.77,21.89,152.37,0,125.88,21.89,130.48,0,104,21.89,108.59,0l-28,23.13-6.7-8.49H78.8a8.61,8.61,0,0,0,8.13-6.7,5.94,5.94,0,0,0-1.09-5.07A5.75,5.75,0,0,0,81.28.82H68.68L66.2,12.58H62.11a10.6,10.6,0,0,0-2.18-8A10.44,10.44,0,0,0,51.61.82c-7,0-13.79,5.64-15.25,12.58a10.85,10.85,0,0,0,2,9.27,10.47,10.47,0,0,0,8.33,3.74c6.67,0,13.23-5.21,15-11.77h4.08L63.29,26.41H65.4l2.47-11.76Zm-33-.82c1.27-6,7.21-10.95,13.24-10.95a8.64,8.64,0,0,1,6.11,2.31L39.28,20.42A9.18,9.18,0,0,1,38.37,13.82Zm21.52-.42c-1.27,6-7.2,11-13.23,11A8.6,8.6,0,0,1,40.54,22L59,6.8A9.08,9.08,0,0,1,59.89,13.4Zm8.41-.82,2-9.71H81.28a3.7,3.7,0,0,1,3,1.3,3.92,3.92,0,0,1,.68,3.35,6.58,6.58,0,0,1-6.12,5.06Zm28.3,0,8.77-7.25-1.53,7.25Zm72.91,0h-7.24L171,5.33Z"}})])])])}),[],!1,null,null,null);e.default=component.exports},320:function(t,e,r){t.exports=r.p+"img/d10ramafull.dd098f8.svg"},321:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"Tweet",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"Moment",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(e,"Timeline",{enumerable:!0,get:function(){return l.default}});var n=c(r(322)),o=c(r(323)),l=c(r(324));function c(t){return t&&t.__esModule?t:{default:t}}},322:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=(0,r(311).twitterEmbedComponent)({embedComponent:function(t){for(var e,r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return(e=t.widgets).createTweetEmbed.apply(e,n)},props:{errorMessage:{type:String,default:"Whoops! We couldn't access this Tweet."},errorMessageClass:{type:String,required:!1},widgetClass:{type:String,required:!1}}}),o=n;e.default=o},323:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=(0,r(311).twitterEmbedComponent)({embedComponent:function(t){for(var e,r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return(e=t.widgets).createMoment.apply(e,n)},props:{errorMessage:{type:String,default:"Whoops! We couldn't access this Moment."},errorMessageClass:{type:String,required:!1},widgetClass:{type:String,required:!1}}}),o=n;e.default=o},324:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=(0,r(311).twitterEmbedComponent)({embedComponent:function(t){for(var e,r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return(e=t.widgets).createTimeline.apply(e,n)},props:{errorMessage:{type:String,default:"Whoops! We couldn't access this Timeline."},errorMessageClass:{type:String,required:!1},widgetClass:{type:String,required:!1}}}),o=n;e.default=o},337:function(t,e,r){t.exports=r.p+"img/nitousei_ogp.d392c43.jpg"},338:function(t,e,r){var content=r(426);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(69).default)("3dd8082a",content,!0,{sourceMap:!1})},419:function(t,e,r){var content=r(420);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(69).default)("62f71f62",content,!0,{sourceMap:!1})},420:function(t,e,r){var n=r(68),o=r(309),l=r(421),c=r(422),d=r(423),m=r(424),v=n((function(i){return i[1]})),_=o(l),x=o(l,{hash:"#iefix"}),f=o(c),h=o(d),C=o(m,{hash:"#icomoon"});v.push([t.i,'@font-face{font-family:"customfont";src:url('+_+");src:url("+x+') format("embedded-opentype"),url('+f+') format("truetype"),url('+h+') format("woff"),url('+C+') format("svg");font-weight:400;font-style:normal;font-display:block}[class*=" icon-"],[class^=icon-]{font-family:"customfont"!important;speak:never;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-pixiv:before{content:"\\e900"}.icon-booth:before{content:"\\e901"}.icon-twitch:before{content:"\\ea9f"}.icon-steam:before{content:"\\eaac"}.icon-soundcloud:before{content:"\\eac3"}',""]),v.locals={},t.exports=v},421:function(t,e,r){t.exports=r.p+"fonts/customfont.202abfd.eot"},422:function(t,e,r){t.exports=r.p+"fonts/customfont.cffa8be.ttf"},423:function(t,e,r){t.exports=r.p+"fonts/customfont.e18d63b.woff"},424:function(t,e,r){t.exports=r.p+"img/customfont.8a4520e.svg"},425:function(t,e,r){"use strict";r(338)},426:function(t,e,r){var n=r(68)((function(i){return i[1]}));n.push([t.i,'.VueCarousel-navigation-next,.VueCarousel-navigation-prev{font-size:1rem;color:#f1f1f1!important}.VueCarousel-navigation--disabled{display:none}.VueCarousel-pagination{margin-top:-1rem}.container{margin:0 auto;justify-content:center;align-items:center;text-align:center;scroll-behavior:smooth;max-width:-webkit-max-content;max-width:-moz-max-content;max-width:max-content}::-moz-selection{background:#54dc71;color:#f1f1f1}::selection{background:#54dc71;color:#f1f1f1}::-moz-selection{background:#54dc71;color:#f1f1f1}.Montserrat-300i{font-family:"Montserrat",sans-serif;font-weight:700;font-style:italic}.diofooter{background:linear-gradient(180deg,rgba(84,220,113,0),rgba(84,220,113,.6))}.news_scroll::-webkit-scrollbar{width:6px}.news_scroll::-webkit-scrollbar-track{border-radius:3px;background:rgba(84,220,113,0)}.news_scroll::-webkit-scrollbar-thumb{border-radius:3px;background:rgba(84,220,113,.2)}div.card-box div.card{box-shadow:0 2px 5px rgba(0,0,0,.1);padding:10px 10px 20px;background-color:#0c0c12;cursor:pointer;border-radius:5px}div.card-box div.card p.cardimage{margin:-10px -10px 0;border-top-left-radius:5px;border-top-right-radius:5px}div.card-box div.card p.cardimage img{vertical-align:top}div.card-box div.card p.cardtext{margin:10px 0 0;color:#2d2d2d}div.card-box div.card p.cardimage{overflow:hidden}div.card-box div.card p.cardimage img{transition:transform .3s}div.card-box div.card:hover p.cardimage img{transform:scale(1.1)}.twitter-timeline{width:100vw!important}.awe{width:1.5rem;height:1.5rem}.awe,.awe1{display:inline-block;vertical-align:-5%}.awe1{width:1.875rem;height:1.875rem}',""]),n.locals={},t.exports=n},437:function(t,e,r){"use strict";r.r(e);var n=[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"text-diogreen hover:text-red-500",attrs:{href:"https://d10rama.booth.pm/",target:"_blank"}},[e("span",{staticClass:"icon-booth"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-3/8 mt-8"},[r("h2",{staticClass:"text-diogreen text-center text-4xl m-auto Montserrat-300i"},[t._v("news")]),t._v(" "),r("ul",{staticClass:"text-left inline-block p-3 divide-y divide-gray-600 overflow-auto h-64 news_scroll mr-2"},[r("li",{staticClass:"p-3"},[r("p",{staticClass:"inline-block text-diogreen text-sm"},[t._v("2022.4.3")]),t._v(" "),r("p",{staticClass:"inline-block text-gray-200 ml-6 "},[t._v("新作"),r("a",{staticClass:"underline text-diogreen",attrs:{href:"https://d10rama.com/nitousei",target:"_blank"}},[t._v("「みえない二等星」")]),t._v("のページを公開！")])]),t._v(" "),r("li",{staticClass:"p-3"},[r("p",{staticClass:"inline-block text-diogreen text-sm"},[t._v("2022.2.17")]),t._v(" "),r("p",{staticClass:"inline-block text-gray-200 ml-6 "},[t._v("小説投稿サイト『ノベルアップ+』にて、D10RAMAライターによる小説"),r("a",{staticClass:"underline text-diogreen",attrs:{href:"https://novelup.plus/story/693382371",target:"_blank"}},[t._v("『めめんと＠♡』")]),t._v("の連載企画をスタートします！")])]),t._v(" "),r("li",{staticClass:"p-3"},[r("p",{staticClass:"inline-block text-diogreen text-sm"},[t._v("2021.10.30")]),t._v(" "),r("p",{staticClass:"inline-block text-gray-200 ml-6 "},[t._v("D10RAMAが11/14(日)に開催される"),r("a",{staticClass:"underline text-diogreen",attrs:{href:"https://digigame-expo.org",target:"_blank"}},[t._v("デジゲー博")]),t._v("に出ます！"),r("span",{staticClass:"font-bold"},[t._v("D-19")]),t._v("でお待ちしています！")])]),t._v(" "),r("li",{staticClass:"p-3"},[r("p",{staticClass:"inline-block text-diogreen text-sm"},[t._v("2021.10.2")]),t._v(" "),r("p",{staticClass:"inline-block text-gray-200 ml-6 "},[t._v("「雨にして人を外れ」が"),r("a",{staticClass:"underline text-diogreen",attrs:{href:"https://freegame-contest.com/3-result/",target:"_blank"}},[t._v("第三回新人フリーゲームコンテスト")]),t._v("で優秀賞を受賞しました！")])]),t._v(" "),r("li",{staticClass:"p-3"},[r("p",{staticClass:"inline-block text-diogreen text-sm"},[t._v("2021.9.26")]),t._v(" "),r("p",{staticClass:"inline-block text-gray-200 ml-6 "},[t._v("新たに"),r("a",{staticClass:"underline text-diogreen",attrs:{href:"/wanted",target:"_blank"}},[t._v("メンバー募集ページ")]),t._v("を追加しました")])]),t._v(" "),r("li",{staticClass:"p-3"},[r("p",{staticClass:"inline-block text-diogreen text-sm"},[t._v("2021.8.25")]),t._v(" "),r("p",{staticClass:"inline-block text-gray-200 ml-6 "},[t._v("「雨にして人を外れ」が"),r("a",{staticClass:"underline text-diogreen",attrs:{href:"https://novelgame.jp/games/show/5595",target:"_blank"}},[t._v("ノベコレ")]),t._v("と"),r("a",{staticClass:"underline text-diogreen",attrs:{href:"https://www.freem.ne.jp/win/game/26404",target:"_blank"}},[t._v("ふりーむ")]),t._v("で公開されました！")])]),t._v(" "),r("li",{staticClass:"p-3"},[r("p",{staticClass:"inline-block text-diogreen text-sm"},[t._v("2021.8.23")]),t._v(" "),r("p",{staticClass:"inline-block text-gray-200 ml-6 "},[r("a",{staticClass:"underline text-diogreen",attrs:{href:"https://www.youtube.com/watch?v=17fSqc_i8eI",target:"_blank"}},[t._v("「雨にして人を外れ」のOP動画")]),t._v("を公開！")])]),t._v(" "),r("li",{staticClass:"p-3"},[r("p",{staticClass:"inline-block text-diogreen text-sm"},[t._v("2021.7.18")]),t._v(" "),r("p",{staticClass:"inline-block text-gray-200 ml-6 "},[t._v("新作"),r("a",{staticClass:"underline text-diogreen",attrs:{href:"https://d10rama.com/amehazu",target:"_blank"}},[t._v("「雨にして人を外れ」")]),t._v("のページを公開！")])]),t._v(" "),r("li",{staticClass:"p-3"},[r("p",{staticClass:"inline-block text-diogreen text-sm"},[t._v("2021.6.27")]),t._v(" "),r("p",{staticClass:"inline-block text-gray-200 ml-6 "},[r("a",{staticClass:"underline text-diogreen",attrs:{href:"https://d10rama.com/amehazu",target:"_blank"}},[t._v("新作のティザーサイト")]),t._v("を公開！")])]),t._v(" "),r("li",{staticClass:"p-3"},[r("p",{staticClass:"inline-block text-diogreen text-sm"},[t._v("2021.5.31")]),t._v(" "),r("p",{staticClass:"inline-block text-gray-200 ml-6 "},[t._v("「ひとつ屋根の下なのに」が"),r("a",{staticClass:"underline text-diogreen",attrs:{href:"https://freegame-contest.com/2021-2/2-result/ ",target:"_blank"}},[t._v("第2回新人フリーゲームコンテスト")]),t._v("で準グランプリを受賞しました！")])]),t._v(" "),r("li",{staticClass:"p-3"},[r("p",{staticClass:"inline-block text-diogreen text-sm"},[t._v("2021.2.28")]),t._v(" "),r("p",{staticClass:"inline-block text-gray-200 ml-6 "},[t._v("「ひとつ屋根の下なのに」が"),r("a",{staticClass:"underline text-diogreen",attrs:{href:"https://novelgame.jp/games/show/4675",target:"_blank"}},[t._v("ノベコレ")]),t._v("と"),r("a",{staticClass:"underline text-diogreen",attrs:{href:"https://www.freem.ne.jp/win/game/25114",target:"_blank"}},[t._v("ふりーむ")]),t._v("で公開されました！")])]),t._v(" "),r("li",{staticClass:"p-3"},[r("p",{staticClass:"inline-block text-diogreen text-sm"},[t._v("2021.2.7")]),t._v(" "),r("p",{staticClass:"inline-block text-gray-200 ml-6 "},[t._v("新作"),r("a",{staticClass:"underline text-diogreen",attrs:{href:"/hitoyane",target:"_blank"}},[t._v("「ひとつ屋根の下なのに」")]),t._v("のページを公開！")])]),t._v(" "),r("li",{staticClass:"p-3"},[r("p",{staticClass:"inline-block text-diogreen text-sm"},[t._v("2020.12.12")]),t._v(" "),r("p",{staticClass:"inline-block text-gray-200 ml-6 "},[r("a",{staticClass:"underline text-diogreen",attrs:{href:"https://www.youtube.com/watch?v=jVFCEjbKhzI",target:"_blank"}},[t._v("「めもりり」PV")]),t._v("を製作しました！")])]),t._v(" "),r("li",{staticClass:"p-3"},[r("p",{staticClass:"inline-block text-diogreen text-sm"},[t._v("2020.10.10")]),t._v(" "),r("p",{staticClass:"inline-block text-gray-200 ml-6 "},[t._v("「めもりり」マスターアップしました！！"),r("a",{staticClass:"underline text-diogreen",attrs:{href:"/memolily",target:"_blank"}},[t._v("特設ページ")]),t._v("からDLいただけます！")])]),t._v(" "),r("li",{staticClass:"p-3"},[r("p",{staticClass:"inline-block text-diogreen text-sm "},[t._v("2020.09.29")]),t._v(" "),r("p",{staticClass:"inline-block text-gray-200 ml-6 "},[t._v("第1弾"),r("a",{staticClass:"underline text-diogreen",attrs:{href:"/memolily",target:"_blank"}},[t._v("「めもりり」")]),t._v("ページ公開！")])]),t._v(" "),r("li",{staticClass:"p-3 "},[r("p",{staticClass:"inline-block text-diogreen text-sm "},[t._v("2020.09.12")]),t._v(" "),r("p",{staticClass:"inline-block text-gray-200 ml-6"},[t._v("サークル公式ページスタート！")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-3/8 mt-8 mb-8"},[n("h2",{staticClass:"text-diogreen text-center text-4xl m-auto Montserrat-300i"},[t._v("works")]),t._v(" "),n("div",{staticClass:"block lg:flex lg:flex-wrap  lg:space-x-5 justify-center p-5 mt-5 "},[n("div",{staticClass:"card-box w-2/3 lg:w-2/5  lg:mb-auto   mb-5 lg:mx-0 mx-auto"},[n("div",{staticClass:"card"},[n("p",{staticClass:"cardimage"},[n("a",{attrs:{href:"/nitousei",target:"_blank"}},[n("img",{attrs:{src:r(337),alt:""}})])]),t._v(" "),n("p",{staticClass:"cardtext"}),n("h6",{staticClass:"text-diogreen text-sm"},[t._v("2022年6月11日公開予定")]),t._v(" "),n("h4",{staticClass:"lg:text-xl font-bold text-green-100 mt-2"},[t._v("みえない二等星")])])]),t._v(" "),n("div",{staticClass:"card-box w-2/3 lg:w-2/5  lg:mb-auto   mb-5 lg:mx-0 mx-auto"},[n("div",{staticClass:"card"},[n("p",{staticClass:"cardimage"},[n("a",{attrs:{href:"/amehazu",target:"_blank"}},[n("img",{attrs:{src:r(318),alt:""}})])]),t._v(" "),n("p",{staticClass:"cardtext"}),n("h6",{staticClass:"text-diogreen text-sm"},[t._v("2021/8/25公開")]),t._v(" "),n("h4",{staticClass:"lg:text-xl font-bold text-green-100 mt-2"},[t._v("雨にして人を外れ")]),t._v(" "),n("a",{staticClass:"button--dio mt-4",attrs:{href:"https://novelgame.jp/games/show/5595",target:"_blank"}},[t._v("\n                      ノベコレ作品ページ\n                    ")]),t._v(" "),n("a",{staticClass:"button--dio mt-4",attrs:{href:"https://www.freem.ne.jp/win/game/26404",target:"_blank"}},[t._v("\n                      ふりーむ作品ページ\n                    ")])])]),t._v(" "),n("div",{staticClass:"card-box w-2/3 lg:w-2/5  lg:mb-auto   mb-5 lg:mx-0 mx-auto"},[n("div",{staticClass:"card"},[n("p",{staticClass:"cardimage"},[n("a",{attrs:{href:"/hitoyane",target:"_blank"}},[n("img",{attrs:{src:r(317),alt:""}})])]),t._v(" "),n("p",{staticClass:"cardtext"}),n("h6",{staticClass:"text-diogreen text-sm"},[t._v("2021/2/28公開")]),t._v(" "),n("h4",{staticClass:"lg:text-xl font-bold text-green-100 mt-2"},[t._v("ひとつ屋根の下なのに")]),t._v(" "),n("a",{staticClass:"button--dio mt-4",attrs:{href:"https://novelgame.jp/games/show/4675",target:"_blank"}},[t._v("\n                    ノベコレ作品ページ\n                  ")]),t._v(" "),n("a",{staticClass:"button--dio mt-4",attrs:{href:"https://www.freem.ne.jp/win/game/25114",target:"_blank"}},[t._v("\n                    ふりーむ作品ページ\n                  ")])])]),t._v(" "),n("div",{staticClass:"card-box w-2/3 lg:w-2/5  lg:mb-auto lg:mt-5  mb-5  lg:mx-0 mx-auto"},[n("div",{staticClass:"card"},[n("p",{staticClass:"cardimage"},[n("a",{attrs:{href:"/memolily",target:"_blank"}},[n("img",{attrs:{src:r(316),alt:""}})])]),t._v(" "),n("p",{staticClass:"cardtext"}),n("h6",{staticClass:"text-diogreen text-sm"},[t._v("2020/10/10公開")]),t._v(" "),n("h4",{staticClass:"lg:text-xl font-bold text-green-100 mt-2"},[t._v("めもりり")]),t._v(" "),n("a",{staticClass:"button--dio mt-4",attrs:{href:"https://www.freem.ne.jp/win/game/24144",target:"_blank"}},[t._v("\n                      ふりーむ作品ページ\n                    ")])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lg:w-3/4 w-11/12 m-auto  mb-8"},[n("h2",{staticClass:"text-diogreen text-center text-4xl m-auto Montserrat-300i"},[t._v("about")]),t._v(" "),n("div",{staticClass:"lg:flex justify-center items-center lg:w-5/6 m-auto"},[n("img",{staticClass:"p-5 w-2/3 lg:w-full m-auto lg:h-64 flex-shrink",attrs:{src:r(320)}}),t._v(" "),n("p",{staticClass:"text-gray-200 text-left p-3 tracking-widest "},[t._v("\n          2020 年 6 月に結成されたビジュアルノベル製作サークル。"),n("br"),t._v("\n          発起人のくろあんずの召集の下、東北のとある演劇団体で出会ったメンバーを中心に構成されている。\n          演劇活動で培われたスキルを活かし、心に残るビジュアルノベルを作るべく活動している。\n        ")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("dl",{staticClass:"m-5 text-left"},[r("dt",{staticClass:"text-sm text-diogreen"},[t._v("シナリオ")]),t._v(" "),r("dd",{staticClass:"text-3xl text-gray-200"},[t._v("つばきち")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("dl",{staticClass:"m-5 text-left"},[r("dt",{staticClass:"text-sm text-diogreen"},[t._v("スクリプト")]),t._v(" "),r("dd",{staticClass:"text-3xl text-gray-200"},[t._v("\n            古龍\n          ")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("dl",{staticClass:"m-5 text-left"},[r("dt",{staticClass:"text-sm text-diogreen"},[t._v("スクリプト")]),t._v(" "),r("dd",{staticClass:"text-3xl text-gray-200"},[t._v("\n            鳥月野郎\n          ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"text-diogreen hover:text-blue-500",attrs:{href:"https://www.pixiv.net/users/58748912",target:"_blank"}},[e("span",{staticClass:"icon-pixiv leading-tight"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"text-diogreen hover:text-yellow-600",attrs:{href:"https://soundcloud.com/semicolon0103",target:"_blank"}},[e("span",{staticClass:"icon-soundcloud"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"text-diogreen hover:text-yellow-600",attrs:{href:"https://soundcloud.com/im3py",target:"_blank"}},[e("span",{staticClass:"icon-soundcloud"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"text-diogreen hover:text-blue-500",attrs:{href:"https://www.pixiv.net/users/33984748",target:"_blank"}},[e("span",{staticClass:"icon-pixiv"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"lg:w-5/6 w-11/12 m-auto mb-8 mt-8"},[r("h2",{staticClass:"text-diogreen text-center text-4xl m-auto Montserrat-300i ",attrs:{id:"contact"}},[r("span",[t._v("contact")])]),t._v(" "),r("a",{staticClass:"button--dio m-5",attrs:{href:"https://docs.google.com/forms/d/e/1FAIpQLSeSRyZXkvvUvDlKi0eaI-O4Peuv3fWL8SEAcL1e28syUmTT8g/viewform?usp=sf_link",target:"_blank"}},[t._v("\n       お問い合わせはこちら\n      ")]),t._v(" "),r("p",{staticClass:"text-sm text-center text-white mb-8"},[t._v("\n        （Googleフォームが開きます）\n      ")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"w-full diofooter mt-12"},[r("p",{staticClass:"text-white text-sm text-center p-8 pt-12"},[t._v("\n      © 2021 D10RAMA All Rights Reserved.\n    ")])])}],o=r(321),l=r(315),c=r(312),d=(r(419),{head:function(){return{meta:[{hid:"og:title",property:"og:title",content:"D10RAMA"},{hid:"og:site_name",property:"og:site_name",content:"D10RAMA公式サイト"},{hid:"og:type",property:"og:type",content:"website"},{hid:"og:description",property:"og:description",content:"東北のビジュアルノベル製作サークルD10RAMA(ジオラマ)です。とある大学の演劇部員がコロナ禍で公演が出来なくなったことをきっかけに発足した団体です。"},{hid:"og:url",property:"og:url",content:"https://d10rama.com/"},{hid:"og:image",property:"og:image",content:"https://d10rama.com/image/d10rama_ogp.png"}]}},components:{Timeline:o.Timeline,Carousel:l.a,Slide:c.a}}),m=(r(425),r(35)),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container  max-w-max tracking-wide",attrs:{id:"top"}},[n("div",{staticClass:"h-full w-full"},[n("a",{attrs:{href:"https://d10rama.com"}},[n("Logo",{staticClass:"lg:w-1/3 w-4/5 lg:mt-32 mt-20 m-auto"})],1),t._v(" "),n("div",{staticClass:"mt-12  text-2xl "},[n("a",{staticClass:"text-diogreen hover:text-blue-500 pr-3",attrs:{href:"https://twitter.com/D10RAMA_VN",target:"_blank"}},[n("font-awesome-icon",{staticClass:"awe",attrs:{icon:["fab","twitter"]}})],1),t._v(" "),n("a",{staticClass:"text-diogreen hover:text-red-700 pr-3",attrs:{href:"https://www.youtube.com/channel/UCBMPwp_mHLOaNzv9BnhjSRA",target:"_blank"}},[n("font-awesome-icon",{staticClass:"awe",attrs:{icon:["fab","youtube"]}})],1),t._v(" "),t._m(0)]),t._v(" "),n("div",{staticClass:"m-auto mt-0 text-center  w-10/12 text-white animate-fadeIn02"},[n("carousel",{staticClass:"m-auto",attrs:{"per-page":1,"space-padding":1,autoplay:!0,"scroll-per-page":!0,loop:!0,"center-mode":!0,controls:!0,"pagination-padding":5,"autoplay-timeout":4e3,"pagination-enabled":!0,paginationActiveColor:"#54da71",paginationColor:"#eeeeee","navigation-enabled":!1,"navigation-prev-label":"◀","navigation-next-label":"▶","mouse-drag":!0,speed:1e3}},[n("slide",{staticClass:"h-auto "},[n("a",{staticClass:"hover:opacity-75  m-auto text-center p-8 pb-0",attrs:{href:"/nitousei",target:"_blank"}},[n("img",{staticClass:"m-auto hover:opacity-75 p-5 pb-0",attrs:{src:r(337)}})])]),t._v(" "),n("slide",{staticClass:"h-auto "},[n("a",{staticClass:"hover:opacity-75  m-auto text-center p-8 pb-0",attrs:{href:"/amehazu",target:"_blank"}},[n("img",{staticClass:"m-auto hover:opacity-75 p-5 pb-0",attrs:{src:r(318)}})])]),t._v(" "),n("slide",{staticClass:"h-auto "},[n("a",{staticClass:"hover:opacity-75  m-auto text-center p-8 pb-0",attrs:{href:"/hitoyane",target:"_blank"}},[n("img",{staticClass:"m-auto hover:opacity-75 p-5 pb-0",attrs:{src:r(317)}})])]),t._v(" "),n("slide",{},[n("a",{staticClass:"hover:opacity-75 m-auto text-center p-8",attrs:{href:"/memolily",target:"_blank"}},[n("img",{staticClass:"m-auto hover:opacity-75 p-5",attrs:{src:r(316)}})])])],1)],1),t._v(" "),n("div",{staticClass:" m-auto"},[t._m(1),t._v(" "),t._m(2),t._v(" "),n("div",{staticClass:"w-3/8 mt-8 mb-8"},[n("h2",{staticClass:"text-diogreen text-center text-4xl m-auto Montserrat-300i"},[t._v("twitter")]),t._v(" "),n("Timeline",{staticClass:"inline-block p-12  lg:w-3/5",attrs:{id:"D10RAMA_VN",sourceType:"profile",options:{chrome:"noheader nofooter transparent noscrollbar",theme:"dark",height:"800",borderColor:"#4b5563",linkColor:"#4b5563"},"widget-class":"tracking-widest"}}),n("br"),t._v(" "),n("a",{staticClass:"button--dio m-5 text-2xl",attrs:{href:"https://twitter.com/D10RAMA_VN",target:"_blank"}},[n("font-awesome-icon",{staticClass:"awe",attrs:{icon:["fab","twitter"]}}),t._v(" official twitter\n        ")],1)],1)]),t._v(" "),t._m(3),t._v(" "),n("div",{staticClass:"lg:w-5/6 w-11/12 m-auto mb-8"},[n("h2",{staticClass:"text-diogreen text-center text-4xl m-auto Montserrat-300i"},[t._v("member")]),t._v(" "),n("div",{staticClass:"flex flex-wrap justify-center lg:w-2/3 m-auto"},[t._m(4),t._v(" "),n("dl",{staticClass:"m-5 text-left"},[n("dt",{staticClass:"text-sm text-diogreen"},[t._v("シナリオ")]),t._v(" "),n("dd",{staticClass:"text-3xl text-gray-200"},[t._v("\n            はゆ\n            "),n("a",{staticClass:"text-diogreen hover:text-blue-500",attrs:{href:"https://twitter.com/Hayuri_Il",target:"_blank"}},[n("font-awesome-icon",{staticClass:"awe1",attrs:{icon:["fab","twitter"]}})],1)])]),t._v(" "),n("dl",{staticClass:"m-5 text-left"},[n("dt",{staticClass:"text-sm text-diogreen"},[t._v("原画")]),t._v(" "),n("dd",{staticClass:"text-3xl text-gray-200"},[t._v("\n            門前髪シフォン\n            "),n("a",{staticClass:"text-diogreen hover:text-blue-500",attrs:{href:"https://twitter.com/Monzenga3",target:"_blank"}},[n("font-awesome-icon",{staticClass:"awe1",attrs:{icon:["fab","twitter"]}})],1)])]),t._v(" "),n("dl",{staticClass:"m-5 text-left"},[n("dt",{staticClass:"text-sm text-diogreen"},[t._v("デザインワーク / スクリプト")]),t._v(" "),n("dd",{staticClass:"text-3xl text-gray-200"},[t._v("\n            くろあんず\n            "),n("a",{staticClass:"text-diogreen hover:text-blue-500 mr-2",attrs:{href:"https://twitter.com/B1ackApric0t",target:"_blank"}},[n("font-awesome-icon",{staticClass:"awe1",attrs:{icon:["fab","twitter"]}})],1),t._v(" "),n("a",{staticClass:"text-diogreen hover:text-blue-900",attrs:{href:"https://b1ackapric0t.tumblr.com/",target:"_blank"}},[n("font-awesome-icon",{staticClass:"awe1",attrs:{icon:["fab","tumblr"]}})],1)])]),t._v(" "),n("dl",{staticClass:"m-5 text-left"},[n("dt",{staticClass:"text-sm text-diogreen"},[t._v("映像 / シナリオ")]),t._v(" "),n("dd",{staticClass:"text-3xl text-gray-200"},[t._v("\n            葦内あぽだ\n            "),n("a",{staticClass:"text-diogreen hover:text-blue-500",attrs:{href:"https://twitter.com/apoda_ashinai",target:"_blank"}},[n("font-awesome-icon",{staticClass:"awe1",attrs:{icon:["fab","twitter"]}})],1)])]),t._v(" "),n("dl",{staticClass:"m-5 text-left"},[n("dt",{staticClass:"text-sm text-diogreen"},[t._v("制作")]),t._v(" "),n("dd",{staticClass:"text-3xl text-gray-200"},[t._v("\n            ジョーイ\n            "),n("a",{staticClass:"text-diogreen hover:text-blue-500",attrs:{href:"https://twitter.com/Gkd8gmTmDqeH74K",target:"_blank"}},[n("font-awesome-icon",{staticClass:"awe1",attrs:{icon:["fab","twitter"]}})],1)])]),t._v(" "),n("dl",{staticClass:"m-5 text-left"},[n("dt",{staticClass:"text-sm text-diogreen"},[t._v("制作")]),t._v(" "),n("dd",{staticClass:"text-3xl text-gray-200"},[t._v("\n            ピルム\n            "),n("a",{staticClass:"text-diogreen hover:text-blue-500",attrs:{href:"https://twitter.com/xAFvhHow63T82G1",target:"_blank"}},[n("font-awesome-icon",{staticClass:"awe1",attrs:{icon:["fab","twitter"]}})],1)])]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),n("dl",{staticClass:"m-5 text-left"},[n("dt",{staticClass:"text-sm text-diogreen"},[t._v("原画 / グラフィッカー")]),t._v(" "),n("dd",{staticClass:"text-3xl text-gray-200"},[t._v("\n              みるく\n              "),n("a",{staticClass:"text-diogreen hover:text-blue-500",attrs:{href:"https://twitter.com/clamch_owder",target:"_blank"}},[n("font-awesome-icon",{staticClass:"awe1",attrs:{icon:["fab","twitter"]}})],1),t._v(" "),t._m(7)])]),t._v(" "),n("dl",{staticClass:"m-5 text-left"},[n("dt",{staticClass:"text-sm text-diogreen"},[t._v("音楽")]),t._v(" "),n("dd",{staticClass:"text-3xl text-gray-200"},[t._v("\n              相生あおは\n              "),n("a",{staticClass:"text-diogreen hover:text-blue-500",attrs:{href:"https://twitter.com/semicolon_muses",target:"_blank"}},[n("font-awesome-icon",{staticClass:"awe1",attrs:{icon:["fab","twitter"]}})],1),t._v(" "),t._m(8),t._v(" "),n("a",{staticClass:"text-diogreen hover:text-gray-600",attrs:{href:"https://semicolon0103.com",target:"_blank"}},[n("font-awesome-icon",{staticClass:"awe1",attrs:{icon:["fas","globe"]}})],1)])]),t._v(" "),n("dl",{staticClass:"m-5 text-left"},[n("dt",{staticClass:"text-sm text-diogreen"},[t._v("音楽")]),t._v(" "),n("dd",{staticClass:"text-3xl text-gray-200"},[t._v("\n              蓮谷 彗\n              "),n("a",{staticClass:"text-diogreen hover:text-blue-500",attrs:{href:"https://twitter.com/HasuyaSui",target:"_blank"}},[n("font-awesome-icon",{staticClass:"awe1",attrs:{icon:["fab","twitter"]}})],1),t._v(" "),t._m(9)])]),t._v(" "),n("dl",{staticClass:"m-5 text-left"},[n("dt",{staticClass:"text-sm text-diogreen"},[t._v("原画 / グラフィッカー")]),t._v(" "),n("dd",{staticClass:"text-3xl text-gray-200"},[t._v("\n              じろぐ\n              "),n("a",{staticClass:"text-diogreen hover:text-blue-500",attrs:{href:"https://twitter.com/Ji_logg",target:"_blank"}},[n("font-awesome-icon",{staticClass:"awe1",attrs:{icon:["fab","twitter"]}})],1),t._v(" "),t._m(10)])])]),t._v(" "),n("a",{staticClass:"button--dio m-5",attrs:{href:"/wanted",target:"_blank"}},[t._v("\n         メンバー募集\n      ")]),t._v(" "),t._m(11)]),t._v(" "),n("nuxt-link",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#top",expression:"'#top'"}],staticClass:"text-gray-300 block text-3xl text-center leading-3 hover:opacity-75 hover:animate-bounce",attrs:{to:""}},[n("font-awesome-icon",{staticClass:"awe1",attrs:{icon:["fas","chevron-up"]}}),n("br"),t._v(" "),n("span",{staticClass:"text-sm"},[t._v("to top")])],1)],1),t._v(" "),t._m(12)])}),n,!1,null,null,null);e.default=component.exports;installComponents(component,{Logo:r(319).default})}}]);