import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const t=document.querySelector(".feedback-form"),o="feedback-form-state";function r(e){const a=e.email.value.trim(),n=e.message.value.trim();return{email:a,message:n}}function m(e){const a=r(e.currentTarget),n=JSON.stringify(a);localStorage.setItem(o,n)}const s=localStorage.getItem(o);if(s){const e=JSON.parse(s);t.email.value=e.email,t.message.value=e.message}function i(e){if(t.email.value.trim()===""||t.message.value.trim()===""){alert("Будь ласка, заповніть обидва поля форми!");return}e.preventDefault();const a=r(t);console.log(a),localStorage.removeItem(o),t.reset()}t.addEventListener("input",m);t.addEventListener("submit",i);
//# sourceMappingURL=commonHelpers2.js.map