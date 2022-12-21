import { createApp } from 'vue'
// import { createSSRApp } from 'vue'

import './assets/css/main.css'
import './style.css'
import App from './App.vue'
import 'flowbite';
import JsonEditorVue from 'json-editor-vue'

createApp(App).use(JsonEditorVue, {
    // global props & attrs (one-way data flow)
}).mount('#app')