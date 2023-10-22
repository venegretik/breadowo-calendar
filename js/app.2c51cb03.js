(function(){"use strict";var e={9988:function(e,a,n){var t=n(9963),r=n(6252);function o(e,a,n,t,o,i){const d=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(d)])}var i={name:"App"},d=n(3744);const l=(0,d.Z)(i,[["render",o]]);var u=l,s=n(2201),c=n(3577);const h={class:"container"},p=(0,r._)("h1",null,"Bredowo",-1),f={class:"today__birthday"},y={class:"swiper__calendar"},v={ref:"prev",class:"left__arrow"},w=(0,r._)("img",{src:"/img/arrow.png",alt:""},null,-1),m=[w],_={class:"title__mounth"},g={class:"table"},b={ref:"next",class:"right__arrow"},D=(0,r._)("img",{src:"/img/arrow.png",alt:""},null,-1),C=[D];function x(e,a,n,t,o,i){const d=(0,r.up)("swiper-slide"),l=(0,r.up)("Swiper");return(0,r.wg)(),(0,r.iD)("div",h,[p,(0,r._)("div",f,[(0,r._)("p",null,"События сегодня: "+(0,c.zw)(t.todayDay[0]?.text?t.todayDay[0]?.text:"Ничего интересного :("),1)]),(0,r._)("div",y,[(0,r._)("div",v,m,512),(0,r.Wm)(l,{ref:"swiper",initialSlide:t.dateNow[1]-1,modules:t.modules,navigation:{prevEl:t.prev,nextEl:t.next},"slides-per-view":1,"space-between":50},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.arrayCalendar,((e,a)=>((0,r.wg)(),(0,r.j4)(d,{key:e},{default:(0,r.w5)((()=>[(0,r._)("h2",_,(0,c.zw)(o.mounthCalendar[a].nameMounth),1),(0,r._)("div",g,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e,(e=>((0,r.wg)(),(0,r.iD)("div",{class:(0,c.C_)(["item",{active__item:e.activeDay}]),key:e},[(0,r._)("p",null,(0,c.zw)(e.day),1)],2)))),128))])])),_:2},1024)))),128))])),_:1},8,["initialSlide","modules","navigation"]),(0,r._)("div",b,C,512)])])}n(7658);var M=n(7552),O=n(8918),j=n(2262),k={data(){return{arrayCalendar:[],mounthCalendar:[{nameMounth:"Январь",day:31},{nameMounth:"Февраль",day:28},{nameMounth:"Март",day:31},{nameMounth:"Апрель",day:30},{nameMounth:"Май",day:31},{nameMounth:"Июнь",day:30},{nameMounth:"Июль",day:31},{nameMounth:"Август",day:31},{nameMounth:"Сентябрь",day:30},{nameMounth:"Октябрь",day:31},{nameMounth:"Ноябрь",day:30},{nameMounth:"Декабрь",day:31}]}},methods:{addedDaysToCalendar(e,a){for(let n=1;n<=e;n++){let e=!1;this.activeDays.forEach((t=>{n+"."+(a+1)==t.date&&(this.arrayCalendar[a].push({day:n,activeDay:!0,text:t.text}),e=!0)})),e||this.arrayCalendar[a].push({day:n,activeDay:!1})}},addedMountToCalendar(){this.mounthCalendar.forEach(((e,a)=>{this.arrayCalendar[a]=new Array,this.addedDaysToCalendar(e.day,a)}))}},mounted(){this.addedMountToCalendar()},components:{Swiper:M.tq,SwiperSlide:M.o5},setup(){const e=(new Date).toLocaleDateString().split("."),a=(0,j.iH)(null),n=(0,j.iH)(null);let t=[{text:"День рождения Дмитрия Кицуне",date:"20.10"}];t.push({text:"",date:e[0]+"."+e[1]});let r=t.filter((a=>a.date==e[0]+"."+e[1]));return{modules:[O.W_],prev:a,next:n,dateNow:e,activeDays:t,todayDay:r}}};const S=(0,d.Z)(k,[["render",x]]);var T=S;const E=[{path:"/breadowo-calendar/",name:"CalendarBreadowo",component:T}],H=(0,s.p7)({routes:E,history:(0,s.PO)()});var z=H;const P=(0,t.ri)(u);P.use(z).mount("#app")}},a={};function n(t){var r=a[t];if(void 0!==r)return r.exports;var o=a[t]={exports:{}};return e[t].call(o.exports,o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(a,t,r,o){if(!t){var i=1/0;for(s=0;s<e.length;s++){t=e[s][0],r=e[s][1],o=e[s][2];for(var d=!0,l=0;l<t.length;l++)(!1&o||i>=o)&&Object.keys(n.O).every((function(e){return n.O[e](t[l])}))?t.splice(l--,1):(d=!1,o<i&&(i=o));if(d){e.splice(s--,1);var u=r();void 0!==u&&(a=u)}}return a}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[t,r,o]}}(),function(){n.d=function(e,a){for(var t in a)n.o(a,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){var e={143:0};n.O.j=function(a){return 0===e[a]};var a=function(a,t){var r,o,i=t[0],d=t[1],l=t[2],u=0;if(i.some((function(a){return 0!==e[a]}))){for(r in d)n.o(d,r)&&(n.m[r]=d[r]);if(l)var s=l(n)}for(a&&a(t);u<i.length;u++)o=i[u],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(s)},t=self["webpackChunkbreadowo_calendar"]=self["webpackChunkbreadowo_calendar"]||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))}();var t=n.O(void 0,[998],(function(){return n(9988)}));t=n.O(t)})();
//# sourceMappingURL=app.2c51cb03.js.map