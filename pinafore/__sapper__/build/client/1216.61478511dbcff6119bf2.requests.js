(this.webpackChunkpinafore=this.webpackChunkpinafore||[]).push([[1216],{8177:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>I});var o=n(4178),r=n(2905),s=n(1382),a=n(671),c=n(2936),i=n(5853),u=n(245),l=n(8273),h=n(1029);var f=n(652),p=n(6494),m=n(7265);async function _(t,e,n){const{currentInstance:o,accessToken:r}=c.h.get();try{e?await async function(t,e,n){const o=`${(0,h.E)(t)}/api/v1/follow_requests/${n}/authorize`;return(0,l.v_)(o,null,(0,h.I)(e),{timeout:l.$Q})}(o,r,t):await async function(t,e,n){const o=`${(0,h.E)(t)}/api/v1/follow_requests/${n}/reject`;return(0,l.v_)(o,null,(0,h.I)(e),{timeout:l.$Q})}(o,r,t),n&&p.A.say(e?"Approved follow request":"Rejected follow request"),(0,f.j)("refreshAccountsList")}catch(s){console.error(s),p.A.say(e?(0,m.A)(["Unable to approve follow request: ",["error"]],{error:s.message||""}):(0,m.A)(["Unable to reject follow request: ",["error"]],{error:s.message||""}))}}var g=n(2909);function d({$currentInstance:t,$accessToken:e}){return async()=>{const n=await(0,i._v)(t,e);return function(t,e){g.F.setFollowRequestCount(t,e.length);const{followRequestCounts:n}=c.h.get();n[t]=e.length,c.h.set({followRequestCounts:n})}(t,n),n}}function w(t,e){var n={accountsFetcher:e.accountsFetcher,accountActions:e.accountActions},o=new a.Z({root:t.root,store:t.store,data:n});return{c(){o._fragment.c()},l(t){o._fragment.l(t)},m(t,e){o._mount(t,e)},p(t,e){var n={};t.accountsFetcher&&(n.accountsFetcher=e.accountsFetcher),t.accountActions&&(n.accountActions=e.accountActions),o._set(n)},d(t){o.destroy(t)}}}function y(t){var e,n,r,s,a,i;if((0,o.S1)(this,t),this.store=c.h,this._state=(0,o.f0)((0,o.f0)(this.store._init(["currentInstance","accessToken","isUserLoggedIn"]),{accountActions:[{icon:"#fa-check",label:"Approve",onclick:t=>_(t,!0,!0)},{icon:"#fa-times",label:"Reject",onclick:t=>_(t,!1,!0)}]}),t.data),this.store._add(this,["currentInstance","accessToken","isUserLoggedIn"]),this._recompute({$currentInstance:1,$accessToken:1},this._state),this._intro=!0,this._handlers.destroy=[o.iT],this._fragment=(e=this,n=this._state,a=new u.Z({root:e.root,store:e.store,data:{title:"Follow requests",icon:"#fa-user-plus"}}),i=n.$isUserLoggedIn&&w(e,n),{c(){a._fragment.c(),r=(0,o.rw)("\n"),i&&i.c(),s=(0,o.Yr)()},l(t){a._fragment.l(t),r=(0,o.M4)(t,"\n"),i&&i.l(t),s=(0,o.Yr)()},m(t,e){a._mount(t,e),(0,o.$T)(t,r,e),i&&i.m(t,e),(0,o.$T)(t,s,e)},p(t,n){n.$isUserLoggedIn?i?i.p(t,n):((i=w(e,n)).c(),i.m(s.parentNode,s)):i&&(i.d(1),i=null)},d(t){a.destroy(t),t&&(0,o.r2)(r),i&&i.d(t),t&&(0,o.r2)(s)}}),t.target){var l=(0,o.pI)(t.target);t.hydrate?this._fragment.l(l):this._fragment.c(),l.forEach(o.r2),this._mount(t.target,t.anchor),(0,o.yl)(this)}}(0,o.f0)(y.prototype,o.uS),y.prototype._recompute=function(t,e){(t.$currentInstance||t.$accessToken)&&this._differs(e.accountsFetcher,e.accountsFetcher=d(e))&&(t.accountsFetcher=!0)};const v=y;function $(t){var e,n,a,c,i,u;if((0,o.S1)(this,t),this._state=(0,o.f0)({pageComponent:v},t.data),this._intro=!0,this._fragment=(e=this,n=this._state,c=new r.Z({root:e.root,store:e.store,data:{name:"Follow requests"}}),i={pageComponent:n.pageComponent,params:n.params},u=new s.Z({root:e.root,store:e.store,data:i}),{c(){c._fragment.c(),a=(0,o.rw)("\n\n  "),u._fragment.c()},l(t){c._fragment.l(t),a=(0,o.M4)(t,"\n\n  "),u._fragment.l(t)},m(t,e){c._mount(t,e),(0,o.$T)(t,a,e),u._mount(t,e)},p(t,e){var n={};t.pageComponent&&(n.pageComponent=e.pageComponent),t.params&&(n.params=e.params),u._set(n)},d(t){c.destroy(t),t&&(0,o.r2)(a),u.destroy(t)}}),t.target){var l=(0,o.pI)(t.target);t.hydrate?this._fragment.l(l):this._fragment.c(),l.forEach(o.r2),this._mount(t.target,t.anchor),(0,o.yl)(this)}}(0,o.f0)($.prototype,o.uS);const I=$},5853:(t,e,n)=>{"use strict";n.d(e,{_v:()=>s});var o=n(8273),r=n(1029);async function s(t,e){const n=`${(0,r.E)(t)}/api/v1/follow_requests`;return(0,o.U2)(n,(0,r.I)(e),{timeout:o.EH})}},2909:(t,e,n)=>{"use strict";n.d(e,{F:()=>o});const o=new Proxy({},{get:function(t,e){return async function(...o){if(!t[e]){const o=await Promise.all([n.e(3881),n.e(166)]).then(n.bind(n,166));t[e]=o[e]}return t[e].apply(null,o)}}})}}]);
//# sourceMappingURL=1216.61478511dbcff6119bf2.requests.js.map