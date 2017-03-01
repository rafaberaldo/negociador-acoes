<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-info">
            <div class="panel-heading">
                <h3 class="panel-title">
                    {{ stock.name }}
                    <small>(Preço: {{ stock.price | currency }} | Quantidade: {{ stock.qnt }})</small>
                </h3>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <input type="number" class="form-control" placeholder="Quantidade" v-model="qnt">
                </div>
                <div class="pull-right">
                    <button class="btn btn-info" @click="sellStock" :disabled="qnt <= 0 || qnt > stock.qnt || !Number.isInteger(qnt)">
                        {{ qnt > stock.qnt ? 'Faltam Ações' : 'Vender' }}
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
            sellStock() {
                const order = {
                    stock: this.stock,
                    qnt: this.qnt,
                };
                this.$store.dispatch('sellStock', order);
                this.qnt = null;
            }
        }
    }
</script>
