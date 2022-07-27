import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
  {
    name: 'moduleA',
    entry: '//localhost:3089',
    container: '#app',
    activeRule: '/module-a',
  },
  {
    name: 'moduleB',
    entry: '//localhost:3088',
    container: '#app',
    activeRule: '/module-b',
  }
]);
// 启动 qiankun
start();