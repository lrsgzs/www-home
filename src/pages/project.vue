<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { Projects } from '@/profile';

const route = useRoute();
const project = computed(() => Projects.find(x => x.id === route.params.id));
</script>

<template>
    <template v-if="project">
        <v-container class="flex flex-col gap-4">
            <div class="flex items-center gap-4">
                <img :src="project.icon" rounded="0px" width="96" />

                <div class="flex flex-col">
                    <h2 class="text-4xl">{{ project.name }}</h2>
                    <p>{{ project.description }}</p>

                    <div>
                        <v-chip v-for="feat in project.tags" class="m-1">{{ feat }}</v-chip>
                    </div>
                </div>
            </div>

            <v-divider />

            <div class="flex flex-col gap-2">
                <h3 class="text-2xl">功能特性</h3>

                <div v-for="feat in project.features" :key="feat" class="flex items-center gap-2">
                    <v-icon icon="mdi-circle-small" size="small" />

                    <span>{{ feat }}</span>
                </div>
            </div>

            <v-btn-group v-if="project.links.length" variant="outlined">
                <v-btn
                    v-for="link in project.links"
                    :key="link.name"
                    :prepend-icon="link.icon"
                    :text="link.name"
                    :href="link.link"
                />
            </v-btn-group>
        </v-container>
    </template>

    <template v-else>
        <v-container class="flex flex-col gap-2 items-center justify-center">
            <span class="text-2xl">项目不存在</span>
            <v-btn to="/projects" prepend-icon="mdi-arrow-left" variant="text">返回项目列表</v-btn>
        </v-container>
    </template>
</template>

<style scoped></style>
