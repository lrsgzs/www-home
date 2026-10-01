<script lang="ts" setup>
import { type Project } from '@/profile';

const props = defineProps<{
    project: Project;
}>();
const project = props.project;
</script>

<template>
    <v-card :title="project.name" :subtitle="project.description">
        <template v-slot:prepend>
            <v-avatar :image="project.icon" rounded="0px" />
        </template>

        <v-card-text>
            <p v-for="feat in project.features">{{ feat }}</p>
        </v-card-text>
    </v-card>
</template>

<style scoped></style>
