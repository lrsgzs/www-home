<script lang="ts" setup>
import { ConcactLinks } from '@/profile';

const openLink = (link: string) => window.open(link, '_blank');
</script>

<template>
    <v-container>
        <div class="flex flex-col gap-4">
            <div class="flex flex-1 gap-4">
                <v-avatar image="/avatar.jpg" size="152" />

                <div class="flex flex-col gap-2">
                    <span class="text-4xl">lrs2187</span>

                    <span>终有一天我们会不再纠结于答案，而是直面天涯或沧海。</span>

                    <v-btn-group variant="outlined">
                        <v-btn
                            v-for="link of ConcactLinks"
                            :prepend-icon="link.icon"
                            :text="link.name"
                            :key="link.name"
                            @click="openLink(link.link)"
                        />
                    </v-btn-group>
                </div>
            </div>
        </div>
    </v-container>
</template>

<style scoped></style>
