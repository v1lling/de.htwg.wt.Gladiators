(function(t){function e(e){for(var o,i,s=e[0],l=e[1],c=e[2],u=0,h=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&h.push(n[i][0]),n[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);d&&d(e);while(h.length)h.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],o=!0,s=1;s<a.length;s++){var l=a[s];0!==n[l]&&(o=!1)}o&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var o={},n={app:0},r=[];function i(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=o,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(a,o,function(e){return t[e]}.bind(null,o));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/frontend/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var d=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},1953:function(t,e,a){"use strict";a("da3d")},"1d7d":function(t,e,a){"use strict";a("42d1")},"1e64":function(t,e,a){},"22eb":function(t,e,a){"use strict";a("8fc9")},"2ab8":function(t,e,a){"use strict";a("f400")},3699:function(t,e,a){},"427f":function(t,e,a){},"42d1":function(t,e,a){},4504:function(t,e,a){"use strict";a("1e64")},4614:function(t,e,a){},"4b4e":function(t,e,a){},"4cb7":function(t,e,a){},"5bd0":function(t,e,a){"use strict";a("5c79")},"5c79":function(t,e,a){},"64e7":function(t,e,a){},"8fc9":function(t,e,a){},"91de":function(t,e,a){"use strict";a("b0b8")},9421:function(t,e,a){},"946e":function(t,e,a){"use strict";a("4614")},9816:function(t,e,a){"use strict";a("4cb7")},a306:function(t,e,a){"use strict";a("4b4e")},b0b8:function(t,e,a){},b4ed:function(t,e,a){"use strict";a("d4a8")},b4f9:function(t,e,a){"use strict";a("d497")},b714:function(t,e,a){"use strict";a("3699")},cd49:function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("div",{attrs:{id:"app"}},[a("MyToolbar"),a("v-alert",{attrs:{value:t.alert.show,dismissible:"",dense:"",dark:"",type:t.alert.type,border:"top",transition:"fade"}},[t._v(" "+t._s(t.alert.message)+" ")]),a("router-view",{staticClass:"v-router"}),a("MyFooter")],1)])},r=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.isMobile()?t._e():a("v-footer",{staticClass:"pl-4",attrs:{app:"",width:"auto",dark:"",padless:"",height:"50"}},[t._v(" Sascha Villing & Sebastian Voigt "),a("v-spacer"),a("v-layout",{attrs:{"justify-end":""}},[a("v-btn",{staticClass:"mx-4",attrs:{dark:"",href:"https://github.com/v1lling/de.htwg.wt.gladiators-vue",target:"_blank"}},[a("v-icon",{staticClass:"pr-2",attrs:{size:"24px"}},[t._v(" mdi-github ")]),t._v(" Front-End ")],1),a("v-btn",{staticClass:"mx-4",attrs:{dark:"",href:"https://github.com/v1lling/de.htwg.wt.gladiators",target:"_blank"}},[a("v-icon",{staticClass:"pr-2",attrs:{size:"24px"}},[t._v(" mdi-github ")]),t._v(" Back-End ")],1)],1)],1)},s=[],l={methods:{isMobile:function(){var t=!1;return function(e){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(t=!0)}(navigator.userAgent||navigator.vendor||window.opera),t}}},c=o["a"].component("my-footer",{mixins:[l]}),d=c,u=(a("1d7d"),a("2877")),h=a("6544"),m=a.n(h),p=a("8336"),g=a("553a"),f=a("132d"),v=a("a722"),y=a("2fa4"),b=Object(u["a"])(d,i,s,!1,null,"83de1e94",null),w=b.exports;m()(b,{VBtn:p["a"],VFooter:g["a"],VIcon:f["a"],VLayout:v["a"],VSpacer:y["a"]});var _=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-toolbar",{attrs:{dark:""}},[a("v-img",{attrs:{src:"frontend/img/logo.png","max-height":"40","max-width":"40",contain:""}}),a("v-toolbar-title",{staticClass:"v-title"},[t._v("Gladiators")]),a("v-spacer"),a("v-app-bar-nav-icon",{staticClass:"hidden-md-and-up",on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),a("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[a("v-btn",{attrs:{text:"",to:"/"}},[t._v("Rules")]),this.$store.getters.isLoggedIn?a("v-btn",{attrs:{text:"",to:"/Game"}},[t._v("Game")]):t._e(),this.$store.getters.isLoggedIn?t._e():a("v-btn",{attrs:{text:"",c:"",to:"/Login"}},[t._v("Login")]),this.$store.getters.isLoggedIn?a("v-btn",{attrs:{text:"",to:"/User"}},[t._v("User")]):t._e()],1)],1),a("v-navigation-drawer",{attrs:{temporary:"",right:"",absolute:"",width:"200",id:"drawer"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",{attrs:{nav:"",dense:""}},[a("v-list-item-group",{attrs:{"active-class":"deep-purple--text text--accent-4"}},[this.$store.getters.isLoggedIn?t._e():a("v-list-item",{attrs:{to:"/Login"}},[a("v-list-item-title",[t._v("Login")])],1),this.$store.getters.isLoggedIn?a("v-list-item",{attrs:{to:"/Game"}},[a("v-list-item-title",[t._v("Game")])],1):t._e(),a("v-list-item",{attrs:{to:"/"}},[a("v-list-item-title",[t._v("Rules")])],1),this.$store.getters.isLoggedIn?a("v-list-item",{attrs:{to:"/User"}},[a("v-list-item-title",[t._v("User")])],1):t._e()],1)],1)],1)],1)},T=[],E=o["a"].component("my-toolbar",{data:function(){return{drawer:null}},methods:{}}),x=E,k=(a("22eb"),a("5bc1")),S=a("adda"),$=a("8860"),I=a("da13"),G=a("1baa"),C=a("5d23"),P=a("f774"),O=a("71d9"),L=a("2a7f"),A=Object(u["a"])(x,_,T,!1,null,"e4d914e2",null),R=A.exports;m()(A,{VAppBarNavIcon:k["a"],VBtn:p["a"],VImg:S["a"],VList:$["a"],VListItem:I["a"],VListItemGroup:G["a"],VListItemTitle:C["a"],VNavigationDrawer:P["a"],VSpacer:y["a"],VToolbar:O["a"],VToolbarItems:L["a"],VToolbarTitle:L["b"]});var j={components:{MyToolbar:R,MyFooter:w},data:function(){return{window:{width:0,height:0}}},computed:{alert:function(){return this.$store.state.alert}},created:function(){window.addEventListener("resize",this.handleResize),this.handleResize()},destroyed:function(){window.removeEventListener("resize",this.handleResize)},methods:{handleResize:function(){this.window.width=window.innerWidth,this.window.height=window.innerHeight}},mounted:function(){this.$store.dispatch("signedIn",!0)}},H=j,V=(a("9816"),a("0798")),N=a("7496"),B=Object(u["a"])(H,n,r,!1,null,"27516024",null),D=B.exports;m()(B,{VAlert:V["a"],VApp:N["a"]});var M=a("9483"),z=(a("b0c0"),a("ac1f"),a("5319"),a("2f62")),F=a("bc3a"),U=a.n(F),q=a("8c4f"),J=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},W=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container about my-container"},[a("h1",[t._v("Gladiators - The Game")]),a("h2",[t._v("Now available for Browsers")]),a("p",{staticClass:"ma-4"},[t._v(" Gladiators is a turn-based strategy game for 2 Players. Players can buy different Gladiators (such as Knights, Archer or Tanks) for a certain amount of money (credits). One way to earn money is to attack the gold mine that is randomly positioned on the board. Another way to get money is to kill Gladiators of your opponent. Gladiators have various attributes that specify their skills. ")]),t._v(" The attributes are: "),a("ul",[a("li",[t._v("Movement Points (the amount of tiles a Gladiator can walk per turn)")]),a("li",[t._v("Health Points (the damage a Gladiator can take until he dies)")]),a("li",[t._v("Attack Points (the damage a Gladiator does per attack)")])]),a("p",{staticClass:"ma-4"},[t._v(" The shop generates random gladiators and provides them to the players. Each Gladiator-type has a intervals of possible values for each attribute. ")]),a("table",[a("tr",[a("th",[t._v("Gladiator-Type")]),a("th",[t._v("Movement-Points")]),a("th",[t._v("Health-Points")]),a("th",[t._v("Attack-Points")])]),a("tr",[a("th",[t._v("Knight")]),a("th",[t._v("3 - 4")]),a("th",[t._v("50 - 80")]),a("th",[t._v("50 - 80")])]),a("tr",[a("th",[t._v("Archer")]),a("th",[t._v("2 - 3")]),a("th",[t._v("30 - 50")]),a("th",[t._v("40 - 70")])]),a("tr",[a("th",[t._v("Tank")]),a("th",[t._v("1 - 2")]),a("th",[t._v("80 - 100")]),a("th",[t._v("30 - 50")])])]),a("p",{staticClass:"ma-4"},[t._v(" The goal of the game is to destroy the enemy's base by attacking it. At the start of the game each base has 200 Health-Points. ")])])}],Y=(a("e262"),{}),K=Object(u["a"])(Y,J,W,!1,null,"6f456b5e",null),Q=K.exports,X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[t.openPlayerSlot&&!t.myPlayerId?a("PlayerInput",{attrs:{playerId:t.openPlayerSlot}}):t._e(),a("v-row",[a("v-col",{attrs:{cols:"12",sm:"2",xs:"2"}},[a("v-card",{staticClass:"d-flex flex-column justify-space-between",attrs:{height:"100%",flat:"",color:"rgb(255, 0, 0, 0)"}},[a("PlayerInfo",{attrs:{player:t.player2,turn:2==t.turnPlayer}}),a("TurnButton"),a("PlayerInfo",{attrs:{player:t.player1,turn:1==t.turnPlayer}})],1)],1),a("v-col",{attrs:{cols:"12",sm:"8",xs:"8"}},[a("Board")],1),a("v-col",{attrs:{cols:"12",sm:"2",xs:"2"}},[a("v-card",{staticClass:"d-flex flex-column justify-space-between",attrs:{height:"100%",flat:"",color:"rgb(255, 0, 0, 0)"}},[a("GladiatorInfo",{attrs:{gladiator:t.hoveredGladiator}}),a("GladiatorShop",{attrs:{gladiators:t.shopGladiators}})],1)],1)],1)],1)},Z=[],tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"board"},[t._l(t.boardTiles,(function(e,o){return t._l(e,(function(t,e){return a("BoardTile",{key:"x"+e+"y"+o,attrs:{tileType:t.tileType,playerId:"Base"===t.tileType?0==o?1:2:null,coordinates:{x:e,y:o}}})}))})),t._l(t.highlightedAttackTiles,(function(t,e){return a("BoardHighlight",{key:"A"+e,attrs:{mode:"Attack",coordinates:t}})})),t._l(t.highlightedMoveTiles,(function(t,e){return a("BoardHighlight",{key:"M"+e,attrs:{mode:"Move",coordinates:t}})})),t._l(t.gladiatorsPlayerOne,(function(t,e){return a("Gladiator",{key:"1"+e,attrs:{gladiator:t,playerId:1}})})),t._l(t.gladiatorsPlayerTwo,(function(t,e){return a("Gladiator",{key:"2"+e,attrs:{gladiator:t,playerId:2}})}))],2)},et=[],at=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"board-highlight",class:t.getHighlightClass(),style:t.getHighlightPosition()})},ot=[],nt=o["a"].component("board-highlight",{props:{coordinates:Object,mode:String},methods:{getHighlightClass:function(){return"tile"+this.mode+" tilePlayer"+this.$store.state.controller.currentPlayer.id},getHighlightPosition:function(){var t="Attack"==this.mode?100/60:0,e=this.coordinates.x*(100/15)+t,a=this.coordinates.y*(100/15)+t;return"top: "+a+"%; left: "+e+"%;"}}}),rt=nt,it=(a("1953"),Object(u["a"])(rt,at,ot,!1,null,"2a86f8c4",null)),st=it.exports,lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"board-tile",class:t.getTileClass(),on:{click:function(e){return t.clickTile()}}})},ct=[],dt=(a("a9e3"),o["a"].component("board-tile",{props:{clickFn:Function,coordinates:Object,tileType:String,playerId:Number},methods:{getTileClass:function(){return this.playerId?"tile"+this.tileType+this.playerId:"tile"+this.tileType},clickTile:function(){"Shop"==this.$store.getters.selectedGladiator.source?this.$store.dispatch("buyGladiator",this.coordinates):"Board"==this.$store.getters.selectedGladiator.source?this.$store.dispatch("moveGladiator",this.coordinates):(this.$store.commit("SET_SELECTEDGLADIATOR",{}),this.$store.commit("SET_HIGHLIGHTEDTILES",{}))}}})),ut=dt,ht=(a("946e"),Object(u["a"])(ut,lt,ct,!1,null,"05d3b91c",null)),mt=ht.exports,pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"gladiator",style:t.getGladiatorPosition,on:{click:function(e){return t.clickGladiator()},mouseenter:function(e){return t.updateHoveredGladiator()},mouseleave:function(e){return t.resetHoveredGladiator()}}},[a("div",{staticClass:"gladiator-image",class:"glad"+t.gladiator.gladiatorType+" gladPlayer"+t.playerId}),a("div",{staticClass:"healthbar-container"},[a("div",{staticClass:"healthbar",style:t.getHealthbarWidth})])])},gt=[],ft={methods:{updateHoveredGladiator:function(){this.$store.commit("SET_HOVEREDGLADIATOR",this.gladiator)},resetHoveredGladiator:function(){this.$store.commit("SET_HOVEREDGLADIATOR",{})}}};a("fb6a"),a("d3b7"),a("25f0");function vt(t){var e,a=0,o=0;t<50?(e=255,a=Math.round(5.1*t)):(a=255,e=Math.round(510-5.1*t));var n=65536*e+256*a+1*o;return"#"+("000000"+n.toString(16)).slice(-6)}var yt=o["a"].component("gladiator",{mixins:[ft],props:{gladiator:Object,playerId:Number},computed:{getGladiatorPosition:function(){console.log("getting glad pos");var t=this.gladiator.position.x*(100/15),e=this.gladiator.position.y*(100/15);return"top: "+e+"%; left: "+t+"%;"},getHealthbarWidth:function(){var t=this.gladiator.healthPoints/this.gladiator.initialHealthPoints*100;return"width: "+t+"%; background: "+vt(t)}},methods:{clickGladiator:function(){if("Board"==this.$store.getters.selectedGladiator.source)this.$store.dispatch("moveGladiator",this.gladiator.position);else{var t={gladiator:this.gladiator,source:"Board"};this.$store.commit("SET_SELECTEDGLADIATOR",t),this.$store.dispatch("hightlightTiles",this.gladiator.position)}}}}),bt=yt,wt=(a("b714"),Object(u["a"])(bt,pt,gt,!1,null,"34075c69",null)),_t=wt.exports,Tt=o["a"].component("board-tile",{components:{BoardHighlight:st,BoardTile:mt,Gladiator:_t},computed:{boardTiles:function(){return this.$store.getters.boardTiles},gladiatorsPlayerOne:function(){return this.$store.state.controller.playerOne?this.$store.state.controller.playerOne.gladiators:[]},gladiatorsPlayerTwo:function(){return this.$store.state.controller.playerTwo?this.$store.state.controller.playerTwo.gladiators:[]},highlightedAttackTiles:function(){return this.$store.state.myHighlightedTiles?this.$store.state.myHighlightedTiles.tilesAttack:[]},highlightedMoveTiles:function(){return this.$store.state.myHighlightedTiles?this.$store.state.myHighlightedTiles.tilesMove:[]}}}),Et=Tt,xt=(a("b4ed"),Object(u["a"])(Et,tt,et,!1,null,"1fed2d38",null)),kt=xt.exports,St=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v(" Stats "),a("div",{staticClass:"gladiatorinfo"},[a("div",{staticClass:"gladiatorinfo-image",class:t.getClass()}),a("div",[t._v("AP: "),a("span",[t._v(" "+t._s(t.gladiator&&t.gladiator.attackPoints||"-")+" ")])]),a("div",[t._v("HP: "),a("span",[t._v(" "+t._s(t.gladiator&&t.gladiator.healthPoints||"-")+" ")])]),a("div",[t._v("MP: "),a("span",[t._v(" "+t._s(t.gladiator&&t.gladiator.movementPoints||"-")+" ")])])])])},$t=[],It=o["a"].component("gladiator-info",{props:{gladiator:Object},methods:{getClass:function(){if(this.gladiator)return"glad"+this.gladiator.gladiatorType}}}),Gt=It,Ct=(a("ec15"),Object(u["a"])(Gt,St,$t,!1,null,"707e696b",null)),Pt=Ct.exports,Ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"gladiator-shop"},[t._v(" Shop "),t._l(t.gladiators,(function(t,e){return a("ShopItem",{key:e,attrs:{gladiator:t,shopIndex:e+1}})}))],2)},Lt=[],At=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-btn",{staticClass:"shop-item",class:"glad"+t.gladiator.gladiatorType,on:{mouseenter:function(e){return t.updateHoveredGladiator()},mouseleave:function(e){return t.resetHoveredGladiator()},click:t.updateSelectedGladiator}},[a("span",[t._v(" $"+t._s(t.gladiator&&t.gladiator.cost||"-")+" ")]),a("div",{staticClass:"layer"})])},Rt=[],jt=o["a"].component("shop-item",{mixins:[ft],props:{gladiator:Object,shopIndex:Number},methods:{updateSelectedGladiator:function(){var t={gladiator:this.gladiator,source:"Shop",shopIndex:this.shopIndex};this.$store.commit("SET_SELECTEDGLADIATOR",t)}}}),Ht=jt,Vt=(a("d106"),Object(u["a"])(Ht,At,Rt,!1,null,"750a36b8",null)),Nt=Vt.exports;m()(Vt,{VBtn:p["a"]});var Bt=o["a"].component("shop",{components:{ShopItem:Nt},props:{gladiators:Array}}),Dt=Bt,Mt=(a("b4f9"),Object(u["a"])(Dt,Ot,Lt,!1,null,"d493377a",null)),zt=Mt.exports,Ft=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v(" Player "+t._s(t.player&&t.player.id)+" "),a("div",{staticClass:"playerinfo",class:t.getClass},[a("div",{staticClass:"playerinfo-row"},[a("div",[t._v("Name:")]),a("div",[t._v(" "+t._s(t.player&&t.player.name||"-")+" ")])]),a("div",{staticClass:"playerinfo-row"},[a("div",[t._v("Base:")]),a("div",[a("animated-number",{attrs:{value:t.player.health,duration:300,round:1}})],1)]),a("div",{staticClass:"playerinfo-row"},[a("div",[t._v("Credits:")]),a("div",[a("animated-number",{attrs:{value:t.player.credits,duration:300,round:1}})],1)])])])},Ut=[],qt=a("044d"),Jt=a.n(qt),Wt=o["a"].component("player-info",{components:{AnimatedNumber:Jt.a},props:{player:Object,turn:Boolean},computed:{getClass:function(){return this.turn?"playerTurn player"+this.player.id:""}}}),Yt=Wt,Kt=(a("5bd0"),Object(u["a"])(Yt,Ft,Ut,!1,null,"0cae2697",null)),Qt=Kt.exports,Xt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-btn",{staticClass:"btn btn-rounded turnbutton",class:{"disable-events":t.buttonDisabled},attrs:{color:t.colorButton,type:"button"},on:{click:function(e){return t.endTurn()}}},[t._v(" "+t._s(t.buttonText)+" ")])},Zt=[],te=o["a"].component("turn-button",{computed:{buttonText:function(){return this.$store.state.controller.playerOne&&this.$store.state.controller.playerTwo?this.$store.state.myPlayerId?this.$store.state.controller.currentPlayer&&this.$store.state.controller.currentPlayer.id==this.$store.state.myPlayerId?"End Turn":"Wait":"Spectating":"Lobby"},colorButton:function(){return this.$store.state.myPlayerId&&this.$store.state.controller.currentPlayer&&this.$store.state.controller.currentPlayer.id==this.$store.state.myPlayerId?"green":""},buttonDisabled:function(){return!this.$store.state.myPlayerId||!this.$store.state.controller.currentPlayer||this.$store.state.controller.currentPlayer.id!=this.$store.state.myPlayerId}},methods:{endTurn:function(){this.$store.dispatch("endTurn")}}}),ee=te,ae=(a("2ab8"),Object(u["a"])(ee,Xt,Zt,!1,null,"f18325c6",null)),oe=ae.exports;m()(ae,{VBtn:p["a"]});var ne=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("modal",{attrs:{adaptive:"",name:"my-first-modal"}},[a("div",{staticClass:"ma-12"},[t._v(" Play as Player "+t._s(t.playerId)+" "),a("v-text-field",{attrs:{label:"Name",rules:t.rules,"hide-details":"auto"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),a("v-btn",{staticClass:"mt-8",attrs:{"x-large":"",color:"teal",dark:""},on:{click:function(e){return t.submitModal()}}},[t._v(" Play ")])],1)])},re=[],ie=o["a"].component("player-input",{data:function(){return{name:"",rules:[function(t){return!!t||"Required."},function(t){return t&&t.length<=6||"Max 6 characters"}]}},props:{playerId:Number},methods:{show:function(){this.$modal.show("my-first-modal")},hide:function(){this.$modal.hide("my-first-modal")},submitModal:function(){var t={name:this.name,id:this.playerId};this.$store.dispatch("connectPlayer",t)}},mounted:function(){this.show()}}),se=ie,le=a("8654"),ce=Object(u["a"])(se,ne,re,!1,null,"70faef35",null),de=ce.exports;m()(ce,{VBtn:p["a"],VTextField:le["a"]});var ue={name:"Game",data:function(){return{}},components:{Board:kt,GladiatorInfo:Pt,GladiatorShop:zt,PlayerInfo:Qt,PlayerInput:de,TurnButton:oe},mounted:function(){this.$store.dispatch("getJson")},computed:{player1:function(){return this.$store.state.controller.playerOne?this.$store.state.controller.playerOne:{name:"-",credits:100,health:100}},player2:function(){return this.$store.state.controller.playerTwo?this.$store.state.controller.playerTwo:{name:"-",credits:100,health:100}},hoveredGladiator:function(){return this.$store.state.myHoveredGladiator},shopGladiators:function(){return this.$store.getters.shopGladiators},turnPlayer:function(){return this.$store.state.controller.currentPlayer?this.$store.state.controller.currentPlayer.id:null},openPlayerSlot:function(){return"NamingPlayerOne"==this.$store.state.controller.gameState?1:"NamingPlayerTwo"==this.$store.state.controller.gameState?2:null},myPlayerId:function(){return this.$store.state.myPlayerId}}},he=ue,me=(a("a306"),a("b0af")),pe=a("62ad"),ge=a("a523"),fe=a("0fd9"),ve=Object(u["a"])(he,X,Z,!1,null,"b513149a",null),ye=ve.exports;m()(ve,{VCard:me["a"],VCol:pe["a"],VContainer:ge["a"],VRow:fe["a"]});var be=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"loginpage pt-8"},[a("div",[a("h2",[t._v("Login")]),a("v-form",{ref:"form"},[a("div",{staticClass:"form-group"},[a("v-text-field",{attrs:{label:"E-Mail",rules:t.emailRules,"hide-details":"auto"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),a("div",{staticClass:"form-group"},[a("v-text-field",{attrs:{type:"password",label:"Password","hide-details":"auto"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),a("div",{staticClass:"form-group pt-4"},[a("v-btn",{on:{click:t.login}},[t._v("Login")]),a("v-btn",{staticClass:"ml-4",attrs:{to:"/register"}},[t._v("Register")]),a("v-btn",{staticClass:"ml-4",on:{click:t.googleLogin}},[a("v-icon",{staticClass:"pr-2",attrs:{size:"24px"}},[t._v(" mdi-google ")]),t._v(" Sign In ")],1)],1)])],1)])},we=[],_e={data:function(){return{email:"",password:"",emailRules:[function(t){return!!t||"Required."},function(t){return/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(t)||"E-mail must be valid"}]}},methods:{login:function(){var t=new FormData;t.append("email",this.email),t.append("password",this.password),t.append("rememberMe",!0),this.$store.dispatch("login",t)},googleLogin:function(){this.$store.dispatch("googleLogin")}}},Te=_e,Ee=(a("cdc5"),a("4bd4")),xe=Object(u["a"])(Te,be,we,!1,null,"748c39be",null),ke=xe.exports;m()(xe,{VBtn:p["a"],VForm:Ee["a"],VIcon:f["a"],VTextField:le["a"]});var Se=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"loginpage pt-8"},[a("div",[a("h2",[t._v("Register")]),a("v-form",{ref:"form"},[a("div",{staticClass:"form-group"},[a("v-text-field",{attrs:{label:"First name",rules:t.nameRules,"hide-details":"auto"},model:{value:t.firstname,callback:function(e){t.firstname=e},expression:"firstname"}})],1),a("div",{staticClass:"form-group"},[a("v-text-field",{attrs:{label:"Last name",rules:t.nameRules,"hide-details":"auto"},model:{value:t.lastname,callback:function(e){t.lastname=e},expression:"lastname"}})],1),a("div",{staticClass:"form-group"},[a("v-text-field",{attrs:{label:"E-Mail",rules:t.emailRules,"hide-details":"auto"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),a("div",{staticClass:"form-group"},[a("v-text-field",{attrs:{type:"password",label:"Password","hide-details":"auto"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),a("div",{staticClass:"form-group pt-4"},[a("v-btn",{on:{click:t.register}},[t._v("Sign Up")])],1)])],1)])},$e=[],Ie={data:function(){return{firstname:"",lastname:"",email:"",password:"",emailRules:[function(t){return!!t||"Required."},function(t){return/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(t)||"E-mail must be valid"}],nameRules:[function(t){return!!t||"Required."}]}},methods:{register:function(){var t=new FormData;t.append("firstName",this.firstname),t.append("lastName",this.lastname),t.append("email",this.email),t.append("password",this.password),this.$store.dispatch("register",t)}}},Ge=Ie,Ce=(a("91de"),Object(u["a"])(Ge,Se,$e,!1,null,"8211467c",null)),Pe=Ce.exports;m()(Ce,{VBtn:p["a"],VForm:Ee["a"],VTextField:le["a"]});var Oe=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"loginpage pt-8"},[a("h1",[t._v("User")]),a("h2",[t._v("First name: "+t._s(t.user.firstName))]),a("h2",[t._v("Last name: "+t._s(t.user.lastName))]),a("h2",[t._v("E-mail: "+t._s(t.user.email))]),a("div",{staticClass:"form-group pt-4"},[a("v-btn",{on:{click:t.logout}},[t._v("Logout")])],1)])},Le=[],Ae={computed:{user:function(){return this.$store.state.user}},methods:{logout:function(){this.$store.dispatch("logout")}}},Re=Ae,je=(a("4504"),Object(u["a"])(Re,Oe,Le,!1,null,"2e9d1fa8",null)),He=je.exports;m()(je,{VBtn:p["a"]}),o["a"].use(q["a"]);var Ve=[{path:"/",name:"About",component:Q},{path:"/game",name:"Game",component:ye},{path:"/login",name:"Login",component:ke},{path:"/register",name:"Register",component:Pe},{path:"/user",name:"User",component:He}],Ne=new q["a"]({mode:"history",base:"/frontend/",routes:Ve}),Be=Ne,De=a("1157"),Me=a.n(De);o["a"].use(z["a"]);var ze=!1,Fe="https",Ue="gladiators-game.herokuapp.com",qe=ze?Fe+"://localhost:9000":Fe+"://"+Ue,Je={controller:{board:{tiles:[]},shop:{stock:[]}},event:"",alert:{show:!1,type:"success",message:""},myPlayerId:null,myHoveredGladiator:{},mySelectedGladiator:{source:"",gladiator:{position:{x:0,y:0}},shopIndex:0},myHighlightedTiles:{},token:localStorage.getItem("token")||"",user:{},status:"",isLoggedIn:!1},We=new WebSocket("wss://"+Ue+(ze?NaN:"")+"/websocket"),Ye={withCredentials:!0,headers:{"Content-Type":"application/json",Accept:"application/json"},crossdomain:!0},Ke=new z["a"].Store({state:Je,actions:{showAlert:function(t,e){Ke.commit("SET_ALERT",{show:!0,type:e.type,message:e.message}),setTimeout((function(){Ke.commit("SET_ALERT",{show:!1,type:e.type,message:e.message})}),5e3)},getJson:function(t){var e=t.commit;U.a.get(qe+"/json",Ye).then((function(t){e("SET_CONTROLLER",t.data[0])})).catch((function(t){console.log("Something went wrong")}))},endTurn:function(){We.send(JSON.stringify({commandType:"EndTurn"}))},connectPlayer:function(t,e){var a={commandType:1==e.id?"NamePlayerOne":"NamePlayerTwo",name:e.name};We.send(JSON.stringify(a))},buyGladiator:function(t,e){var a={commandType:"BuyUnit",number:this.state.mySelectedGladiator.shopIndex,position:{x:e.x,y:e.y}};We.send(JSON.stringify(a))},moveGladiator:function(t,e){var a={commandType:"Move",from:{x:this.state.mySelectedGladiator.gladiator.position.x,y:this.state.mySelectedGladiator.gladiator.position.y},to:{x:e.x,y:e.y}};We.send(JSON.stringify(a))},hightlightTiles:function(t,e){var a=t.commit;U.a.post(qe+"/gladiators/api/gladiatorSelect",{x:e.x,y:e.y}).then((function(t){a("SET_HIGHLIGHTEDTILES",t.data[1])})).catch((function(t){console.log("Something went wrong")}))},signedIn:function(t){var e=t.commit;U.a.get(qe+"/signedIn",Ye).then((function(t){e("SET_USER",t.data),e("SET_LOGGEDIN",!0)})).catch((function(t){console.log("You are not logged in")}))},login:function(t,e){var a=t.commit;U.a.post(qe+"/signIn",e,Me.a.extend(Ye,{headers:{"Content-Type":"application/x-www-form-urlencoded"}})).then((function(t){a("SET_USER",t.data),a("SET_LOGGEDIN",!0),Ke.dispatch("showAlert",{type:"success",message:"Login Successful"}),Be.push("/Game")})).catch((function(t){Ke.dispatch("showAlert",{type:"error",message:"Login Failed"})}))},logout:function(t){t.commit;U.a.get(qe+"/signOut",{withCredentials:!0}).then((function(t){Be.push("/Login")})).catch((function(t){console.log("Something went wrong")}))},register:function(t,e){t.commit;U.a.post(qe+"/signUp",e,Me.a.extend(Ye,{headers:{"Content-Type":"application/x-www-form-urlencoded"}})).then(function(){Be.push("/login"),Ke.dispatch("showAlert",{type:"success",message:"Register Successful"})}.bind(this)).catch((function(t){console.log("Something went wrong")}))},googleLogin:function(t){t.commit;U.a.get(qe+"/authenticate/google",Me.a.extend(Ye,{headers:{"Content-Type":"application/x-www-form-urlencoded"}})).then((function(t){Ke.getters.isLoggedIn&&window.location.replace("/")})).catch((function(t){console.log("Something went wrong")}))},offline:function(t){t.commit;console.log("store is set offline")}},mutations:{SET_CONTROLLER:function(t,e){t.controller=e},SET_EVENT:function(t,e){t.event=e},SET_PLAYERID:function(t,e){t.myPlayerId=e},SET_HOVEREDGLADIATOR:function(t,e){t.myHoveredGladiator=e},SET_SELECTEDGLADIATOR:function(t,e){t.mySelectedGladiator=e},SET_HIGHLIGHTEDTILES:function(t,e){t.myHighlightedTiles=e},SET_ALERT:function(t,e){t.alert=e},SET_LOGGEDIN:function(t,e){t.isLoggedIn=e},SET_USER:function(t,e){t.user=e}},getters:{boardTiles:function(t){return t.controller.board?t.controller.board.tiles:[]},selectedGladiator:function(t){return t.mySelectedGladiator},shopGladiators:function(t){return t.controller.shop?t.controller.shop.stock:[]},isLoggedIn:function(t){return t.isLoggedIn}}});We.onopen=function(){console.log("Trying to connect to Server")},We.onclose=function(){console.log("Connection Closed!")},We.onerror=function(t){console.log("Error Occured: "+t)},We.onmessage=function(t){var e=JSON.parse(t.data),a=e[0],o=e[1];switch(Ke.commit("SET_CONTROLLER",a),Ke.commit("SET_EVENT",o),Ke.commit("SET_HIGHLIGHTEDTILES",{}),Ke.commit("SET_SELECTEDGLADIATOR",{}),o.eventType){case"Connected":Ke.commit("SET_PLAYERID",o.player),console.log("Connected to the game");break;case"ErrorMessage":Ke.dispatch("showAlert",{type:"error",message:o.message})}};var Qe=Ke;Object(M["a"])("".concat("/frontend/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh."),window.location.reload(!0)},offline:function(){console.log("No internet connection found. App is running in offline mode."),Qe.dispatch("offline")},error:function(t){console.error("Error during service worker registration:",t)}});var Xe=a("1881"),Ze=a.n(Xe),ta=a("f309");o["a"].use(ta["a"]);var ea=new ta["a"]({});o["a"].config.productionTip=!1,o["a"].use(Ze.a),o["a"].prototype.$http=U.a,new o["a"]({vuetify:ea,store:Qe,router:Be,components:{App:D},render:function(t){return t(D)}}).$mount("#app")},cdc5:function(t,e,a){"use strict";a("9421")},d106:function(t,e,a){"use strict";a("f878")},d497:function(t,e,a){},d4a8:function(t,e,a){},da3d:function(t,e,a){},e262:function(t,e,a){"use strict";a("427f")},ec15:function(t,e,a){"use strict";a("64e7")},f400:function(t,e,a){},f878:function(t,e,a){}});
//# sourceMappingURL=app.58d15f86.js.map