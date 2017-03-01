<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-success">
            <div class="panel-heading">
                <h3 class="panel-title">
                    {{ stock.name }}
                    <small>(Preço: {{ stock.price | currency }})</small>
                </h3>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <input type="number" class="form-control" placeholder="Quantidade" v-model="qnt">
                </div>
                <div class="pull-right">
                    <button class="btn btn-success" @click="buyStock" :disabled="qnt <= 0 || qnt * stock.price > funds || !Number.isInteger(qnt)">
                        {{ qnt * stock.price > funds ? 'Faltam Créditos' : 'Comprar' }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        props: ['stock'],
        data() {
            return {
                qnt: null
            }
        },
        methods: {
            buyStock() {
                const order = {
                    stock: this.stock,
                    qnt: this.qnt,
                }
                this.$store.dispatch('buyStock', order);
                this.qnt = null;
            }
        },
        computed: {
            funds() {
                return this.$store.getters.getFunds;
            }
        }
    }
</script>
