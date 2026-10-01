<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Navbar from './components/Navbar.vue';

const router = useRouter();
const isLoading = ref(false);

router.beforeEach((from, to, next) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    isLoading.value = true;
    next();
});

router.afterEach(() => {
    setTimeout(() => {
        isLoading.value = false;
    }, 500);
});
</script>

<template>
    <v-app>
        <Navbar />

        <v-main>
            <!-- 加载中提示 -->
            <v-progress-linear
                :active="isLoading"
                :indeterminate="isLoading"
                location="bottom"
                absolute
            />

            <router-view v-slot="{ Component }">
                <transition name="fade" mode="out-in">
                    <component :is="Component" />
                </transition>
            </router-view>
        </v-main>
    </v-app>
</template>

<style>
@reference "@/styles/tailwind.css";
</style>

<style scoped>
.loading-tip {
    position: relative;
    top: 0;
    z-index: 10000;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
    opacity: 1;
}
</style>
