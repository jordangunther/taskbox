<template>
  <div
    class="c-hero"
    :style="{ backgroundImage: 'url(' + hero.backgroundImage + ')' }"
  >
    <div class="l-container">
      <div class="c-hero__flex l-flex u-100-height">
        <div class="c-hero__content l-flex l-flex--column">
          <h1 class="t-heading-2 t-heading-2--white">{{ hero.title }}</h1>
          <p class="t-paragraph-large t-paragraph-large--white u-margin-bottom-large">{{ hero.subtitle }}</p>
          <MyButton class="c-btn--primary" :url="hero.ctaURL">{{ hero.cta }}</MyButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from "vuex";
  import MyButton from "../button/MyButton";

export default {
  name: "Hero",
  props: ['lifestyle'],
  components: {
    MyButton
  },
  computed: {
    ...mapState(["hero"]),
  }
};
</script>

<style lang="scss" scoped>
.c-hero {
  height: rem(600px);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @include respond(tab-land) {
    height: rem(755px);
    background-position: top;
  }

  &__image {
    display: none;
    max-width: 100%;

    @include respond(tab-land) {
      display: inline-block;
    }
  }

  &__content {
    width: 382px;
    @include respond(tab-land) {
      text-align: center;
      align-items: center;
    }
  }

  //variant Lifestyle left overrides
  &--lifestyle-left {
    .c-hero {
      &__flex {
        justify-content: flex-end;

        @include respond(tab-land) {
          justify-content: center;
        }
      }

      &__content {
        align-items: flex-start;
      }
    }
  }

  //variant Lifestyle right overrides
  &--lifestyle-right {
    .c-hero {
      &__flex {
        justify-content: flex-start;

        @include respond(tab-land) {
          justify-content: center;
        }
      }

      &__content {
        align-items: flex-start;
      }
    }
  }
}
</style>
