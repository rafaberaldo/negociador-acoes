const state = {
    funds: 1000,
    stocks: [],
};

const actions = {
    buyStock({commit}, order) {
        const record = state.stocks.find(element => element.id == order.stock.id);
        if (record) {
            record.qnt += order.qnt;
        } else {
            state.stocks.push({
                id: order.stock.id,
                qnt: order.qnt,
            })
        }
        state.funds -= order.stock.price * order.qnt;
    },
    sellStock({commit}, order) {
        const record = state.stocks.find(element => element.id == order.stock.id);
        if (record.qnt > order.qnt) {
            record.qnt -= order.qnt;
        } else {
            state.stocks.splice(state.stocks.indexOf(record), 1);
        }
        state.funds += order.stock.price * order.qnt;
    }
};

const getters = {
    getStockPortfolio(state, getters) {
        return state.stocks.map(stock => {
            const record = getters.getStocks.find(element => element.id == stock.id);
            return {
                id: stock.id,
                qnt: stock.qnt,
                name: record.name,
                price: record.price,
            }
        })
    },
    getFunds(state) {
        return state.funds;
    }
};

export default {
    state,
    actions,
    getters,
};
