// src/store.js
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    hero: {
      title: "Stacks On Stacks",
      subtitle: "Filium morte multavit si sine metu contineret, saluti prospexit civium, qua intellegebat contineri.",
      cta: "Shop Now",
      ctaURL:"/url-from-store",
      backgroundImage: "/images/hero-background-image.jpg",
      backgroundImageMobile: "/images/baby-yoda-mobile.jpeg"
    }
  }
});
