import stocks from '../../dummyData.js'

const state = {
    stocks: []
};

const actions = {
    initStocks() {
        state.stocks = stocks;
    },
    randomizeStocks({commit}) {
        state.stocks.forEach(stock => {
            if (stock.price != 1) {
                stock.price = Math.round(stock.price * (Math.random() + 1 - .45));
            } else {
                stock.price = 5;
            }
        });
    },
};

const getters = {
    getStocks: state => {
        return state.stocks;
    }
};

export default {
    state,
    actions,
    getters,
};
