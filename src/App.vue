<script lang="ts" setup>
import { computed, onMounted, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useDisplay, useGoTo, useTheme } from 'vuetify';
import { NavbarLinks } from './profile';
import { useAppStore, type ThemeName } from './stores/app';

const themeOptions: { value: ThemeName; label: string; icon: string }[] = [
    { value: 'system', label: '跟随系统', icon: 'mdi-theme-light-dark' },
    { value: 'light', label: '亮色', icon: 'mdi-weather-sunny' },
    { value: 'dark', label: '暗色', icon: 'mdi-weather-night' },
];

const router = useRouter();
const display = useDisplay();
const goTo = useGoTo();
const theme = useTheme();
const appStore = useAppStore();

const isDrawerOpen = ref(false);
const isLoading = ref(false);
const themeIcon = computed(
    () => themeOptions.find(option => option.value === appStore.theme)?.icon ?? 'mdi-theme-light-dark',
);

watch(
    () => appStore.theme,
    name => theme.change(name),
    { immediate: true },
);

router.beforeEach((from, to, next) => {
    goTo(0, { duration: 300 });
    isLoading.value = true;
    next();
});

router.afterEach(() => {
    setTimeout(() => {
        isLoading.value = false;
    }, 500);
});

onMounted(() => {
    isDrawerOpen.value = !display.mobile.value;
});
</script>

<template>
    <v-app>
        <v-app-bar>
            <v-app-bar-nav-icon variant="text" @click.stop="isDrawerOpen = !isDrawerOpen" />

            <v-toolbar-title>lrs2187</v-toolbar-title>

            <v-btn
                v-for="link of NavbarLinks"
                :icon="link.icon"
                :title="link.name"
                :key="link.name"
                :href="link.link"
                variant="text"
            />

            <v-menu>
                <template #activator="{ props }">
                    <v-btn v-bind="props" :icon="themeIcon" title="主题" variant="text" />
                </template>

                <v-list>
                    <v-list-item
                        v-for="option in themeOptions"
                        :key="option.value"
                        :active="appStore.theme === option.value"
                        :prepend-icon="option.icon"
                        :title="option.label"
                        @click="appStore.theme = option.value"
                    />
                </v-list>
            </v-menu>
        </v-app-bar>

        <v-navigation-drawer v-model="isDrawerOpen" :temporary="$vuetify.display.mobile ? true : undefined">
            <v-list nav>
                <v-list-item
                    v-for="route in router.getRoutes().filter(x => x.meta.showNav)"
                    :prepend-icon="route.meta.icon"
                    :to="route.path"
                >
                    {{ route.name }}
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-main class="flex flex-col">
            <v-progress-linear :active="isLoading" :indeterminate="isLoading" location="bottom" absolute />

            <router-view v-slot="{ Component }" class="flex-1">
                <v-fade-transition hide-on-leave>
                    <component :is="Component" />
                </v-fade-transition>
            </router-view>

            <v-footer class="flex-0"> Copyright by lrs2187. </v-footer>
        </v-main>
    </v-app>
</template>

<style>
@reference "@/styles/tailwind.css";
</style>

<style scoped></style>
