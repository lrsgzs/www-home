<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useDisplay, useGoTo } from 'vuetify';
import { type Link } from './types/Link.ts';

const links: Link[] = [
    {
        name: 'GitHub',
        link: 'https://github.com/lrs2187',
        icon: 'mdi-github',
    },
];

const router = useRouter();
const display = useDisplay();
const goTo = useGoTo();

const isDrawerOpen = ref(false);
const isLoading = ref(false);

const openLink = (link: string) => window.open(link, '_blank');

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
                v-for="link of links"
                :icon="link.icon"
                :title="link.name"
                :key="link.name"
                @click="openLink(link.link)"
                variant="text"
            />
        </v-app-bar>

        <v-navigation-drawer v-model="isDrawerOpen" :temporary="$vuetify.display.mobile ? true : undefined">
            <v-list>
                <v-list-item
                    v-for="route in router.getRoutes().filter(x => x.meta.showNav)"
                    :prepend-icon="route.meta.icon"
                    :to="route.path"
                >
                    {{ route.name }}
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-main>
            <v-progress-linear :active="isLoading" :indeterminate="isLoading" location="bottom" absolute />

            <router-view v-slot="{ Component }">
                <v-fade-transition hide-on-leave>
                    <component :is="Component" />
                </v-fade-transition>
            </router-view>
        </v-main>
    </v-app>
</template>

<style>
@reference "@/styles/tailwind.css";
</style>

<style scoped></style>
