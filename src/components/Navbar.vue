<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

interface Link {
    name: string;
    link: string;
    icon: string;
}

const links: Link[] = [
    {
        name: 'GitHub',
        link: 'https://github.com/lrs2187',
        icon: 'mdi-github',
    },
];

const isDrawerOpen = ref(false);
const openLink = (link: string) => window.open(link, '_blank');
</script>

<template>
    <v-app-bar color="primary">
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
            <router-link v-for="route in router.getRoutes()" v-slot="{ navigate, isActive }" :to="route.path" custom>
                <v-list-item
                    v-if="route.meta.showNav"
                    :prepend-icon="route.meta.icon"
                    :active="isActive"
                    @click="navigate"
                >
                    {{ route.name }}
                </v-list-item>
            </router-link>
        </v-list>
    </v-navigation-drawer>
</template>

<style scoped></style>
