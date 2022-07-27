import './public-path';
import { App, createApp, CreateAppFunction } from 'vue'
import { createRouter, createWebHistory } from "vue-router";
import {
  renderWithQiankun,
  qiankunWindow
} from 'vite-plugin-qiankun/dist/helper';
import './style.css'
import AppVue from './App.vue'

let app: App<Element>;

const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]

const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  createApp(AppVue).use(router).mount('#app');
} else {
  renderWithQiankun({
    mount(props) {
      console.log('--mount');

      app = createApp(AppVue);
      app
        .use(router)
        .mount(
          (props.container
            ? props.container.querySelector('#app')
            : document.getElementById('app')) as Element
        );
    },
    bootstrap() {
      console.log('--bootstrap');
    },
    update() {
      console.log('--update');
    },
    unmount() {
      console.log('--unmount');
      app?.unmount();
    }
  });
}