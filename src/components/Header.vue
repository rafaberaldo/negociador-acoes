<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <router-link to="/" class="navbar-brand">Negociador de Ações</router-link>
            </div>

            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <router-link to="/portfolio" tag="li" activeClass="active"><a>Carteira</a></router-link>
                    <router-link to="/stocks" tag="li" activeClass="active"><a>Ações</a></router-link>
                </ul>
                <strong class="navbar-text navbar-right">Créditos: {{ funds | currency }}</strong>
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#" @click="endDay">Fechar Dia</a></li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        methods: {
            endDay() {
                this.$store.dispatch('randomizeStocks')
            }
        },
        computed: {
            funds() {
                return this.$store.getters.getFunds;
            }
        }
    }
</script>
