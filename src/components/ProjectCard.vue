<script lang="ts" setup>
import { type Project } from '@/profile';

const props = defineProps<{
    project: Project;
}>();
const project = props.project;
</script>

<template>
    <v-card
        :title="project.name"
        :subtitle="project.description"
        :to="`/projects/${project.id}`"
    >
        <template v-slot:prepend>
            <img :src="project.icon" rounded="0px" width="48" />
        </template>

        <v-card-text>
            <v-chip v-for="feat in project.tags" class="m-1">{{ feat }}</v-chip>
        </v-card-text>
    </v-card>
</template>

<style scoped></style>
