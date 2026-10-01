<script lang="ts" setup>
import { Projects } from '@/profile';
import ProjectCard from '@/components/ProjectCard.vue';
</script>

<template>
    <v-container class="flex flex-col gap-4">
        <h2 class="text-2xl">项目</h2>

        <v-row gap="16">
            <v-col v-for="project in Projects" :key="project.id" cols="12" sm="4">
                <ProjectCard :project="project" />
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped></style>
