(window.webpackJsonp=window.webpackJsonp||[]).push([[6,3],{275:function(t,e,n){var content=n(280);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(58).default)("46f4b350",content,!0,{sourceMap:!1})},278:function(t,e,n){"use strict";var r=0;function o(t){if(!r){var s=document.createElement("script");s.setAttribute("src",t),document.body.appendChild(s),r=new Promise((function(t){s.onload=function(){t(window.twttr)}}))}return r}var l={id:{type:String,required:!0},sourceType:{type:String},slug:{type:String},options:Object};t.exports={addPlatformScript:o,twitterEmbedComponent:function(t){return{data:function(){return{isLoaded:!1,isAvailable:!1}},props:Object.assign({},l,t.props),mounted:function(){var e,n=this;e="profile"===this.sourceType?{sourceType:this.sourceType,screenName:this.id}:"list"===this.sourceType?{sourceType:this.sourceType,ownerScreenName:this.id,slug:this.slug}:this.id,Promise.resolve(window.twttr?window.twttr:o("//platform.twitter.com/widgets.js")).then((function(r){return t.embedComponent(r,e,n.$el,n.options)})).then((function(data){n.isAvailable=void 0!==data,n.isLoaded=!0}))},render:function(t){if(this.isLoaded&&this.isAvailable)return t("div",{class:this.$props.widgetClass});if(this.isLoaded&&!this.isAvailable&&this.$props.errorMessage){var e=t("div",{class:this.$props.errorMessageClass,domProps:{innerHTML:this.$props.errorMessage}});return t("div",[e])}return t("div",{class:this.$props.widgetClass},this.$slots.default)}}}}},279:function(t,e,n){"use strict";n(275)},280:function(t,e,n){var r=n(57)((function(i){return i[1]}));r.push([t.i,".NuxtLogo{\n  -webkit-animation:appear 1s;\n          animation:appear 1s\n}\n.diogreen{\n  fill:#54da71\n}\n@-webkit-keyframes appear{\n0%{\n    opacity:0\n}\n}\n@keyframes appear{\n0%{\n    opacity:0\n}\n}",""]),r.locals={},t.exports=r},288:function(t,e,n){t.exports=n.p+"img/hitoyane_ogp.93b1b17.png"},289:function(t,e,n){t.exports=n.p+"img/memolily_ogp.76b315e.png"},290:function(t,e,n){var content=n(350);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(58).default)("3dd8082a",content,!0,{sourceMap:!1})},291:function(t,e,n){"use strict";n.r(e);n(279);var r=n(32),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{staticClass:"NuxtLogo",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 185.26 53.29"}},[n("defs",[n("style",[t._v(".diogreen{fill:#54DA71;}")])]),t._v(" "),n("g",{attrs:{id:"layer_2","data-name":"layer 2"}},[n("g",{attrs:{id:"layer_1-2","data-name":"layer 1"}},[n("polygon",{staticClass:"diogreen",attrs:{points:"70.29 44.49 66.18 44.49 65.96 45.49 70.08 45.49 70.29 44.49"}}),t._v(" "),n("polygon",{staticClass:"diogreen",attrs:{points:"65.52 47.48 69.64 47.48 69.86 46.48 65.74 46.48 65.52 47.48"}}),t._v(" "),n("polygon",{staticClass:"diogreen",attrs:{points:"73.39 45.37 63.78 53.29 65.36 53.29 74.96 45.37 73.39 45.37"}}),t._v(" "),n("polygon",{staticClass:"diogreen",attrs:{points:"73.12 48.68 72.74 50.47 73.76 50.47 74.14 48.68 73.12 48.68"}}),t._v(" "),n("polygon",{staticClass:"diogreen",attrs:{points:"75.96 48.68 74.94 48.68 74.56 50.47 75.58 50.47 75.96 48.68"}}),t._v(" "),n("polygon",{staticClass:"diogreen",attrs:{points:"88.75 46.48 89.04 45.09 88.02 45.09 87.73 46.48 81.83 46.48 81.62 47.48 86.76 47.48 79.87 53.29 81.42 53.29 87.34 48.31 86.28 53.29 87.3 53.29 88.54 47.48 90.09 47.48 90.3 46.48 88.75 46.48"}}),t._v(" "),n("polygon",{staticClass:"diogreen",attrs:{points:"96.72 46.48 96.5 47.48 103.8 47.48 96.77 53.28 96.78 53.29 98.33 53.29 106.58 46.48 96.72 46.48"}}),t._v(" "),n("polygon",{staticClass:"diogreen",attrs:{points:"97.14 44.49 96.93 45.49 105.4 45.49 105.62 44.49 97.14 44.49"}}),t._v(" "),n("polygon",{staticClass:"diogreen",attrs:{points:"121.47 46.48 111.61 46.48 111.39 47.48 118.69 47.48 114.15 51.23 115.77 53.29 117.05 53.29 115.54 51.38 121.47 46.48"}}),t._v(" "),n("path",{staticClass:"diogreen",attrs:{d:"M27.5,7.43a9.88,9.88,0,0,0-1.62-2.88A10.43,10.43,0,0,0,17.56.82H.43L0,2.87H17.56a8.44,8.44,0,0,1,6.73,3,8.88,8.88,0,0,1,1.56,7.55c-1.27,6-7.21,11-13.24,11H8l2.22-10.53H8.1L5.46,26.41h7.15c7,0,13.79-5.65,15.25-12.59A12.3,12.3,0,0,0,28,9.65l5.23-4.32L28.83,26.41h2.1L36.48,0Z"}}),t._v(" "),n("path",{staticClass:"diogreen",attrs:{d:"M71.41,14.64,86.58,33.85h2.5l-7.2-9.11L94.1,14.64h9.31l-2.64,12.58L127.26,5.33l-4.61,21.89,26.5-21.89-4.6,21.89,15.22-12.58h9.31l-2.47,11.77h2.1l2.47-11.77h13.67l.41-2.06H171.62L174.26,0,147.77,21.89,152.37,0,125.88,21.89,130.48,0,104,21.89,108.59,0l-28,23.13-6.7-8.49H78.8a8.61,8.61,0,0,0,8.13-6.7,5.94,5.94,0,0,0-1.09-5.07A5.75,5.75,0,0,0,81.28.82H68.68L66.2,12.58H62.11a10.6,10.6,0,0,0-2.18-8A10.44,10.44,0,0,0,51.61.82c-7,0-13.79,5.64-15.25,12.58a10.85,10.85,0,0,0,2,9.27,10.47,10.47,0,0,0,8.33,3.74c6.67,0,13.23-5.21,15-11.77h4.08L63.29,26.41H65.4l2.47-11.76Zm-33-.82c1.27-6,7.21-10.95,13.24-10.95a8.64,8.64,0,0,1,6.11,2.31L39.28,20.42A9.18,9.18,0,0,1,38.37,13.82Zm21.52-.42c-1.27,6-7.2,11-13.23,11A8.6,8.6,0,0,1,40.54,22L59,6.8A9.08,9.08,0,0,1,59.89,13.4Zm8.41-.82,2-9.71H81.28a3.7,3.7,0,0,1,3,1.3,3.92,3.92,0,0,1,.68,3.35,6.58,6.58,0,0,1-6.12,5.06Zm28.3,0,8.77-7.25-1.53,7.25Zm72.91,0h-7.24L171,5.33Z"}})])])])}),[],!1,null,null,null);e.default=component.exports},343:function(t,e,n){t.exports=n.p+"img/amehazu_pre.ac2ce10.png"},344:function(t,e,n){t.exports=n.p+"img/d10ramafull.dd098f8.svg"},345:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"Tweet",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(e,"Moment",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(e,"Timeline",{enumerable:!0,get:function(){return l.default}});var r=c(n(346)),o=c(n(347)),l=c(n(348));function c(t){return t&&t.__esModule?t:{default:t}}},346:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=(0,n(278).twitterEmbedComponent)({embedComponent:function(t){for(var e,n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return(e=t.widgets).createTweetEmbed.apply(e,r)},props:{errorMessage:{type:String,default:"Whoops! We couldn't access this Tweet."},errorMessageClass:{type:String,required:!1},widgetClass:{type:String,required:!1}}});e.default=r},347:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=(0,n(278).twitterEmbedComponent)({embedComponent:function(t){for(var e,n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return(e=t.widgets).createMoment.apply(e,r)},props:{errorMessage:{type:String,default:"Whoops! We couldn't access this Moment."},errorMessageClass:{type:String,required:!1},widgetClass:{type:String,required:!1}}});e.default=r},348:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=(0,n(278).twitterEmbedComponent)({embedComponent:function(t){for(var e,n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return(e=t.widgets).createTimeline.apply(e,r)},props:{errorMessage:{type:String,default:"Whoops! We couldn't access this Timeline."},errorMessageClass:{type:String,required:!1},widgetClass:{type:String,required:!1}}});e.default=r},349:function(t,e,n){"use strict";n(290)},350:function(t,e,n){var r=n(57)((function(i){return i[1]}));r.push([t.i,'.VueCarousel-navigation-next,.VueCarousel-navigation-prev{\n  font-size:1rem;\n  color:#f1f1f1!important\n}\n.VueCarousel-navigation--disabled{\n  display:none\n}\n.VueCarousel-pagination{\n  margin-top:-1rem\n}\n.container{\n  margin:0 auto;\n  justify-content:center;\n  align-items:center;\n  text-align:center;\n  scroll-behavior:smooth;\n  max-width:-webkit-max-content;\n  max-width:-moz-max-content;\n  max-width:max-content\n}\n::-moz-selection{\n  background:#54dc71;\n  color:#f1f1f1\n}\n::selection{\n  background:#54dc71;\n  color:#f1f1f1\n}\n::-moz-selection{\n  background:#54dc71;\n  color:#f1f1f1\n}\n.Montserrat-300i{\n  font-family:"Montserrat",sans-serif;\n  font-weight:700;\n  font-style:italic\n}\n.diofooter{\n  background:linear-gradient(180deg,rgba(84,220,113,0),rgba(84,220,113,.6))\n}\n.news_scroll::-webkit-scrollbar{\n  width:6px\n}\n.news_scroll::-webkit-scrollbar-track{\n  border-radius:3px;\n  background:rgba(84,220,113,0)\n}\n.news_scroll::-webkit-scrollbar-thumb{\n  border-radius:3px;\n  background:rgba(84,220,113,.2)\n}\ndiv.card-box div.card{\n  box-shadow:0 2px 5px rgba(0,0,0,.1);\n  padding:10px 10px 20px;\n  background-color:#0c0c12;\n  cursor:pointer;\n  border-radius:5px\n}\ndiv.card-box div.card p.cardimage{\n  margin:-10px -10px 0;\n  border-top-left-radius:5px;\n  border-top-right-radius:5px\n}\ndiv.card-box div.card p.cardimage img{\n  vertical-align:top\n}\ndiv.card-box div.card p.cardtext{\n  margin:10px 0 0;\n  color:#2d2d2d\n}\ndiv.card-box div.card p.cardimage{\n  overflow:hidden\n}\ndiv.card-box div.card p.cardimage img{\n  transition:transform .3s\n}\ndiv.card-box div.card:hover p.cardimage img{\n  transform:scale(1.1)\n}',""]),r.locals={},t.exports=r},359:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-3/8 mt-8"},[n("h2",{staticClass:"text-diogreen text-center text-4xl m-auto Montserrat-300i"},[t._v("news")]),t._v(" "),n("ul",{staticClass:"text-left inline-block p-3 divide-y divide-gray-600 overflow-auto h-64 news_scroll mr-2"},[n("li",{staticClass:"p-3"},[n("p",{staticClass:"inline-block text-diogreen text-sm"},[t._v("2021.6.27")]),t._v(" "),n("p",{staticClass:"inline-block text-gray-200 ml-6 "},[n("a",{staticClass:"underline text-diogreen",attrs:{href:"https://d10rama.com/amehazu",target:"_blank"}},[t._v("新作のティザーサイト")]),t._v("を公開！")])]),t._v(" "),n("li",{staticClass:"p-3"},[n("p",{staticClass:"inline-block text-diogreen text-sm"},[t._v("2021.5.31")]),t._v(" "),n("p",{staticClass:"inline-block text-gray-200 ml-6 "},[t._v("「ひとつ屋根の下なのに」が"),n("a",{staticClass:"underline text-diogreen",attrs:{href:"https://freegame-contest.com/2021-2/2-result/ ",target:"_blank"}},[t._v("第2回新人フリーゲームコンテスト")]),t._v("で準グランプリを受賞しました！")])]),t._v(" "),n("li",{staticClass:"p-3"},[n("p",{staticClass:"inline-block text-diogreen text-sm"},[t._v("2021.2.28")]),t._v(" "),n("p",{staticClass:"inline-block text-gray-200 ml-6 "},[t._v("「ひとつ屋根の下なのに」が"),n("a",{staticClass:"underline text-diogreen",attrs:{href:"https://novelgame.jp/games/show/4675",target:"_blank"}},[t._v("ノベコレ")]),t._v("と"),n("a",{staticClass:"underline text-diogreen",attrs:{href:"https://www.freem.ne.jp/win/game/25114",target:"_blank"}},[t._v("ふりーむ")]),t._v("で公開されました！")])]),t._v(" "),n("li",{staticClass:"p-3"},[n("p",{staticClass:"inline-block text-diogreen text-sm"},[t._v("2021.2.7")]),t._v(" "),n("p",{staticClass:"inline-block text-gray-200 ml-6 "},[t._v("新作"),n("a",{staticClass:"underline text-diogreen",attrs:{href:"/hitoyane",target:"_blank"}},[t._v("「ひとつ屋根の下なのに」")]),t._v("のページを公開！")])]),t._v(" "),n("li",{staticClass:"p-3"},[n("p",{staticClass:"inline-block text-diogreen text-sm"},[t._v("2020.12.12")]),t._v(" "),n("p",{staticClass:"inline-block text-gray-200 ml-6 "},[n("a",{staticClass:"underline text-diogreen",attrs:{href:"https://www.youtube.com/watch?v=jVFCEjbKhzI",target:"_blank"}},[t._v("「めもりり」PV")]),t._v("を製作しました！")])]),t._v(" "),n("li",{staticClass:"p-3"},[n("p",{staticClass:"inline-block text-diogreen text-sm"},[t._v("2020.10.10")]),t._v(" "),n("p",{staticClass:"inline-block text-gray-200 ml-6 "},[t._v("「めもりり」マスターアップしました！！"),n("a",{staticClass:"underline text-diogreen",attrs:{href:"/memolily",target:"_blank"}},[t._v("特設ページ")]),t._v("からDLいただけます！")])]),t._v(" "),n("li",{staticClass:"p-3"},[n("p",{staticClass:"inline-block text-diogreen text-sm "},[t._v("2020.09.29")]),t._v(" "),n("p",{staticClass:"inline-block text-gray-200 ml-6 "},[t._v("第1弾"),n("a",{staticClass:"underline text-diogreen",attrs:{href:"/memolily",target:"_blank"}},[t._v("「めもりり」")]),t._v("ページ公開！")])]),t._v(" "),n("li",{staticClass:"p-3 "},[n("p",{staticClass:"inline-block text-diogreen text-sm "},[t._v("2020.09.12")]),t._v(" "),n("p",{staticClass:"inline-block text-gray-200 ml-6"},[t._v("サークル公式ページスタート！")])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-3/8 mt-8 mb-8"},[r("h2",{staticClass:"text-diogreen text-center text-4xl m-auto Montserrat-300i"},[t._v("works")]),t._v(" "),r("div",{staticClass:"block lg:flex justify-center p-5 mt-5 "},[r("div",{staticClass:"card-box w-2/3 lg:w-2/5  lg:mb-auto lg:mr-5 m-auto mb-5"},[r("div",{staticClass:"card"},[r("p",{staticClass:"cardimage"},[r("a",{attrs:{href:"/memolily",target:"_blank"}},[r("img",{attrs:{src:n(289),alt:""}})])]),t._v(" "),r("p",{staticClass:"cardtext"}),r("h6",{staticClass:"text-diogreen text-sm"},[t._v("2020/10/10公開")]),t._v(" "),r("h4",{staticClass:"lg:text-xl font-bold text-green-100 mt-2"},[t._v("めもりり")]),t._v(" "),r("a",{staticClass:"button--dio mt-4",attrs:{href:"https://www.freem.ne.jp/win/game/24144",target:"_blank"}},[t._v("\n                      ふりーむ作品ページ\n                    ")])])]),t._v(" "),r("div",{staticClass:"card-box w-2/3 lg:w-2/5  lg:mb-auto lg:ml-5 m-auto mb-5"},[r("div",{staticClass:"card"},[r("p",{staticClass:"cardimage"},[r("a",{attrs:{href:"/hitoyane",target:"_blank"}},[r("img",{attrs:{src:n(288),alt:""}})])]),t._v(" "),r("p",{staticClass:"cardtext"}),r("h6",{staticClass:"text-diogreen text-sm"},[t._v("2021/2/28公開")]),t._v(" "),r("h4",{staticClass:"lg:text-xl font-bold text-green-100 mt-2"},[t._v("ひとつ屋根の下なのに")]),t._v(" "),r("a",{staticClass:"button--dio mt-4",attrs:{href:"https://novelgame.jp/games/show/4675",target:"_blank"}},[t._v("\n                      ノベコレ作品ページ\n                    ")]),t._v(" "),r("a",{staticClass:"button--dio mt-4",attrs:{href:"https://www.freem.ne.jp/win/game/25114",target:"_blank"}},[t._v("\n                      ふりーむ作品ページ\n                    ")])])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"lg:w-3/4 w-11/12 m-auto  mb-8"},[r("h2",{staticClass:"text-diogreen text-center text-4xl m-auto Montserrat-300i"},[t._v("about")]),t._v(" "),r("div",{staticClass:"lg:flex justify-center items-center lg:w-5/6 m-auto"},[r("img",{staticClass:"p-5 w-2/3 lg:w-full m-auto lg:h-64 flex-shrink",attrs:{src:n(344)}}),t._v(" "),r("p",{staticClass:"text-gray-200 text-left p-3 tracking-widest "},[t._v("\n          2020 年 6 月に結成されたビジュアルノベル製作サークル。"),r("br"),t._v("\n          発起人のくろあんずの召集の下、東北のとある都市の演劇団体で出会ったメンバーを中心に構成されている。 \n          演劇活動で培われたスキルが生かされているかどうかは定かではないが、ともかく面白いノベルゲームを作るべく活動している。\n        ")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("dl",{staticClass:"m-5 text-left"},[n("dt",{staticClass:"text-sm text-diogreen"},[t._v("シナリオ")]),t._v(" "),n("dd",{staticClass:"text-3xl text-gray-200"},[t._v("つばきち")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("dl",{staticClass:"m-5 text-left"},[n("dt",{staticClass:"text-sm text-diogreen"},[t._v("制作")]),t._v(" "),n("dd",{staticClass:"text-3xl text-gray-200"},[t._v("\n            ランプ\n          ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("dl",{staticClass:"m-5 text-left"},[n("dt",{staticClass:"text-sm text-diogreen"},[t._v("スクリプト")]),t._v(" "),n("dd",{staticClass:"text-3xl text-gray-200"},[t._v("\n            古龍\n          ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("dl",{staticClass:"m-5 text-left"},[n("dt",{staticClass:"text-sm text-diogreen"},[t._v("スクリプト")]),t._v(" "),n("dd",{staticClass:"text-3xl text-gray-200"},[t._v("\n            鳥月野郎\n          ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lg:w-5/6 w-11/12 m-auto mb-8 mt-8"},[n("h2",{staticClass:"text-diogreen text-center text-4xl m-auto Montserrat-300i ",attrs:{id:"contact"}},[n("span",[t._v("contact")])]),t._v(" "),n("a",{staticClass:"button--dio m-5",attrs:{href:"https://docs.google.com/forms/d/e/1FAIpQLSeSRyZXkvvUvDlKi0eaI-O4Peuv3fWL8SEAcL1e28syUmTT8g/viewform?usp=sf_link",target:"_blank"}},[t._v("\n       お問い合わせはこちら\n      ")]),t._v(" "),n("p",{staticClass:"text-sm text-center text-white mb-8"},[t._v("\n        （Googleフォームが開きます）\n      ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"w-full diofooter mt-12"},[n("p",{staticClass:"text-white text-sm text-center p-8 pt-12"},[t._v("\n      © 2021 D10RAMA All Rights Reserved.\n    ")])])}],o=n(345),l=(n(277),n(276),{components:{Timeline:o.Timeline}}),c=(n(349),n(32)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container  max-w-max tracking-wide",attrs:{id:"top"}},[r("div",{staticClass:"h-full w-full"},[r("Logo",{staticClass:"lg:w-1/3 w-4/5 lg:mt-32 mt-20 m-auto"}),t._v(" "),r("div",{staticClass:"m-auto m-8 text-center mt-12 w-10/12 text-white animate-fadeIn02"},[r("carousel",{attrs:{"per-page":1,spacePadding:1,autoplay:!0,scrollPerPage:!1,loop:!0,centerMode:!1,controls:!0,"pagination-padding":5,"autoplay-timeout":4e3,paginationEnabled:!0,paginationActiveColor:"#54da71",paginationColor:"#eeeeee","navigation-enabled":!1,"navigation-prev-label":"◀","navigation-next-label":"▶",mouseDrag:!0,speed:1e3}},[r("slide",{staticClass:"h-auto "},[r("a",{staticClass:"hover:opacity-75  m-auto text-center p-8 pb-0",attrs:{href:"/amehazu",target:"_blank"}},[r("img",{staticClass:"m-auto hover:opacity-75 p-5 pb-0",attrs:{src:n(343)}})])]),t._v(" "),r("slide",{staticClass:"h-auto "},[r("a",{staticClass:"hover:opacity-75  m-auto text-center p-8 pb-0",attrs:{href:"/hitoyane",target:"_blank"}},[r("img",{staticClass:"m-auto hover:opacity-75 p-5 pb-0",attrs:{src:n(288)}})])]),t._v(" "),r("slide",{},[r("a",{staticClass:"hover:opacity-75 m-auto text-center p-8",attrs:{href:"/memolily",target:"_blank"}},[r("img",{staticClass:"m-auto hover:opacity-75 p-5",attrs:{src:n(289)}})])])],1)],1),t._v(" "),r("div",{staticClass:" m-auto"},[t._m(0),t._v(" "),t._m(1),t._v(" "),r("div",{staticClass:"w-3/8 mt-8 mb-8"},[r("h2",{staticClass:"text-diogreen text-center text-4xl m-auto Montserrat-300i"},[t._v("twitter")]),t._v(" "),r("a",{staticClass:"button--dio m-5",attrs:{href:"https://twitter.com/D10RAMA_VN",target:"_blank"}},[r("font-awesome-icon",{attrs:{icon:["fab","twitter"]}}),t._v(" official twitter\n        ")],1)])]),t._v(" "),t._m(2),t._v(" "),r("div",{staticClass:"lg:w-5/6 w-11/12 m-auto mb-8"},[r("h2",{staticClass:"text-diogreen text-center text-4xl m-auto Montserrat-300i"},[t._v("member")]),t._v(" "),r("div",{staticClass:"flex flex-wrap justify-center lg:w-2/3 m-auto"},[t._m(3),t._v(" "),r("dl",{staticClass:"m-5 text-left"},[r("dt",{staticClass:"text-sm text-diogreen"},[t._v("シナリオ")]),t._v(" "),r("dd",{staticClass:"text-3xl text-gray-200"},[t._v("\n            はゆ\n            "),r("a",{staticClass:"text-diogreen hover:text-blue-500",attrs:{href:"https://twitter.com/yuri_ayuri108",target:"_blank"}},[r("font-awesome-icon",{attrs:{icon:["fab","twitter"]}})],1)])]),t._v(" "),r("dl",{staticClass:"m-5 text-left"},[r("dt",{staticClass:"text-sm text-diogreen"},[t._v("原画")]),t._v(" "),r("dd",{staticClass:"text-3xl text-gray-200"},[t._v("\n            門前髪シフォン\n            "),r("a",{staticClass:"text-diogreen hover:text-blue-500",attrs:{href:"https://twitter.com/Monzenga3",target:"_blank"}},[r("font-awesome-icon",{attrs:{icon:["fab","twitter"]}})],1)])]),t._v(" "),r("dl",{staticClass:"m-5 text-left"},[r("dt",{staticClass:"text-sm text-diogreen"},[t._v("デザインワーク / スクリプト")]),t._v(" "),r("dd",{staticClass:"text-3xl text-gray-200"},[t._v("\n            くろあんず\n            "),r("a",{staticClass:"text-diogreen hover:text-blue-500 mr-2",attrs:{href:"https://twitter.com/B1ackApric0t",target:"_blank"}},[r("font-awesome-icon",{attrs:{icon:["fab","twitter"]}})],1),t._v(" "),r("a",{staticClass:"text-diogreen hover:text-blue-700",attrs:{href:"https://b1ackapric0t.tumblr.com/",target:"_blank"}},[r("font-awesome-icon",{attrs:{icon:["fab","tumblr"]}})],1)])]),t._v(" "),r("dl",{staticClass:"m-5 text-left"},[r("dt",{staticClass:"text-sm text-diogreen"},[t._v("映像 / シナリオ")]),t._v(" "),r("dd",{staticClass:"text-3xl text-gray-200"},[t._v("\n            葦内あぽだ\n            "),r("a",{staticClass:"text-diogreen hover:text-blue-500",attrs:{href:"https://twitter.com/apoda_ashinai",target:"_blank"}},[r("font-awesome-icon",{attrs:{icon:["fab","twitter"]}})],1)])]),t._v(" "),t._m(4),t._v(" "),r("dl",{staticClass:"m-5 text-left"},[r("dt",{staticClass:"text-sm text-diogreen"},[t._v("制作")]),t._v(" "),r("dd",{staticClass:"text-3xl text-gray-200"},[t._v("\n            ピルム\n            "),r("a",{staticClass:"text-diogreen hover:text-blue-500",attrs:{href:"https://twitter.com/xAFvhHow63T82G1",target:"_blank"}},[r("font-awesome-icon",{attrs:{icon:["fab","twitter"]}})],1)])]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),r("dl",{staticClass:"m-5 text-left"},[r("dt",{staticClass:"text-sm text-diogreen"},[t._v("原画 / グラフィッカー")]),t._v(" "),r("dd",{staticClass:"text-3xl text-gray-200"},[t._v("\n              家兎\n              "),r("a",{staticClass:"text-diogreen hover:text-blue-500",attrs:{href:"https://twitter.com/shojomangano_",target:"_blank"}},[r("font-awesome-icon",{attrs:{icon:["fab","twitter"]}})],1)])]),t._v(" "),r("dl",{staticClass:"m-5 text-left"},[r("dt",{staticClass:"text-sm text-diogreen"},[t._v("原画 / グラフィッカー")]),t._v(" "),r("dd",{staticClass:"text-3xl text-gray-200"},[t._v("\n              みるく\n              "),r("a",{staticClass:"text-diogreen hover:text-blue-500",attrs:{href:"https://twitter.com/clamch_owder",target:"_blank"}},[r("font-awesome-icon",{attrs:{icon:["fab","twitter"]}})],1)])]),t._v(" "),r("dl",{staticClass:"m-5 text-left"},[r("dt",{staticClass:"text-sm text-diogreen"},[t._v("音楽")]),t._v(" "),r("dd",{staticClass:"text-3xl text-gray-200"},[t._v("\n              相生あおは\n              "),r("a",{staticClass:"text-diogreen hover:text-blue-500",attrs:{href:"https://twitter.com/semicolon_muses",target:"_blank"}},[r("font-awesome-icon",{attrs:{icon:["fab","twitter"]}})],1),t._v(" "),r("a",{staticClass:"text-diogreen hover:text-gray-600",attrs:{href:"https://semicolon0103.com",target:"_blank"}},[r("font-awesome-icon",{attrs:{icon:["fas","globe"]}})],1)])])]),t._v(" "),t._m(7)]),t._v(" "),r("nuxt-link",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#top",expression:"'#top'"}],staticClass:"text-gray-300 block text-3xl text-center leading-3 hover:opacity-75 hover:animate-bounce",attrs:{to:""}},[r("font-awesome-icon",{attrs:{icon:["fas","chevron-up"]}}),r("br"),t._v(" "),r("span",{staticClass:"text-sm"},[t._v("to top")])],1)],1),t._v(" "),t._m(8)])}),r,!1,null,null,null);e.default=component.exports;installComponents(component,{Logo:n(291).default})}}]);