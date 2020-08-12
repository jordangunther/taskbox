import StorybookScreen from "../../StorybookScreen";
import MyButton from './MyButton.vue';

export default {
  title: "MyButton",
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const ButtonPrimary = () => ({
  data() {
    return {
      MyButton,
      ButtonProps: {
        slots: "Primary Button",
        classes: "c-btn--primary"
      }
    };
  },
  components: { StorybookScreen },
  template: `<div class="theme-default"><storybook-screen :testComponent="MyButton" :testProps="ButtonProps"></storybook-screen></div>`,
});

export const ButtonSecondary = () => ({
  data() {
    return {
      MyButton,
      ButtonProps: {
        slots: "Secondary Button",
        classes: "c-btn--secondary",
      }
    };
  },
  components: { StorybookScreen },
  template: `<div class="theme-default"><storybook-screen :testComponent="MyButton" :testProps="ButtonProps">Primary Button</storybook-screen></div>`,
});

