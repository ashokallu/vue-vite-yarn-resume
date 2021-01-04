import { createApp } from 'vue'
import './index.css'

// import * as Vue from 'vue'
// console.log(Vue.createApp)

// import Foo from './components/Foo.vue'
import Bulma from './components/Bulma.vue'

// createApp(Foo).mount("#app")

const app = createApp(Bulma)
const root = app.mount("#app")
// console.log(root)



