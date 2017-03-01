<template>
    <div class="container">
        <app-header></app-header>
        <div class="row">
            <div class="col-md-12">
                <transition name="fade" mode="out-in">
                    <router-view></router-view>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from './components/Header.vue'

    export default {
        components: {
            'app-header': Header
        },
        created() {
            this.$store.dispatch('initStocks');
        }
    }
</script>

<style>
    body {
        padding: 30px;
    }
    .fade-enter,
    .fade-leave {
        opacity: .5;
        transform: translateY(-20px);
    }
    .fade-enter-active,
    .fade-leave-active {
        transition: all .2s;
    }
</style>
