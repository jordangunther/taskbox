<!--src/App.vue-->
<template>
    <div id="app">
        <component :is="testComponent" v-bind="{...testProps, ...$attrs}" :class="[ hasClass? testProps.classes: '' ]"><span v-if="hasSlots" v-html="testProps.slots"></span></component>
    </div>
</template>

<script>
    import store from './store';
    export default {
        name: 'storyBookScreen',
        store,
        props: ['testComponent', 'testProps'],
        computed: {
            hasSlots: function() {
                if (this.testProps) {
                    if (this.testProps.slots) {
                        return true
                    }
                }
                return false
            },
            hasClass: function() {
                if (this.testProps) {
                    if (this.testProps.classes) {
                        return true;
                    }
                }
                return false;
            }
        }
    };
</script>
<style>
    @import './main.css';
</style>
