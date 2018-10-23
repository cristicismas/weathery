(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{172:function(e,t,a){e.exports=a(459)},177:function(e,t,a){},179:function(e,t,a){},199:function(e,t,a){},201:function(e,t,a){},203:function(e,t,a){},205:function(e,t,a){},453:function(e,t,a){},455:function(e,t,a){},457:function(e,t,a){},459:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(71),c=a.n(o),i=(a(177),a(166)),l=a(4),s=a(5),h=a(7),u=a(6),p=a(8),m=a(9),d=function(e){var t={svg:{display:"inline-block",verticalAlign:"middle"},path:{fill:e.color}};return r.a.createElement("svg",{style:t.svg,width:"".concat(e.size,"px"),height:"".concat(e.size,"px"),viewBox:"0 0 1024 1024",className:"svgIcon"},r.a.createElement("path",{style:t.path,d:e.icon}))};d.defaultProps={size:16};var g=d,f=(a(179),"M337.509 305.372h-17.501l-6.571-5.486c20.791-25.232 33.922-57.054 33.922-93.257C347.358 127.632 283.896 64 205.135 64 127.452 64 64 127.632 64 206.629s63.452 142.628 142.225 142.628c35.011 0 67.831-13.167 92.991-34.008l6.561 5.487v17.551L415.18 448 448 415.086 337.509 305.372zm-131.284 0c-54.702 0-98.463-43.887-98.463-98.743 0-54.858 43.761-98.742 98.463-98.742 54.7 0 98.462 43.884 98.462 98.742 0 54.856-43.762 98.743-98.462 98.743z"),v=a(167),b=a.n(v);function y(e){return new Promise(function(t,a){var n,r,o;(n="get",r="forecast_weather/".concat(e),new Promise(function(e,t){return b.a[n.toLowerCase()]("https://weathery-server.herokuapp.com/api/".concat(r),o).then(function(t){return e(t.data)}).catch(function(e){return t(e.response.data.error)})})).then(function(e){t(e)}).catch(function(e){a(e.message)})})}var O=window.google;function w(e,t){return new Promise(function(a,n){(new O.maps.Geocoder).geocode({address:e},function(e,n){if(n===O.maps.GeocoderStatus.OK){var r=e[0].geometry.location.lat(),o=e[0].geometry.location.lng();return t.changeGlobalState("error",null),a({newLat:r,newLng:o})}"ZERO_RESULTS"===n?t.changeGlobalState("error",null):t.changeGlobalState("error",n)})})}var j=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).onSubmit=a.onSubmit.bind(Object(m.a)(Object(m.a)(a))),a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"onSearchClick",value:function(e){var t=window.matchMedia("(min-width: 800px)");"400px"!==e.target.style.width&&t.matches&&(e.target.style.width="400px",e.target.style.cursor="text",e.target.style.paddingLeft="25px",e.target.style.paddingRight="50px",document.getElementById("search-btn").style.zIndex=10)}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault();var a=document.getElementById("search-input");a.value.trim()?(y(a.value).then(function(e){w(Object.values(e[0]).join(", "),t.props).then(function(a){t.props.changeGlobalState("forecastWeather",e),t.props.changeGlobalState("lat",a.newLat),t.props.changeGlobalState("lng",a.newLng),t.props.changeGlobalState("error","")})}).catch(function(e){return t.props.changeGlobalState("error",e)}),a.value=""):this.props.changeGlobalState("error","Please write something in the search bar before attempting to search.")}},{key:"render",value:function(){return r.a.createElement("section",{id:"header"},r.a.createElement("form",{id:"search-form"},r.a.createElement("h1",{id:"header-title"},"Weathery"),r.a.createElement("div",{className:"container"},r.a.createElement("input",{id:"search-input",type:"text",onClick:this.onSearchClick,placeholder:"City name, zip / postal / postcode or IP address."}),r.a.createElement("input",{type:"submit",id:"search-btn",value:"",onClick:this.onSubmit}),r.a.createElement(g,{icon:f,color:"#333",size:"40"}))))}}]),t}(n.Component),E=(a(199),function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.error;return e?r.a.createElement("div",{className:"error-container"},r.a.createElement("p",{className:"error"},e)):null}}]),t}(n.Component)),k=(a(201),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).onSwitchClick=a.onSwitchClick.bind(Object(m.a)(Object(m.a)(a))),a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.isToggled,t=document.getElementById("toggle-container");e?(t.style.clipPath="inset(0 50% 0 0)",t.style.backgroundColor="dodgerblue"):(t.style.clipPath="inset(0 0 0 50%)",t.style.backgroundColor="orange")}},{key:"onSwitchClick",value:function(){var e=this.props.isToggled,t=document.getElementById("toggle-container");this.props.changeToggledValue(!e),e?(t.style.clipPath="inset(0 0 0 50%)",t.style.backgroundColor="orange"):(t.style.clipPath="inset(0 50% 0 0)",t.style.backgroundColor="dodgerblue")}},{key:"render",value:function(){return r.a.createElement("div",{id:"switch-container",onClick:this.onSwitchClick},r.a.createElement("div",{className:"inner-container"},r.a.createElement("div",{className:"toggle"},r.a.createElement("p",null,"Imperial")),r.a.createElement("div",{className:"toggle"},r.a.createElement("p",null,"Metric"))),r.a.createElement("div",{className:"inner-container",id:"toggle-container"},r.a.createElement("div",{className:"toggle"},r.a.createElement("p",null,"Imperial")),r.a.createElement("div",{className:"toggle"},r.a.createElement("p",null,"Metric"))))}}]),t}(n.Component)),S=(a(203),function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.day,a=e.maxTemp,n=e.minTemp,o=e.wind,c=e.precip,i=e.humidity,l=e.condition,s=e.conditionIconUrl;return r.a.createElement("div",{className:"card"},r.a.createElement("h3",{className:"day-name"},t),r.a.createElement("img",{className:"card-img",src:s,alt:l}),r.a.createElement("h3",{className:"temp-range"},n,"\xb0 / ",a,"\xb0"),r.a.createElement("div",{className:"weather-info"},r.a.createElement("div",{className:"wind"},r.a.createElement("span",null,"Wind:")," ",r.a.createElement("span",{className:"weather-value"},o)),r.a.createElement("div",{className:"precip"},r.a.createElement("span",null,"Precipitations:")," ",r.a.createElement("span",{className:"weather-value"},c)),r.a.createElement("div",{className:"hum"},r.a.createElement("span",null,"Humidity:")," ",r.a.createElement("span",{className:"weather-value"},i))))}}]),t}(n.Component));a(205);function C(e,t){return new Date(e).toLocaleDateString(t,{weekday:"long"})}var W=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).state={days:[]},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(e){var t=this.props.formattedWeather,a=[];if(e.formattedWeather!==t){for(var n=0;n<t.length;n++){var r=C(t[n].date),o=t[n].mintemp,c=t[n].maxtemp,i=t[n].wind,l=t[n].precip,s=t[n].humidity,h=t[n].condition,u="https:"+t[n].condition_icon.replace(/64/g,"128");a.push({dayName:r,maxTemp:c,minTemp:o,wind:i,precip:l,humidity:s,condition:h,conditionIconUrl:u})}this.setState({days:a})}}},{key:"render",value:function(){var e=this.state.days.map(function(e){return r.a.createElement(S,{key:e.dayName,day:e.dayName,maxTemp:e.maxTemp,minTemp:e.minTemp,wind:e.wind,precip:e.precip,humidity:e.humidity,condition:e.condition,conditionIconUrl:e.conditionIconUrl})});return r.a.createElement("section",{id:"weather-cards"},e)}}]),t}(n.Component),N=a(168),G=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).state={days:[],temperatures:[]},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(e){var t=this.props.formattedWeather,a=[],n=[];if(e.formattedWeather!==t){for(var r=0;r<t.length;r++){var o=C(t[r].date),c=t[r].avgtemp;a.push(o),n.push(c)}this.setState({days:a,temperatures:n})}}},{key:"render",value:function(){var e=this.state,t={labels:e.days,datasets:[{label:"Temperature",backgroundColor:"rgba(0, 0, 0, 0)",borderColor:"#227df4",borderWidth:2,data:e.temperatures}]};return r.a.createElement("div",{className:"chart-container"},r.a.createElement(N.a,{data:t,options:{hover:{mode:null},elements:{line:{tension:0}}}}))}}]),t}(n.Component),L=a(50),I={LAT:48.85341,LNG:2.3488,LOCATION:"Paris"},T=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).onMapClick=a.onMapClick.bind(Object(m.a)(Object(m.a)(a))),a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;w(I.LOCATION,this.props).then(function(t){e.props.changeGlobalState("lat",t.newLat),e.props.changeGlobalState("lng",t.newLng)})}},{key:"componentDidUpdate",value:function(e){var t=this,a=this.props.forecastWeather,n=e.forecastWeather.length?Object.values(e.forecastWeather[0]).join(", "):I.LOCATION,r=a.length?Object.values(a[0]).join(", "):I.LOCATION;n!==r&&w(r,this.props).then(function(e){t.props.changeGlobalState("lat",e.newLat),t.props.changeGlobalState("lng",e.newLng),t.forceUpdate()})}},{key:"shouldComponentUpdate",value:function(e){var t=this.props.forecastWeather;return(t.length?t[0].city:I.LOCATION)!==(e.forecastWeather.length?e.forecastWeather[0].city:I.LOCATION)}},{key:"onMapClick",value:function(e){var t=this,a=e.latLng.lat(),n=e.latLng.lng();y("".concat(a,",").concat(n)).then(function(e){w(Object.values(e[0]).join(", "),t.props).then(function(a){t.props.changeGlobalState("forecastWeather",e),t.props.changeGlobalState("lat",a.newLat),t.props.changeGlobalState("lng",a.newLng),t.props.changeGlobalState("error",""),t.forceUpdate()})}).catch(function(e){return t.props.changeGlobalState("error",e)})}},{key:"render",value:function(){var e=this,t=this.props,a=t.lat,n=t.lng,o=Object(L.withScriptjs)(Object(L.withGoogleMap)(function(t){return r.a.createElement(L.GoogleMap,{defaultZoom:5,defaultCenter:{lat:a,lng:n},onClick:e.onMapClick},r.a.createElement(L.Marker,{position:{lat:a,lng:n}}))}));return r.a.createElement("div",{id:"map"},r.a.createElement(o,{googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyCYGAkeDkpAFR4l3bZ9x3BdTwXGlJrHQcI",loadingElement:r.a.createElement("div",{style:{width:"100%"}}),containerElement:r.a.createElement("div",{style:{height:"100%"}}),mapElement:r.a.createElement("div",{style:{height:"100%"}})}))}}]),t}(n.Component),x=(a(453),function(e){function t(e){var a;Object(l.a)(this,t),a=Object(h.a)(this,Object(u.a)(t).call(this,e));var n=!0;return"false"===localStorage.getItem("isMetric")&&(n=!1),a.state={formattedWeather:[],isMetric:n},a.formatWeather=a.formatWeather.bind(Object(m.a)(Object(m.a)(a))),a.changeSystem=a.changeSystem.bind(Object(m.a)(Object(m.a)(a))),a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.formatWeather()}},{key:"componentDidUpdate",value:function(e,t){var a=e.forecastWeather.length!==this.props.forecastWeather.length,n=t.isMetric!==this.state.isMetric,r=!!e.forecastWeather.length&&e.forecastWeather[0].city!==this.props.forecastWeather[0].city;(a||n||r)&&this.formatWeather()}},{key:"formatWeather",value:function(){for(var e=this.state.isMetric,t=this.props.forecastWeather,a=[],n=1;n<t.length;n++){var r=t[n];e?a.push({date:r.date,mintemp:r.mintemp_c+" C",maxtemp:r.maxtemp_c+" C",avgtemp:r.avgtemp_c,wind:r.wind_kph+" kph",precip:r.precip_mm+" mm",humidity:r.avghumidity+" %",condition:r.condition,condition_icon:r.condition_icon}):a.push({date:r.date,mintemp:r.mintemp_f+" F",maxtemp:r.maxtemp_f+" F",avgtemp:r.avgtemp_f,wind:r.wind_mph+" mph",precip:r.precip_in+" in",humidity:r.avghumidity+" %",condition:r.condition,condition_icon:r.condition_icon})}this.setState({formattedWeather:a})}},{key:"changeSystem",value:function(e){localStorage.setItem("isMetric",e),this.setState({isMetric:e})}},{key:"render",value:function(){var e=this.state,t=e.isMetric,a=e.formattedWeather,n=this.props,o=n.error,c=n.forecastWeather,i=c[0],l="";return i&&(i.city&&(l+="".concat(i.city,", ")),i.region&&(l+="".concat(i.region,", ")),i.country&&(l+="".concat(i.country))),r.a.createElement("section",{id:"main"},r.a.createElement(E,{error:o}),r.a.createElement(k,{isToggled:t,changeToggledValue:this.changeSystem}),r.a.createElement("h2",{className:"location"},l),r.a.createElement(W,{formattedWeather:a}),r.a.createElement("div",{className:"flex-container"},r.a.createElement(G,{formattedWeather:a}),r.a.createElement(T,Object.assign({changeGlobalState:this.props.changeGlobalState,forecastWeather:c},this.props))))}}]),t}(n.Component)),M=(a(455),function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{id:"footer"},r.a.createElement("p",null,"Weather data from ",r.a.createElement("a",{href:"https://www.apixu.com/",target:"_blank",rel:"noopener noreferrer"},"APIXU")),r.a.createElement("p",null,"Made by ",r.a.createElement("a",{href:"https://cristicismas.github.io/",target:"_blank",rel:"noopener noreferrer"},"Cristi Cismas")))}}]),t}(n.Component)),U=(a(457),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).state={error:"",userIp:"",forecastWeather:[],lat:I.LAT,lng:I.LNG},a.changeGlobalState=a.changeGlobalState.bind(Object(m.a)(Object(m.a)(a))),a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=I.LOCATION,a=localStorage.getItem("userIp");a&&/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/.test(a)&&(t=a,this.setState({userIp:a})),y(t).then(function(t){w(Object.values(t[0]).join(", "),e).then(function(a){e.setState({forecastWeather:t,lat:a.newLat,lng:a.newLng,error:""})})}).catch(function(t){e.setState({error:t})})}},{key:"componentDidUpdate",value:function(e,t){var a=this.state.forecastWeather;(t.forecastWeather.length?Object.values(t.forecastWeather[0]).join(", "):I.LOCATION)!==(a.length?Object.values(a[0]).join(", "):I.LOCATION)&&this.forceUpdate()}},{key:"changeGlobalState",value:function(e,t){this.setState(Object(i.a)({},e,t))}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(j,{changeGlobalState:this.changeGlobalState}),r.a.createElement(x,Object.assign({changeGlobalState:this.changeGlobalState},this.state)),r.a.createElement(M,null))}}]),t}(n.Component)),_=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function A(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available; please refresh."),t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t.onSuccess&&t.onSuccess(e)))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(r.a.createElement(U,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/weathery",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/weathery","/service-worker.js");_?(function(e,t){fetch(e).then(function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):A(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):A(t,e)})}}()}},[[172,2,1]]]);
//# sourceMappingURL=main.54e3cc80.chunk.js.map