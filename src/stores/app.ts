import { defineStore } from 'pinia';
import { ref } from 'vue';

export type ThemeName = 'light' | 'dark' | 'system';

export const useAppStore = defineStore(
    'app',
    () => {
        const theme = ref<ThemeName>('system');

        return { theme };
    },
    {
        persist: true,
    },
);
