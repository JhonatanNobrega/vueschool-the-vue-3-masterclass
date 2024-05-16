import { globalAutomaticComponent } from '@/core/globalAutomaticComponent';
import type { App } from 'vue';

export default (app: App) => {
    globalAutomaticComponent(app);
}