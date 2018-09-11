import {CircleProgress} from './components'

const install = function (Vue) {
  Vue.component('circle-progress', CircleProgress);
};
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  CircleProgress,
}

export default {
  install,
  CircleProgress,
}
