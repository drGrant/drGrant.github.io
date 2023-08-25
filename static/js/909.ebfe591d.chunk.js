"use strict";(self.webpackChunkprotfolio=self.webpackChunkprotfolio||[]).push([[909],{6865:function(e,n,t){t.d(n,{TT:function(){return l.Z},b_:function(){return a.Z},G6:function(){return d},Kr:function(){return o},mY:function(){return s},aB:function(){return c.Z},vO:function(){return u}});var i=t(9439),r=t(2791),o=function(e){var n=(0,r.useState)(!1),t=(0,i.Z)(n,2),o=t[0],a=t[1],s=function(n){n.key===e&&a(!0)},c=function(n){n.key===e&&a(!1)};return(0,r.useEffect)((function(){return window.addEventListener("keydown",s),window.addEventListener("keyup",c),function(){window.removeEventListener("keydown",s),window.removeEventListener("keyup",c)}}),[]),o},a=t(3653);function s(){var e=(0,r.useState)({x:0,y:0}),n=(0,i.Z)(e,2),t=n[0],o=n[1],a=function(e){o({x:e.clientX,y:e.clientY})};return(0,r.useEffect)((function(){return window.addEventListener("mousemove",a),function(){window.removeEventListener("mousemove",a)}}),[]),t}var c=t(4054),u=function(e){var n=function(n){return e(n)};(0,r.useEffect)((function(){return window.addEventListener("wheel",n),function(){window.removeEventListener("wheel",n)}}))},l=t(9917),h=t(6944),f=t(7760);function d(e){var n=(0,r.useMemo)((function(){return new f.Raycaster}),[]),t=(0,r.useMemo)((function(){return new f.Vector3}),[]),i=(0,r.useMemo)((function(){return new f.Vector3}),[]),o=(0,h.z)((function(e){return e.scene}));return function(){return e.current?(n.set(e.current.getWorldPosition(t),e.current.getWorldDirection(i)),n.intersectObjects(o.children)):[]}}},4054:function(e,n,t){t.d(n,{Z:function(){return o}});var i=t(9439),r=t(2791);function o(){var e=(0,r.useState)({width:window.innerWidth,height:window.innerHeight}),n=(0,i.Z)(e,2),t=n[0],o=n[1],a=function(){o({width:window.innerWidth,height:window.innerHeight})};return(0,r.useEffect)((function(){return window.addEventListener("resize",a),function(){window.removeEventListener("resize",a)}}),[]),t}},9909:function(e,n,t){t.r(n),t.d(n,{default:function(){return L}});var i=t(1413),r=t(2791),o=t(338),a=t(976),s=t(2981),c=t(3520),u=t(5892),l=t(2703),h=t(6519),f=t(6008),d=t(3653),m=t(7689),p=t(5712),g=t(5636),x=t(9439),v=t(5987),w=t(184),j=["children","args","mass"];function D(e){var n=e.children,t=e.args,o=e.mass,a=(0,v.Z)(e,j),s=(0,p.Eo)((function(){return(0,i.Z)({args:t||1,mass:o||10},a)}),(0,r.useRef)(null)),c=(0,x.Z)(s,2),u=c[0],l=c[1];return(0,w.jsx)("group",{ref:u,onClick:function(e){l.applyImpulse([0,105,0],[0,3,0])},children:n})}var S=t(5101),Z=t(6944),y=t(1008),k=["animate"];function b(e){var n=e.animate,t=(0,v.Z)(e,k),o=(0,r.useRef)(),a=(0,y.L)("/assets/obj/ship_sm.gltf").nodes,s=function(e){var t=e.meshRef;return(0,Z.A)((function(e,i){var r=e.clock;n({meshRef:t,clock:r,delta:i})})),null};return(0,w.jsxs)("group",(0,i.Z)((0,i.Z)({ref:o},t),{},{dispose:null,children:[n&&(0,w.jsx)(s,{meshRef:o}),(0,w.jsx)("primitive",{object:a.Scene})]}))}y.L.preload("/assets/obj/ship_sm.gltf");var M=t(1453),T=t(4136),E=t(7399);function L(){var e=E.GI,n=(0,m.s0)();return(0,w.jsx)("div",{className:"moon flex h-screen w-screen flex-col items-center justify-center",children:(0,w.jsx)(r.Suspense,{fallback:(0,w.jsx)(o.a,{}),children:(0,w.jsxs)(u.Xz,{performance:{min:.5},flat:!0,linear:!0,shadows:!0,children:[(0,w.jsx)(a.c,{makeDefault:!0,fov:75,far:1e3,near:.01,position:[0,(0,l.Dh)(2),(0,l.Dh)(15)],rotation:[(0,l.Dh)(-.1),(0,l.Dh)(-.02),0],aspect:window.innerWidth/window.innerHeight}),(0,w.jsx)("ambientLight",{color:"white",intensity:.25}),(0,w.jsx)("directionalLight",{intensity:5,position:[-(0,l.Dh)(2.4),(0,l.Dh)(3),-(0,l.Dh)(4.73)],color:"#22bad6",castShadow:!0}),(0,w.jsx)(M.Z,{turbidity:.01,azimuth:.2,inclination:.9,mieCoefficient:.091,mieDirectionalG:.4,rayleigh:.01}),(0,w.jsx)("fog",{color:"black",attach:"fog",near:4,far:1e3}),(0,w.jsx)(s.t,{radius:.1,depth:1e3,count:15e3,factor:0,saturation:10,fade:!0}),(0,w.jsx)(c.z,{minPolarAngle:(0,l.Dh)(.24),maxPolarAngle:(0,l.Dh)(.4),maxAzimuthAngle:(0,l.Dh)(.5),minAzimuthAngle:(0,l.Dh)(-.5),maxDistance:(0,l.Dh)(20),minDistance:(0,l.Dh)(12),enablePan:!1}),(0,w.jsxs)(p.wI,{defaultContactMaterial:{contactEquationRelaxation:.4,friction:.001},gravity:[0,-12,0],allowSleep:!0,children:[(0,w.jsx)(g.Z,{rotation:[-(0,l.Dh)(.5),0,0],position:[0,(0,l.Dh)(-25),0],userData:{id:"floor"},children:(0,w.jsxs)("mesh",{receiveShadow:!0,children:[(0,w.jsx)("planeGeometry",{args:[1e3,1e3]}),(0,w.jsx)("meshLambertMaterial",{opacity:0,transparent:!0})]})}),(0,w.jsxs)("group",{rotation:[0,(0,l.Dh)(4),0],children:[(0,w.jsx)(D,{args:[10],position:[0,10,(0,l.Dh)(-3)],children:(0,w.jsx)("group",{position:[0,0,0],children:(0,w.jsx)(f.Z,(0,i.Z)((0,i.Z)({bumpScale:.3,args:[10,64,64]},(0,d.Z)("textures/moon")),{},{animate:function(e){var n=e.meshRef,t=(e.delta,e.clock);null!==n&&void 0!==n&&n.current&&n.current.rotation.set(0,(0,l.Dh)(t.oldTime/9e4),0)}}))})}),(0,w.jsx)(S.Z,{mass:100,args:[80,10,5],position:[0,(0,l.Dh)(14),0],children:(0,w.jsx)(T.Z,{textstring:"Moon Bowl",fontSize:10,fontHeight:3,position:[(0,l.Dh)(-15),0,0]})}),(0,w.jsxs)(D,{args:[60],position:[0,0,(0,l.Dh)(-130)],type:"Static",children:[(0,w.jsx)(f.Z,(0,i.Z)((0,i.Z)({bumpScale:.3,args:[60,64,64]},(0,d.Z)("textures/earth")),{},{animate:function(e){var n=e.meshRef,t=(e.delta,e.clock);null!==n&&void 0!==n&&n.current&&n.current.rotation.set(0,(0,l.Dh)(t.oldTime/9e4),0)}})),(0,w.jsx)("group",{position:[0,(0,l.Dh)(18),0],onClick:function(){(0,l.sj)(n(e[1].route))},children:(0,w.jsx)(T.Z,{textstring:"<-Back",fontSize:10,fontHeight:.3,position:[(0,l.Dh)(3),0,0],hover:"#ff99cc"})})]})]}),(0,w.jsx)("group",{children:(0,w.jsx)(S.Z,{args:[35,10,40],position:[0,0,-(0,l.Dh)(102)],children:(0,w.jsx)("group",{children:(0,w.jsx)(b,{})})})})]}),(0,w.jsxs)(h.xC,{children:[(0,w.jsx)(h.y8,{focusDistance:30,focalLength:500,bokehScale:7.5,height:10}),(0,w.jsx)(h.dp,{luminanceThreshold:40,luminanceSmoothing:9,height:30}),(0,w.jsx)(h.cy,{opacity:.05}),(0,w.jsx)(h.sY,{eskil:!0,offset:0,darkness:1.1})]})]})})})}},1453:function(e,n,t){t.d(n,{Z:function(){return f}});var i=t(9439),r=t(4671),o=t(7760),a=t(2703),s=t(9335),c=t(7105),u=t(2791),l=t(6944),h=t(184);function f(e){var n=e.inclination,t=void 0===n?.2:n,f=e.azimuth,d=void 0===f?.2:f,m=e.mieCoefficient,p=void 0===m?0:m,g=e.mieDirectionalG,x=void 0===g?.6:g,v=e.rayleigh,w=void 0===v?0:v,j=e.turbidity,D=void 0===j?1:j,S=(0,u.useState)({lightsOn:!1}),Z=(0,i.Z)(S,2),y=Z[0],k=(Z[1],(0,u.useRef)()),b=(0,s.q_)({position:y.lightsOn?[0,(0,a.Dh)(0),(0,a.Dh)(0)]:[0,(0,a.Dh)(0),0],opacity:y.lightsOn?0:.2}),M=y.lightsOn?new o.Vector3(0,.5,-90):new o.Vector3(0,.005,-.1);return(0,l.A)((function(e,n){k.current&&c.Ui.damp3(k.current.material.uniforms.sunPosition,M,.25,n)})),(0,h.jsx)(s.q.group,{position:b.position,children:(0,h.jsx)(r.q,{ref:k,distance:window.innerWidth,sunPosition:M,inclination:t,azimuth:d,mieCoefficient:p,mieDirectionalG:x,rayleigh:w,turbidity:D})})}},6008:function(e,n,t){var i=t(1413),r=t(5987),o=t(2791),a=t(6944),s=t(7760),c=t(6865),u=t(184),l=["heightMapSrc","AO","bumpScale","smokeScale","textureMapSrc","normalMapSrc","smoothMapSrc","metallicMapSrc","edgeMapSrc","args","animate"];n.Z=function(e){var n=e.heightMapSrc,t=e.AO,h=e.bumpScale,f=(e.smokeScale,e.textureMapSrc),d=e.normalMapSrc,m=(e.smoothMapSrc,e.metallicMapSrc),p=e.edgeMapSrc,g=e.args,x=e.animate,v=(0,r.Z)(e,l),w=(0,c.TT)(n),j=(0,c.TT)(t),D=(0,c.TT)(f),S=(0,c.TT)(d),Z=(0,c.TT)(m),y=(0,c.TT)(p),k=(0,o.useRef)(),b=(0,c.G6)(k),M=function(e){var n=e.meshRef;(0,a.A)((function(e,t){var i=e.clock;x({meshRef:n,clock:i,delta:t,raycast:b})}))};return(0,u.jsxs)("mesh",(0,i.Z)((0,i.Z)({transparent:!0},v),{},{ref:k,children:[x&&(0,u.jsx)(M,{meshRef:k}),(0,u.jsx)("sphereGeometry",{attach:"geometry",args:g,receiveShadow:!0,transparent:!0}),(0,u.jsx)("meshPhongMaterial",{bumpScale:h,attach:"material",map:D,aoMap:j,bumpMap:w,lightMap:y,metalnessMap:Z,normalMap:S,side:s.DoubleSide})]}))}}}]);
//# sourceMappingURL=909.ebfe591d.chunk.js.map