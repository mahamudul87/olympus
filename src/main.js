import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import App from '@/core/App.vue';
import router from '@/router';


import VueResponsiveImage from 'vue-responsive-image'
import mdiVue from 'mdi-vue/v3'
import * as mdijs from '@mdi/js'

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import '@/assets/themes/default.css';



import Chip from 'primevue/chip';

const app = createApp(App)

app.component('VueResponsiveImage', VueResponsiveImage);
app.use(PrimeVue)
app.use(router)
app.use(mdiVue, {
    icons: mdijs
  })
app.component("Chip",Chip)

app.mount('#app')
