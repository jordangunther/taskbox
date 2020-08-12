<template>
  <a v-if="true" :href="url" class="c-btn">
    <slot></slot>
  </a>
</template>

<script>
  export default {
    name: "MyButton",
    props: ['url']
  }
</script>

<style lang="scss" scoped>
  .c-btn {
    font-size: rem(15px);
    line-height: rem(20px);
    letter-spacing: rem(1px);
    text-decoration: none;
    &,
    &:link,
    &:visited {
      width: rem(300px);
      max-width: 100%;
      padding: rem(15px) rem(30px);
      display: inline-block;
      text-align: center;
      text-transform: uppercase;
      border: solid $border-width;
      cursor: pointer;

      transition: all .2s;
      position: relative;
      backface-visibility: hidden;

      &:hover {
        transform: translateY(3px);
        box-shadow: 0 1rem 2rem rgba(#000,.2);

        &::after {
          transform: scaleX(1.4) scaleY(1.6);
          opacity: 0;
        }
      }
      &:after {
        content: "";
        display: inline-block;
        height: 100%;
        width: 100%;
        border-radius: 10rem;
        position: absolute;
        top: 0;
        left:0;
        z-index: -1;
        transition: all .4s;

      }

      &:active,
      &:focus {
        outline: none;
        transform: translateY(-1px);
        box-shadow: 0 .5rem 1rem rgba(#000,.2);
      }
    }

    &--small {
      &,
      &:link,
      &:visited {
        width: rem(210px);
        max-width: 100%;
      }
    }

    &--primary {
      &,
      &:link,
      &:visited {
        @include themify($themes) {
          border-color: themed('foreground');
          background-color: themed('foreground');
          color: themed('foreground', 'white');
        }
      }
      &:hover {
        @include themify($themes) {
          border-color: themed('foreground', 'hover');
          background-color: themed('foreground', 'hover');
        }
      }

      &:active,
      &:focus {
        @include themify($themes) {
          border-color: themed('foreground', 'focus');
          background-color: themed('foreground', 'focus');
        }
      }
    }

    &--secondary {
      &,
      &:link,
      &:visited {
        @include themify($themes) {
          border-color: themed('foreground', 'white');
          background-color: transparent;
          color: themed('foreground', 'white');
        }
      }
      &:hover {
        @include themify($themes) {
          background-color: themed('foreground', 'white');
          color: themed('foreground');
        }
      }

      &:active,
      &:focus {
        @include themify($themes) {
          background-color: themed('foreground', 'white-focus');
          color: themed('foreground');
        }
      }
    }
  }
</style>
