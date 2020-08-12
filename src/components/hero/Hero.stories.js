import StorybookScreen from "../../StorybookScreen";
import Hero from "./Hero";


export default {
  title: "Hero",
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const hero = () => ({
  data() {
    return {
      Hero,
    };
  },
  components: {
    StorybookScreen
  },
  template: `<div class="theme-default"><storybook-screen :testComponent="Hero"></storybook-screen></div>`
});

export const heroLifestyleLeft = () => ({
  data() {
    return {
      Hero,
      HeroProps: {
        classes: 'c-hero--lifestyle-left',
      }
    };
  },
  components: {
    StorybookScreen
  },
  template: `<div class="theme-default"><storybook-screen :testComponent="Hero" :testProps="HeroProps"></storybook-screen></div>`
});

export const heroLifestyleRight = () => ({
  data() {
    return {
      Hero,
      HeroProps: {
        classes: 'c-hero--lifestyle-right',
      }
    };
  },
  components: {
    StorybookScreen
  },
  template: `<div class="theme-default"><storybook-screen :testComponent="Hero" :testProps="HeroProps"></storybook-screen></div>`
});

