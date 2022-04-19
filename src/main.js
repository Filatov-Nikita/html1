import smoothscroll from 'smoothscroll-polyfill'

smoothscroll.polyfill();

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/app.scss';

const app = createApp(App);

app.component('BTimelineEntry', require('@/components/BTimelineEntry.vue').default);
app.component('BButton', require('@/components/BButton.vue').default);
app.component('BInput', require('@/components/BInput.vue').default);
app.component('InlineSvg', require('vue-inline-svg'));
app.directive('maska', require('maska').maska);
app.use(store).use(router).mount('#app')
