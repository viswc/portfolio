(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[837],{5858:function(e,r,n){"use strict";n.d(r,{s:function(){return i}});var t=n(7294);function i(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],r=(0,t.useRef)(0),n=(0,t.useRef)(0),i=(0,t.useRef)(0),u=(0,t.useRef)([]),c=(0,t.useRef)(!1);(0,t.useEffect)((function(){n.current=performance.now(),i.current=0,u.current=[]}),[e]);var a=(0,t.useCallback)((function(){var e=performance.now();i.current=i.current+1,e>=n.current+100&&(r.current=100*i.current/(e-n.current)*10,u.current.push(r.current),n.current=e,i.current=0),u.current.length<=9||(u.current=u.current.slice(-9),u.current.every((function(e){return e<60}))&&(c.current=!0),u.current.every((function(e){return e>70}))&&(c.current=!1))}),[]);return{measureFps:a,fps:r,isLowFps:c}}},8334:function(e,r,n){"use strict";n.r(r),n.d(r,{Earth:function(){return B},EarthSection:function(){return G}});var t=n(4051),i=n.n(t),u=n(5893),c=n.p+"static/media/earth.9136a45c.glb",a=n.p+"static/media/milkyway-nx.0e972b21.hdr",o=n.p+"static/media/milkyway-ny.006459f3.hdr",s=n.p+"static/media/milkyway-nz.5f35d5a4.hdr",f=n.p+"static/media/milkyway-px.2922755b.hdr",l=n.p+"static/media/milkyway-py.7aeec30d.hdr",d=n.p+"static/media/milkyway-pz.0ef64b21.hdr",p="/_next/static/media/milkyway.dfc91e8e.jpg",v=n(7686),m=n(6126),h=n(7e3),y=n(2579),b=n(6240),w=n(7378),x=n(4992),g=n(5858),E=n(7294),S=n(9477),_=n(7333),R=n(9997),j=function(e,r,n){return n?Math.min(e,r)===e?r:Math.max(e,n)===e?n:e:Math.max(e,r)===r?e:r},k=n(7142),A=n(4764);function C(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function P(e){return function(e){if(Array.isArray(e))return C(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"===typeof e)return C(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return C(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var O=n(1599),z=n.n(O);function M(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function N(e,r,n,t,i,u,c){try{var a=e[u](c),o=a.value}catch(s){return void n(s)}a.done?r(o):Promise.resolve(o).then(t,i)}function F(e){return function(){var r=this,n=arguments;return new Promise((function(t,i){var u=e.apply(r,n);function c(e){N(u,t,i,c,a,"next",e)}function a(e){N(u,t,i,c,a,"throw",e)}c(void 0)}))}}function L(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function T(e,r,n){return T=L()?Reflect.construct:function(e,r,n){var t=[null];t.push.apply(t,r);var i=new(Function.bind.apply(e,t));return n&&q(i,n.prototype),i},T.apply(null,arguments)}function D(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function q(e,r){return q=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e},q(e,r)}function I(e){return function(e){if(Array.isArray(e))return M(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"===typeof e)return M(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return M(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var H={x:0,y:0,z:2},J=function(e,r,n){return e+n*(r-e)},W=function(e){return Object.keys(e).map((function(r){return parseFloat(Math.round(100*e[r])/100).toFixed(2)})).join(", ")},Y=function(e){return e&&e.camera?{x:e.camera[0],y:e.camera[1],z:e.camera[2]}:H},U={stiffness:80,damping:40,mass:2,restSpeed:.001,restDelta:.001},X={stiffness:40,damping:30,mass:2,restSpeed:.001,restDelta:.001},Z={stiffness:40,damping:30},$=(0,E.createContext)({}),B=function(e){var r=e.position,n=void 0===r?[0,0,0]:r,t=e.scale,C=void 0===t?1:t,O=e.hideMeshes,M=void 0===O?[]:O,N=e.labels,L=void 0===N?[]:N,q=e.className,B=e.children,G=(0,E.useState)(!1),K=G[0],Q=G[1],V=(0,E.useState)(!1),ee=V[0],re=V[1],ne=(0,E.useState)(!1),te=ne[0],ie=ne[1],ue=(0,E.useState)(!1),ce=ue[0],ae=ue[1],oe=(0,E.useRef)([]),se=(0,E.useRef)(),fe=(0,E.useRef)(),le=(0,E.useRef)(),de=(0,E.useRef)(),pe=(0,E.useRef)(),ve=(0,E.useRef)(),me=(0,E.useRef)(),he=(0,E.useRef)(),ye=(0,E.useRef)(),be=(0,E.useRef)(),we=(0,E.useRef)(),xe=(0,E.useRef)(),ge=(0,x.NM)(le),Ee=(0,E.useRef)(),Se=(0,E.useRef)(Y(oe.current[0])),_e=(0,E.useRef)([]),Re=(0,E.useRef)(),je=(0,E.useRef)(),ke=(0,E.useRef)(),Ae=(0,E.useRef)(),Ce=(0,x.iP)(),Pe=Ce.width,Oe=Ce.height,ze=(0,b.J)(),Me=(0,w.q)(0,U),Ne=(0,w.q)(0,U),Fe=(0,w.q)(0,U),Le=(0,w.q)(0,X),Te=(0,w.q)(0,X),De=(0,w.q)(0,X),qe=(0,w.q)(0,Z),Ie=(0,g.s)(ge),He=Ie.measureFps,Je=Ie.isLowFps,We=(0,E.useCallback)((function(){if(ge){Ee.current=requestAnimationFrame(We);var e=me.current.getDelta();xe.current.update(e),Re.current.update(),pe.current.render(de.current,ve.current),_e.current.forEach((function(e){var r=e.element,n=e.position,t=e.sprite,i=T(S.Pa4,I(n)),u=ve.current.position.distanceTo(be.current.position),c=ve.current.position.distanceTo(t.position)>u;i.project(ve.current),i.x=Math.round((.5+i.x/2)*window.innerWidth),i.y=Math.round((.5-i.y/2)*window.innerHeight),r.style.setProperty("--posX",(0,k.ml)(i.x)),r.style.setProperty("--posY",(0,k.ml)(i.y)),r.dataset.occluded=!!c})),He(),Je.current?pe.current.setPixelRatio(.5):pe.current.setPixelRatio(1)}else cancelAnimationFrame(Ee.current)}),[ge,He,Je]);(0,E.useEffect)((function(){Ae.current=!0;var e=window.innerWidth,r=window.innerHeight;pe.current=new S.CP7({canvas:le.current,antialias:!1,alpha:!0,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!0}),pe.current.setPixelRatio(1),pe.current.outputEncoding=S.knz,pe.current.physicallyCorrectLights=!0,pe.current.toneMapping=S.LY2,ve.current=new S.cPb(54,e/r,.1,100),ve.current.position.x=Se.current.x,ve.current.position.y=Se.current.y,ve.current.position.z=Se.current.z,ve.current.lookAt(0,0,0),Me.set(ve.current.position.x,!1),Ne.set(ve.current.position.y,!1),Fe.set(ve.current.position.z,!1),de.current=new S.xsS,me.current=new S.SUY,ye.current=new S.iMs;var n=new S.Mig(2236962,.05),t=new S.Ox3(16777215,1.5);t.position.set(3,0,1);var i=[n,t];return i.forEach((function(e){return de.current.add(e)})),Re.current=new _.z(ve.current,le.current),Re.current.enableZoom=!1,Re.current.enablePan=!1,Re.current.enableDamping=!1,Re.current.rotateSpeed=.5,function(){Ae.current=!1,cancelAnimationFrame(Ee.current),(0,A.Ji)(i),(0,A.in)(de.current),(0,A.e8)(pe.current)}}),[]),(0,E.useEffect)((function(){var e=function(){re(!0),Me.stop(),Ne.stop(),Fe.stop()},r=function(){Me.set(ve.current.position.x,!1),Ne.set(ve.current.position.y,!1),Fe.set(ve.current.position.z,!1),re(!1)};return Re.current.addEventListener("start",e),Re.current.addEventListener("end",r),function(){Re.current.removeEventListener("start",e),Re.current.removeEventListener("end",r)}}),[Me,Ne,Fe]),(0,E.useEffect)((function(){if(K){var e=(0,A.x2)("Chunk",be.current),r=(0,A.x2)("Atmosphere",be.current),n=function(e,r){ve.current.position[e]=r},t=Me.onChange((function(e){return n("x",e)})),i=Ne.onChange((function(e){return n("y",e)})),u=Fe.onChange((function(e){return n("z",e)})),c=function(r,n){e.position[r]=n},a=Le.onChange((function(e){return c("x",e)})),o=Te.onChange((function(e){return c("y",e)})),s=De.onChange((function(e){return c("z",e)})),f=qe.onChange((function(e){r.material.opacity=e}));return function(){t(),i(),u(),a(),o(),s(),f()}}}),[Me,Ne,Fe,Le,Te,De,K,qe]),(0,E.useEffect)((function(){Pe<=k.BC.tablet&&(Re.current.enabled=!1)}),[Pe]),(0,E.useEffect)((function(){if(!K){var e=new R.q,r=new S.dpR,t=new S.anP(pe.current);t.compileCubemapShader();var u=function(){var e=F(i().mark((function e(){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.Zf.loadAsync(c);case 2:r=e.sent,be.current=r.scene,we.current=r.animations,xe.current=new S.Xcj(be.current),xe.current.timeScale=.1,be.current.traverse(function(){var e=F(i().mark((function e(r){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=r.material,"Atmosphere"===r.name&&(n.alphaMap=n.map),!n){e.next=5;break}return e.next=5,pe.current.initTexture(n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()),be.current.position.x=n[0],be.current.position.y=n[1],be.current.position.z=n[2],be.current.scale.x=C,be.current.scale.y=C,be.current.scale.z=C;case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var r=F(i().mark((function r(){var n;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.loadAsync([a,o,s,f,l,d]);case 2:return(n=r.sent).magFilter=S.wem,je.current=t.fromCubemap(n),t.dispose(),r.next=8,pe.current.initTexture(je.current.texture);case 8:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),m=function(){var e=F(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.loadAsync(p);case 2:return(n=e.sent).mapping=S.dSO,n.encoding=S.knz,de.current.background=n,e.next=8,pe.current.initTexture(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=F(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([m(),v(),u()]);case 2:be.current.traverse((function(e){var r=e.material;r&&(r.envMap=je.current.texture,r.needsUpdate=!0)})),Ae.current&&Q(!0);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,E.startTransition)((function(){h(),setTimeout((function(){ae(!0)}),1e3)}))}}),[K,n,C]),(0,E.useEffect)((function(){return K&&!ke.current&&(de.current.add(be.current),ke.current=!0),K&&ge&&(ie(!0),We()),function(){cancelAnimationFrame(Ee.current)}}),[We,ge,K]),(0,E.useEffect)((function(){K&&(fe.current.innerHTML="",_e.current=L.map((function(e){var r,n=document.createElement("div");n.classList.add(z().label),n.dataset.hidden=!0,n.style.setProperty("--delay","".concat(e.delay||0,"ms")),n.textContent=e.text,fe.current.appendChild(n);var t=new S.jyi;return(r=t.position).set.apply(r,I(e.position)),t.scale.set(60,60,1),function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){D(e,r,n[r])}))}return e}({element:n},e,{sprite:t})})))}),[L,K]),(0,E.useEffect)((function(){pe.current.setSize(Pe,Oe),ve.current.aspect=Pe/Oe,ve.current.updateProjectionMatrix()}),[Pe,Oe]),(0,E.useEffect)((function(){var e=le.current,r=function(e){var r=window.innerWidth,n=window.innerHeight,t=W(ve.current.position);console.info({cameraPosition:t}),he.current=new S.FM8(e.clientX/r*2-1,-e.clientY/n*2+1),ye.current.setFromCamera(he.current,ve.current);var i=ye.current.intersectObjects(de.current.children,!0);if(i.length>0){var u=W(i[0].point);console.info({clickPosition:u})}};return function(){e.removeEventListener("click",r)}}),[]);var Ye=(0,E.useCallback)((function(){if(se.current){var e,r=se.current.offsetTop,n=window.innerHeight,t=window.scrollY-r,i=function(e){var r=oe.current[e].meshes;be.current.traverse((function(e){var n=e.name,t=(0,A.x2)("Chunk",be.current),i=null===r||void 0===r?void 0:r.includes(n),u=null===M||void 0===M?void 0:M.includes(n);if(i)if("Atmosphere"===n)e.visible=!0,qe.set(1);else if("Chunk"===n){var c,a=new S.Pa4(-.4,.4,.4);if(e.visible=!0,ze)(c=e.position).set.apply(c,I(a.toArray()));else Le.set(a.x),Te.set(a.y),De.set(a.z)}else"EarthFull"===n&&t.visible?e.visible=!1:e.visible=!0;else if(u&&!i)if("Atmosphere"===n)qe.set(0);else if("Chunk"===n){var o=new S.Pa4(0,0,0);(function(e,r){var n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return Math.round(100*(e+Number.EPSILON))/100};return n(null===e||void 0===e?void 0:e.x)===n(null===r||void 0===r?void 0:r.x)&&n(null===e||void 0===e?void 0:e.y)===n(null===r||void 0===r?void 0:r.y)&&n(null===e||void 0===e?void 0:e.z)===n(null===r||void 0===r?void 0:r.z)})(o,t.position)&&(e.visible=!1),Le.set(o.x),Te.set(o.y),De.set(o.z)}else"EarthPartial"===n&&t.visible?e.visible=!0:e.visible=!1}))};requestAnimationFrame((function(){var r,u=oe.current.length-1,c=Math.floor(t/n),a=j(c,0,u),o=oe.current[a],s=oe.current[a+1],f=Y(o)||H,l=Y(s)||H,d=j((t-n*a)/n,0,1),p=J(f.x,l.x,d),v=J(f.y,l.y,d),m=J(f.z,l.z,d);e!==f&&oe.current.length&&o&&(i(a),function(e){var r=oe.current[e].animations;ze||(we.current.forEach((function(e,n){r.find((function(e){return e.includes(n.toString())}))||xe.current.clipAction(e).reset().stop()})),we.current.length&&oe.current[e].animations&&r.forEach((function(e){var r=e.split(":"),n=we.current[Number(r[0])],t=xe.current.clipAction(n);r[1]&&"loop"===r[1]||(t.clampWhenFinished=!0,t.loop=S.jAl),t.play()})))}(a),r=a,_e.current.forEach((function(e){e.hidden&&(e.element.dataset.hidden=!0,e.element.setAttribute("aria-hidden",!0))})),oe.current[r].labels.forEach((function(e){_e.current.filter((function(r){return r.text===e})).forEach((function(e){e.element.dataset.hidden=!1,e.element.setAttribute("aria-hidden",!1)}))}))),e=f,ee||(ze?ve.current.position.set(p,v,m):(Me.set(p),Ne.set(v),Fe.set(m)))}))}}),[Me,Ne,Fe,Le,Te,De,ee,M,qe,ze]);(0,E.useEffect)((function(){var e=function(e,r){var n=0;return function(){for(var t=arguments.length,i=new Array(t),u=0;u<t;u++)i[u]=arguments[u];var c=new Date;c-n>=r&&(e.apply(void 0,P(i)),n=c)}}(Ye,100);return K&&ge&&window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[Ye,ge,K,qe]);var Ue=(0,E.useCallback)((function(e){oe.current=I(oe.current).concat([e])}),[]),Xe=(0,E.useCallback)((function(e){oe.current=oe.current.filter((function(r){return r!==e}))}),[]);return(0,u.jsx)($.Provider,{value:{registerSection:Ue,unregisterSection:Xe},children:(0,u.jsxs)("div",{className:(0,k.Sh)(z().earth,q),ref:se,children:[(0,u.jsxs)("div",{className:z().viewport,children:[(0,u.jsx)("canvas",{className:z().canvas,"data-visible":K&&te,"data-grabbing":ee,ref:le}),(0,u.jsx)("div",{className:z().labels,"aria-live":"polite",ref:fe}),(0,u.jsx)("div",{className:z().vignette})]}),(0,u.jsx)("div",{className:z().sections,children:B}),(0,u.jsx)(y.u,{unmount:!0,in:!K&&ce,timeout:(0,k.zG)(h.T.base.durationL),children:function(e){return(0,u.jsx)(m.$,{className:z().loader,"data-visible":e,children:(0,u.jsx)(v.a,{})})}})]})})},G=(0,E.memo)((function(e){var r=e.children,n=e.scrim,t=e.scrimReverse,i=e.className,c=e.camera,a=void 0===c?[0,0,0]:c,o=e.animations,s=void 0===o?[]:o,f=e.meshes,l=void 0===f?[]:f,d=e.labels,p=void 0===d?[]:d,v=(0,E.useContext)($),m=v.registerSection,h=v.unregisterSection,y=(0,E.useRef)(),b=JSON.stringify(s)+JSON.stringify(a)+JSON.stringify(p)+JSON.stringify(l);return(0,E.useEffect)((function(){var e={camera:a,animations:s,meshes:l,labels:p,sectionRef:y};return m(e),function(){h(e)}}),[b,m,h]),(0,u.jsx)("div",{className:(0,k.Sh)(z().section,i),"data-scrim":n,"data-scrim-reverse":t,ref:y,children:r})}))},4764:function(e,r,n){"use strict";n.d(r,{Ji:function(){return l},Zf:function(){return a},e8:function(){return f},in:function(){return o},x2:function(){return d}});var t=n(4976),i=n(7607),u=new t._,c=new i.E;u.setDecoderPath("/draco/"),c.setDRACOLoader(u);var a=c,o=function(e){null===e||void 0===e||e.traverse((function(e){if(e.isMesh)if(e.geometry.dispose(),e.material.isMaterial)s(e.material);else{var r=!0,n=!1,t=void 0;try{for(var i,u=e.material[Symbol.iterator]();!(r=(i=u.next()).done);r=!0){var c=i.value;s(c)}}catch(a){n=!0,t=a}finally{try{r||null==u.return||u.return()}finally{if(n)throw t}}}}))},s=function(e){e.dispose();var r=!0,n=!1,t=void 0;try{for(var i,u=Object.keys(e)[Symbol.iterator]();!(r=(i=u.next()).done);r=!0){var c=e[i.value];c&&"object"===typeof c&&"minFilter"in c&&c.dispose()}}catch(a){n=!0,t=a}finally{try{r||null==u.return||u.return()}finally{if(n)throw t}}},f=function(e){e.dispose(),e=null},l=function(e){var r=!0,n=!1,t=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done);r=!0){var c=i.value;c.parent.remove(c)}}catch(a){n=!0,t=a}finally{try{r||null==u.return||u.return()}finally{if(n)throw t}}},d=function(e,r){var n;return r.traverse((function(r){r.name===e&&(n=r)})),n}},1599:function(e){e.exports={earth:"Earth_earth__piiT3",loader:"Earth_loader__nCKTo",viewport:"Earth_viewport__H5WT9",canvas:"Earth_canvas__6I1e3",labels:"Earth_labels__W_evn",label:"Earth_label__kUDoF",vignette:"Earth_vignette__2iyTL",sections:"Earth_sections__o_Ycb",section:"Earth_section__0Hbju"}}}]);