(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f733cd0a"],{"09fa":function(t,n,e){var r=e("4588"),i=e("9def");t.exports=function(t){if(void 0===t)return 0;var n=r(t),e=i(n);if(n!==e)throw RangeError("Wrong length!");return e}},"0a49":function(t,n,e){var r=e("9b43"),i=e("626a"),o=e("4bf8"),u=e("9def"),f=e("cd1c");t.exports=function(t,n){var e=1==t,a=2==t,c=3==t,s=4==t,l=6==t,h=5==t||l,d=n||f;return function(n,f,v){for(var w,g,y=o(n),p=i(y),b=r(f,v,3),A=u(p.length),m=0,x=e?d(n,A):a?d(n,0):void 0;A>m;m++)if((h||m in p)&&(w=p[m],g=b(w,m,y),t))if(e)x[m]=g;else if(g)switch(t){case 3:return!0;case 5:return w;case 6:return m;case 2:x.push(w)}else if(s)return!1;return l?-1:c||s?s:x}}},"0f88":function(t,n,e){var r,i=e("7726"),o=e("32e9"),u=e("ca5a"),f=u("typed_array"),a=u("view"),c=!(!i.ArrayBuffer||!i.DataView),s=c,l=0,h=9,d="Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(",");while(l<h)(r=i[d[l++]])?(o(r.prototype,f,!0),o(r.prototype,a,!0)):s=!1;t.exports={ABV:c,CONSTR:s,TYPED:f,VIEW:a}},1169:function(t,n,e){var r=e("2d95");t.exports=Array.isArray||function(t){return"Array"==r(t)}},"11e9":function(t,n,e){var r=e("52a7"),i=e("4630"),o=e("6821"),u=e("6a99"),f=e("69a8"),a=e("c69a"),c=Object.getOwnPropertyDescriptor;n.f=e("9e1e")?c:function(t,n){if(t=o(t),n=u(n,!0),a)try{return c(t,n)}catch(e){}if(f(t,n))return i(!r.f.call(t,n),t[n])}},"34ef":function(t,n,e){e("ec30")("Uint8",1,(function(t){return function(n,e,r){return t(this,n,e,r)}}))},"36bd":function(t,n,e){"use strict";var r=e("4bf8"),i=e("77f1"),o=e("9def");t.exports=function(t){var n=r(this),e=o(n.length),u=arguments.length,f=i(u>1?arguments[1]:void 0,e),a=u>2?arguments[2]:void 0,c=void 0===a?e:i(a,e);while(c>f)n[f++]=t;return n}},"41f0":function(t,n,e){},5881:function(t,n,e){"use strict";var r=e("41f0"),i=e.n(r);i.a},9093:function(t,n,e){var r=e("ce10"),i=e("e11e").concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},aa6a:function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[e("div",{staticClass:"select"},[e("button",{staticClass:"button"},[t._v("\n      选择文件\n    ")]),e("input",{attrs:{type:"file",id:"uploadedFile"},on:{change:t.inputChange}})]),e("canvas",{attrs:{id:"canvas"}})])},i=[],o=(e("34ef"),e("7f7f"),{name:"Index",data:function(){return{audioContext:null,canvas:null,file:null,fileName:""}},mounted:function(){this.init()},methods:{init:function(){this.initWindow(),this.audioContext=new AudioContext},initWindow:function(){window.AudioContext=window.AudioContext||window.webkitAudioContext||window.mozAudioContext||window.msAudioContext,window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame},inputChange:function(t){console.log(t);var n=t.target.files;n&&n.length>0&&(this.file=n[0],this.fileName=this.file.name,this.start())},start:function(){var t=this,n=new FileReader;n.onload=function(n){var e=n.target.result;t.audioContext.decodeAudioData(e,(function(n){t.canvasInit(t.audioContext,n)}),(function(){console.log("文件解码失败")}))},n.readAsArrayBuffer(this.file)},canvasInit:function(t,n){var e=t.createBufferSource(),r=t.createAnalyser();e.connect(r),e.connect(t.destination),e.buffer=n,e.start(2),this.draw(r)},draw:function(t){var n=document.getElementById("canvas"),e=n.width,r=n.height-2,i=10,o=2,u=800/12,f=n.getContext("2d"),a=f.createLinearGradient(0,0,0,300);a.addColorStop(1,"#0f0"),a.addColorStop(.5,"#ff0"),a.addColorStop(.1,"#f00"),f.fillStyle=a;var c=function n(){var a=new Uint8Array(t.frequencyBinCount);t.getByteFrequencyData(a);var c=Math.round(a.length/u);f.clearRect(0,0,e,r);for(var s=0;s<u;s++){var l=a[s*c];f.fillRect(12*s,r-l+o,i,r)}requestAnimationFrame(n)};requestAnimationFrame(c)}}}),u=o,f=(e("5881"),e("2877")),a=Object(f["a"])(u,r,i,!1,null,"d0fc8d52",null);n["default"]=a.exports},ba92:function(t,n,e){"use strict";var r=e("4bf8"),i=e("77f1"),o=e("9def");t.exports=[].copyWithin||function(t,n){var e=r(this),u=o(e.length),f=i(t,u),a=i(n,u),c=arguments.length>2?arguments[2]:void 0,s=Math.min((void 0===c?u:i(c,u))-a,u-f),l=1;a<f&&f<a+s&&(l=-1,a+=s-1,f+=s-1);while(s-- >0)a in e?e[f]=e[a]:delete e[f],f+=l,a+=l;return e}},cd1c:function(t,n,e){var r=e("e853");t.exports=function(t,n){return new(r(t))(n)}},e853:function(t,n,e){var r=e("d3f4"),i=e("1169"),o=e("2b4c")("species");t.exports=function(t){var n;return i(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)||(n=void 0),r(n)&&(n=n[o],null===n&&(n=void 0))),void 0===n?Array:n}},ec30:function(t,n,e){"use strict";if(e("9e1e")){var r=e("2d00"),i=e("7726"),o=e("79e5"),u=e("5ca1"),f=e("0f88"),a=e("ed0b"),c=e("9b43"),s=e("f605"),l=e("4630"),h=e("32e9"),d=e("dcbc"),v=e("4588"),w=e("9def"),g=e("09fa"),y=e("77f1"),p=e("6a99"),b=e("69a8"),A=e("23c6"),m=e("d3f4"),x=e("4bf8"),E=e("33a4"),I=e("2aeb"),S=e("38fd"),_=e("9093").f,C=e("27ee"),F=e("ca5a"),R=e("2b4c"),B=e("0a49"),O=e("c366"),U=e("ebd6"),L=e("cadf"),P=e("84f2"),W=e("5cc5"),N=e("7a56"),T=e("36bd"),q=e("ba92"),D=e("86cc"),V=e("11e9"),M=D.f,k=V.f,j=i.RangeError,Y=i.TypeError,z=i.Uint8Array,G="ArrayBuffer",J="Shared"+G,$="BYTES_PER_ELEMENT",H="prototype",K=Array[H],Q=a.ArrayBuffer,X=a.DataView,Z=B(0),tt=B(2),nt=B(3),et=B(4),rt=B(5),it=B(6),ot=O(!0),ut=O(!1),ft=L.values,at=L.keys,ct=L.entries,st=K.lastIndexOf,lt=K.reduce,ht=K.reduceRight,dt=K.join,vt=K.sort,wt=K.slice,gt=K.toString,yt=K.toLocaleString,pt=R("iterator"),bt=R("toStringTag"),At=F("typed_constructor"),mt=F("def_constructor"),xt=f.CONSTR,Et=f.TYPED,It=f.VIEW,St="Wrong length!",_t=B(1,(function(t,n){return Ot(U(t,t[mt]),n)})),Ct=o((function(){return 1===new z(new Uint16Array([1]).buffer)[0]})),Ft=!!z&&!!z[H].set&&o((function(){new z(1).set({})})),Rt=function(t,n){var e=v(t);if(e<0||e%n)throw j("Wrong offset!");return e},Bt=function(t){if(m(t)&&Et in t)return t;throw Y(t+" is not a typed array!")},Ot=function(t,n){if(!(m(t)&&At in t))throw Y("It is not a typed array constructor!");return new t(n)},Ut=function(t,n){return Lt(U(t,t[mt]),n)},Lt=function(t,n){var e=0,r=n.length,i=Ot(t,r);while(r>e)i[e]=n[e++];return i},Pt=function(t,n,e){M(t,n,{get:function(){return this._d[e]}})},Wt=function(t){var n,e,r,i,o,u,f=x(t),a=arguments.length,s=a>1?arguments[1]:void 0,l=void 0!==s,h=C(f);if(void 0!=h&&!E(h)){for(u=h.call(f),r=[],n=0;!(o=u.next()).done;n++)r.push(o.value);f=r}for(l&&a>2&&(s=c(s,arguments[2],2)),n=0,e=w(f.length),i=Ot(this,e);e>n;n++)i[n]=l?s(f[n],n):f[n];return i},Nt=function(){var t=0,n=arguments.length,e=Ot(this,n);while(n>t)e[t]=arguments[t++];return e},Tt=!!z&&o((function(){yt.call(new z(1))})),qt=function(){return yt.apply(Tt?wt.call(Bt(this)):Bt(this),arguments)},Dt={copyWithin:function(t,n){return q.call(Bt(this),t,n,arguments.length>2?arguments[2]:void 0)},every:function(t){return et(Bt(this),t,arguments.length>1?arguments[1]:void 0)},fill:function(t){return T.apply(Bt(this),arguments)},filter:function(t){return Ut(this,tt(Bt(this),t,arguments.length>1?arguments[1]:void 0))},find:function(t){return rt(Bt(this),t,arguments.length>1?arguments[1]:void 0)},findIndex:function(t){return it(Bt(this),t,arguments.length>1?arguments[1]:void 0)},forEach:function(t){Z(Bt(this),t,arguments.length>1?arguments[1]:void 0)},indexOf:function(t){return ut(Bt(this),t,arguments.length>1?arguments[1]:void 0)},includes:function(t){return ot(Bt(this),t,arguments.length>1?arguments[1]:void 0)},join:function(t){return dt.apply(Bt(this),arguments)},lastIndexOf:function(t){return st.apply(Bt(this),arguments)},map:function(t){return _t(Bt(this),t,arguments.length>1?arguments[1]:void 0)},reduce:function(t){return lt.apply(Bt(this),arguments)},reduceRight:function(t){return ht.apply(Bt(this),arguments)},reverse:function(){var t,n=this,e=Bt(n).length,r=Math.floor(e/2),i=0;while(i<r)t=n[i],n[i++]=n[--e],n[e]=t;return n},some:function(t){return nt(Bt(this),t,arguments.length>1?arguments[1]:void 0)},sort:function(t){return vt.call(Bt(this),t)},subarray:function(t,n){var e=Bt(this),r=e.length,i=y(t,r);return new(U(e,e[mt]))(e.buffer,e.byteOffset+i*e.BYTES_PER_ELEMENT,w((void 0===n?r:y(n,r))-i))}},Vt=function(t,n){return Ut(this,wt.call(Bt(this),t,n))},Mt=function(t){Bt(this);var n=Rt(arguments[1],1),e=this.length,r=x(t),i=w(r.length),o=0;if(i+n>e)throw j(St);while(o<i)this[n+o]=r[o++]},kt={entries:function(){return ct.call(Bt(this))},keys:function(){return at.call(Bt(this))},values:function(){return ft.call(Bt(this))}},jt=function(t,n){return m(t)&&t[Et]&&"symbol"!=typeof n&&n in t&&String(+n)==String(n)},Yt=function(t,n){return jt(t,n=p(n,!0))?l(2,t[n]):k(t,n)},zt=function(t,n,e){return!(jt(t,n=p(n,!0))&&m(e)&&b(e,"value"))||b(e,"get")||b(e,"set")||e.configurable||b(e,"writable")&&!e.writable||b(e,"enumerable")&&!e.enumerable?M(t,n,e):(t[n]=e.value,t)};xt||(V.f=Yt,D.f=zt),u(u.S+u.F*!xt,"Object",{getOwnPropertyDescriptor:Yt,defineProperty:zt}),o((function(){gt.call({})}))&&(gt=yt=function(){return dt.call(this)});var Gt=d({},Dt);d(Gt,kt),h(Gt,pt,kt.values),d(Gt,{slice:Vt,set:Mt,constructor:function(){},toString:gt,toLocaleString:qt}),Pt(Gt,"buffer","b"),Pt(Gt,"byteOffset","o"),Pt(Gt,"byteLength","l"),Pt(Gt,"length","e"),M(Gt,bt,{get:function(){return this[Et]}}),t.exports=function(t,n,e,a){a=!!a;var c=t+(a?"Clamped":"")+"Array",l="get"+t,d="set"+t,v=i[c],y=v||{},p=v&&S(v),b=!v||!f.ABV,x={},E=v&&v[H],C=function(t,e){var r=t._d;return r.v[l](e*n+r.o,Ct)},F=function(t,e,r){var i=t._d;a&&(r=(r=Math.round(r))<0?0:r>255?255:255&r),i.v[d](e*n+i.o,r,Ct)},R=function(t,n){M(t,n,{get:function(){return C(this,n)},set:function(t){return F(this,n,t)},enumerable:!0})};b?(v=e((function(t,e,r,i){s(t,v,c,"_d");var o,u,f,a,l=0,d=0;if(m(e)){if(!(e instanceof Q||(a=A(e))==G||a==J))return Et in e?Lt(v,e):Wt.call(v,e);o=e,d=Rt(r,n);var y=e.byteLength;if(void 0===i){if(y%n)throw j(St);if(u=y-d,u<0)throw j(St)}else if(u=w(i)*n,u+d>y)throw j(St);f=u/n}else f=g(e),u=f*n,o=new Q(u);h(t,"_d",{b:o,o:d,l:u,e:f,v:new X(o)});while(l<f)R(t,l++)})),E=v[H]=I(Gt),h(E,"constructor",v)):o((function(){v(1)}))&&o((function(){new v(-1)}))&&W((function(t){new v,new v(null),new v(1.5),new v(t)}),!0)||(v=e((function(t,e,r,i){var o;return s(t,v,c),m(e)?e instanceof Q||(o=A(e))==G||o==J?void 0!==i?new y(e,Rt(r,n),i):void 0!==r?new y(e,Rt(r,n)):new y(e):Et in e?Lt(v,e):Wt.call(v,e):new y(g(e))})),Z(p!==Function.prototype?_(y).concat(_(p)):_(y),(function(t){t in v||h(v,t,y[t])})),v[H]=E,r||(E.constructor=v));var B=E[pt],O=!!B&&("values"==B.name||void 0==B.name),U=kt.values;h(v,At,!0),h(E,Et,c),h(E,It,!0),h(E,mt,v),(a?new v(1)[bt]==c:bt in E)||M(E,bt,{get:function(){return c}}),x[c]=v,u(u.G+u.W+u.F*(v!=y),x),u(u.S,c,{BYTES_PER_ELEMENT:n}),u(u.S+u.F*o((function(){y.of.call(v,1)})),c,{from:Wt,of:Nt}),$ in E||h(E,$,n),u(u.P,c,Dt),N(c),u(u.P+u.F*Ft,c,{set:Mt}),u(u.P+u.F*!O,c,kt),r||E.toString==gt||(E.toString=gt),u(u.P+u.F*o((function(){new v(1).slice()})),c,{slice:Vt}),u(u.P+u.F*(o((function(){return[1,2].toLocaleString()!=new v([1,2]).toLocaleString()}))||!o((function(){E.toLocaleString.call([1,2])}))),c,{toLocaleString:qt}),P[c]=O?B:U,r||O||h(E,pt,U)}}else t.exports=function(){}},ed0b:function(t,n,e){"use strict";var r=e("7726"),i=e("9e1e"),o=e("2d00"),u=e("0f88"),f=e("32e9"),a=e("dcbc"),c=e("79e5"),s=e("f605"),l=e("4588"),h=e("9def"),d=e("09fa"),v=e("9093").f,w=e("86cc").f,g=e("36bd"),y=e("7f20"),p="ArrayBuffer",b="DataView",A="prototype",m="Wrong length!",x="Wrong index!",E=r[p],I=r[b],S=r.Math,_=r.RangeError,C=r.Infinity,F=E,R=S.abs,B=S.pow,O=S.floor,U=S.log,L=S.LN2,P="buffer",W="byteLength",N="byteOffset",T=i?"_b":P,q=i?"_l":W,D=i?"_o":N;function V(t,n,e){var r,i,o,u=new Array(e),f=8*e-n-1,a=(1<<f)-1,c=a>>1,s=23===n?B(2,-24)-B(2,-77):0,l=0,h=t<0||0===t&&1/t<0?1:0;for(t=R(t),t!=t||t===C?(i=t!=t?1:0,r=a):(r=O(U(t)/L),t*(o=B(2,-r))<1&&(r--,o*=2),t+=r+c>=1?s/o:s*B(2,1-c),t*o>=2&&(r++,o/=2),r+c>=a?(i=0,r=a):r+c>=1?(i=(t*o-1)*B(2,n),r+=c):(i=t*B(2,c-1)*B(2,n),r=0));n>=8;u[l++]=255&i,i/=256,n-=8);for(r=r<<n|i,f+=n;f>0;u[l++]=255&r,r/=256,f-=8);return u[--l]|=128*h,u}function M(t,n,e){var r,i=8*e-n-1,o=(1<<i)-1,u=o>>1,f=i-7,a=e-1,c=t[a--],s=127&c;for(c>>=7;f>0;s=256*s+t[a],a--,f-=8);for(r=s&(1<<-f)-1,s>>=-f,f+=n;f>0;r=256*r+t[a],a--,f-=8);if(0===s)s=1-u;else{if(s===o)return r?NaN:c?-C:C;r+=B(2,n),s-=u}return(c?-1:1)*r*B(2,s-n)}function k(t){return t[3]<<24|t[2]<<16|t[1]<<8|t[0]}function j(t){return[255&t]}function Y(t){return[255&t,t>>8&255]}function z(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]}function G(t){return V(t,52,8)}function J(t){return V(t,23,4)}function $(t,n,e){w(t[A],n,{get:function(){return this[e]}})}function H(t,n,e,r){var i=+e,o=d(i);if(o+n>t[q])throw _(x);var u=t[T]._b,f=o+t[D],a=u.slice(f,f+n);return r?a:a.reverse()}function K(t,n,e,r,i,o){var u=+e,f=d(u);if(f+n>t[q])throw _(x);for(var a=t[T]._b,c=f+t[D],s=r(+i),l=0;l<n;l++)a[c+l]=s[o?l:n-l-1]}if(u.ABV){if(!c((function(){E(1)}))||!c((function(){new E(-1)}))||c((function(){return new E,new E(1.5),new E(NaN),E.name!=p}))){E=function(t){return s(this,E),new F(d(t))};for(var Q,X=E[A]=F[A],Z=v(F),tt=0;Z.length>tt;)(Q=Z[tt++])in E||f(E,Q,F[Q]);o||(X.constructor=E)}var nt=new I(new E(2)),et=I[A].setInt8;nt.setInt8(0,2147483648),nt.setInt8(1,2147483649),!nt.getInt8(0)&&nt.getInt8(1)||a(I[A],{setInt8:function(t,n){et.call(this,t,n<<24>>24)},setUint8:function(t,n){et.call(this,t,n<<24>>24)}},!0)}else E=function(t){s(this,E,p);var n=d(t);this._b=g.call(new Array(n),0),this[q]=n},I=function(t,n,e){s(this,I,b),s(t,E,b);var r=t[q],i=l(n);if(i<0||i>r)throw _("Wrong offset!");if(e=void 0===e?r-i:h(e),i+e>r)throw _(m);this[T]=t,this[D]=i,this[q]=e},i&&($(E,W,"_l"),$(I,P,"_b"),$(I,W,"_l"),$(I,N,"_o")),a(I[A],{getInt8:function(t){return H(this,1,t)[0]<<24>>24},getUint8:function(t){return H(this,1,t)[0]},getInt16:function(t){var n=H(this,2,t,arguments[1]);return(n[1]<<8|n[0])<<16>>16},getUint16:function(t){var n=H(this,2,t,arguments[1]);return n[1]<<8|n[0]},getInt32:function(t){return k(H(this,4,t,arguments[1]))},getUint32:function(t){return k(H(this,4,t,arguments[1]))>>>0},getFloat32:function(t){return M(H(this,4,t,arguments[1]),23,4)},getFloat64:function(t){return M(H(this,8,t,arguments[1]),52,8)},setInt8:function(t,n){K(this,1,t,j,n)},setUint8:function(t,n){K(this,1,t,j,n)},setInt16:function(t,n){K(this,2,t,Y,n,arguments[2])},setUint16:function(t,n){K(this,2,t,Y,n,arguments[2])},setInt32:function(t,n){K(this,4,t,z,n,arguments[2])},setUint32:function(t,n){K(this,4,t,z,n,arguments[2])},setFloat32:function(t,n){K(this,4,t,J,n,arguments[2])},setFloat64:function(t,n){K(this,8,t,G,n,arguments[2])}});y(E,p),y(I,b),f(I[A],u.VIEW,!0),n[p]=E,n[b]=I}}]);
//# sourceMappingURL=chunk-f733cd0a.c769e4ed.js.map