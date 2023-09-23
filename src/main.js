import Vue from "vue";
import App from "./App.vue";
import { text, text2 } from "./utils.js";
import alerts from "./constant";

new Vue({
  render: (h) => h(App),
}).$mount("#app");

alerts(text, text2);
