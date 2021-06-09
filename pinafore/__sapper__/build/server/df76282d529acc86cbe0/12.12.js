exports.id = 12;
exports.ids = [12];
exports.modules = {

/***/ 4012:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2397);
/* harmony import */ var svelte_extras__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7779);
/* harmony import */ var svelte_extras__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svelte_extras__WEBPACK_IMPORTED_MODULE_1__);



const TIME_TO_SHOW_TOAST = 5000
const DELAY_BETWEEN_TOASTS = 1000

function data() {
	return {
  text: '',
  shown: false,
  messages: []
};
}

var Toast = {};

Toast.filename = "/bucket/HOLD/Dockerfiles/pinafore/pinafore/src/routes/_components/toast/Toast.html";

Toast.data = function() {
	return data();
};

Toast.render = function(state, options = {}) {
	var components = new Set();

	function addComponent(component) {
		components.add(component);
	}

	var result = { head: '', addComponent };
	var html = Toast._render(result, state, options);

	var cssCode = Array.from(components).map(c => c.css && c.css.code).filter(Boolean).join('\n');

	return {
		html,
		head: result.head,
		css: { code: cssCode, map: null },
		toString() {
			return html;
		}
	};
}

Toast._render = function(__result, ctx, options) {
	__result.addComponent(Toast);

	ctx = Object.assign(data(), ctx);

	return `<div class="toast-modal ${(0,svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__/* .escape */ .YU)(ctx.shown ? 'shown' : '')} svelte-19jy082" role="alert"${(v => v == null ? "" : ` aria-hidden="${(0,svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__/* .escape */ .YU)(!ctx.shown)}"`)(!ctx.shown)}>
  <div class="toast-container svelte-19jy082">
    ${(0,svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__/* .escape */ .YU)(ctx.text)}
  </div>
</div>`;
};

Toast.css = {
	code: ".toast-modal.svelte-19jy082{position:fixed;bottom:40px;left:0;right:0;opacity:0;transition:opacity 0.2s linear;display:flex;flex-direction:column;align-items:center;pointer-events:none;z-index:100000}.toast-container.svelte-19jy082{max-width:600px;max-height:20vh;overflow:hidden;display:flex;flex-direction:column;align-items:center;border:2px solid var(--toast-border);background:var(--toast-bg);border-radius:5px;margin:0 40px;padding:20px;font-size:1.3em;color:var(--toast-text)}.toast-modal.shown.svelte-19jy082{opacity:0.9}@media(max-width: 767px){.toast-container.svelte-19jy082{max-width:80vw}}",
	map: "{\"version\":3,\"file\":\"Toast.html\",\"sources\":[\"Toast.html\"],\"sourcesContent\":[\"<div class=\\\"toast-modal {shown ? 'shown' : ''}\\\" role=\\\"alert\\\" aria-hidden={!shown}>\\n  <div class=\\\"toast-container\\\">\\n    {text}\\n  </div>\\n</div>\\n<style>\\n  .toast-modal {\\n    position: fixed;\\n    bottom: 40px;\\n    left: 0;\\n    right: 0;\\n    opacity: 0;\\n    transition: opacity 0.2s linear;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    pointer-events: none;\\n    z-index: 100000;\\n  }\\n\\n  .toast-container {\\n    max-width: 600px;\\n    max-height: 20vh;\\n    overflow: hidden;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    border: 2px solid var(--toast-border);\\n    background: var(--toast-bg);\\n    border-radius: 5px;\\n    margin: 0 40px;\\n    padding: 20px;\\n    font-size: 1.3em;\\n    color: var(--toast-text);\\n  }\\n\\n  .toast-modal.shown {\\n    opacity: 0.9;\\n  }\\n\\n  @media (max-width: 767px) {\\n    .toast-container {\\n      max-width: 80vw;\\n    }\\n  }\\n</style>\\n<script>\\n  import { splice, push, observe } from 'svelte-extras'\\n\\n  const TIME_TO_SHOW_TOAST = 5000\\n  const DELAY_BETWEEN_TOASTS = 1000\\n\\n  export default {\\n    oncreate () {\\n      this._queue = Promise.resolve()\\n      this.observe('messages', (messages) => {\\n        if (messages.length) {\\n          this.onNewToast(messages[0])\\n          this.splice('messages', 0, 1)\\n        }\\n      })\\n    },\\n    data: () => ({\\n      text: '',\\n      shown: false,\\n      messages: []\\n    }),\\n    methods: {\\n      observe,\\n      push,\\n      splice,\\n      say (text) {\\n        this.push('messages', text)\\n      },\\n      onNewToast (text) {\\n        this._queue = this._queue.then(() => {\\n          this.set({\\n            text: text,\\n            shown: true\\n          })\\n          return new Promise(resolve => {\\n            setTimeout(resolve, TIME_TO_SHOW_TOAST)\\n          })\\n        }).then(() => {\\n          this.set({\\n            shown: false\\n          })\\n          return new Promise(resolve => {\\n            setTimeout(resolve, DELAY_BETWEEN_TOASTS)\\n          })\\n        })\\n      }\\n    }\\n  }\\n</script>\\n\"],\"names\":[],\"mappings\":\"AAME,YAAY,eAAC,CAAC,AACZ,QAAQ,CAAE,KAAK,CACf,MAAM,CAAE,IAAI,CACZ,IAAI,CAAE,CAAC,CACP,KAAK,CAAE,CAAC,CACR,OAAO,CAAE,CAAC,CACV,UAAU,CAAE,OAAO,CAAC,IAAI,CAAC,MAAM,CAC/B,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MAAM,CACnB,cAAc,CAAE,IAAI,CACpB,OAAO,CAAE,MAAM,AACjB,CAAC,AAED,gBAAgB,eAAC,CAAC,AAChB,SAAS,CAAE,KAAK,CAChB,UAAU,CAAE,IAAI,CAChB,QAAQ,CAAE,MAAM,CAChB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MAAM,CACnB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,cAAc,CAAC,CACrC,UAAU,CAAE,IAAI,UAAU,CAAC,CAC3B,aAAa,CAAE,GAAG,CAClB,MAAM,CAAE,CAAC,CAAC,IAAI,CACd,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,KAAK,CAChB,KAAK,CAAE,IAAI,YAAY,CAAC,AAC1B,CAAC,AAED,YAAY,MAAM,eAAC,CAAC,AAClB,OAAO,CAAE,GAAG,AACd,CAAC,AAED,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AACzB,gBAAgB,eAAC,CAAC,AAChB,SAAS,CAAE,IAAI,AACjB,CAAC,AACH,CAAC\"}"
};

var warned = false;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Toast);

/***/ })

};
;