(this.webpackChunkpinafore=this.webpackChunkpinafore||[]).push([[3976],{1978:(e,a,t)=>{"use strict";t.d(a,{Z:()=>i});var n=t(4178);function s(e){var a;if((0,n.S1)(this,e),this._state=(0,n.f0)({},e.data),this._intro=!0,document.getElementById("svelte-1le50e0-style")||((a=(0,n.az)("style")).id="svelte-1le50e0-style",a.textContent=".ui-settings{background:var(--form-bg);border:1px solid var(--main-border);border-radius:4px;padding:20px;line-height:2em}.setting-group{display:block;padding:5px 0}@media(max-width: 240px){.ui-settings{padding:20px 10px}}",(0,n.R3)(document.head,a)),this._fragment=(this._state,{c:n.ZT,l:n.ZT,m:n.ZT,p:n.ZT,d:n.ZT}),e.target){var t=(0,n.pI)(e.target);e.hydrate?this._fragment.l(t):this._fragment.c(),t.forEach(n.r2),this._mount(e.target,e.anchor)}}(0,n.f0)(s.prototype,n.uS);const i=s},7995:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>y});var n=t(4178),s=t(2905),i=t(1382),r=t(3256),o=t(801),c=t(2936),l=t(6612),d=t(1978),h=t(7265);var g={onChange(e){const{markMediaAsSensitive:a,neverMarkMediaAsSensitive:t}=this.store.get();a&&t&&("choice-mark-media-sensitive"===e.target.id?this.store.set({neverMarkMediaAsSensitive:!1}):this.store.set({markMediaAsSensitive:!1})),this.store.save()}};function u(e,a){var t,s,i,r={instanceName:a.$currentInstance},c=new o.Z({root:e.root,store:e.store,data:r});return{c(){t=(0,n.az)("h2"),s=(0,n.rw)(a.themeTitle),i=(0,n.rw)("\n    "),c._fragment.c()},l(e){t=(0,n.d$)(e,"H2",{},!1);var r=(0,n.pI)(t);s=(0,n.M4)(r,a.themeTitle),r.forEach(n.r2),i=(0,n.M4)(e,"\n    "),c._fragment.l(e)},m(e,a){(0,n.$T)(e,t,a),(0,n.R3)(t,s),(0,n.$T)(e,i,a),c._mount(e,a)},p(e,a){e.themeTitle&&(0,n.a_)(s,a.themeTitle);var t={};e.$currentInstance&&(t.instanceName=a.$currentInstance),c._set(t)},d(e){e&&((0,n.r2)(t),(0,n.r2)(i)),c.destroy(e)}}}function p(e){if((0,n.S1)(this,e),this.store=c.h,this._state=(0,n.f0)(this.store._init(["loggedInInstancesInOrder","currentInstance","neverMarkMediaAsSensitive","ignoreBlurhash","markMediaAsSensitive","largeInlineMedia","autoplayGifs","disableCustomScrollbars","disableInfiniteScroll","hideCards","underlineLinks","reduceMotion","alwaysShowFocusRing","disableTapOnStatus","omitEmojiInDisplayNames","disableLongAriaLabels","isUserLoggedIn"]),e.data),this.store._add(this,["loggedInInstancesInOrder","currentInstance","neverMarkMediaAsSensitive","ignoreBlurhash","markMediaAsSensitive","largeInlineMedia","autoplayGifs","disableCustomScrollbars","disableInfiniteScroll","hideCards","underlineLinks","reduceMotion","alwaysShowFocusRing","disableTapOnStatus","omitEmojiInDisplayNames","disableLongAriaLabels","isUserLoggedIn"]),this._recompute({$loggedInInstancesInOrder:1,$currentInstance:1},this._state),this._intro=!0,this._handlers.destroy=[n.iT],this._fragment=function(e,a){var t,s,i,o,c,h,g,p,m,f,y,I,$,b,k,R,w,v,M,N,_,E,S,L,A,T,z,C,H,P,x,U,B,O,Z,D,G,F,j,Y,J,W,q,K,Q,V,X,ee,ae,te,ne,se,ie,re,oe,ce,le,de,he,ge,ue,pe,me,fe,ye,Ie,$e,be,ke,Re,we,ve,Me;function Ne(){e.store.set({neverMarkMediaAsSensitive:m.checked})}function _e(a){e.onChange(a)}function Ee(){e.store.set({ignoreBlurhash:$.checked})}function Se(a){e.onChange(a)}function Le(){e.store.set({markMediaAsSensitive:w.checked})}function Ae(a){e.onChange(a)}function Te(){e.store.set({largeInlineMedia:_.checked})}function ze(a){e.onChange(a)}function Ce(){e.store.set({autoplayGifs:A.checked})}function He(a){e.onChange(a)}function Pe(){e.store.set({disableCustomScrollbars:B.checked})}function xe(a){e.onChange(a)}function Ue(){e.store.set({disableInfiniteScroll:G.checked})}function Be(a){e.onChange(a)}var Oe=new l.Z({root:e.root,store:e.store,data:{text:"infinite scroll",tooltipText:"When infinite scroll is disabled, new toots will not automatically appear at the bottom or top of the timeline. Instead, buttons will allow you to load more content on demand."}});function Ze(){e.store.set({hideCards:J.checked})}function De(a){e.onChange(a)}function Ge(){e.store.set({underlineLinks:Q.checked})}function Fe(a){e.onChange(a)}function je(){e.store.set({reduceMotion:ie.checked})}function Ye(a){e.onChange(a)}function Je(){e.store.set({alwaysShowFocusRing:le.checked})}function We(a){e.onChange(a)}var qe=new l.Z({root:e.root,store:e.store,data:{text:"focus ring",tooltipText:"The focus ring is the outline showing the currently focused element. By default, it's only shown when using the keyboard (not mouse or touch), but you may choose to always show it."}});function Ke(){e.store.set({disableTapOnStatus:ue.checked})}function Qe(a){e.onChange(a)}function Ve(){e.store.set({omitEmojiInDisplayNames:ye.checked})}function Xe(a){e.onChange(a)}function ea(){e.store.set({disableLongAriaLabels:ke.checked})}function aa(a){e.onChange(a)}var ta=a.$isUserLoggedIn&&u(e,a),na=new r.Z({root:e.root,store:e.store,slots:{default:(0,n.xJ)()},data:{page:"settings/general",label:"General"}}),sa=new d.Z({root:e.root,store:e.store});return{c(){t=(0,n.az)("h1"),s=(0,n.rw)("General settings"),i=(0,n.rw)("\n\n  "),o=(0,n.az)("h2"),c=(0,n.rw)("Media"),h=(0,n.rw)("\n  "),g=(0,n.az)("form"),p=(0,n.az)("label"),m=(0,n.az)("input"),f=(0,n.rw)("\n      Show sensitive media by default"),y=(0,n.rw)("\n    "),I=(0,n.az)("label"),$=(0,n.az)("input"),b=(0,n.rw)("\n      Show a plain gray color for sensitive media"),k=(0,n.rw)("\n    "),R=(0,n.az)("label"),w=(0,n.az)("input"),v=(0,n.rw)("\n      Treat all media as sensitive"),M=(0,n.rw)("\n    "),N=(0,n.az)("label"),_=(0,n.az)("input"),E=(0,n.rw)("\n      Show large inline images and videos"),S=(0,n.rw)("\n    "),L=(0,n.az)("label"),A=(0,n.az)("input"),T=(0,n.rw)("\n      Autoplay animated GIFs"),z=(0,n.rw)("\n\n  "),C=(0,n.az)("h2"),H=(0,n.rw)("UI"),P=(0,n.rw)("\n  "),x=(0,n.az)("form"),U=(0,n.az)("label"),B=(0,n.az)("input"),O=(0,n.rw)("\n      Disable custom scrollbars"),Z=(0,n.rw)("\n    "),D=(0,n.az)("label"),G=(0,n.az)("input"),F=(0,n.rw)("\n      Disable\n        "),Oe._fragment.c(),j=(0,n.rw)("\n    "),Y=(0,n.az)("label"),J=(0,n.az)("input"),W=(0,n.rw)("\n      Hide link preview cards"),q=(0,n.rw)("\n    "),K=(0,n.az)("label"),Q=(0,n.az)("input"),V=(0,n.rw)("\n      Underline links in toots and profiles"),X=(0,n.rw)("\n\n  "),ee=(0,n.az)("h2"),ae=(0,n.rw)("Accessibility"),te=(0,n.rw)("\n  "),ne=(0,n.az)("form"),se=(0,n.az)("label"),ie=(0,n.az)("input"),re=(0,n.rw)("\n      Reduce motion in UI animations"),oe=(0,n.rw)("\n    "),ce=(0,n.az)("label"),le=(0,n.az)("input"),de=(0,n.rw)("\n      Always show\n      "),qe._fragment.c(),he=(0,n.rw)("\n    "),ge=(0,n.az)("label"),ue=(0,n.az)("input"),pe=(0,n.rw)("\n      Disable tappable area on entire toot"),me=(0,n.rw)("\n    "),fe=(0,n.az)("label"),ye=(0,n.az)("input"),Ie=(0,n.rw)("\n      Remove emoji from user display names"),$e=(0,n.rw)("\n    "),be=(0,n.az)("label"),ke=(0,n.az)("input"),Re=(0,n.rw)("\n      Use short article ARIA labels"),we=(0,n.rw)("\n\n  "),ta&&ta.c(),ve=(0,n.Yr)(),na._fragment.c(),Me=(0,n.rw)("\n"),sa._fragment.c(),this.h()},l(e){t=(0,n.d$)(e,"H1",{},!1);var a=(0,n.pI)(t);s=(0,n.M4)(a,"General settings"),a.forEach(n.r2),i=(0,n.M4)(e,"\n\n  "),o=(0,n.d$)(e,"H2",{},!1);var r=(0,n.pI)(o);c=(0,n.M4)(r,"Media"),r.forEach(n.r2),h=(0,n.M4)(e,"\n  "),g=(0,n.d$)(e,"FORM",{class:!0},!1);var l=(0,n.pI)(g);p=(0,n.d$)(l,"LABEL",{class:!0},!1);var d=(0,n.pI)(p);m=(0,n.d$)(d,"INPUT",{type:!0,id:!0},!1),(0,n.pI)(m).forEach(n.r2),f=(0,n.M4)(d,"\n      Show sensitive media by default"),d.forEach(n.r2),y=(0,n.M4)(l,"\n    "),I=(0,n.d$)(l,"LABEL",{class:!0},!1);var u=(0,n.pI)(I);$=(0,n.d$)(u,"INPUT",{type:!0,id:!0},!1),(0,n.pI)($).forEach(n.r2),b=(0,n.M4)(u,"\n      Show a plain gray color for sensitive media"),u.forEach(n.r2),k=(0,n.M4)(l,"\n    "),R=(0,n.d$)(l,"LABEL",{class:!0},!1);var Ne=(0,n.pI)(R);w=(0,n.d$)(Ne,"INPUT",{type:!0,id:!0},!1),(0,n.pI)(w).forEach(n.r2),v=(0,n.M4)(Ne,"\n      Treat all media as sensitive"),Ne.forEach(n.r2),M=(0,n.M4)(l,"\n    "),N=(0,n.d$)(l,"LABEL",{class:!0},!1);var _e=(0,n.pI)(N);_=(0,n.d$)(_e,"INPUT",{type:!0,id:!0},!1),(0,n.pI)(_).forEach(n.r2),E=(0,n.M4)(_e,"\n      Show large inline images and videos"),_e.forEach(n.r2),S=(0,n.M4)(l,"\n    "),L=(0,n.d$)(l,"LABEL",{class:!0},!1);var Ee=(0,n.pI)(L);A=(0,n.d$)(Ee,"INPUT",{type:!0,id:!0},!1),(0,n.pI)(A).forEach(n.r2),T=(0,n.M4)(Ee,"\n      Autoplay animated GIFs"),Ee.forEach(n.r2),l.forEach(n.r2),z=(0,n.M4)(e,"\n\n  "),C=(0,n.d$)(e,"H2",{},!1);var Se=(0,n.pI)(C);H=(0,n.M4)(Se,"UI"),Se.forEach(n.r2),P=(0,n.M4)(e,"\n  "),x=(0,n.d$)(e,"FORM",{class:!0},!1);var Le=(0,n.pI)(x);U=(0,n.d$)(Le,"LABEL",{class:!0},!1);var Ae=(0,n.pI)(U);B=(0,n.d$)(Ae,"INPUT",{type:!0,id:!0},!1),(0,n.pI)(B).forEach(n.r2),O=(0,n.M4)(Ae,"\n      Disable custom scrollbars"),Ae.forEach(n.r2),Z=(0,n.M4)(Le,"\n    "),D=(0,n.d$)(Le,"LABEL",{class:!0},!1);var Te=(0,n.pI)(D);G=(0,n.d$)(Te,"INPUT",{type:!0,id:!0},!1),(0,n.pI)(G).forEach(n.r2),F=(0,n.M4)(Te,"\n      Disable\n        "),Oe._fragment.l(Te),Te.forEach(n.r2),j=(0,n.M4)(Le,"\n    "),Y=(0,n.d$)(Le,"LABEL",{class:!0},!1);var ze=(0,n.pI)(Y);J=(0,n.d$)(ze,"INPUT",{type:!0,id:!0},!1),(0,n.pI)(J).forEach(n.r2),W=(0,n.M4)(ze,"\n      Hide link preview cards"),ze.forEach(n.r2),q=(0,n.M4)(Le,"\n    "),K=(0,n.d$)(Le,"LABEL",{class:!0},!1);var Ce=(0,n.pI)(K);Q=(0,n.d$)(Ce,"INPUT",{type:!0,id:!0},!1),(0,n.pI)(Q).forEach(n.r2),V=(0,n.M4)(Ce,"\n      Underline links in toots and profiles"),Ce.forEach(n.r2),Le.forEach(n.r2),X=(0,n.M4)(e,"\n\n  "),ee=(0,n.d$)(e,"H2",{},!1);var He=(0,n.pI)(ee);ae=(0,n.M4)(He,"Accessibility"),He.forEach(n.r2),te=(0,n.M4)(e,"\n  "),ne=(0,n.d$)(e,"FORM",{class:!0},!1);var Pe=(0,n.pI)(ne);se=(0,n.d$)(Pe,"LABEL",{class:!0},!1);var xe=(0,n.pI)(se);ie=(0,n.d$)(xe,"INPUT",{type:!0,id:!0},!1),(0,n.pI)(ie).forEach(n.r2),re=(0,n.M4)(xe,"\n      Reduce motion in UI animations"),xe.forEach(n.r2),oe=(0,n.M4)(Pe,"\n    "),ce=(0,n.d$)(Pe,"LABEL",{class:!0},!1);var Ue=(0,n.pI)(ce);le=(0,n.d$)(Ue,"INPUT",{type:!0,id:!0},!1),(0,n.pI)(le).forEach(n.r2),de=(0,n.M4)(Ue,"\n      Always show\n      "),qe._fragment.l(Ue),Ue.forEach(n.r2),he=(0,n.M4)(Pe,"\n    "),ge=(0,n.d$)(Pe,"LABEL",{class:!0},!1);var Be=(0,n.pI)(ge);ue=(0,n.d$)(Be,"INPUT",{type:!0,id:!0},!1),(0,n.pI)(ue).forEach(n.r2),pe=(0,n.M4)(Be,"\n      Disable tappable area on entire toot"),Be.forEach(n.r2),me=(0,n.M4)(Pe,"\n    "),fe=(0,n.d$)(Pe,"LABEL",{class:!0},!1);var Ze=(0,n.pI)(fe);ye=(0,n.d$)(Ze,"INPUT",{type:!0,id:!0},!1),(0,n.pI)(ye).forEach(n.r2),Ie=(0,n.M4)(Ze,"\n      Remove emoji from user display names"),Ze.forEach(n.r2),$e=(0,n.M4)(Pe,"\n    "),be=(0,n.d$)(Pe,"LABEL",{class:!0},!1);var De=(0,n.pI)(be);ke=(0,n.d$)(De,"INPUT",{type:!0,id:!0},!1),(0,n.pI)(ke).forEach(n.r2),Re=(0,n.M4)(De,"\n      Use short article ARIA labels"),De.forEach(n.r2),Pe.forEach(n.r2),we=(0,n.M4)(e,"\n\n  "),ta&&ta.l(e),ve=(0,n.Yr)(),na._fragment.l(e),Me=(0,n.M4)(e,"\n"),sa._fragment.l(e),this.h()},h(){(0,n.NH)(m,"change",Ne),(0,n.NH)(m,"change",_e),(0,n.P$)(m,"type","checkbox"),m.id="choice-never-mark-media-sensitive",p.className="setting-group",(0,n.NH)($,"change",Ee),(0,n.NH)($,"change",Se),(0,n.P$)($,"type","checkbox"),$.id="choice-use-blurhash",I.className="setting-group",(0,n.NH)(w,"change",Le),(0,n.NH)(w,"change",Ae),(0,n.P$)(w,"type","checkbox"),w.id="choice-mark-media-sensitive",R.className="setting-group",(0,n.NH)(_,"change",Te),(0,n.NH)(_,"change",ze),(0,n.P$)(_,"type","checkbox"),_.id="choice-large-inline-media",N.className="setting-group",(0,n.NH)(A,"change",Ce),(0,n.NH)(A,"change",He),(0,n.P$)(A,"type","checkbox"),A.id="choice-autoplay-gif",L.className="setting-group",g.className="ui-settings",(0,n.NH)(B,"change",Pe),(0,n.NH)(B,"change",xe),(0,n.P$)(B,"type","checkbox"),B.id="choice-disable-custom-scrollbars",U.className="setting-group",(0,n.NH)(G,"change",Ue),(0,n.NH)(G,"change",Be),(0,n.P$)(G,"type","checkbox"),G.id="choice-disable-infinite-scroll",D.className="setting-group",(0,n.NH)(J,"change",Ze),(0,n.NH)(J,"change",De),(0,n.P$)(J,"type","checkbox"),J.id="choice-hide-cards",Y.className="setting-group",(0,n.NH)(Q,"change",Ge),(0,n.NH)(Q,"change",Fe),(0,n.P$)(Q,"type","checkbox"),Q.id="choice-underline-links",K.className="setting-group",x.className="ui-settings",(0,n.NH)(ie,"change",je),(0,n.NH)(ie,"change",Ye),(0,n.P$)(ie,"type","checkbox"),ie.id="choice-reduce-motion",se.className="setting-group",(0,n.NH)(le,"change",Je),(0,n.NH)(le,"change",We),(0,n.P$)(le,"type","checkbox"),le.id="choice-always-show-focus-ring",ce.className="setting-group",(0,n.NH)(ue,"change",Ke),(0,n.NH)(ue,"change",Qe),(0,n.P$)(ue,"type","checkbox"),ue.id="choice-disable-tap-on-status",ge.className="setting-group",(0,n.NH)(ye,"change",Ve),(0,n.NH)(ye,"change",Xe),(0,n.P$)(ye,"type","checkbox"),ye.id="choice-omit-emoji-in-display-names",fe.className="setting-group",(0,n.NH)(ke,"change",ea),(0,n.NH)(ke,"change",aa),(0,n.P$)(ke,"type","checkbox"),ke.id="choice-disable-long-aria-labels",be.className="setting-group",ne.className="ui-settings"},m(e,r){(0,n.R3)(na._slotted.default,t),(0,n.R3)(t,s),(0,n.R3)(na._slotted.default,i),(0,n.R3)(na._slotted.default,o),(0,n.R3)(o,c),(0,n.R3)(na._slotted.default,h),(0,n.R3)(na._slotted.default,g),(0,n.R3)(g,p),(0,n.R3)(p,m),m.checked=a.$neverMarkMediaAsSensitive,(0,n.R3)(p,f),(0,n.R3)(g,y),(0,n.R3)(g,I),(0,n.R3)(I,$),$.checked=a.$ignoreBlurhash,(0,n.R3)(I,b),(0,n.R3)(g,k),(0,n.R3)(g,R),(0,n.R3)(R,w),w.checked=a.$markMediaAsSensitive,(0,n.R3)(R,v),(0,n.R3)(g,M),(0,n.R3)(g,N),(0,n.R3)(N,_),_.checked=a.$largeInlineMedia,(0,n.R3)(N,E),(0,n.R3)(g,S),(0,n.R3)(g,L),(0,n.R3)(L,A),A.checked=a.$autoplayGifs,(0,n.R3)(L,T),(0,n.R3)(na._slotted.default,z),(0,n.R3)(na._slotted.default,C),(0,n.R3)(C,H),(0,n.R3)(na._slotted.default,P),(0,n.R3)(na._slotted.default,x),(0,n.R3)(x,U),(0,n.R3)(U,B),B.checked=a.$disableCustomScrollbars,(0,n.R3)(U,O),(0,n.R3)(x,Z),(0,n.R3)(x,D),(0,n.R3)(D,G),G.checked=a.$disableInfiniteScroll,(0,n.R3)(D,F),Oe._mount(D,null),(0,n.R3)(x,j),(0,n.R3)(x,Y),(0,n.R3)(Y,J),J.checked=a.$hideCards,(0,n.R3)(Y,W),(0,n.R3)(x,q),(0,n.R3)(x,K),(0,n.R3)(K,Q),Q.checked=a.$underlineLinks,(0,n.R3)(K,V),(0,n.R3)(na._slotted.default,X),(0,n.R3)(na._slotted.default,ee),(0,n.R3)(ee,ae),(0,n.R3)(na._slotted.default,te),(0,n.R3)(na._slotted.default,ne),(0,n.R3)(ne,se),(0,n.R3)(se,ie),ie.checked=a.$reduceMotion,(0,n.R3)(se,re),(0,n.R3)(ne,oe),(0,n.R3)(ne,ce),(0,n.R3)(ce,le),le.checked=a.$alwaysShowFocusRing,(0,n.R3)(ce,de),qe._mount(ce,null),(0,n.R3)(ne,he),(0,n.R3)(ne,ge),(0,n.R3)(ge,ue),ue.checked=a.$disableTapOnStatus,(0,n.R3)(ge,pe),(0,n.R3)(ne,me),(0,n.R3)(ne,fe),(0,n.R3)(fe,ye),ye.checked=a.$omitEmojiInDisplayNames,(0,n.R3)(fe,Ie),(0,n.R3)(ne,$e),(0,n.R3)(ne,be),(0,n.R3)(be,ke),ke.checked=a.$disableLongAriaLabels,(0,n.R3)(be,Re),(0,n.R3)(na._slotted.default,we),ta&&ta.m(na._slotted.default,null),(0,n.R3)(na._slotted.default,ve),na._mount(e,r),(0,n.$T)(e,Me,r),sa._mount(e,r)},p(a,t){a.$neverMarkMediaAsSensitive&&(m.checked=t.$neverMarkMediaAsSensitive),a.$ignoreBlurhash&&($.checked=t.$ignoreBlurhash),a.$markMediaAsSensitive&&(w.checked=t.$markMediaAsSensitive),a.$largeInlineMedia&&(_.checked=t.$largeInlineMedia),a.$autoplayGifs&&(A.checked=t.$autoplayGifs),a.$disableCustomScrollbars&&(B.checked=t.$disableCustomScrollbars),a.$disableInfiniteScroll&&(G.checked=t.$disableInfiniteScroll),a.$hideCards&&(J.checked=t.$hideCards),a.$underlineLinks&&(Q.checked=t.$underlineLinks),a.$reduceMotion&&(ie.checked=t.$reduceMotion),a.$alwaysShowFocusRing&&(le.checked=t.$alwaysShowFocusRing),a.$disableTapOnStatus&&(ue.checked=t.$disableTapOnStatus),a.$omitEmojiInDisplayNames&&(ye.checked=t.$omitEmojiInDisplayNames),a.$disableLongAriaLabels&&(ke.checked=t.$disableLongAriaLabels),t.$isUserLoggedIn?ta?ta.p(a,t):((ta=u(e,t)).c(),ta.m(ve.parentNode,ve)):ta&&(ta.d(1),ta=null)},d(e){(0,n.ys)(m,"change",Ne),(0,n.ys)(m,"change",_e),(0,n.ys)($,"change",Ee),(0,n.ys)($,"change",Se),(0,n.ys)(w,"change",Le),(0,n.ys)(w,"change",Ae),(0,n.ys)(_,"change",Te),(0,n.ys)(_,"change",ze),(0,n.ys)(A,"change",Ce),(0,n.ys)(A,"change",He),(0,n.ys)(B,"change",Pe),(0,n.ys)(B,"change",xe),(0,n.ys)(G,"change",Ue),(0,n.ys)(G,"change",Be),Oe.destroy(),(0,n.ys)(J,"change",Ze),(0,n.ys)(J,"change",De),(0,n.ys)(Q,"change",Ge),(0,n.ys)(Q,"change",Fe),(0,n.ys)(ie,"change",je),(0,n.ys)(ie,"change",Ye),(0,n.ys)(le,"change",Je),(0,n.ys)(le,"change",We),qe.destroy(),(0,n.ys)(ue,"change",Ke),(0,n.ys)(ue,"change",Qe),(0,n.ys)(ye,"change",Ve),(0,n.ys)(ye,"change",Xe),(0,n.ys)(ke,"change",ea),(0,n.ys)(ke,"change",aa),ta&&ta.d(),na.destroy(e),e&&(0,n.r2)(Me),sa.destroy(e)}}}(this,this._state),e.target){var a=(0,n.pI)(e.target);e.hydrate?this._fragment.l(a):this._fragment.c(),a.forEach(n.r2),this._mount(e.target,e.anchor),(0,n.yl)(this)}}(0,n.f0)(p.prototype,n.uS),(0,n.f0)(p.prototype,g),p.prototype._recompute=function(e,a){(e.$loggedInInstancesInOrder||e.$currentInstance)&&this._differs(a.themeTitle,a.themeTitle=function({$loggedInInstancesInOrder:e,$currentInstance:a}){return e.length>1?(0,h.A)(["Theme for ",["instance"]],{instance:a}):"Theme"}(a))&&(e.themeTitle=!0)};const m=p;function f(e){var a,t,r,o,c,l;if((0,n.S1)(this,e),this._state=(0,n.f0)({pageComponent:m},e.data),this._intro=!0,this._fragment=(a=this,t=this._state,o=new s.Z({root:a.root,store:a.store,data:{name:"General settings",settingsPage:!0}}),c={pageComponent:t.pageComponent,params:t.params},l=new i.Z({root:a.root,store:a.store,data:c}),{c(){o._fragment.c(),r=(0,n.rw)("\n\n  "),l._fragment.c()},l(e){o._fragment.l(e),r=(0,n.M4)(e,"\n\n  "),l._fragment.l(e)},m(e,a){o._mount(e,a),(0,n.$T)(e,r,a),l._mount(e,a)},p(e,a){var t={};e.pageComponent&&(t.pageComponent=a.pageComponent),e.params&&(t.params=a.params),l._set(t)},d(e){o.destroy(e),e&&(0,n.r2)(r),l.destroy(e)}}),e.target){var d=(0,n.pI)(e.target);e.hydrate?this._fragment.l(d):this._fragment.c(),d.forEach(n.r2),this._mount(e.target,e.anchor),(0,n.yl)(this)}}(0,n.f0)(f.prototype,n.uS);const y=f}}]);
//# sourceMappingURL=3976.be641f853bbbfe924bb5.settings_general.js.map