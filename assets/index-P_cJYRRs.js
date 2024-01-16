var t=Object.defineProperty,e=(e,i,r)=>(((e,i,r)=>{i in e?t(e,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[i]=r})(e,"symbol"!=typeof i?i+"":i,r),r);import{r as i,u as r,j as s}from"./index-L2iKJMzx.js";class o{constructor(t){e(this,"Textures"),e(this,"GL"),this.Textures=t,this.GL=this.Textures.GL}load(t,e){const i=new Image;return new Promise(((r,s)=>{i.onload=()=>{this.textureIze(i),r(i)},i.onerror=()=>{this.Textures.setTransparent(),s()},i.crossOrigin=this.isDataUri(t)?null:e,i.src=t}))}textureIze(t){const e=this.isPowerOfTwo(t.width)&&this.isPowerOfTwo(t.height)?this.GL.REPEAT:this.GL.CLAMP_TO_EDGE;this.GL.bindTexture(this.GL.TEXTURE_2D,this.Textures.backgroundTexture),this.GL.texParameteri(this.GL.TEXTURE_2D,this.GL.TEXTURE_WRAP_S,e),this.GL.texParameteri(this.GL.TEXTURE_2D,this.GL.TEXTURE_WRAP_T,e),this.GL.texImage2D(this.GL.TEXTURE_2D,0,this.GL.RGBA,this.GL.RGBA,this.GL.UNSIGNED_BYTE,t)}isDataUri(t){return t.match(/^data:/)}isPowerOfTwo(t){return 0==(t&t-1)}}const a=class t{constructor(t){e(this,"resolution"),e(this,"dropRadius"),e(this,"perturbance"),e(this,"crossOrigin"),e(this,"interactive"),e(this,"imageUrl");const i=this.configure(t);this.imageUrl=i.imageUrl,this.dropRadius=i.dropRadius,this.resolution=i.resolution,this.interactive=i.interactive,this.perturbance=i.perturbance,this.crossOrigin=i.crossOrigin}configure(e){return Object.assign({},t.defaults,e)}extractUrl(t){const e=/url\(["']?([^"']*)["']?\)/.exec(t);return null==e?null:e[1]}isDataUri(t){return t.match(/^data:/)}};e(a,"defaults",{imageUrl:null,resolution:256,dropRadius:20,perturbance:.03,interactive:!0,crossOrigin:""});let n=a;const h=class t{constructor(t,i){e(this,"dropProgram"),e(this,"updateProgram"),e(this,"renderProgram"),e(this,"GL"),e(this,"textureDelta"),this.GL=t,this.textureDelta=new Float32Array([1/i,1/i]),this.dropProgram=this.compileDrop(),this.updateProgram=this.compileUpdate(),this.GL.uniform2fv(this.updateProgram.locations.delta,this.textureDelta),this.renderProgram=this.compileRender(),this.GL.uniform2fv(this.renderProgram.locations.delta,this.textureDelta)}drop(t,e,i){this.dropProgram&&(this.GL.useProgram(this.dropProgram.id),this.GL.uniform2fv(this.dropProgram.locations.center,t),this.GL.uniform1f(this.dropProgram.locations.radius,e),this.GL.uniform1f(this.dropProgram.locations.strength,i))}render(t){this.GL.uniform1f(this.renderProgram.locations.perturbance,t),this.GL.uniform2fv(this.renderProgram.locations.topLeft,this.renderProgram.uniforms.topLeft),this.GL.uniform2fv(this.renderProgram.locations.bottomRight,this.renderProgram.uniforms.bottomRight),this.GL.uniform2fv(this.renderProgram.locations.containerRatio,this.renderProgram.uniforms.containerRatio),this.GL.uniform1i(this.renderProgram.locations.samplerBackground,0),this.GL.uniform1i(this.renderProgram.locations.samplerRipples,1)}compileDrop(){return this.createProgram(t.VERTEX_SHADER,t.DROP_PROGRAM)}compileUpdate(){return this.createProgram(t.VERTEX_SHADER,t.UPDATE_PROGRAM)}compileRender(){return this.createProgram(t.RENDER_BACKGROUND_PROGRAM,t.RENDER_RIPPLE_PROGRAM)}createProgram(t,e){if(!this.GL)throw new Error("Cannot initialize shaders without a rendering context");const i={id:this.GL.createProgram()};if(this.GL.attachShader(i.id,this.compileSource(this.GL.VERTEX_SHADER,t)),this.GL.attachShader(i.id,this.compileSource(this.GL.FRAGMENT_SHADER,e)),this.GL.linkProgram(i.id),!this.GL.getProgramParameter(i.id,this.GL.LINK_STATUS))throw new Error("link error: "+this.GL.getProgramInfoLog(i.id));let r,s;i.uniforms={},i.locations={},this.GL.useProgram(i.id),this.GL.enableVertexAttribArray(0);const o=/uniform (\w+) (\w+)/g,a=t+e;for(;null!=(r=o.exec(a));)s=r[2],i.locations[s]=this.GL.getUniformLocation(i.id,s);return i}compileSource(t,e){if(!this.GL)throw new Error("Cannot initialize shaders without a rendering context");const i=this.GL.createShader(t);if(this.GL.shaderSource(i,e),this.GL.compileShader(i),!this.GL.getShaderParameter(i,this.GL.COMPILE_STATUS))throw new Error("compile error: "+this.GL.getShaderInfoLog(i));return i}};e(h,"VERTEX_SHADER",["attribute vec2 vertex;","varying vec2 coord;","void main() {","coord = vertex * 0.5 + 0.5;","gl_Position = vec4(vertex, 0.0, 1.0);","}"].join("\n")),e(h,"DROP_PROGRAM",["precision highp float;","const float PI = 3.141592653589793;","uniform sampler2D texture;","uniform vec2 center;","uniform float radius;","uniform float strength;","varying vec2 coord;","void main() {","vec4 info = texture2D(texture, coord);","float drop = max(0.0, 1.0 - length(center * 0.5 + 0.5 - coord) / radius);","drop = 0.5 - cos(drop * PI) * 0.5;","info.r += drop * strength;","gl_FragColor = info;","}"].join("\n")),e(h,"UPDATE_PROGRAM",["precision highp float;","uniform sampler2D texture;","uniform vec2 delta;","varying vec2 coord;","void main() {","vec4 info = texture2D(texture, coord);","vec2 dx = vec2(delta.x, 0.0);","vec2 dy = vec2(0.0, delta.y);","float average = (","texture2D(texture, coord - dx).r +","texture2D(texture, coord - dy).r +","texture2D(texture, coord + dx).r +","texture2D(texture, coord + dy).r",") * 0.25;","info.g += (average - info.r) * 2.0;","info.g *= 0.995;","info.r += info.g;","gl_FragColor = info;","}"].join("\n")),e(h,"RENDER_BACKGROUND_PROGRAM",["precision highp float;","attribute vec2 vertex;","uniform vec2 topLeft;","uniform vec2 bottomRight;","uniform vec2 containerRatio;","varying vec2 ripplesCoord;","varying vec2 backgroundCoord;","void main() {","backgroundCoord = mix(topLeft, bottomRight, vertex * 0.5 + 0.5);","backgroundCoord.y = 1.0 - backgroundCoord.y;","ripplesCoord = vec2(vertex.x, -vertex.y) * containerRatio * 0.5 + 0.5;","gl_Position = vec4(vertex.x, -vertex.y, 0.0, 1.0);","}"].join("\n")),e(h,"RENDER_RIPPLE_PROGRAM",["precision highp float;","uniform sampler2D samplerBackground;","uniform sampler2D samplerRipples;","uniform vec2 delta;","uniform float perturbance;","varying vec2 ripplesCoord;","varying vec2 backgroundCoord;","void main() {","float height = texture2D(samplerRipples, ripplesCoord).r;","float heightX = texture2D(samplerRipples, vec2(ripplesCoord.x + delta.x, ripplesCoord.y)).r;","float heightY = texture2D(samplerRipples, vec2(ripplesCoord.x, ripplesCoord.y + delta.y)).r;","vec3 dx = vec3(delta.x, heightX - height, 0.0);","vec3 dy = vec3(0.0, heightY - height, delta.y);","vec2 offset = -normalize(cross(dy, dx)).xz;","float specular = pow(max(0.0, dot(offset, normalize(vec2(-0.6, 1.0)))), 4.0);","gl_FragColor = texture2D(samplerBackground, backgroundCoord + offset * perturbance) + specular;","}"].join("\n"));let u=h;class c extends Map{constructor(){super([["zIndex",""],["position",""],["backgroundWidth",0],["backgroundHeight",0],["originalInlineCSS",""],["originalCSSBackgroundImage",""]])}initialize(t){const{position:e,zIndex:i,backgroundImage:r}=window.getComputedStyle(t);this.set("zIndex",i),this.set("position",e),this.set("originalCSSBackgroundImage",r),this.set("originalInlineCSS",t.style.backgroundImage)}get(t){return super.get(t)}}const d=class t{constructor(t){e(this,"quad"),e(this,"bufferReadIndex",1),e(this,"bufferWriteIndex",0),e(this,"GL"),e(this,"textures",[]),e(this,"backgroundTexture"),e(this,"frameBuffers",[]),e(this,"transparentPixels",this.createImageData(32,32)),this.GL=t,this.quad=this.GL.createBuffer(),this.backgroundTexture=this.createBackground()}drawQuad(){this.GL.bindBuffer(this.GL.ARRAY_BUFFER,this.quad),this.GL.vertexAttribPointer(0,2,this.GL.FLOAT,!1,0,0),this.GL.drawArrays(this.GL.TRIANGLE_FAN,0,4)}get firstTexture(){return this.textures[0]}get readTexture(){return this.textures[this.bufferReadIndex]}get writeTexture(){return this.textures[this.bufferWriteIndex]}get readFrame(){return this.frameBuffers[this.bufferReadIndex]}get writeFrame(){return this.frameBuffers[this.bufferWriteIndex]}getBrowserExtensions(){t.browserSupport.extensions.forEach((t=>{this.GL.getExtension(t)}))}initialize(e){this.GL.bindBuffer(this.GL.ARRAY_BUFFER,this.quad);const{linearSupport:i,type:r,arrayType:s}=t.browserSupport,o=s?new s(e*e*4):null;for(let t=0;t<2;t++){const t=this.GL.createTexture(),s=this.GL.createFramebuffer();this.GL.bindFramebuffer(this.GL.FRAMEBUFFER,s),this.GL.bindTexture(this.GL.TEXTURE_2D,t),this.GL.texParameteri(this.GL.TEXTURE_2D,this.GL.TEXTURE_MIN_FILTER,i?this.GL.LINEAR:this.GL.NEAREST),this.GL.texParameteri(this.GL.TEXTURE_2D,this.GL.TEXTURE_MAG_FILTER,i?this.GL.LINEAR:this.GL.NEAREST),this.GL.texParameteri(this.GL.TEXTURE_2D,this.GL.TEXTURE_WRAP_S,this.GL.CLAMP_TO_EDGE),this.GL.texParameteri(this.GL.TEXTURE_2D,this.GL.TEXTURE_WRAP_T,this.GL.CLAMP_TO_EDGE),this.GL.texImage2D(this.GL.TEXTURE_2D,0,this.GL.RGBA,e,e,0,this.GL.RGBA,r,o),this.GL.framebufferTexture2D(this.GL.FRAMEBUFFER,this.GL.COLOR_ATTACHMENT0,this.GL.TEXTURE_2D,t,0),this.textures.push(t),this.frameBuffers.push(s)}}setTransparent(){this.GL.bindTexture(this.GL.TEXTURE_2D,this.backgroundTexture),this.GL.texImage2D(this.GL.TEXTURE_2D,0,this.GL.RGBA,this.GL.RGBA,this.GL.UNSIGNED_BYTE,this.transparentPixels)}swapBufferIndices(){this.bufferWriteIndex=1-this.bufferWriteIndex,this.bufferReadIndex=1-this.bufferReadIndex}createBackground(){const t=this.GL.createTexture();return this.GL.bindTexture(this.GL.TEXTURE_2D,t),this.GL.pixelStorei(this.GL.UNPACK_FLIP_Y_WEBGL,1),this.GL.texParameteri(this.GL.TEXTURE_2D,this.GL.TEXTURE_MAG_FILTER,this.GL.LINEAR),this.GL.texParameteri(this.GL.TEXTURE_2D,this.GL.TEXTURE_MIN_FILTER,this.GL.LINEAR),t}createImageData(t,e){var i;try{return new ImageData(t,e)}catch(r){return null==(i=document.createElement("canvas").getContext("2d"))?void 0:i.createImageData(t,e)}}};e(d,"browserSupport",new class{constructor(){e(this,"type"),e(this,"extensions"),e(this,"linearSupport"),e(this,"GL"),e(this,"arrayType"),this.detect()}detect(){const t=this.getExtensions(),e=this.frameAndBuffer(),i=this.getAll(t),{length:r}=i;for(let s=0;s<r;s++)if(this.GL.texImage2D(this.GL.TEXTURE_2D,0,this.GL.RGBA,32,32,0,this.GL.RGBA,i[s].type,null),this.GL.framebufferTexture2D(this.GL.FRAMEBUFFER,this.GL.COLOR_ATTACHMENT0,this.GL.TEXTURE_2D,e,0),this.GL.checkFramebufferStatus(this.GL.FRAMEBUFFER)===this.GL.FRAMEBUFFER_COMPLETE){const t=i[s];return this.type=t.type,this.arrayType=t.arrayType,this.extensions=t.extensions,void(this.linearSupport=t.linearSupport)}throw new Error("No compatible browser configurations")}getAll(t){const e=[];return e.push(this.createConfig("float",this.GL.FLOAT,Float32Array,t)),t.OES_texture_half_float&&e.push(this.createConfig("half_float",t.OES_texture_half_float.HALF_FLOAT_OES,null,t)),e}createConfig(t,e,i,r){const s="OES_texture_"+t,o=s+"_linear",a=o in r,n=[s];return a&&n.push(o),{type:e,arrayType:i,linearSupport:a,extensions:n}}frameAndBuffer(){const t=this.GL.createTexture(),e=this.GL.createFramebuffer();return this.GL.bindFramebuffer(this.GL.FRAMEBUFFER,e),this.GL.bindTexture(this.GL.TEXTURE_2D,t),this.GL.texParameteri(this.GL.TEXTURE_2D,this.GL.TEXTURE_MIN_FILTER,this.GL.NEAREST),this.GL.texParameteri(this.GL.TEXTURE_2D,this.GL.TEXTURE_MAG_FILTER,this.GL.NEAREST),this.GL.texParameteri(this.GL.TEXTURE_2D,this.GL.TEXTURE_WRAP_S,this.GL.CLAMP_TO_EDGE),this.GL.texParameteri(this.GL.TEXTURE_2D,this.GL.TEXTURE_WRAP_T,this.GL.CLAMP_TO_EDGE),t}getExtensions(){const t=document.createElement("canvas");if(this.GL=t.getContext("webgl")||t.getContext("experimental-webgl"),!this.GL)throw new Error("No WebGL support");const e={};if(["OES_texture_float","OES_texture_half_float","OES_texture_float_linear","OES_texture_half_float_linear"].forEach((t=>{const i=this.GL.getExtension(t);i&&(e[t]=i)})),!e.OES_texture_float)throw new Error("No texture float support");return e}});let l=d;class g extends n{constructor(t,i){super(i),e(this,"Shaders"),e(this,"Textures"),e(this,"quad"),e(this,"target"),e(this,"canvas"),e(this,"GL"),e(this,"StyleCache",new c),e(this,"imageSource",null),this.target=t,this.canvas=document.createElement("canvas"),this.positionCanvas(),this.GL=this.createGL(this.canvas),this.Shaders=new u(this.GL,this.resolution),this.Textures=new l(this.GL)}initializeWebGL(){this.Textures.initialize(this.resolution),this.GL.bufferData(this.GL.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,1,1,-1,1]),this.GL.STATIC_DRAW),this.Textures.setTransparent(),this.loadImage(),this.GL.clearColor(0,0,0,0),this.GL.blendFunc(this.GL.SRC_ALPHA,this.GL.ONE_MINUS_SRC_ALPHA)}hideCSSBackground(){const t=this.target.style.backgroundImage;"none"!==t&&(this.StyleCache.set("originalInlineCSS",t),this.StyleCache.set("originalCSSBackgroundImage",window.getComputedStyle(this.target).backgroundImage),this.target.style.backgroundImage="none")}render(){this.GL.bindFramebuffer(this.GL.FRAMEBUFFER,null),this.GL.viewport(0,0,this.canvas.width,this.canvas.height),this.GL.enable(this.GL.BLEND),this.GL.clear(this.GL.COLOR_BUFFER_BIT|this.GL.DEPTH_BUFFER_BIT),this.GL.useProgram(this.Shaders.renderProgram.id),this.bindTexture(this.Textures.backgroundTexture,0),this.bindTexture(this.Textures.firstTexture,1),this.Shaders.render(this.perturbance),this.Textures.drawQuad(),this.GL.disable(this.GL.BLEND)}update(){this.GL.viewport(0,0,this.resolution,this.resolution),this.GL.bindFramebuffer(this.GL.FRAMEBUFFER,this.Textures.writeFrame),this.bindTexture(this.Textures.readTexture),this.GL.useProgram(this.Shaders.updateProgram.id),this.Textures.drawQuad(),this.Textures.swapBufferIndices()}isPercentage(t){return"%"==t[t.length-1]}bindTexture(t,e=0){this.GL.activeTexture(this.GL.TEXTURE0+(e||0)),this.GL.bindTexture(this.GL.TEXTURE_2D,t)}positionCanvas(){this.canvas.width=this.target.offsetWidth,this.canvas.height=this.target.offsetHeight,this.canvas.style.position="absolute",this.canvas.style.top="0",this.canvas.style.right="0",this.canvas.style.bottom="0",this.canvas.style.left="0",this.canvas.style.zIndex="-1",this.target.appendChild(this.canvas)}createGL(t){return t.getContext("webgl")||t.getContext("experimental-webgl")}loadImage(){return t=this,e=null,i=function*(){const{backgroundImage:t}=window.getComputedStyle(this.target),e=this.imageUrl||this.extractUrl(this.StyleCache.get("originalCSSBackgroundImage"))||this.extractUrl(t);if(e!=this.imageSource)if(this.imageSource=e,this.imageSource)try{const t=new o(this.Textures),e=yield t.load(this.imageSource,this.crossOrigin);this.StyleCache.set("backgroundWidth",e.width),this.StyleCache.set("backgroundHeight",e.height),this.hideCSSBackground()}catch(i){}else this.Textures.setTransparent()},new Promise(((r,s)=>{var o=t=>{try{n(i.next(t))}catch(e){s(e)}},a=t=>{try{n(i.throw(t))}catch(e){s(e)}},n=t=>t.done?r(t.value):Promise.resolve(t.value).then(o,a);n((i=i.apply(t,e)).next())}));var t,e,i}}class f extends g{constructor(t,i){super(t,i),e(this,"time",0),e(this,"visible",!1),e(this,"running",!1),e(this,"destroyed",!1),e(this,"initialized",!1),this.onClick=this.onClick.bind(this),this.onTouch=this.onTouch.bind(this),this.updateSize=this.updateSize.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.cacheTargetPositions(),this.setupWebGL()}drop(t,e,i,r){const{offsetHeight:s,offsetWidth:o}=this.target,a=Math.max(s,o);i/=a;const n=new Float32Array([(2*t-o)/a,(s-2*e)/a]);this.GL.viewport(0,0,this.resolution,this.resolution),this.GL.bindFramebuffer(this.GL.FRAMEBUFFER,this.Textures.writeFrame),this.bindTexture(this.Textures.readTexture),this.Shaders.drop(n,i,r),this.Textures.drawQuad(),this.Textures.swapBufferIndices()}updateSize(){const{offsetHeight:t,offsetWidth:e}=this.target;e===this.canvas.width&&t===this.canvas.height||(this.canvas.width=e,this.canvas.height=t)}show(){this.visible=!0,this.canvas.style.display="block",this.hideCSSBackground()}hide(){this.visible=!1,this.canvas.style.display="none",this.restoreCSSBackground()}pause(){this.running=!1}play(){this.running=!0}destroy(){this.target.style.zIndex=this.StyleCache.get("zIndex"),this.target.style.position=this.StyleCache.get("position"),this.GL=null,window.removeEventListener("resize",this.updateSize),this.target.removeEventListener("mousedown",this.onClick),this.target.removeEventListener("touchmove",this.onTouch),this.target.removeEventListener("touchstart",this.onTouch),this.target.removeEventListener("mousemove",this.onMouseMove),this.target.removeChild(this.canvas),this.restoreCSSBackground(),cancelAnimationFrame(this.time),this.destroyed=!0}cacheTargetPositions(){this.StyleCache.initialize(this.target),this.target.style.zIndex="0",this.target.style.position="relative"}setupWebGL(){this.Textures.getBrowserExtensions(),window.addEventListener("resize",this.updateSize),this.initializeWebGL(),this.visible=!0,this.running=!0,this.initialized=!0,this.setupPointerEvents();const t=()=>{this.destroyed||(this.step(),this.time=requestAnimationFrame(t))};this.time=requestAnimationFrame(t)}setupPointerEvents(){this.target.addEventListener("mousedown",this.onClick),this.target.addEventListener("mousemove",this.onMouseMove),this.target.addEventListener("touchmove",this.onTouch,{passive:!0}),this.target.addEventListener("touchstart",this.onTouch,{passive:!0})}onClick(t){this.pointerEventsEnabled&&this.dropAtPointer(t,1.5*this.dropRadius,.14)}onTouch(t){if(!this.pointerEventsEnabled)return;const e=t.changedTouches;for(let i=0;i<e.length;i++)this.dropAtPointer(e[i],this.dropRadius,.01)}onMouseMove(t){this.pointerEventsEnabled&&this.dropAtPointer(t,this.dropRadius,.01)}get pointerEventsEnabled(){return this.visible&&this.running&&this.interactive}step(){this.visible&&(this.computeTextureBoundaries(),this.running&&this.update(),this.render())}computeBackgroundSize(t,e){const i=this.StyleCache.get("backgroundWidth"),r=this.StyleCache.get("backgroundHeight");if("cover"==t){const t=Math.max(e.width/i,e.height/r);return[i*t,r*t]}if("contain"==t){const t=Math.min(e.width/i,e.height/r);return[i*t,r*t]}const s=t.split(" ");let o=s[0]||"",a=s[1]||o;return this.isPercentage(o)?o=e.width*parseFloat(o)/100:"auto"!=o&&(o=parseFloat(o)),this.isPercentage(a)?a=e.height*parseFloat(a)/100:"auto"!=a&&(a=parseFloat(a)),"auto"==o&&"auto"==a?(o=i,a=r):("auto"==o&&(o=i*(a/r)),"auto"==a&&(a=r*(o/i))),[o,a]}computeTextureBoundaries(){const{backgroundSize:t,backgroundAttachment:e,backgroundPosition:i}=window.getComputedStyle(this.target),r=this.translateBackgroundPosition(i);let s;if("fixed"==e)s={left:window.scrollX,top:window.scrollY,width:window.innerWidth,height:window.innerHeight};else{const{offsetTop:t,offsetLeft:e,offsetHeight:i,offsetWidth:r}=this.target;s={top:t,left:e,width:r,height:i}}const[o,a]=this.computeBackgroundSize(t,s);let[n,h]=r;n=this.isPercentage(n)?s.left+(s.width-o)*parseFloat(n)/100:s.left+parseFloat(n),h=this.isPercentage(h)?s.top+(s.height-a)*parseFloat(h)/100:s.top+parseFloat(h);const{offsetLeft:u,offsetTop:c,offsetHeight:d,offsetWidth:l}=this.target,g=new Float32Array([(u-n)/o,(c-h)/a]);this.Shaders.renderProgram.uniforms.topLeft=g,this.Shaders.renderProgram.uniforms.bottomRight=new Float32Array([g[0]+l/o,g[1]+d/a]);const f=Math.max(this.canvas.width,this.canvas.height);this.Shaders.renderProgram.uniforms.containerRatio=new Float32Array([this.canvas.width/f,this.canvas.height/f])}translateBackgroundPosition(t){const e=t.split(" ");if(1===e.length)switch(t){case"center":return["50%","50%"];case"top":return["50%","0"];case"bottom":return["50%","100%"];case"left":return["0","50%"];case"right":return["100%","50%"];default:return[t,"50%"]}return e.map((e=>{switch(t){case"center":return"50%";case"top":case"left":return"0";case"right":case"bottom":return"100%";default:return e}}))}restoreCSSBackground(){this.target.style.backgroundImage=this.StyleCache.get("originalInlineCSS")||""}dropAtPointer(t,e,i){const{borderTopWidth:r,borderLeftWidth:s}=window.getComputedStyle(this.target),o=parseInt(r||"0"),a=parseInt(s||"0"),{offsetTop:n,offsetLeft:h}=this.target;this.drop(t.pageX-h-a,t.pageY-n-o,e,i)}}const L=({name:t,children:e})=>{const o=i.useRef(null),a=i.useRef(null),n=r((t=>t.width)),h=r((t=>t.height));return i.useLayoutEffect((()=>{if(a.current)return o.current=new f(a.current,{resolution:512,dropRadius:10,perturbance:.02}),()=>{var t;null==(t=o.current)||t.destroy()}}),[]),s.jsx("main",{id:"page",ref:a,style:{height:h,width:n},className:`page ${t}`,children:e})};export{L as P};
