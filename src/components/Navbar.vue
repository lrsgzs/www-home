<script setup lang="ts">
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
        link: 'https://github.com/NewXesTeam/new-xes-frontend',
        icon: 'mdi-github',
    },
];

const openLink = (link: string) => window.open(link, '_blank');
</script>

<template>
    <v-app-bar elevation="4">
        <div class="container mx-auto flex px-4 items-center">
            <router-link to="/" class="mr-4" style="font-size: 24px"> lrs2187 </router-link>

            <div class="me-auto flex gap-2 items-center">
                <v-tabs>
                    <router-link
                        v-slot="{ navigate, isActive }"
                        :to="route.path"
                        custom
                        v-for="route in router.getRoutes()"
                    >
                        <v-tab :active="isActive" @click="navigate" v-if="route.meta.showNav">{{ route.name }}</v-tab>
                    </router-link>
                </v-tabs>
            </div>

            <div class="ms-auto flex gap-2 items-center">
                <v-icon-btn
                    class="text-white"
                    theme="dark"
                    v-for="link of links"
                    :icon="link.icon"
                    :title="link.name"
                    :key="link.name"
                    @click="openLink(link.link)"
                    v-ripple
                />
            </div>
        </div>
    </v-app-bar>
</template>

<style scoped></style>
