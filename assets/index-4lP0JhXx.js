var t=Object.defineProperty,e=(e,s,o)=>(((e,s,o)=>{s in e?t(e,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[s]=o})(e,"symbol"!=typeof s?s+"":s,o),o);import{c as s,r as o,j as i,T as n,a as r}from"./index-L2iKJMzx.js";import{P as h}from"./index-P_cJYRRs.js";class a extends o.Component{shouldComponentUpdate({active:t}){return t!==this.props.active}render(){const{letter:t,delay:e,active:s}=this.props;return i.jsx("div",{className:s?"active":"",style:{transform:`scale(${s?1:0}) rotateX(${s?0:180}deg) translateY(${s?0:-150}%)`,transition:`opacity 1s ${e}ms, transform 1.75s ${e}ms cubic-bezier(0.34, 1.56, 0.64, 1)`},children:t})}}const c=s((({screenActive:t})=>({active:t})))(a),u=class t extends o.Component{shouldComponentUpdate(){return!1}render(){return i.jsxs("div",{className:"alex-text",children:[i.jsx("h1",{children:t.Alex.map(((e,s)=>i.jsx(c,{delay:50*(t.Alex.length-s+1)+200,letter:e},e)))}),i.jsx("h1",{children:t.Figliolia.map(((e,s)=>i.jsx(c,{delay:50*(t.Figliolia.length-s+1),letter:e},`${e}-${s}`)))})]})}};e(u,"Alex","ALEX".split("")),e(u,"Figliolia","FIGLIOLIA".split(""));let l=u;class d extends o.Component{constructor(t){super(t),e(this,"top",0),e(this,"left",0),e(this,"width",0),e(this,"height",0),this.state={rotX:0,rotY:0,scale:1,bTransDur:.5,boxShadow:"none"},this.touchMoveButton=this.touchMoveButton.bind(this),this.mouseMoveButton=this.mouseMoveButton.bind(this),this.touchEnterButton=this.touchEnterButton.bind(this),this.mouseEnterButton=this.mouseEnterButton.bind(this),this.mouseLeaveButton=this.mouseLeaveButton.bind(this)}shouldComponentUpdate(t,{rotX:e,rotY:s,bTransDur:o,scale:i,boxShadow:n}){const r=this.state;return e!==r.rotX||(s!==r.rotY||(i!==r.scale||(o!==r.bTransDur||n!==r.boxShadow)))}cacheTargetData(t){const e=t,{top:s,left:o,height:i,width:n}=e.getBoundingClientRect();this.top=s,this.height=i;const r=.2*n;this.left=o-r/2,this.width=n+.2*n}getRotations(t,e){const s=e-this.top,o=.5-(t-this.left)/this.width;return[50*(.5-s/this.height),20*o]}setFrame([t,e],s){this.setState({rotX:t,rotY:e,bTransDur:`${s}s`,scale:1.1,boxShadow:`0 ${t}px ${this.height/5}px rgba(0,0,0,0.5), ${t}px ${e}px ${this.width/5}px rgba(0,0,0,0.45)`})}mouseEnterButton({clientX:t,clientY:e,currentTarget:s}){this.cacheTargetData(s),this.setFrame(this.getRotations(t,e),.5)}touchEnterButton({currentTarget:t,touches:e}){this.cacheTargetData(t),this.setFrame(this.getRotations(e[0].clientX,e[0].clientY),.5)}mouseMoveButton({clientX:t,clientY:e}){this.setFrame(this.getRotations(t,e),0)}touchMoveButton({touches:t}){this.setFrame(this.getRotations(t[0].clientX,t[0].clientY),0)}mouseLeaveButton(){this.setState({rotX:0,rotY:0,scale:1,bTransDur:"0.5s",boxShadow:"none"})}render(){const{text:t,onClick:e}=this.props,{rotX:s,rotY:o,bTransDur:n,scale:r,boxShadow:h}=this.state;return i.jsx("button",{onClick:e,className:"outline-button",onMouseEnter:this.mouseEnterButton,onMouseMove:this.mouseMoveButton,onMouseLeave:this.mouseLeaveButton,onTouchStart:this.touchEnterButton,onTouchEnd:this.mouseLeaveButton,onTouchMove:this.touchMoveButton,style:{transform:`rotateX(${s}deg) rotateY(${o}deg) skew(-5deg) scale(${r})`,transitionDuration:`${n}`,boxShadow:h},children:i.jsx("div",{children:t})})}}class p extends o.Component{constructor(t){super(t),this.state={reset:!1},this.nav=this.nav.bind(this)}UNSAFE_componentWillReceiveProps({active:t}){!this.props.active&&t&&n.deferTask((()=>{this.setState({reset:!0})}),3100)}shouldComponentUpdate({active:t},{reset:e}){return t!==this.props.active||e!==this.state.reset}nav(){window.location.hash="#Work"}render(){const{reset:t}=this.state,{active:e}=this.props;return i.jsx("div",{className:`home-button ${e?" active":""} ${t?"reset":""}`,children:i.jsx(d,{text:"Work",onClick:this.nav})})}}const m=s((({screenActive:t})=>({active:t})))(p);class v extends o.Component{shouldComponentUpdate({height:t,width:e}){const s=this.props;return e!==s.width||t!==s.height}render(){const{height:t,width:e}=this.props;return i.jsx(h,{name:"home",children:i.jsxs("div",{style:{height:t,width:e},children:[i.jsx(l,{}),i.jsx(m,{})]})})}}const x=r((({height:t,width:e})=>({height:t,width:e})))(v);export{x as default};
