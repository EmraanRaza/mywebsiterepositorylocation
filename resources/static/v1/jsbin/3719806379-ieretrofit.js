(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa=' coordorigin="0 0" coordsize="',ba=' endcap="flat"',u=" l ",w=" m ",ca='"><g_vml_:fill color="',fa=":0;width:",ha='<g_vml_:shape fillcolor="',ia="borderRadius_bl",ja="borderRadius_br",ka="borderRadius_tl",la="borderRadius_tr",ma="borderWidth_bottom",x="borderWidth_left",na="borderWidth_right",y="borderWidth_top",z="function",A="none",B="object",C="rgba(",oa="shadowBlurRadius",pa='style="position:absolute;top:0;',D="transparent",E="{borderColor}",G="{borderWidth}",H,J=this||self,K=function(a,
b,e){a=a.split(".");e=e||J;a[0]in e||"undefined"==typeof e.execScript||e.execScript("var "+a[0]);for(var c;a.length&&(c=a.shift());)a.length||void 0===b?e=e[c]&&e[c]!==Object.prototype[c]?e[c]:e[c]={}:e[c]=b},qa=function(){},ra=function(a){var b=typeof a;if(b==B)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var e=Object.prototype.toString.call(a);if("[object Window]"==e)return B;if("[object Array]"==e||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=
typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==e||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return z}else return"null";else if(b==z&&"undefined"==typeof a.call)return B;return b},sa=function(a){var b=typeof a;return b==B&&null!=a||b==z},L=function(a){return Object.prototype.hasOwnProperty.call(a,ta)&&a[ta]||(a[ta]=++ua)},ta="closure_uid_"+(1E9*Math.random()>>>0),ua=0,va=function(a,
b){function e(){}e.prototype=b.prototype;a.ca=b.prototype;a.prototype=new e;a.prototype.constructor=a};var wa=Array.prototype.indexOf?function(a,b,e){return Array.prototype.indexOf.call(a,b,e)}:function(a,b,e){e=null==e?0:0>e?Math.max(0,a.length+e):e;if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,e);for(;e<a.length;e++)if(e in a&&a[e]===b)return e;return-1};var N=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},xa=function(a,b){return a<b?-1:a>b?1:0};var ya=function(){};ya.prototype.C=function(){return this};(new ya).C("");var za=function(){};za.prototype.C=function(){return this};(new za).C("");var O;a:{var Aa=J.navigator;if(Aa){var Ba=Aa.userAgent;if(Ba){O=Ba;break a}}O=""};var P,Ca,Q,R,Da,S=function(a){this.F=a;this.u=!1},Ea=/background-color/i,Fa=/^background-image/i,Ga=/background/i,Ha=/goog-ms-box-shadow/i,Ia=/goog-ms-border-radius/i,Ja=/goog-ms-border-bottom-left-radius/i,Ka=/goog-ms-border-bottom-right-radius/i,La=/goog-ms-border-top-left-radius/i,Ma=/goog-ms-border-top-right-radius/i,Na=/opacity/i,Oa=/^border:/i,Pa=/^border-style:/i,Qa=/^border-color:/i,Ra=/^border-left:/i,Sa=/^border-right:/i,Ta=/^border-top:/i,Ua=/^border-bottom:/i,Va=/^border-left-style:/i,
Wa=/^border-right-style:/i,Xa=/^border-top-style:/i,Ya=/^border-bottom-style:/i,Za=/^border-left-color:/i,$a=/^border-right-color:/i,ab=/^border-top-color:/i,bb=/^border-bottom-color:/i,cb=/^border-width:/i,db=/:hover/i,eb=/^#?([a-f]|[A-F]|[0-9]){3}(([a-f]|[A-F]|[0-9]){3})?$/,fb=/^\-?[0-9]+(\.[0-9]+)?px$/,gb=/^\-?[0-9]+(\.[0-9]+)?$/,hb=/[^\s]+/g,ib=/none|dotted|dashed|solid|double|groove|ridge|inset|outset/i,jb=/^margin:|margin-top:|margin-bottom:|margin-left:|margin-right:/i,kb=/top|bottom|left|right|center/i,
lb=[Ha,Ja,Ka,La,Ma,Ia],mb=[Ha,Ja,Ka,La,Ma,Ia];H=S.prototype;H.L=function(){for(var a=0;a<lb.length;a++)if(lb[a].test(this.F))return!0;return!1};H.Z=function(){for(var a=0;a<mb.length;a++)if(mb[a].test(this.F))return!0;return!1};H.b=function(a){if(!a||!a.indexOf)return a;-1!=a.indexOf(":")&&(a=a.split(":")[1]);if("medium"==N(a))return null;-1!=a.indexOf("px")&&(a=a.substr(0,a.length-2));return parseFloat(a)};
H.parse=function(){for(var a={},b=this.F.split(";"),e=0;e<b.length;e++){var c=N(b[e]);La.test(c)?a.borderRadius_tl=this.b(c):Ja.test(c)?a.borderRadius_bl=this.b(c):Ka.test(c)?a.borderRadius_br=this.b(c):Ma.test(c)&&(a.borderRadius_tr=this.b(c));if(Ia.test(c)){var d=N(c.split(":")[1]);d=this.X(d);for(var f in d)a[f]=d[f]}else if(Na.test(c))d=c.split(":")[1],a.opacity=parseFloat(d);else if(Ha.test(c))c=c.split(":")[1].match(hb),a.shadowHOffs=this.b(c[0]),a.shadowVOffs=this.b(c[1]),a.shadowBlurRadius=
this.b(c[2]),a.shadowColor=c.slice(3,c.length).join(" ");else if(cb.test(c))d=N(c.split(":")[1]),c=d.split(" "),1==c.length&&(d=this.b(c[0]),a.borderWidth_left=d,a.borderWidth_right=d,a.borderWidth_top=d,a.borderWidth_bottom=d);else if(Ra.test(c))for(c in d=N(c.split(":")[1]),d=this.h(d),d)a[c+"_left"]=d[c];else if(Sa.test(c))for(c in d=N(c.split(":")[1]),d=this.h(d),d)a[c+"_right"]=d[c];else if(Ta.test(c))for(c in d=N(c.split(":")[1]),d=this.h(d),d)a[c+"_top"]=d[c];else if(Ua.test(c))for(c in d=
N(c.split(":")[1]),d=this.h(d),d)a[c+"_bottom"]=d[c];else if(Ea.test(c))d=N(c.split(":")[1]),a.backgroundColor=d;else if(Fa.test(c))d=N(c.substr(c.indexOf(":")+1)),a.backgroundImageUrl=d.substring(4,d.lastIndexOf(")"));else if(Ga.test(c))for(f in d=c.substring(11,c.length),d=this.W(d),d)a[f]=d[f];else if(Qa.test(c))d=N(c.split(":")[1]),c=d.split(" "),4==c.length&&-1==d.indexOf(C)?(a.borderColor_top=c[0],a.borderColor_right=c[1],a.borderColor_bottom=c[2],a.borderColor_left=c[3]):(a.borderColor_top=
d,a.borderColor_right=d,a.borderColor_bottom=d,a.borderColor_left=d);else if(Za.test(c))d=N(c.split(":")[1]),a.borderColor_left=d;else if($a.test(c))d=N(c.split(":")[1]),a.borderColor_right=d;else if(ab.test(c))d=N(c.split(":")[1]),a.borderColor_top=d;else if(bb.test(c))d=N(c.split(":")[1]),a.borderColor_bottom=d;else if(Oa.test(c))for(f in d=N(c.split(":")[1]),d=this.h(d),d)a[f+"_top"]=d[f],a[f+"_left"]=d[f],a[f+"_bottom"]=d[f],a[f+"_right"]=d[f];else jb.test(c)?this.u=!0:Pa.test(c)?(d=N(c.split(":")[1]),
a.borderStyle_top=d,a.borderStyle_left=d,a.borderStyle_bottom=d,a.borderStyle_right=d):Xa.test(c)?(d=N(c.split(":")[1]),a.borderStyle_top=d):Va.test(c)?(d=N(c.split(":")[1]),a.borderStyle_left=d):Ya.test(c)?(d=N(c.split(":")[1]),a.borderStyle_bottom=d):Wa.test(c)&&(d=N(c.split(":")[1]),a.borderStyle_right=d)}return a};
H.X=function(a){var b=a.split(" ");a={};1==b.length?(b=this.b(b[0]),a.borderRadius_tl=b,a.borderRadius_bl=b,a.borderRadius_br=b,a.borderRadius_tr=b):4==b.length&&(a.borderRadius_tl=this.b(b[0]),a.borderRadius_tr=this.b(b[1]),a.borderRadius_br=this.b(b[2]),a.borderRadius_bl=this.b(b[3]));return a};
H.W=function(a){for(var b=a.split(" "),e={},c=0;c<b.length;c++){var d=N(b[c]);d==D?e.backgroundColor=d:eb.test(d)?e.backgroundColor=d:0==d.indexOf(C)?(d=a.indexOf(C),e.backgroundColor=a.substr(d,a.indexOf(")",d)-d+1)):0==d.indexOf("url(")?e.backgroundImageUrl=d.substring(4,d.lastIndexOf(")")):kb.test(d)&&(e.backgroundPosition=d)}return e};
H.h=function(a){for(var b=a.split(" "),e={},c=0;c<b.length;c++){var d=N(b[c]);d==D?e.borderColor=d:eb.test(d)?e.borderColor=d:0==d.indexOf(C)?(d=a.indexOf(C),e.borderColor=a.substring(d,a.indexOf(")",d)+1)):eb.test(b[c])?e.borderColor=b[c]:gb.test(b[c])?e.borderWidth=parseFloat(b[c]):fb.test(b[c])?e.borderWidth=this.b(b[c]):ib.test(b[c])?e.borderStyle=b[c]:/[a-zA-Z]+/.test(b[c])&&(e.borderColor=b[c])}return e};var nb=function(a){nb[" "](a);return a};nb[" "]=qa;var ob=function(a,b,e,c){c=c?c(b):b;return Object.prototype.hasOwnProperty.call(a,c)?a[c]:a[c]=e(b)};var pb=-1!=O.indexOf("Opera"),T=-1!=O.indexOf("Trident")||-1!=O.indexOf("MSIE"),qb=-1!=O.indexOf("Edge"),rb=-1!=O.indexOf("Gecko")&&!(-1!=O.toLowerCase().indexOf("webkit")&&-1==O.indexOf("Edge"))&&!(-1!=O.indexOf("Trident")||-1!=O.indexOf("MSIE"))&&-1==O.indexOf("Edge"),sb=-1!=O.toLowerCase().indexOf("webkit")&&-1==O.indexOf("Edge"),tb=function(){var a=J.document;return a?a.documentMode:void 0},ub;
a:{var vb="",wb=function(){var a=O;if(rb)return/rv:([^\);]+)(\)|;)/.exec(a);if(qb)return/Edge\/([\d\.]+)/.exec(a);if(T)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(sb)return/WebKit\/(\S+)/.exec(a);if(pb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();wb&&(vb=wb?wb[1]:"");if(T){var xb=tb();if(null!=xb&&xb>parseFloat(vb)){ub=String(xb);break a}}ub=vb}
var yb=ub,zb={},Ab=function(a){return ob(zb,a,function(){for(var b=0,e=N(String(yb)).split("."),c=N(String(a)).split("."),d=Math.max(e.length,c.length),f=0;0==b&&f<d;f++){var k=e[f]||"",h=c[f]||"";do{k=/(\d*)(\D*)(.*)/.exec(k)||["","","",""];h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==k[0].length&&0==h[0].length)break;b=xa(0==k[1].length?0:parseInt(k[1],10),0==h[1].length?0:parseInt(h[1],10))||xa(0==k[2].length,0==h[2].length)||xa(k[2],h[2]);k=k[3];h=h[3]}while(0==b)}return 0<=b})},Bb;
if(J.document&&T){var Cb=tb();Bb=Cb?Cb:parseInt(yb,10)||void 0}else Bb=void 0;var Db=Bb;var Eb=!T||9<=Number(Db),Fb=T&&!Ab("9"),Gb=function(){if(!J.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});try{J.addEventListener("test",qa,b),J.removeEventListener("test",qa,b)}catch(e){}return a}();var Hb=function(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.N=!1};Hb.prototype.preventDefault=function(){this.defaultPrevented=!0};var U=function(a,b){Hb.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.keyCode=0;this.ctrlKey=!1;this.I=null;a&&this.V(a,b)};va(U,Hb);
U.prototype.V=function(a,b){var e=this.type=a.type;this.target=a.target||a.srcElement;this.currentTarget=b;if(b=a.relatedTarget){if(rb){a:{try{nb(b.nodeName);var c=!0;break a}catch(d){}c=!1}c||(b=null)}}else"mouseover"==e?b=a.fromElement:"mouseout"==e&&(b=a.toElement);this.relatedTarget=b;this.keyCode=a.keyCode||0;this.ctrlKey=a.ctrlKey;this.I=a;a.defaultPrevented&&this.preventDefault()};
U.prototype.preventDefault=function(){U.ca.preventDefault.call(this);var a=this.I;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Fb)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var Ib="closure_listenable_"+(1E6*Math.random()|0),Jb=0;var Kb=function(a,b,e,c,d,f){this.listener=a;this.proxy=b;this.src=e;this.type=c;this.capture=!!d;this.B=f;++Jb;this.i=this.w=!1};Kb.prototype.M=function(){this.i=!0;this.B=this.src=this.proxy=this.listener=null};var Lb=function(a){this.src=a;this.g={};this.G=0};Lb.prototype.add=function(a,b,e,c,d){var f=a.toString();a=this.g[f];a||(a=this.g[f]=[],this.G++);var k;a:{for(k=0;k<a.length;++k){var h=a[k];if(!h.i&&h.listener==b&&h.capture==!!c&&h.B==d)break a}k=-1}-1<k?(b=a[k],e||(b.w=!1)):(b=new Kb(b,null,this.src,f,!!c,d),b.w=e,a.push(b));return b};
Lb.prototype.Y=function(a){var b=a.type;if(!(b in this.g))return!1;var e=this.g[b],c=wa(e,a),d;(d=0<=c)&&Array.prototype.splice.call(e,c,1);d&&(a.M(),0==this.g[b].length&&(delete this.g[b],this.G--));return d};var Mb="closure_lm_"+(1E6*Math.random()|0),Nb={},Ob=0,Qb=function(a,b,e,c,d){if(c&&c.once)return Pb(a,b,e,c,d);if(Array.isArray(b)){for(var f=0;f<b.length;f++)Qb(a,b[f],e,c,d);return null}e=Rb(e);return a&&a[Ib]?a.ha(b,e,sa(c)?!!c.capture:!!c,d):Sb(a,b,e,!1,c,d)},Sb=function(a,b,e,c,d,f){if(!b)throw Error("Invalid event type");var k=sa(d)?!!d.capture:!!d,h=Tb(a);h||(a[Mb]=h=new Lb(a));e=h.add(b,e,c,k,f);if(e.proxy)return e;c=Ub();e.proxy=c;c.src=a;c.listener=e;if(a.addEventListener)Gb||(d=k),void 0===
d&&(d=!1),a.addEventListener(b.toString(),c,d);else if(a.attachEvent)a.attachEvent(Vb(b.toString()),c);else if(a.addListener&&a.removeListener)a.addListener(c);else throw Error("addEventListener and attachEvent are unavailable.");Ob++;return e},Ub=function(){var a=Wb,b=Eb?function(e){return a.call(b.src,b.listener,e)}:function(e){e=a.call(b.src,b.listener,e);if(!e)return e};return b},Pb=function(a,b,e,c,d){if(Array.isArray(b)){for(var f=0;f<b.length;f++)Pb(a,b[f],e,c,d);return null}e=Rb(e);return a&&
a[Ib]?a.ia(b,e,sa(c)?!!c.capture:!!c,d):Sb(a,b,e,!0,c,d)},Vb=function(a){return a in Nb?Nb[a]:Nb[a]="on"+a},Yb=function(a,b,e,c){var d=!0;if(a=Tb(a))if(b=a.g[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==e&&!f.i&&(f=Xb(f,c),d=d&&!1!==f)}return d},Xb=function(a,b){var e=a.listener,c=a.B||a.src;if(a.w&&"number"!==typeof a&&a&&!a.i){var d=a.src;if(d&&d[Ib])d.ja(a);else{var f=a.type,k=a.proxy;d.removeEventListener?d.removeEventListener(f,k,a.capture):d.detachEvent?d.detachEvent(Vb(f),
k):d.addListener&&d.removeListener&&d.removeListener(k);Ob--;(f=Tb(d))?(f.Y(a),0==f.G&&(f.src=null,d[Mb]=null)):a.M()}}return e.call(c,b)},Wb=function(a,b){if(a.i)return!0;if(!Eb){if(!b)a:{b=["window","event"];for(var e=J,c=0;c<b.length;c++)if(e=e[b[c]],null==e){b=null;break a}b=e}c=b;b=new U(c,this);e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var d=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(k){d=!0}if(d||void 0==c.returnValue)c.returnValue=!0}c=[];for(d=b.currentTarget;d;d=d.parentNode)c.push(d);
a=a.type;for(d=c.length-1;!b.N&&0<=d;d--){b.currentTarget=c[d];var f=Yb(c[d],a,!0,b);e=e&&f}for(d=0;!b.N&&d<c.length;d++)b.currentTarget=c[d],f=Yb(c[d],a,!1,b),e=e&&f}return e}return Xb(a,new U(b,this))},Tb=function(a){a=a[Mb];return a instanceof Lb?a:null},Zb="__closure_events_fn_"+(1E9*Math.random()>>>0),Rb=function(a){if(ra(a)==z)return a;a[Zb]||(a[Zb]=function(b){return a.handleEvent(b)});return a[Zb]};var V=function(){this.reset()};V.prototype.reset=function(){this.O={};this.required=!1;this.props={}};V.prototype.H=function(a,b,e){var c=this.O[a];if(null==c||this.S(e,c))this.props[a]=b,this.O[a]=e};for(var $b=/#[a-z,A-Z,0-9-]+/g,ac=/\[[a-z,A-Z,0-9-=\s]+\]/g,bc=/:[a-z,A-Z,0-9-]+/g,cc=/\.[a-z,A-Z,0-9-]+/g,dc=[],ec=0;16>ec;ec++)for(var fc=0;16>fc;fc++)dc[16*ec+fc]=ec.toString(16)+fc.toString(16);H=V.prototype;H.S=function(a,b){a=this.K(a);b=this.K(b);return a.v>b.v||a.j>b.j||a.f>b.f||a.d>b.d?!0:!1};
H.K=function(a){var b={v:0,j:0,f:0,d:0};if(null==a)return b.v=1,b;b.j+=(a.match($b)||[]).length;a=a.replace($b,"");b.f+=(a.match(ac)||[]).length;a=a.replace(ac,"");b.f+=(a.match(cc)||[]).length;a=a.replace(cc,"");b.f+=(a.match(bc)||[]).length;a=a.replace(bc,"");b.d+=(a.match(/[^\s]+/g)||[]).length;return b};H.a=function(a,b){return this.props[a]?this.props[a]:this.parent?this.parent.a(a)||b:b};
H.R=function(){var a=this.a(la,0),b=this.a(ja,0),e=this.a(ia,0),c=this.a(ka,0);this.required=0<this.a(oa,0)||0<a||0<b||0<e||0<c};
H.D=function(){if(0!=this.required||this.parent&&0!=this.parent.required){var a=this.a("shadowHOffs",0),b=this.a("shadowVOffs",0),e=this.a(oa,0),c=this.U();c.innerHTML="";var d=this.a(y,0),f=this.a(ma,0),k=this.a(x,0),h=this.a(na,0),l=Math.round(c.s+k+h-1),g=Math.round(c.m+d+f-1),v=this.a(la,0),m=this.a(ja,0),q=this.a(ia,0),p=this.a(ka,0),r=this.a("shadowColor",D),t=[];N(r)!=D&&0<e&&(t=t.concat(this.T(0+c.l,0+c.o,l,g,p+(k+d)/2,q+(k+f)/2,m+(h+f)/2,v+(h+d)/2,a,b,e,r)));a=this.a("backgroundColor",D);
b=this.a("backgroundImageUrl",null);e=this.a("opacity",1);l=this.a("backgroundPosition","0% 0%");"transparent "!=a&&(t=t.concat(this.J(c.l+k/2,c.o+d/2,c.s+k/2+h/2,c.m+d/2+f/2,p,q,m,v,d,k,f,h,a,e,null)));b&&(t=t.concat(this.J(c.l+k/2,c.o+d/2,c.s+k/2+h/2,c.m+d/2+f/2,p,q,m,v,d,k,f,h,D,e,b,l)));a=this.a("borderColor_top",D);b=this.a("borderColor_bottom",D);e=this.a("borderColor_left",D);l=this.a("borderColor_right",D);g=this.a("borderStyle_top",A);r=this.a("borderStyle_bottom",A);var F=this.a("borderStyle_left",
A),n=this.a("borderStyle_right",A);""!=(a+b+e+l).replace(/transparent/g,"")&&(t=t.concat(this.aa(c.l+k/2,c.o+d/2,c.s+k/2+h/2,c.m+d/2+f/2,p,q,m,v,d,k,f,h,a,e,b,l,g,F,r,n)));this.c.insertAdjacentHTML("beforeEnd",t.join(""));this.parent?(this.element.backingCanvas.style.visibility="hidden",this.element.backingHoverCanvas.style.visibility="visible"):(this.element.backingCanvas.style.visibility="visible",this.element.backingHoverCanvas&&(this.element.backingHoverCanvas.style.visibility="hidden"));this.element.style.border=
"";this.element.style.background=""}};H.T=function(a,b,e,c,d,f,k,h,l,g,v,m){var q=.5;a-=this.a(x,0)/2;b-=this.a(y,0)/2;e+=this.a(x,0)/2+this.a(na,0)/2;c+=this.a(y,0)/2+this.a(ma,0)/2;for(var p=[],r=0;r<v;r++){d+=.5;f+=.5;k+=.5;h+=.5;q*=.8;if(0==m.indexOf(C)){var t=m.lastIndexOf(",");t=m.substr(0,t+1)+q*m.substr(t+1,m.indexOf(")")-t-1)+")"}else t=C+this.P(m)+","+q+")";p=p.concat(this.ba(a+l-r,b+g-r,e+2*r,c+2*r,d,f,k,h,2,t))}return p};
var gc=function(a){a=a.srcElement;for(var b=a.firstChild;null!=b;b=b.nextSibling)b.style.width=a.offsetWidth+"px",b.style.height=a.offsetHeight+"px"};
V.prototype.U=function(){var a=this.a("shadowVOffs",0),b=this.a("shadowHOffs",0),e=this.a(oa,0),c=this.a(y,0),d=this.a(ma,0),f=this.a(x,0),k=this.a(na,0),h=this.parent?this.element.backingHoverCanvas:this.element.backingCanvas,l=!1;null==h&&(l=!0);var g=this.element.style.cssText;hc[L(this.element)]=g;var v=this.element.offsetWidth,m=this.element.offsetHeight,q=this.element.currentStyle.paddingLeft||"0px",p=this.element.currentStyle.paddingRight||"0px",r=this.element.currentStyle.paddingBottom||"0px";
p=parseInt(p.substr(0,p.length-2));q=parseInt(q.substr(0,q.length-2));r=parseInt(r.substr(0,r.length-2));if(l){h=document.createElement("DIV");h.attachEvent("onresize",gc);g=document.createElement("DIV");var t=this.element.currentStyle.styleFloat;this.u&&(g.style.marginLeft=this.element.currentStyle.marginLeft||"0",g.style.marginRight=this.element.currentStyle.marginRight||"0",g.style.marginTop=this.element.currentStyle.marginTop||"0",g.style.marginBottom=this.element.currentStyle.marginBottom||"0");
g.style.paddingLeft=q;g.style.paddingRight=p;g.style.paddingTop=p;g.style.paddingBottom=r;g.style.borderStyle="solid";g.style.borderColor=D;g.style.borderLeftWidth=f;g.style.borderRightWidth=k;g.style.borderTopWidth=c;g.style.borderBottomWidth=d;d=document.createElement("DIV");d.style.position="relative";d.style.marginLeft="-"+q;d.style.marginRight="-"+p;d.style.marginTop="-"+p;d.style.marginBottom="-"+r;d.style.top="-"+c;d.style.left="-"+f;this.element.parentElement.replaceChild(g,this.element);
g.appendChild(d);d.appendChild(h);d.appendChild(this.element);g.style.styleFloat=t;if("left"==t||"right"==t)g.style.display="inline",this.element.style.styleFloat=A;g.style.position=this.element.currentStyle.position;this.parent?this.element.backingHoverCanvas=h:this.element.backingCanvas=h}this.c=h;h.m=m;h.s=v;h.l=e-b;h.o=e-a;h.style.position="absolute";h.style.top=a-e+"px";h.style.bottom=a-e+"px";h.style.left=b-e+"px";h.style.right=b-e+"px";h.style.zIndex=-1E4+this.A();this.element.style.position=
"relative";this.element.style.top=c+"px";this.element.style.left=f+"px";g=this.element.parentElement.parentElement;if(a=this.element.currentStyle["float"])g.style.styleFloat=a;l&&(g.style.width=this.element.currentStyle.width,g.style.minWidth=this.element.currentStyle.minWidth,g.style.maxWidth=this.element.currentStyle.maxWidth,g.style.height=this.element.currentStyle.height,this.element.style.margin=0);return h};
V.prototype.A=function(){if(!this.element)return-Number.MAX_VALUE;if(!this.depth){var a=this.element;for(this.depth=0;a!=document.body&&null!=a;)this.depth++,a=a.parentNode}return this.depth};
V.prototype.J=function(a,b,e,c,d,f,k,h,l,g,v,m,q,p,r,t){e=a+e;g=b+c;c=[ha,q,'" filled="true" ',pa,P,fa,this.c.offsetWidth,"px;","height:",this.c.offsetHeight+'px;"',aa,10*(this.c.offsetWidth-1)," ",10*(this.c.offsetHeight-1),'"',' stroked="false"',' path="'];l=[];l=l.concat([w]).concat(W(a,b+d));l=l.concat([u]).concat(W(a,g-2*f));l=l.concat(X(a+f,g-f,f,Math.PI,Math.PI/2));l=l.concat([u]).concat(W(e-2*k,g));l=l.concat(X(e-k,g-k,k,Math.PI/2,0));l=l.concat([u]).concat(W(e,b+h));l=l.concat(X(e-h,b+h,
h,0,-.5*Math.PI));l=l.concat([u]).concat(W(a+d,b));l=l.concat(X(a+d,b+d,d,-.5*Math.PI,Math.PI-.05));return q!=D||r&&r!=A?(a=[],a=r?a.concat([ca,q,'" type="tile" src="',r,'" opacity="',p,'" position = "',"bottom"==t?"0 -0.5":"0 0",'"/>']):a.concat([ca,q,'" opacity="',p,'" />']),c.concat(l.concat(a).concat(["</g_vml_:shape>"])).join("")):[]};
V.prototype.aa=function(a,b,e,c,d,f,k,h,l,g,v,m,q,p,r,t,F,n,M,rc){e=a+e;c=b+c;var da=['<g_vml_:shape fillcolor="0" filled="false" ',pa,P,fa,this.c.offsetWidth,"px;","height:",this.c.offsetHeight,'px;"',aa,10*(this.c.offsetWidth-1)," ",10*(this.c.offsetHeight-1),'" stroked="true"',' strokeweight="{borderWidth}" strokecolor="{borderColor}"',' path="'],ea=['"><g_vml_:stroke opacity="1" joinstyle="miter"',' miterlimit="',10,'"',ba,' weight="{borderWidth}px"',' color="{borderColor}" /></g_vml_:shape>'],
I=[];p!=D&&n!=A&&(n=[],n=n.concat([w]).concat(W(a,b+d-l/2)),n=n.concat([u]).concat(W(a,c-f+v/2)),n=n.concat(X(a+f,c-f,f,Math.PI,Math.PI/2-.25)),I=I.concat([da.join("").replace(G,g).replace(E,p),n.join(""),ea.join("").replace(G,g).replace(E,p)]));r!=D&&M!=A&&(n=[],n=n.concat([w]).concat(W(a+f,c)),n=n.concat([u]).concat(W(e-k+m/2,c)),n=n.concat(X(e-k,c-k,k,Math.PI/2,0)),I=I.concat([da.join("").replace(G,v).replace(E,r),n.join(""),ea.join("").replace(G,v).replace(E,r)]));t!=D&&rc!=A&&(n=[],n=n.concat([w]).concat(W(e,
c-k)),n=n.concat([u]).concat(W(e,b+h-l/2)),n=n.concat(X(e-h,b+h,h,0,-.5*Math.PI)),I=I.concat([da.join("").replace(G,m).replace(E,t)+n.join("")+ea.join("").replace(G,m).replace(E,t)]));q!=D&&F!=A&&(n=[],n=n.concat([w]).concat(W(e-h,b)),n=n.concat([u]).concat(W(a+d,b)),n=n.concat(X(a+d,b+d,d,-.5*Math.PI+.25,Math.PI-.25)),I=I.concat([da.join("").replace(G,l).replace(E,q)+n.join("")+ea.join("").replace(G,l).replace(E,q)]));return I};var Y=[[1,0,0],[0,1,0],[0,0,1]];
function ic(a,b){return{x:10*(a*Y[0][0]+b*Y[1][0]+Y[2][0])-5,y:10*(a*Y[0][1]+b*Y[1][1]+Y[2][1])-5}}function X(a,b,e,c,d){e*=10;var f=ic(a,b);c=ic(a+Math.cos(c)*e-5,b+Math.sin(c)*e-5);a=ic(a+Math.cos(d)*e-5,b+Math.sin(d)*e-5);return[" at ",Math.round(f.x-e),",",Math.round(f.y-e)," ",Math.round(f.x+e),",",Math.round(f.y+e)," ",Math.round(c.x),",",Math.round(c.y)," ",Math.round(a.x),",",Math.round(a.y)]}function W(a,b){a=ic(a,b);return[Math.round(a.x),",",Math.round(a.y)]}
V.prototype.ba=function(a,b,e,c,d,f,k,h,l,g){e=a+e;c=b+c;var v=1;g=String(g);if("rgb"==g.substring(0,3)){var m=g.indexOf("(",3);var q=g.substring(m+1,g.indexOf(")",m+1)).split(",");m="#";for(var p=0;3>p;p++)m+=dc[Number(q[p])];4==q.length&&"a"==g.substr(3,1)&&(v=q[3])}else m=g;m=[m,v];g=m[0];v=[ha,g,'" filled="false" ',pa,P,fa,this.c.offsetWidth,"px;","height:",this.c.offsetHeight,'px;"',aa,10*(this.c.offsetWidth-1)," ",10*(this.c.offsetHeight-1),'"',' stroked="true" strokeweight="',l,'"',' strokecolor="',
g,'"',' path="'];m=['"><g_vml_:stroke opacity="',m[1],'"',' joinstyle="miter"',' miterlimit="',10,'"',ba,' weight="',l,'px"',' color="',g,'" /></g_vml_:shape>'];g=[];g=g.concat([w]).concat(W(a,b+d-l/2));g=g.concat([u]).concat(W(a,c-f+l/2));g=g.concat(X(a+f,c-f,f,Math.PI,Math.PI/2));g=g.concat([w]).concat(W(a+f,c));g=g.concat([u]).concat(W(e-k+l/2,c));g=g.concat(X(e-k,c-k,k,Math.PI/2,0));g=g.concat([w]).concat(W(e,c-k));g=g.concat([u]).concat(W(e,b+h-l/2));g=g.concat(X(e-h,b+h,h,0,-.5*Math.PI));g=
g.concat([w]).concat(W(e-h,b));g=g.concat([u]).concat(W(a+d,b));g=g.concat(X(a+d,b+d,d,-.5*Math.PI,Math.PI-.05));return v.concat(g).concat(m)};V.prototype.P=function(a){a="#"==a.charAt(0)?a.substring(1,a.length):a;if(3==a.length){var b=a.charAt(0),e=a.charAt(1);a=a.charAt(2);a=b+b+e+e+a+a}return[parseInt(a.substring(0,2),16),parseInt(a.substring(2,4),16),parseInt(a.substring(4,6),16)]};var Z={},jc={},kc={},hc={},mc=function(){if(T&&Ab(7)){for(var a in Z){var b=Z[a];if(b){b.reset();var e=b.c;if(e){e.innerHTML="";var c=b.element.parentElement;e=c.parentElement;var d=e.parentElement;b=c.removeChild(b.element);d.replaceChild(b,e);b.style.cssText=hc[L(b)];b.backingCanvas=null}}}Z={};lc()}},nc=5,oc=null,pc=function(){Ca&&(mc(),Ca=!1);oc&&window.clearTimeout(oc);0<nc--&&(oc=window.setTimeout(pc,1E3))},lc=function(){try{var a=document.styleSheets;P="rtl"==document.dir.toLowerCase()?"right":
"left";for(var b={},e=0;e<a.length;e++){var c=a[e];try{for(var d=0;d<c.rules.length;d++){var f=c.rules[d],k=new S(f.style.cssText),h=qc(f.selectorText);if(k.L()&&!db.test(h))for(var l=k.parse(),g=document.querySelectorAll(h),v=0;v<g.length;v++){var m=g[v];sc(m,b,k,l,h);(new S(m.style.cssText.toLowerCase())).parse()}if(k.L()&&db.test(h)){var q=h.replace(db,"");g=document.querySelectorAll(q);for(v=0;v<g.length;v++){m=g[v];var p=jc[L(m)];p||(p=new V,tc(m,p),p.element=m,p.id="hover-retrofitter-"+e,function(M){Qb(M,
"mouseover",function(){jc[L(M)].D()},!0);Qb(M,"mouseout",function(){Z[L(M)].D()},!0)}(m));l=k.parse();for(var r in l)p.H(r,l[r],h);var t=Z[L(m)];t&&(p.parent=t)}}}}catch(M){}}var F=document.getElementById("header-inner");if(F){var n=kc[L(F)];null==n?(k=new S(F.style.cssText.toLowerCase()),l=k.parse(),sc(F,b,k,l),uc(F,l)):sc(F,b,k,n)}vc(b)}catch(M){}},wc=function(){var a=new S(""),b=Q[R],e=Z[L(b)];b.currentStyle.borderStyle!=A&&(e.props.ga=a.b(b.currentStyle.borderTopWidth)||0,e.props.da=a.b(b.currentStyle.borderBottomWidth)||
0,e.props.ea=a.b(b.currentStyle.borderLeftWidth)||0,e.props.fa=a.b(b.currentStyle.borderRightWidth)||0);e.D();if(0==R){Da=!1;a=document.activeElement;b=document.getElementsByTagName("OBJECT");for(e=0;e<b.length;e++)b[e].setActive();a&&a.setActive()}0<R--&&setTimeout(wc,1)},vc=function(a){if(!Da){Da=!0;Q=[];for(var b in a)Q.push(a[b]);Q=Q.sort(function(e,c){e=Z[L(e)];return Z[L(c)].A()-e.A()});R=Q.length-1;0<=R&&wc()}},sc=function(a,b,e,c,d){var f=Z[L(a)];if(null==f){var k="retrofitter-"+b.length;
f=new V;f.element=a;f.id=k;k=f;Z[L(a)]=k}b[L(a)]=a;e.u&&(f.u=!0);e.Z()&&(f.required=!0);for(var h in c)f.H(h,c[h],d);f.props.backgroundColor=f.props.backgroundColor||a.currentStyle.backgroundColor;if(a=jc[L(a)])a.parent=f;f.R()},uc=function(a,b){kc[L(a)]=b},tc=function(a,b){jc[L(a)]=b},xc=/\.(?:(?:(?:tabs|footer|header)-(?:out|inn)er|date-header|Header)(?:\W|$)|(?:column-(?:left|right)-(?:out|inn)er|(?:content|main|post)-outer|widget|Blog)$)|#blog-pager$|.date-outer(|:\w*)$/,qc=function(a){a=a.split(",");
for(var b=[],e=0;e<a.length;e++){var c=N(a[e]);xc.test(c)&&b.push(c)}return b.join(" , ")};
T&&Ab(7)&&!window.retrofitted&&(window.retrofitted=!0,document.namespaces.g_vml_||document.namespaces.add("g_vml_","urn:schemas-microsoft-com:vml","#default#VML"),document.createStyleSheet().cssText="g_vml_\\:fill, g_vml_\\:stroke, g_vml_\\:shape {behavior:url(#default#VML);}",document.attachEvent&&document.attachEvent("onreadystatechange",function(){"complete"==document.readyState&&("10%"!=document.body.currentStyle.zoom&&lc(),window.setTimeout(pc,1E3))}));K("BLOG_CssPropertyParser",S,void 0);K("BLOG_Retrofitter",V,void 0);K("BLOG_IERetrofit",lc,void 0);K("BLOG_ResetIERetrofit",mc,void 0);}).call(this);
