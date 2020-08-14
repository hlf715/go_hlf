import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    city: '深圳',
    cityID: "1",
    defaultCheckDate: {
        shortcuts: [{
            text: '最近一周',
            onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
            }
        }, {
            text: '最近一个月',
            onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
            }
        }, {
            text: '最近三个月',
            onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
            }
        }]
    },
  },
  getters: {
    getCity(state) { //方法名随意,主要是来承载变化的city的值，下面mutations,actions里面的方法名也是随意定的
      return state.city
    },
    getCityId() { //方法名随意,主要是用来承载变化的cityID的值，下面mutations，actions里面的方法名也是随意的
      return state.cityID
    }
  },
  mutations: {
    setCity(state, value) {
      state.city = value;
    },
    setCityID(state, value) {
      state.cityID = value;
    }
  },
  actions: {
    selectCity(context, params) {
      context.commit('setCity', params.city);
    },
    selectCityID(context, params) {
      context.commit('setCityID', params.id);
    }
  }
});
export default store;