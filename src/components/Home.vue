<template>
    <div>
        <h1>Negocie Ações!</h1>
        <h4>Compre Ações com Créditos para aparecer em sua Carteira.</h4>
        <h4>Venda Ações para receber Créditos.</h4>
        <h4>Obtenha Lucro!</h4>
        <h4>Você pode Salvar & Carregar seus dados.</h4>
        <hr>
        <p>Créditos: {{ funds | currency }}</p>
    </div>
</template>

<script>
    export default{
        computed: {
            funds() {
                return this.$store.getters.getFunds;
            }
        }
    }
</script>
