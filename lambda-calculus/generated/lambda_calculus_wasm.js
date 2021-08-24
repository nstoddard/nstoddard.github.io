let wasm_bindgen;(function(){const n={};let e;const t=new Array(32).fill(undefined);t.push(undefined,null,true,false);function r(n){return t[n]}let _=t.length;function c(n){if(n<36)return;t[n]=_;_=n}function o(n){const e=r(n);c(n);return e}function i(n){if(_===t.length)t.push(t.length+1);const e=_;_=t[e];t[e]=n;return e}function a(n){const e=typeof n;if(e=="number"||e=="boolean"||n==null){return`${n}`}if(e=="string"){return`"${n}"`}if(e=="symbol"){const e=n.description;if(e==null){return"Symbol"}else{return`Symbol(${e})`}}if(e=="function"){const e=n.name;if(typeof e=="string"&&e.length>0){return`Function(${e})`}else{return"Function"}}if(Array.isArray(n)){const e=n.length;let t="[";if(e>0){t+=a(n[0])}for(let r=1;r<e;r++){t+=", "+a(n[r])}t+="]";return t}const t=/\[object ([^\]]+)\]/.exec(toString.call(n));let r;if(t.length>1){r=t[1]}else{return toString.call(n)}if(r=="Object"){try{return"Object("+JSON.stringify(n)+")"}catch(n){return"Object"}}if(n instanceof Error){return`${n.name}: ${n.message}\n${n.stack}`}return r}let u=0;let f=null;function b(){if(f===null||f.buffer!==e.memory.buffer){f=new Uint8Array(e.memory.buffer)}return f}let l=new TextEncoder("utf-8");const g=typeof l.encodeInto==="function"?function(n,e){return l.encodeInto(n,e)}:function(n,e){const t=l.encode(n);e.set(t);return{read:n.length,written:t.length}};function w(n,e,t){if(t===undefined){const t=l.encode(n);const r=e(t.length);b().subarray(r,r+t.length).set(t);u=t.length;return r}let r=n.length;let _=e(r);const c=b();let o=0;for(;o<r;o++){const e=n.charCodeAt(o);if(e>127)break;c[_+o]=e}if(o!==r){if(o!==0){n=n.slice(o)}_=t(_,r,r=o+n.length*3);const e=b().subarray(_+o,_+r);const c=g(n,e);o+=c.written}u=o;return _}let s=null;function d(){if(s===null||s.buffer!==e.memory.buffer){s=new Int32Array(e.memory.buffer)}return s}let v=new TextDecoder("utf-8",{ignoreBOM:true,fatal:true});v.decode();function m(n,e){return v.decode(b().subarray(n,n+e))}function y(n,t,r,_){const c={a:n,b:t,cnt:1,dtor:r};const o=(...n)=>{c.cnt++;const t=c.a;c.a=0;try{return _(t,c.b,...n)}finally{if(--c.cnt===0){e.__wbindgen_export_2.get(c.dtor)(t,c.b)}else{c.a=t}}};o.original=c;return o}function p(n,t){e._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h0dc9beae38e5d58c(n,t)}let h=32;function E(n){if(h==1)throw new Error("out of js stack");t[--h]=n;return h}function A(n,r,_){try{e._dyn_core__ops__function__FnMut___A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__he9a5265d25773437(n,r,E(_))}finally{t[h++]=undefined}}n.main=function(){e.main()};function S(n,t){try{return n.apply(this,t)}catch(n){e.__wbindgen_exn_store(i(n))}}function T(n){return n===undefined||n===null}async function I(n,e){if(typeof Response==="function"&&n instanceof Response){if(typeof WebAssembly.instantiateStreaming==="function"){try{return await WebAssembly.instantiateStreaming(n,e)}catch(e){if(n.headers.get("Content-Type")!="application/wasm"){console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",e)}else{throw e}}}const t=await n.arrayBuffer();return await WebAssembly.instantiate(t,e)}else{const t=await WebAssembly.instantiate(n,e);if(t instanceof WebAssembly.Instance){return{instance:t,module:n}}else{return t}}}async function R(n){if(typeof n==="undefined"){let e;if(typeof document==="undefined"){e=location.href}else{e=document.currentScript.src}n=e.replace(/\.js$/,"_bg.wasm")}const t={};t.wbg={};t.wbg.__wbindgen_object_drop_ref=function(n){o(n)};t.wbg.__wbg_document_6d5890b86bbf5b96=function(n){var e=r(n).document;return T(e)?0:i(e)};t.wbg.__wbg_getElementById_f059b7401a23ee7c=function(n,e,t){var _=r(n).getElementById(m(e,t));return T(_)?0:i(_)};t.wbg.__wbg_instanceof_HtmlElement_2473421a18810ba6=function(n){var e=r(n)instanceof HTMLElement;return e};t.wbg.__wbg_focus_f774b6957bde8c62=function(){return S((function(n){r(n).focus()}),arguments)};t.wbg.__wbg_scrollHeight_a90c0686cc56836b=function(n){var e=r(n).scrollHeight;return e};t.wbg.__wbg_scrollTo_dcaa05033ccdb207=function(n,e,t){r(n).scrollTo(e,t)};t.wbg.__wbg_instanceof_HtmlInputElement_a8acc6294a4325d1=function(n){var e=r(n)instanceof HTMLInputElement;return e};t.wbg.__wbg_setSelectionRange_32d0ea5176433327=function(){return S((function(n,e,t){r(n).setSelectionRange(e>>>0,t>>>0)}),arguments)};t.wbg.__wbg_localStorage_fbbeeb3a3dfd5be3=function(){return S((function(n){var e=r(n).localStorage;return T(e)?0:i(e)}),arguments)};t.wbg.__wbg_getItem_5ba4a641e25018c3=function(){return S((function(n,t,_,c){var o=r(t).getItem(m(_,c));var i=T(o)?0:w(o,e.__wbindgen_malloc,e.__wbindgen_realloc);var a=u;d()[n/4+1]=a;d()[n/4+0]=i}),arguments)};t.wbg.__wbg_addEventListener_957c027f76736fd0=function(){return S((function(n,e,t,_){r(n).addEventListener(m(e,t),r(_))}),arguments)};t.wbg.__wbg_removeEventListener_736c8c70f9ffc4dd=function(){return S((function(n,e,t,_,c){r(n).removeEventListener(m(e,t),r(_),c!==0)}),arguments)};t.wbg.__wbindgen_cb_drop=function(n){const e=o(n).original;if(e.cnt--==1){e.a=0;return true}var t=false;return t};t.wbg.__wbg_setItem_8f5e46af32b2a9a9=function(){return S((function(n,e,t,_,c){r(n).setItem(m(e,t),m(_,c))}),arguments)};t.wbg.__wbg_key_8e72bd9545259652=function(n,t){var _=r(t).key;var c=w(_,e.__wbindgen_malloc,e.__wbindgen_realloc);var o=u;d()[n/4+1]=o;d()[n/4+0]=c};t.wbg.__wbg_preventDefault_da61cf662e5a362a=function(n){r(n).preventDefault()};t.wbg.__wbg_selectionStart_abb24f11cba0e84d=function(){return S((function(n,e){var t=r(e).selectionStart;d()[n/4+1]=T(t)?0:t;d()[n/4+0]=!T(t)}),arguments)};t.wbg.__wbg_selectionEnd_1cb983fc25f9d24d=function(){return S((function(n,e){var t=r(e).selectionEnd;d()[n/4+1]=T(t)?0:t;d()[n/4+0]=!T(t)}),arguments)};t.wbg.__wbg_querySelector_753e1037740f7379=function(){return S((function(n,e,t){var _=r(n).querySelector(m(e,t));return T(_)?0:i(_)}),arguments)};t.wbg.__wbg_lastChild_44be906ccfbaaf0a=function(n){var e=r(n).lastChild;return T(e)?0:i(e)};t.wbg.__wbg_removeChild_73ae1495cb167dcd=function(){return S((function(n,e){var t=r(n).removeChild(r(e));return i(t)}),arguments)};t.wbg.__wbg_createTextNode_f7bda14307602217=function(n,e,t){var _=r(n).createTextNode(m(e,t));return i(_)};t.wbg.__wbindgen_object_clone_ref=function(n){var e=r(n);return i(e)};t.wbg.__wbg_new_59cb74e423758ede=function(){var n=new Error;return i(n)};t.wbg.__wbg_stack_558ba5917b466edd=function(n,t){var _=r(t).stack;var c=w(_,e.__wbindgen_malloc,e.__wbindgen_realloc);var o=u;d()[n/4+1]=o;d()[n/4+0]=c};t.wbg.__wbg_error_4bb6c2a97407129a=function(n,t){try{console.error(m(n,t))}finally{e.__wbindgen_free(n,t)}};t.wbg.__wbindgen_debug_string=function(n,t){var _=a(r(t));var c=w(_,e.__wbindgen_malloc,e.__wbindgen_realloc);var o=u;d()[n/4+1]=o;d()[n/4+0]=c};t.wbg.__wbindgen_throw=function(n,e){throw new Error(m(n,e))};t.wbg.__wbg_self_3df7c33e222cd53b=function(){return S((function(){var n=self.self;return i(n)}),arguments)};t.wbg.__wbg_window_0f90182e6c405ff2=function(){return S((function(){var n=window.window;return i(n)}),arguments)};t.wbg.__wbg_globalThis_787cfd4f25a35141=function(){return S((function(){var n=globalThis.globalThis;return i(n)}),arguments)};t.wbg.__wbg_global_af2eb7b1369372ed=function(){return S((function(){var n=global.global;return i(n)}),arguments)};t.wbg.__wbindgen_is_undefined=function(n){var e=r(n)===undefined;return e};t.wbg.__wbg_newnoargs_68424965d85fcb08=function(n,e){var t=new Function(m(n,e));return i(t)};t.wbg.__wbg_call_9698e9b9c4668ae0=function(){return S((function(n,e){var t=r(n).call(r(e));return i(t)}),arguments)};t.wbg.__wbg_instanceof_Window_b99429ec408dcb8d=function(n){var e=r(n)instanceof Window;return e};t.wbg.__wbg_setnodeValue_e010a84aec8acf4e=function(n,e,t){r(n).nodeValue=e===0?undefined:m(e,t)};t.wbg.__wbg_is_744cc9b6515ff95a=function(n,e){var t=Object.is(r(n),r(e));return t};t.wbg.__wbg_value_45a0a66acf34bf56=function(n,t){var _=r(t).value;var c=w(_,e.__wbindgen_malloc,e.__wbindgen_realloc);var o=u;d()[n/4+1]=o;d()[n/4+0]=c};t.wbg.__wbg_instanceof_HtmlTextAreaElement_ea178ae1108bf8ce=function(n){var e=r(n)instanceof HTMLTextAreaElement;return e};t.wbg.__wbg_value_f840140562e0314a=function(n,t){var _=r(t).value;var c=w(_,e.__wbindgen_malloc,e.__wbindgen_realloc);var o=u;d()[n/4+1]=o;d()[n/4+0]=c};t.wbg.__wbg_insertBefore_379529a4da6a1947=function(){return S((function(n,e,t){var _=r(n).insertBefore(r(e),r(t));return i(_)}),arguments)};t.wbg.__wbg_removeAttribute_96fc7d7e36217fe8=function(){return S((function(n,e,t){r(n).removeAttribute(m(e,t))}),arguments)};t.wbg.__wbg_setAttribute_c44888e5d6dd5133=function(){return S((function(n,e,t,_,c){r(n).setAttribute(m(e,t),m(_,c))}),arguments)};t.wbg.__wbg_instanceof_HtmlButtonElement_c53a8ed80134e375=function(n){var e=r(n)instanceof HTMLButtonElement;return e};t.wbg.__wbg_settype_791beef0000789d0=function(n,e,t){r(n).type=m(e,t)};t.wbg.__wbg_settype_8c7f99d4688c6c4b=function(n,e,t){r(n).type=m(e,t)};t.wbg.__wbg_setvalue_d846870dad1c9e0a=function(n,e,t){r(n).value=m(e,t)};t.wbg.__wbg_setvalue_6671cc5ed4e50ed1=function(n,e,t){r(n).value=m(e,t)};t.wbg.__wbg_setchecked_c756ef801f7e9fe2=function(n,e){r(n).checked=e!==0};t.wbg.__wbg_appendChild_27974267a42a0def=function(){return S((function(n,e){var t=r(n).appendChild(r(e));return i(t)}),arguments)};t.wbg.__wbg_namespaceURI_089af8a31634d16c=function(n,t){var _=r(t).namespaceURI;var c=T(_)?0:w(_,e.__wbindgen_malloc,e.__wbindgen_realloc);var o=u;d()[n/4+1]=o;d()[n/4+0]=c};t.wbg.__wbg_createElementNS_3be57b8d0c7c13e5=function(){return S((function(n,e,t,_,c){var o=r(n).createElementNS(e===0?undefined:m(e,t),m(_,c));return i(o)}),arguments)};t.wbg.__wbg_createElement_1959ce882284e011=function(){return S((function(n,e,t){var _=r(n).createElement(m(e,t));return i(_)}),arguments)};t.wbg.__wbg_new_ffb8fbe0ad5d4d2f=function(){var n=new Object;return i(n)};t.wbg.__wbindgen_string_new=function(n,e){var t=m(n,e);return i(t)};t.wbg.__wbg_set_c7fc8735d70ceb11=function(){return S((function(n,e,t){var _=Reflect.set(r(n),r(e),r(t));return _}),arguments)};t.wbg.__wbg_addEventListener_49e90ff539b1b667=function(){return S((function(n,e,t,_,c){r(n).addEventListener(m(e,t),r(_),r(c))}),arguments)};t.wbg.__wbg_textContent_748cd366f82647af=function(n,t){var _=r(t).textContent;var c=T(_)?0:w(_,e.__wbindgen_malloc,e.__wbindgen_realloc);var o=u;d()[n/4+1]=o;d()[n/4+0]=c};t.wbg.__wbindgen_closure_wrapper105=function(n,e,t){var r=y(n,e,17,p);return i(r)};t.wbg.__wbindgen_closure_wrapper1543=function(n,e,t){var r=y(n,e,17,A);return i(r)};if(typeof n==="string"||typeof Request==="function"&&n instanceof Request||typeof URL==="function"&&n instanceof URL){n=fetch(n)}const{instance:_,module:c}=await I(await n,t);e=_.exports;R.__wbindgen_wasm_module=c;e.__wbindgen_start();return e}wasm_bindgen=Object.assign(R,n)})();