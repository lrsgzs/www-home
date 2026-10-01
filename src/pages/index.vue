<script lang="ts" setup>
import { ConcactLinks, Projects } from '@/profile';
import ProjectCard from '@/components/ProjectCard.vue';
</script>

<template>
    <v-container>
        <div class="flex flex-col gap-4">
            <div class="flex flex-1 gap-4 items-center">
                <v-avatar image="/avatar.jpg" size="152" />

                <div class="flex flex-col gap-2">
                    <h2 class="text-4xl">lrs2187</h2>

                    <p>终有一天我们会不再纠结于答案，而是直面天涯或沧海。</p>

                    <v-btn-group variant="outlined">
                        <v-btn
                            v-for="link of ConcactLinks"
                            :prepend-icon="link.icon"
                            :text="link.name"
                            :key="link.name"
                            :href="link.link"
                        />
                    </v-btn-group>
                </div>
            </div>

            <v-divider />

            <div class="flex items-center gap-4">
                <h2 class="flex-1 text-2xl">主要项目</h2>

                <v-btn append-icon="mdi-arrow-right" variant="text" to="/projects">查看更多...</v-btn>
            </div>

            <v-row gap="16">
                <v-col v-for="project in Projects.filter(x => x.main)" :key="project.id" cols="12" sm="4">
                    <ProjectCard :project="project" />
                </v-col>
            </v-row>
        </div>
    </v-container>
</template>

<style scoped></style>
