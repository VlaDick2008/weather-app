(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{12:function(e,s,t){},13:function(e,s,t){"use strict";t.r(s);var a=t(1),c=t.n(a),r=t(4),o=t.n(r),n=t(2),i=t(5),d=t(0);function l(e){var s=e.updateDegreeIndex,t=e.items,a=c.a.useRef(),r=c.a.useState(0),o=Object(n.a)(r,2),i=o[0],l=o[1];return Object(d.jsxs)("ul",{ref:a,className:"degree-block",children:[Object(d.jsx)("li",{className:"degree-ico",children:"\xba"}),t.map((function(e,t){return Object(d.jsx)("li",{onClick:function(){return function(e){l(e),s(e)}(t)},className:i===t?"degree-type active":"degree-type",children:e},"".concat(e.type,"_").concat(t))}))]})}var m=t.p+"static/media/location.fcd4f21d.svg";var u=function(e){var s=e.updateCityData,t=e.cici,a=e.updatePositionData,r=c.a.useRef(),o=c.a.useRef(),i=c.a.useState(t),l=Object(n.a)(i,2),u=l[0],g=l[1],f=c.a.useState({}),b=Object(n.a)(f,2),y=b[0],h=b[1],j=c.a.useState(!1),v=Object(n.a)(j,2),I=v[0],p=v[1],w=function(e){a(e),h(e)};return c.a.useLayoutEffect((function(){"undefined"!==typeof y.coords&&fetch("https://nominatim.openstreetmap.org/reverse?lat=".concat(y.coords.latitude,"&lon=").concat(y.coords.longitude,"&format=json&addressdetails=[0|1]")).then((function(e){return e.json()})).then((function(e){g(e.address.city)}))}),[y.coords]),c.a.useEffect((function(){!0===I?r.current.removeAttribute("disabled"):!1===I&&r.current.setAttribute("disabled","disabled")}),[I]),Object(d.jsxs)("div",{className:"sity-block",children:[Object(d.jsx)("input",{value:u,placeholder:"\u0412\u0430\u0448 \u0433\u043e\u0440\u043e\u0434 \u0437\u0434\u0435\u0441\u044c...",type:"text",onChange:function(e){g(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&(s(r.current.value),p(!I))},ref:r,disabled:!0,className:"sity-name",itemID:"sity-name"}),Object(d.jsxs)("div",{className:"change-sity-block",children:[Object(d.jsx)("div",{ref:o,onClick:function(){p(!I)},className:"change-sity",children:"\u0421\u043c\u0435\u043d\u0438\u0442\u044c \u0433\u043e\u0440\u043e\u0434"}),Object(d.jsx)("img",{className:"position-logo",src:m,alt:""}),Object(d.jsx)("div",{onClick:function(){navigator.geolocation.getCurrentPosition(w)},className:"your-position",children:"\u041c\u043e\u0451 \u043c\u0435\u0441\u0442\u043e\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435"})]})]})},g=t.p+"static/media/sun.8b3d35b0.svg",f=t.p+"static/media/cloudy.1405bd44.svg",b=t.p+"static/media/clouds.2fc687ea.svg",y=t.p+"static/media/partly_cloudy.56d5385e.svg",h=t.p+"static/media/rain.123e0eeb.svg",j=t.p+"static/media/strom.4846298d.svg",v=t.p+"static/media/snow.3ba6fe01.svg",I=t.p+"static/media/fog.2b3d240d.svg",p=t.p+"static/media/drizzle.cf2b1600.svg";function w(e){var s=e.degreeIndex,t=e.weatherInfo,a=c.a.useRef(),r=c.a.useState(""),o=Object(n.a)(r,2),i=o[0],l=o[1],m=c.a.useState(""),u=Object(n.a)(m,2),w=u[0],O=u[1];return c.a.useLayoutEffect((function(){if("undefined"!==typeof t.weather)switch(t.weather[0].id){case 200:case 201:case 202:case 210:case 211:case 212:case 221:case 230:case 231:case 232:O(j),document.querySelector("body").classList.add("storm"),a.current.classList.add("stormImg"),a.current.classList.remove("cloudyImg","fogImg","snowImg","rainImg","drizzleImg"),document.querySelector("body").classList.remove("sunny","cloudy","rain","storm","fog","drizzle");break;case 300:case 301:case 302:case 310:case 311:case 312:case 313:case 314:case 321:case 500:case 501:case 502:O(p),document.querySelector("body").classList.add("drizzle"),a.current.classList.add("drizzleImg"),a.current.classList.remove("cloudyImg","fogImg","snowImg","rainImg","stormImg"),document.querySelector("body").classList.remove("sunny","cloudy","rain","storm","fog");break;case 511:case 600:case 601:case 602:case 611:case 612:case 613:case 615:case 616:case 620:case 621:case 622:O(v),document.querySelector("body").classList.add("snow"),a.current.classList.add("snowImg"),a.current.classList.remove("cloudyImg","fogImg","rainImg","drizzleImg","stormImg"),document.querySelector("body").classList.remove("sunny","cloudy","rain","storm","fog","drizzle");break;case 503:case 504:case 520:case 521:case 522:case 531:O(h),document.querySelector("body").classList.add("rain"),a.current.classList.add("rainImg"),a.current.classList.remove("cloudyImg","fogImg","snowImg","drizzleImg","stormImg"),document.querySelector("body").classList.remove("sunny","cloudy","storm","fog","drizzle");break;case 701:case 711:case 721:case 731:case 741:case 751:case 761:case 762:case 771:case 781:O(I),document.querySelector("body").classList.add("fog"),a.current.classList.add("fogImg"),a.current.classList.remove("cloudyImg","snowImg","rainImg","drizzleImg","stormImg"),document.querySelector("body").classList.remove("sunny","cloudy","rain","storm","snow","drizzle");break;case 800:O(g),document.querySelector("body").classList.add("sunny"),a.current.classList.add("sunnyImg"),a.current.classList.remove("cloudyImg","fogImg","snowImg","rainImg","drizzleImg","stormImg"),document.querySelector("body").classList.remove("snow","cloudy","rain","storm","fog","drizzle");break;case 801:O(y),document.querySelector("body").classList.add("cloudy"),a.current.classList.add("cloudyImg"),a.current.classList.remove("fogImg","snowImg","rainImg","drizzleImg","stormImg"),document.querySelector("body").classList.remove("sunny","snow","rain","storm","fog","drizzle");break;case 802:O(f),document.querySelector("body").classList.add("cloudy"),a.current.classList.add("cloudyImg"),a.current.classList.remove("fogImg","snowImg","rainImg","drizzleImg","stormImg"),document.querySelector("body").classList.remove("sunny","snow","rain","storm","fog","drizzle");break;case 803:case 804:O(b),document.querySelector("body").classList.add("cloudy"),a.current.classList.add("cloudyImg"),a.current.classList.remove("fogImg","snowImg","rainImg","drizzleImg","stormImg"),document.querySelector("body").classList.remove("sunny","snow","rain","storm","fog","drizzle");break;default:document.querySelector("body").classList.add("sunny"),a.current.classList.add("sunnyImg"),a.current.classList.remove("cloudyImg","fogImg","snowImg","rainImg","drizzleImg","stormImg"),document.querySelector("body").classList.remove("snow","rain","storm","fog","drizzle"),O(g)}"undefined"!==typeof t.weather&&(l(t.main.temp),1===s?l(1.8*t.main.temp+32):0===s&&l(t.main.temp))}),[l,s,t]),Object(d.jsx)("div",{children:"undefined"!==typeof t.weather?Object(d.jsxs)("div",{className:"weather-block-wrapper",children:[Object(d.jsxs)("div",{className:"weather-block",children:[Object(d.jsx)("div",{className:"weather-ico",children:Object(d.jsx)("img",{ref:a,src:w,alt:"weather_ico"})}),Object(d.jsxs)("div",{className:"weather-number",children:[Math.floor(i),"\xba"]})]}),Object(d.jsx)("div",{className:"weather-description",children:t.weather[0].description}),Object(d.jsxs)("div",{className:"weather-feels-like",children:["\u041e\u0449\u0443\u0449\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u043a ",Math.floor(t.main.feels_like),"\xba"]})]}):""})}function O(e){var s=e.weatherInfo;if("undefined"!=typeof s.weather)var t=["\u0441\u0435\u0432\u0435\u0440\u043d\u044b\u0439","\u0441\u0435\u0432\u0435\u0440\u043d\u044b\u0439, \u0441\u0435\u0432\u0435\u0440\u043d\u043e-\u0432\u043e\u0441\u0442\u043e\u0447\u043d\u044b\u0439","\u0441\u0435\u0432\u0435\u0440\u043e-\u0432\u043e\u0441\u0442\u043e\u0447\u043d\u044b\u0439","\u0432\u043e\u0441\u0442\u043e\u0447\u043d\u044b\u0439, \u0441\u0435\u0432\u0435\u0440\u043e-\u0432\u043e\u0441\u0442\u043e\u0447\u043d\u044b\u0439","\u0432\u043e\u0441\u0442\u043e\u0447\u043d\u044b\u0439","\u0432\u043e\u0441\u0442\u043e\u0447\u043d\u044b\u0439, \u044e\u0433\u043e-\u0432\u043e\u0441\u0442\u043e\u0447\u043d\u044b\u0439","\u044e\u0436\u043d\u044b\u0439, \u0432\u043e\u0441\u0442\u043e\u0447\u043d\u044b\u0439","\u044e\u0436\u043d\u044b\u0439, \u044e\u0433\u043e-\u0432\u043e\u0441\u0442\u043e\u0447\u043d\u044b\u0439","\u044e\u0436\u043d\u044b\u0439","\u044e\u0436\u043d\u044b\u0439 \u044e\u0433\u043e-\u0437\u0430\u043f\u0430\u0434\u043d\u044b\u0439","\u044e\u0433\u043e-\u0437\u0430\u043f\u0430\u0434\u043d\u044b\u0439","\u0437\u0430\u043f\u0430\u0434\u043d\u044b\u0439, \u044e\u0433\u043e-\u0437\u0430\u043f\u0430\u0434\u043d\u044b\u0439","\u0437\u0430\u043f\u0430\u0434\u043d\u044b\u0439","\u0437\u0430\u043f\u0430\u0434\u043d\u044b\u0439, \u044e\u0433\u043e-\u0437\u0430\u043f\u0430\u0434\u043d\u044b\u0439","\u0441\u0435\u0432\u0435\u0440\u043d\u044b\u0439, \u0437\u0430\u043f\u0430\u0434\u043d\u044b\u0439","\u0441\u0435\u0432\u0435\u0440\u043d\u044b\u0439, \u0441\u0435\u0432\u0435\u0440\u043e-\u0437\u0430\u043f\u0430\u0434\u043d\u044b\u0439"],a=Math.floor(s.wind.deg/22.5+.5)%16;return Object(d.jsx)("div",{className:"weather-details",children:"undefined"!=typeof s.weather?Object(d.jsxs)("div",{className:"weather-details",children:[Object(d.jsxs)("div",{className:"weather-details-block",children:[Object(d.jsx)("div",{className:"weather-details-title",children:"\u0412\u0435\u0442\u0435\u0440"}),Object(d.jsxs)("div",{className:"weather-details-text",children:[s.wind.speed," \u043c/c, ",t[a]]})]}),Object(d.jsxs)("div",{className:"weather-details-block",children:[Object(d.jsx)("div",{className:"weather-details-title",children:"\u0414\u0430\u0432\u043b\u0435\u043d\u0438\u0435"}),Object(d.jsxs)("div",{className:"weather-details-text",children:[s.main.pressure," \u043c\u043c \u0440\u0442. \u0441\u0442."]})]}),Object(d.jsxs)("div",{className:"weather-details-block",children:[Object(d.jsx)("div",{className:"weather-details-title",children:"\u0412\u043b\u0430\u0436\u043d\u043e\u0441\u0442\u044c"}),Object(d.jsxs)("div",{className:"weather-details-text",children:[s.main.humidity,"%"]})]}),Object(d.jsxs)("div",{className:"weather-details-block",children:[Object(d.jsx)("div",{className:"weather-details-title",children:"\u0412\u0435\u0440\u043e\u044f\u0442\u043d\u043e\u0441\u0442\u044c \u0434\u043e\u0436\u0434\u044f"}),Object(d.jsxs)("div",{className:"weather-details-text",children:[Math.floor(101*Math.random()+1),"%"]})]})]}):""})}var x=function(){var e=c.a.useState(""),s=Object(n.a)(e,2),t=s[0],a=s[1],r=c.a.useState("\u041e\u043c\u0441\u043a"),o=Object(n.a)(r,2),m=o[0],g=o[1],f=c.a.useState(""),b=Object(n.a)(f,2),y=b[0],h=b[1],j=c.a.useState(""),v=Object(n.a)(j,2),I=v[0],p=v[1],x=Object(i.transliterate)(m);return c.a.useLayoutEffect((function(){"undefined"!==typeof y.coords&&fetch("https://nominatim.openstreetmap.org/reverse?lat=".concat(y.coords.latitude,"&lon=").concat(y.coords.longitude,"&format=json&addressdetails=[0|1]")).then((function(e){return e.json()})).then((function(e){g(e.address.city)}))}),[y.coords]),c.a.useEffect((function(){fetch("".concat("https://api.openweathermap.org/data/2.5/","weather?q=").concat(x,"&appid=").concat("12cefab9977763ddc5f50d7e363a40f8","&lang=ru&units=metric")).then((function(e){return e.json()})).then((function(e){a(e)}))}),[x]),Object(d.jsxs)("div",{className:"main-wrapper",children:[Object(d.jsxs)("header",{children:[Object(d.jsx)(u,{updatePositionData:function(e){h(e)},cici:m,updateCityData:function(e){g(e)},cityChange:g}),Object(d.jsx)(l,{updateDegreeIndex:function(e){p(e)},items:["C","F"]})]}),Object(d.jsx)(w,{degreeIndex:I,weatherInfo:t}),Object(d.jsx)(O,{weatherInfo:t})]})};t(12);o.a.render(Object(d.jsx)(x,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.bacb0e67.chunk.js.map