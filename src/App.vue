<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Navbar from './components/Navbar.vue';

const router = useRouter();
const isLoading = ref(false);

router.beforeEach((from, to, next) => {
    console.log('导航开始。');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    isLoading.value = true;
    next();
});

router.afterEach(() => {
    console.log('导航结束。');
    setTimeout(() => {
        isLoading.value = false;
    }, 500);
});
</script>

<template>
    <v-app>
        <Navbar />

        <v-main>
            <router-view v-slot="{ Component }">
                <transition name="fade" mode="out-in">
                    <component :is="Component" />
                </transition>
            </router-view>

            <!-- 加载中提示 -->
            <v-progress-circular indeterminate :size="30" class="loading-tip" v-if="isLoading" />
        </v-main>
    </v-app>
</template>

<style scoped>
.loading-tip {
    position: fixed;
    top: 5px;
    right: 5px;
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
