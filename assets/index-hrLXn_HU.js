var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,r=(t,n,i)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[n]=i,o=(e,t,n)=>(r(e,"symbol"!=typeof t?t+"":t,n),n);import{B as l,a as c,r as h,j as p,A as d,b as u,C as f,d as y,W as m,e as g,S as v,f as b,R as w,g as x,h as k,i as C,k as I,l as N,E as T,m as M,n as z}from"./index-QNUewpLg.js";import{P as S}from"./index-X4loPUTs.js";var j="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function E(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var P,D={exports:{}};P=D,function(e,t,n){if("undefined"!=typeof window){var i,s,a=0,r=e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.msRequestAnimationFrame||function(e){var t=+new Date,n=Math.max(1e3/60,1e3/60-(t-a));return a=t+n,setTimeout(e,n)},o=e.cancelAnimationFrame||e.webkitCancelAnimationFrame||e.webkitCancelRequestAnimationFrame||e.mozCancelRequestAnimationFrame||e.msCancelRequestAnimationFrame||clearTimeout,l=e.document,c=l.createElement("div").style,h=function(){for(var e,t="-webkit- -moz- -o- -ms-".split(" ");e=t.shift();)if(D(e+"transform")in c)return e;return""}(),p=R("opacity"),d=R("transform"),u=R("perspective"),f=R("transform-style"),y=R("transform-origin"),m=R("backface-visibility"),g=f&&(c[f]="preserve-3d","preserve-3d"==c[f]),v=Object.prototype.toString,b=[].slice,w={},x={},k={click:4,mousewheel:5,dommousescroll:5,keydown:6},C={2:"touch",3:"pen",4:"mouse",pen:"pen"},I=[],N=[];i={},s={start:1,down:1,move:2,end:3,up:3,cancel:3},A("mouse touch pointer MSPointer-".split(" "),(function(e){var t=/pointer/i.test(e)?"pointer":e;i[t]=i[t]||{},C[t]=t,A(s,(function(n,s){var a=D(e+n);i[t][a]=s,x[a.toLowerCase()]=t,k[a.toLowerCase()]=s,1==s?I.push(a):N.push(a)}))}));var T={touch:{},pointer:{},mouse:{}},M={linear:function(e,t,n,i){return n*e/i+t},ease:function(e,t,n,i){return-n*((e=e/i-1)*e*e*e-1)+t},"ease-in":function(e,t,n,i){return n*(e/=i)*e*e+t},"ease-out":function(e,t,n,i){return n*((e=e/i-1)*e*e+1)+t},"ease-in-out":function(e,t,n,i){return(e/=i/2)<1?n/2*e*e*e+t:n/2*((e-=2)*e*e+2)+t},bounce:function(e,t,n,i){return(e/=i)<1/2.75?n*(7.5625*e*e)+t:e<2/2.75?n*(7.5625*(e-=1.5/2.75)*e+.75)+t:e<2.5/2.75?n*(7.5625*(e-=2.25/2.75)*e+.9375)+t:n*(7.5625*(e-=2.625/2.75)*e+.984375)+t}},z={fade:function(e,t,n,i){p?(e.style.opacity=1-Math.abs(t),n&&(n.style.opacity=Math.abs(t))):(e.style.filter="alpha(opacity="+100*(1-Math.abs(t))+")",n&&(n.style.filter="alpha(opacity="+100*Math.abs(t)+")"))}},S=!1;try{var j=Object.defineProperty({},"passive",{get:function(){S=!0}});window.addEventListener("testPassive",null,j)}catch(W){}A("Boolean Number String Function Array Date RegExp Object Error".split(" "),(function(e){w["[object "+e+"]"]=e.toLowerCase()})),A("X Y ".split(" "),(function(e){var t={X:"left",Y:"top"},n=u?" translateZ(0)":"";z["scroll"+e]=function(i,s,a,r){var o=e||["X","Y"][this.direction];d?i.style[d]="translate"+o+"("+100*s+"%)"+n:i.style[t[o]]=100*s+"%",a&&(d?a.style[d]="translate"+o+"("+100*r+"%)"+n:a.style[t[o]]=100*r+"%")},z["scroll3d"+e]=function(t,n,i,s){var a,r=e||["X","Y"][this.direction],o=n<0?-1:1,l=Math.abs(n);u?(l<.05?(a=1200*l,n=0,s=-1*o):l<.95?(a=60,n=(n-.05*o)/.9,s=(s+.05*o)/.9):(a=1200*(1-l),n=o,s=0),t.parentNode.style[d]="perspective(1000px) rotateX("+a+"deg)",t.style[d]="translate"+r+"("+100*n+"%)",i&&(i.style[d]="translate"+r+"("+100*s+"%)")):z["scroll"+e].apply(this,arguments)},z["slide"+e]=function(t,n,i,s){z["slideCoverReverse"+e].apply(this,arguments)},z["flow"+e]=function(t,n,i,s){z["flowCoverIn"+e].apply(this,arguments)},z["slice"+e]=function(){var t=function(e,t){var n=l.createElement("div");n.style.cssText="position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;",n.appendChild(e),t.appendChild(n)};return function(n,i,s,a){var r="X"==(e||["X","Y"][this.direction])?"width":"height",o=this.container[D("client-"+r)],l=0==i||0==a;n.style[r]=l?"100%":o+"px",n.parentNode==this.container&&t(n,this.container),n.parentNode.style.zIndex=i>0?0:1,n.parentNode.style[r]=100*(Math.min(i,0)+1)+"%",s&&(s.style[r]=l?"100%":o+"px",s.parentNode==this.container&&t(s,this.container),s.parentNode.style.zIndex=i>0?1:0,s.parentNode.style[r]=100*(Math.min(a,0)+1)+"%"),function(e,t,n,i){A(n,(function(n){n.parentNode!=i&&(n.parentNode.style.display=e!=n&&t!=n?"none":"block")}))}(n,s,this.pages,this.container)}}(),z["flip"+e]=function(t,i,s,a){var r=e||["X","Y"][1-this.direction],o="X"==r?-1:1;u?(t.style[m]="hidden",t.style[d]="perspective(1000px) rotate"+r+"("+180*i*o+"deg)"+n,s&&(s.style[m]="hidden",s.style[d]="perspective(1000px) rotate"+r+"("+180*a*o+"deg)"+n)):z["scroll"+e].apply(this,arguments)},z["flip3d"+e]=function(){var t;return function(n,i,s,a){var r=e||["X","Y"][1-this.direction],o="X"==r?-1:1,l=o*(i<0?1:-1),c=n["offset"+("X"==r?"Height":"Width")]/2;g?(t||(t=!0,n.parentNode.parentNode.style[u]="1000px",n.parentNode.style[f]="preserve-3d"),n.parentNode.style[d]="translateZ(-"+c+"px) rotate"+r+"("+90*i*o+"deg)",n.style[d]="rotate"+r+"(0) translateZ("+c+"px)",s&&(s.style[d]="rotate"+r+"("+90*l+"deg) translateZ("+c+"px)")):z["scroll"+e].apply(this,arguments)}}(),z["flipClock"+e]=function(){var t=function(e,t,n,i){var s=e.parentNode,a="X"==n?"height":"width",r="X"==n?"top":"left",o=["50%",(i?0:100)+"%"]["X"==n?"slice":"reverse"]().join(" ");return s&&s!=t||((s=l.createElement("div")).style.cssText="position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;display:none;",s.style[y]=o,s.style[m]="hidden",s.appendChild(e),t.appendChild(s)),s.style[a]="50%",s.style[r]=100*i+"%",e.style[a]="200%",e.style[r]=200*-i+"%",s};return function(n,i,s,a){var r=e||["X","Y"][1-this.direction];this.pages[this.current];var o,l,c=Number(Math.abs(i)<.5),h="X"==r?1:-1;u?(t(n,this.container,r,0),t(n._clone||(n._clone=n.cloneNode(!0)),this.container,r,.5),o=l=180*-i*h,i>0?l=0:o=0,n.parentNode.style.zIndex=n._clone.parentNode.style.zIndex=c,n.parentNode.style[d]="perspective(1000px) rotate"+r+"("+o+"deg)",n._clone.parentNode.style[d]="perspective(1000px) rotate"+r+"("+l+"deg)",s&&(t(s,this.container,r,0),t(s._clone||(s._clone=s.cloneNode(!0)),this.container,r,.5),o=l=180*-a*h,i>0?o=0:l=0,s.parentNode.style.zIndex=s._clone.parentNode.style.zIndex=1-c,s.parentNode.style[d]="perspective(1000px) rotate"+r+"("+o+"deg)",s._clone.parentNode.style[d]="perspective(1000px) rotate"+r+"("+l+"deg)"),function(e,t,n,i){A(n,(function(n){n.parentNode!=i&&(n.parentNode.style.display=n._clone.parentNode.style.display=e!=n&&t!=n?"none":"block")}))}(n,s,this.pages,this.container),0!=i&&0!=a||((n=this.pages[this.current]).style.height=n.style.width=n.parentNode.style.height=n.parentNode.style.width="100%",n.style.top=n.style.left=n.parentNode.style.top=n.parentNode.style.left=0,n.parentNode.style.zIndex=2)):z["scroll"+e].apply(this,arguments)}}(),z["flipPaper"+e]=function(){var n;return function(i,s,a,r){var o=e||["X","Y"][this.direction],c="X"==o?"width":"height",p=100*Math.abs(s);if(!n){(n=l.createElement("div")).style.cssText="position:absolute;z-index:2;top:0;left:0;height:0;width:0;background:no-repeat #fff;";try{n.style.backgroundImage=h+"linear-gradient("+("X"==o?"right":"bottom")+", #aaa 0,#fff 20px)"}catch(W){}this.container.appendChild(n)}z["slice"+e].apply(this,arguments),n.style.display=0==s||0==r?"none":"block",n.style.width=n.style.height="100%",n.style[c]=(s<0?p:100-p)+"%",n.style[t[o]]=(s<0?100-2*p:2*p-100)+"%"}}(),z["zoom"+e]=function(t,i,s,a){var r=Number(Math.abs(i)<.5);d?(t.style[d]="scale"+e+"("+Math.abs(1-2*Math.abs(i))+")"+n,t.style.zIndex=r,s&&(s.style[d]="scale"+e+"("+Math.abs(1-2*Math.abs(i))+")"+n,s.style.zIndex=1-r)):z["scroll"+e].apply(this,arguments)},z["bomb"+e]=function(t,i,s,a){var r=Number(Math.abs(i)<.5),o=Math.abs(1-2*Math.abs(i));d?(t.style[d]="scale"+e+"("+(2-o)+")"+n,t.style.opacity=r?o:0,t.style.zIndex=r,s&&(s.style[d]="scale"+e+"("+(2-o)+")"+n,s.style.opacity=r?0:o,s.style.zIndex=1-r)):z["scroll"+e].apply(this,arguments)},z["skew"+e]=function(t,i,s,a){var r=Number(Math.abs(i)<.5);d?(t.style[d]="skew"+e+"("+180*i+"deg)"+n,t.style.zIndex=r,s&&(s.style[d]="skew"+e+"("+180*a+"deg)"+n,s.style.zIndex=1-r)):z["scroll"+e].apply(this,arguments)},A(" Reverse In Out".split(" "),(function(i){z["scrollCover"+i+e]=function(s,a,r,o){var l=e||["X","Y"][this.direction],c=Number("In"==i||!i&&a<0||"Reverse"==i&&a>0),h=100,p=100;c?h=20:p=20,d?s.style[d]="translate"+l+"("+a*h+"%)"+n:s.style[t[l]]=a*h+"%",s.style.zIndex=1-c,r&&(d?r.style[d]="translate"+l+"("+o*p+"%)"+n:r.style[t[l]]=o*p+"%",r.style.zIndex=c)},z["slideCover"+i+e]=function(t,s,a,r){var o=e||["X","Y"][this.direction],l=Number("In"==i||!i&&s<0||"Reverse"==i&&s>0);d?(t.style[d]="translate"+o+"("+s*(100-100*l)+"%) scale("+(.2*(1-Math.abs(l&&s))+.8)+")"+n,t.style.zIndex=1-l,a&&(a.style[d]="translate"+o+"("+r*l*100+"%) scale("+(.2*(1-Math.abs(l?0:r))+.8)+")"+n,a.style.zIndex=l)):z["scrollCover"+i+e].apply(this,arguments)},z["flowCover"+i+e]=function(t,s,a,r){var o=e||["X","Y"][this.direction],l=Number("In"==i||!i&&s<0||"Reverse"==i&&s>0);d?(t.style[d]="translate"+o+"("+s*(100-50*l)+"%) scale("+(.5*(1-Math.abs(s))+.5)+")"+n,t.style.zIndex=1-l,a&&(a.style[d]="translate"+o+"("+r*(50+50*l)+"%) scale("+(.5*(1-Math.abs(r))+.5)+")"+n,a.style.zIndex=l)):z["scrollCover"+i+e].apply(this,arguments)},z["flipCover"+i+e]=function(t,s,a,r){var o=e||["X","Y"][1-this.direction],l=Number("In"==i||!i&&s<0||"Reverse"==i&&s>0);u?(l?s=0:r=0,t.style[d]="perspective(1000px) rotate"+o+"("+-90*s+"deg)"+n,t.style.zIndex=1-l,a&&(a.style[d]="perspective(1000px) rotate"+o+"("+-90*r+"deg)"+n,a.style.zIndex=l)):z["scroll"+e].apply(this,arguments)},z["skewCover"+i+e]=function(t,s,a,r){var o=Number("In"==i||!i&&s<0||"Reverse"==i&&s>0);d?(o?s=0:r=0,t.style[d]="skew"+e+"("+90*s+"deg)"+n,t.style.zIndex=1-o,a&&(a.style[d]="skew"+e+"("+90*r+"deg)"+n,a.style.zIndex=o)):z["scroll"+e].apply(this,arguments)},z["zoomCover"+i+e]=function(t,s,a,r){var o=Number("In"==i||!i&&s<0||"Reverse"==i&&s>0);d?(o?s=0:r=0,t.style[d]="scale"+e+"("+(1-Math.abs(s))+")"+n,t.style.zIndex=1-o,a&&(a.style[d]="scale"+e+"("+(1-Math.abs(r))+")"+n,a.style.zIndex=o)):z["scroll"+e].apply(this,arguments)},z["bombCover"+i+e]=function(t,s,a,r){var o=Number("In"==i||!i&&s<0||"Reverse"==i&&s>0);d?(o?s=0:r=0,t.style[d]="scale"+e+"("+(1+Math.abs(s))+")"+n,t.style.zIndex=1-o,a&&(a.style[d]="scale"+e+"("+(1+Math.abs(r))+")"+n,a.style.zIndex=o),z.fade.apply(this,arguments)):z["scroll"+e].apply(this,arguments)}}))})),t.prototype={version:"2.3.2",constructor:t,latestTime:0,init:function(t){var n=this,i=this.handler=function(e){!n.frozen&&n.handleEvent(e)};this.events={},this.duration=isNaN(parseInt(t.duration))?600:parseInt(t.duration),this.direction=0==parseInt(t.direction)?0:1,this.current=parseInt(t.start)||0,this.loop=!!t.loop,this.mouse=null==t.mouse||!!t.mouse,this.mousewheel=!!t.mousewheel,this.interval=parseInt(t.interval)||5e3,this.playing=!!t.autoplay,this.arrowkey=!!t.arrowkey,this.frozen=!!t.freeze,this.pages=function(e){var t=[];return A(e.children||e.childNodes,(function(e){1==e.nodeType&&t.push(e)})),t}(this.container),this.length=this.pages.length,this.pageData=[],O(this.container,I.join(" ")+" click"+(this.mousewheel?" mousewheel DOMMouseScroll":""),i),O(l,N.join(" ")+(this.arrowkey?" keydown":""),i),A(this.pages,(function(e){n.pageData.push({percent:0,cssText:e.style.cssText||""}),n.initStyle(e)})),this.pages[this.current].style.display="block",this.on({before:function(){clearTimeout(this.playTimer)},dragStart:function(){var t;clearTimeout(this.playTimer),e.getSelection?"empty"in(t=getSelection())?t.empty():"removeAllRanges"in t&&t.removeAllRanges():l.selection.empty()},after:this.firePlay,update:null}).firePlay(),this.comment=document.createComment(" Powered by pageSwitch v"+this.version+"  https://github.com/qiqiboy/pageSwitch "),this.container.appendChild(this.comment),this.setEase(t.ease),this.setTransition(t.transition)},initStyle:function(e){var t,n=e.style;return A("position:absolute;top:0;left:0;width:100%;height:100%;display:none".split(";"),(function(e){t=e.split(":"),n[t[0]]=t[1]})),e},setEase:function(e){return this.ease=X(e)?e:M[e]||M.ease,this},addEase:function(e,t){return X(t)&&(M[e]=t),this},setTransition:function(e){return this.events.update.splice(0,1,X(e)?e:z[e]||z.slide),this},addTransition:function(e,t){return X(t)&&(z[e]=t),this},isStatic:function(){return!this.timer&&!this.drag},on:function(e,t){var n=this;return"object"==E(e)?A(e,(function(e,t){n.on(e,t)})):(this.events[e]||(this.events[e]=[]),this.events[e].push(t)),this},fire:function(e){var t=this,n=b.call(arguments,1);return A(this.events[e]||[],(function(e){X(e)&&e.apply(t,n)})),this},freeze:function(e){return this.frozen=null==e||!!e,this},slide:function(e){var t=this;this.direction;var n=this.duration,i=+new Date,s=this.ease,a=this.current,l=Math.min(this.length-1,Math.max(0,this.fixIndex(e))),c=this.pages[a],h=this.getPercent(),p=this.fixIndex(l==a?a+(h>0?-1:1):l),d=this.pages[p],u=e>a?-1:1,f=c;return o(this.timer),l==a?(u=0,f=d):"none"==d.style.display&&(h=0),this.fixBlock(a,p),this.fire("before",a,l),this.current=l,n*=Math.abs(u-h),this.latestTime=i+n,function e(){var o=Math.min(n,+new Date-i),c=n?s(o,0,1,n):1,d=(u-h)*c+h;t.fixUpdate(d,a,p),o==n?(f&&(f.style.display="none"),delete t.timer,t.fire("after",l,a)):t.timer=r(e)}(),this},prev:function(){return this.slide(this.current-1)},next:function(){return this.slide(this.current+1)},play:function(){return this.playing=!0,this.firePlay()},firePlay:function(){var e=this;return this.playing&&(this.playTimer=setTimeout((function(){e.slide((e.current+1)%(e.loop?1/0:e.length))}),this.interval)),this},pause:function(){return this.playing=!1,clearTimeout(this.playTimer),this},fixIndex:function(e){return this.length>1&&this.loop?(this.length+e)%this.length:e},fixBlock:function(e,t){return A(this.pages,(function(n,i){n.style.display=e!=i&&t!=i?"none":"block"})),this},fixUpdate:function(e,t,n){var i,s=this.pageData,a=this.pages[t],r=this.pages[n];return s[t].percent=e,r&&(i=s[n].percent=e>0?e-1:1+e),this.fire("update",a,e,r,i)},getPercent:function(e){var t=this.pageData[null==e?this.current:e];return t&&(t.percent||0)},getOffsetParent:function(){var t,n,i=(t=this.container,n="position",(e.getComputedStyle&&e.getComputedStyle(t,null)||t.currentStyle||t.style)[n]);return i&&"static"!=i?this.container:this.container.offsetParent||l.body},handleEvent:function(e){var t=Y(e),n=t.button<1&&t.length<2&&(!this.pointerType||this.pointerType==t.eventType)&&(this.mouse||"mouse"!=t.pointerType);switch(t.eventCode){case 2:if(n&&this.rect){var i=this.current,s=this.direction,a=[t.clientX,t.clientY],r=this.rect,l=a[s]-r[s];this.pages[i];var c,h=this.offsetParent[s?"clientHeight":"clientWidth"];null==this.drag&&r.toString()!=a.toString()&&(this.drag=Math.abs(l)>=Math.abs(a[1-s]-r[1-s]),this.drag&&this.fire("dragStart",t)),this.drag&&(y=this.percent+(h&&l/h),this.pages[c=this.fixIndex(i+(y>0?-1:1))]||(y/=Math.abs(l)/h+2),this.fixBlock(i,c),this.fire("dragMove",t),this.fixUpdate(y,i,c),this._offset=l,t.preventDefault())}this.drag&&"touch"!==this.pointerType&&"touch"===t.eventType&&t.preventDefault();break;case 1:case 3:if(n){var p,d,u=this,f=this.current,y=this.getPercent();t.length&&(1==t.eventCode||this.drag)?(g=t.target.nodeName.toLowerCase(),clearTimeout(this.eventTimer),this.pointerType||(this.pointerType=t.eventType),this.timer&&(o(this.timer),delete this.timer),this.rect=[t.clientX,t.clientY],this.percent=y,this.time=+new Date,this.offsetParent=this.getOffsetParent(),"touch"==t.eventType||"a"!=g&&"img"!=g||t.preventDefault()):(d=this.time)&&(l=this._offset,p=this.drag,A("rect drag time percent _offset offsetParent".split(" "),(function(e){delete u[e]})),p&&((+new Date-d<500&&Math.abs(l)>20||Math.abs(y)>.5)&&(f+=l>0?-1:1),this.fire("dragEnd",t),t.preventDefault()),y?this.slide(f):p&&this.firePlay(),this.eventTimer=setTimeout((function(){delete u.pointerType}),400))}break;case 4:this.timer&&t.preventDefault();break;case 5:if(t.preventDefault(),this.isStatic()&&+new Date-this.latestTime>Math.max(1e3-this.duration,0)){var m=t.wheelDelta||-t.detail;Math.abs(m)>=3&&this[m>0?"prev":"next"]()}break;case 6:var g=t.target.nodeName.toLowerCase();if(this.isStatic()&&"input"!=g&&"textarea"!=g&&"select"!=g)switch(t.keyCode||t.which){case 33:case 37:case 38:this.prev();break;case 32:case 34:case 39:case 40:this.next();break;case 35:this.slide(this.length-1);break;case 36:this.slide(0)}}},destroy:function(){var e=this.pageData;return L(this.container,I.join(" ")+" click"+(this.mousewheel?" mousewheel DOMMouseScroll":""),this.handler),L(l,N.join(" ")+(this.arrowkey?" keydown":""),this.handler),A(this.pages,(function(t,n){t.style.cssText=e[n].cssText})),this.container.removeChild(this.comment),this.length=0,this.pause()},append:function(e,t){return null==t&&(t=this.pages.length),this.pageData.splice(t,0,{percent:0,cssText:e.style.cssText}),this.pages.splice(t,0,e),this.container.appendChild(this.initStyle(e)),this.length=this.pages.length,t<=this.current&&this.current++,this},prepend:function(e){return this.append(e,0)},insertBefore:function(e,t){return this.append(e,t-1)},insertAfter:function(e,t){return this.append(e,t+1)},remove:function(e){return this.container.removeChild(this.pages[e]),this.pages.splice(e,1),this.pageData.splice(e,1),this.length=this.pages.length,e<=this.current&&this.slide(this.current=Math.max(0,this.current-1)),this}},A("Ease Transition".split(" "),(function(e){t["add"+e]=t.prototype["add"+e]})),P.exports=t}function E(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?w[v.call(e)]||"object":typeof e}function D(e){return(e+"").replace(/^-ms-/,"ms-").replace(/-([a-z]|[0-9])/gi,(function(e,t){return(t+"").toUpperCase()}))}function R(e){var t=D(e),n=D(h+t);return t in c&&t||n in c&&n||""}function X(e){return"function"==E(e)}function A(e,t){if(o=E(r=e),r&&"function"!=o&&"string"!=o&&(0===r.length||r.length&&(1==r.nodeType||r.length-1 in r))){if("function"==E(e.forEach))return e.forEach(t);for(var n,i=0,s=e.length;i<s;i++)"undefined"!=E(n=e[i])&&t(n,i,e)}else{var a;for(a in e)t(a,e[a],e)}var r,o}function O(e,t,n){if("object"==E(t))return A(t,(function(t,n){O(e,t,n)}));A(t.split(" "),(function(t){e.addEventListener?e.addEventListener(t,n,!!S&&{passive:!1}):e.attachEvent?e.attachEvent("on"+t,n):e["on"+t]=n}))}function L(e,t,n){if("object"==E(t))return A(t,(function(t,n){L(e,t,n)}));A(t.split(" "),(function(t){e.removeEventListener?e.removeEventListener(t,n,!1):e.detachEvent?e.detachEvent("on"+t,n):e["on"+t]=null}))}function Y(e){var t,n,i,s,a={},r=e.which,o=e.button;if(A("wheelDelta detail which keyCode".split(" "),(function(t){a[t]=e[t]})),a.oldEvent=e,a.type=e.type.toLowerCase(),a.eventType=x[a.type]||a.type,a.eventCode=k[a.type]||0,a.pointerType=C[e.pointerType]||e.pointerType||a.eventType,a.target=e.target||e.srcElement||l.documentElement,3===a.target.nodeType&&(a.target=a.target.parentNode),a.preventDefault=function(){e.preventDefault&&e.preventDefault(),a.returnValue=e.returnValue=!1},t=T[a.eventType]){switch(a.eventType){case"mouse":case"pointer":var c=e.pointerId||0;3==a.eventCode?delete t[c]:t[c]=e;break;case"touch":T[a.eventType]=t=e.touches}s=0,(n="item"in(i=t)?i.item(s):function(){var e,t=0;for(e in this)if(t++==s)return this[e]}.call(i,s))&&(a.clientX=n.clientX,a.clientY=n.clientY),a.button=r<4?Math.max(0,r-1):4&o?1:2&o,a.length=function(e){var t,n=0;if("number"==E(e.length))n=e.length;else if("keys"in Object)n=Object.keys(e).length;else for(t in e)e.hasOwnProperty(t)&&n++;return n}(t)}return a}}("undefined"!=typeof window?window:j,(function(e,t){this.container="string"==typeof e?document.getElementById(e):e,this.init(t||{})}));const R=E(D.exports);const X=new class extends l{constructor(){super("Work",{index:0})}setActive(e){this.priorityUpdate((t=>{t.index=e}))}},A=c(X);class O extends h.Component{constructor(e){super(e),o(this,"length"),o(this,"letters"),this.letters=this.props.name.split(""),this.length=this.letters.filter((e=>" "!==e)).length}shouldComponentUpdate(){return!1}render(){let e=-1;return p.jsx("h2",{className:"poster-title",children:this.letters.map(((t,n)=>{if(" "===t)return p.jsx("div",{className:"title-space",children:"    "},`${t}-${n}`);e++;const i=50*(this.length-e);return p.jsx("div",{style:{transition:`opacity 1s ${i}ms, transform 1.75s ${i}ms cubic-bezier(0.34, 1.56, 0.64, 1)`},children:t},`${t}-${n}`)}))})}}class L extends h.Component{shouldComponentUpdate({active:e}){return e!==this.props.active}render(){const{name:e,p1:t,p2:n,imgSmall:i,imgLarge:s,active:a}=this.props;return p.jsx("div",{className:"poster "+(a?"active":""),style:{"--background-small":`url(${i})`,"--background-large":`url(${s})`},children:p.jsxs("article",{children:[p.jsx(O,{name:e}),p.jsxs("div",{className:"text",children:[p.jsx("p",{children:t}),p.jsx("p",{children:n})]})]})})}}const Y=A((({index:e},{index:t})=>({active:e===t})))(L),W=[{name:"Atlassian",p1:"At Atlassian, I worked as a full-stack engineer aimed at improving Confluence performance and developer experience",p2:"I built tools designed to automate dependency removal, analyze JavaScript delivery to the browser, improve performance, automate redundant tasks, and more",url:"https://www.atlassian.com/software/confluence",imgSmall:d,imgLarge:u},{name:"Carta",p1:"At Carta Healthcare, I worked as a lead frontend engineer building tools for improving patient-care through AI and automation",p2:"Our team built a suite of tools for improving the quality of data collection, purchasing and inventory, and staff scheduling",url:"https://www.carta.healthcare",imgSmall:f,imgLarge:y},{name:"Word Clouds",p1:"Word Clouds is a crossword puzzle game for all iOS and Android devices. Train your brain and vocabulary as you play through thousands of puzzles!",p2:"Words Clouds was built with React Native, a serverless backend using Google Cloud, and Node.js for generating crossword puzzles.",url:"https://itunes.apple.com/us/app/word-clouds/id1435511292?mt=8",imgSmall:m,imgLarge:g},{name:"Skedge",p1:"Welcome to Skedge, an easy to use mobile and desktop app for small business owners and managers. Skedge allows you to manage your team's schedules in real time.",p2:"Your employees are notified of new shifts and schedule changes with their own mobile app. Skedge was developed with Meteor, Node, React, Electron, and Cordova.",imgSmall:v,imgLarge:b},{name:"React",p1:"Welcome to REACT property management software. REACT will handle your maintenance, income, and expenses while creating accounting statements for you.",p2:"With a seperate apps for managers and owners, communication and issue tracking is instant. It has built-in real time chat for an easier means of communication.",imgSmall:w,imgLarge:x},{name:"Piper Chat",p1:"Piper Chat is a parody application based on the popular HBO television show Silicon Valley. It is a fully functional text, voice and video chat that is built for iOS, Android, and all modern browsers",p2:"Under the hood is JavaScript front to back. Core technologies include web sockets, WebRTC, MongoDB and views built with React/React Native.",imgSmall:k,imgLarge:C},{name:"E-Commerce",p1:"After seeing some e-commerce interactions on Dribble, I tried to recreate some with a simple e-commerce site of my own.",p2:"On mobile, the app is performant and fun to use. It has a React front end and a backend using Node.js, Meteor, and Moltin.",imgSmall:I,imgLarge:N},{name:"Eat Better",p1:"For as long as I can remember Yelp has been a reliable tool for deciding where I'll go for a meal. 'Eat Better' utilizes their api in conjunction with a fun to use UI to help you find a place to eat.",p2:"I created this app to up my game when designing in the browser. All animations are done with CSS3 and vanilla javascript. It has a React front end with an Express backend.",imgSmall:T,imgLarge:M}];class _ extends h.Component{constructor(){super(...arguments),o(this,"PW")}componentDidMount(){this.PW=new R("workSlider",{duration:750,direction:1,transition:"scrollCover",start:0,loop:!0,mousewheel:!0,mouse:!0,arrowkey:!0}),this.PW.on("after",(e=>{X.setActive(e)}))}componentWillUnmount(){this.PW&&this.PW.destroy()}render(){return p.jsx(S,{name:"work",children:p.jsx("div",{id:"workSlider",children:W.map(((e,o)=>{return p.jsx(Y,(l=((e,t)=>{for(var n in t||(t={}))s.call(t,n)&&r(e,n,t[n]);if(i)for(var n of i(t))a.call(t,n)&&r(e,n,t[n]);return e})({},e),t(l,n({index:o}))),e.name);var l}))})})}}const B=z((({width:e,height:t})=>({width:e,height:t})))(_);export{B as default};
