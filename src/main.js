import { createApp } from 'vue'
import './index.css'

// import * as Vue from 'vue'
// console.log(Vue.createApp)

import Foo from './components/Foo.vue'
// import Bar from './components/Bar.vue'
// import Bulma from './components/Bulma.vue'

createApp(Foo).mount("#app")
// createApp(Bar).mount("#app")

// const app = createApp(Bulma)
// const app = createApp(Foo)
// const root = app.mount("#app")
// console.log(root)



