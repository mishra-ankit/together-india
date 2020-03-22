import Vue from 'vue';
import VueAnalytics from 'vue-analytics';
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en'

Vue.use(VueAnalytics, {
    id: 'UA-68398065-3',
    checkDuplicatedScript: true
});

export default () => {
    Vue.use(ElementUI, { locale });
}
