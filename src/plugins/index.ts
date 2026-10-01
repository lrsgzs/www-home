import type { App } from 'vue';

import vuetify from './vuetify';
import pinia from './pinia';
import router from '../router';

export function registerPlugins(app: App) {
    app.use(pinia);
    app.use(vuetify);
    app.use(router);
}
