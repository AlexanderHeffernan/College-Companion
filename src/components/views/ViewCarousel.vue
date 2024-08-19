<script lang="ts" setup>
import { ref, computed } from 'vue';
import TaskView from './TaskView.vue';
import CourseView from './CourseView.vue';

const currentIndex = ref(0);
const views = [TaskView, CourseView];
const totalViews = views.length;

const nextSlide = () => {
  if (currentIndex.value === totalViews - 1) { return; }
  currentIndex.value = (currentIndex.value + 1) % totalViews;
};

const prevSlide = () => {
  if (currentIndex.value === 0) { return; }
  currentIndex.value = (currentIndex.value - 1 + totalViews) % totalViews;
};

const setSlide = (index: number) => {
  currentIndex.value = index;
};

const carouselStyle = computed(() => ({
  transform: `translateX(-${currentIndex.value * 100}%)`,
}));
</script>
<template>
    <div class="relative overflow-hidden w-full h-full">
        <div class="flex transition-transform duration-500 ease-in-out mx-10 h-full" :style="carouselStyle">
            <div v-for="(view, index) in views" :key="index" class="carousel-item transition-[opacity] duration-500 overflow-y-auto min-w-full h-full px-5" :class="{ 'opacity-100': index === currentIndex, 'opacity-0': index !== currentIndex }">
                <component :is="view" />
            </div>
        </div>
        <div class="flex justify-between absolute top-1/2 w-full px-3">
            <button @click="prevSlide" class="transition-[opacity] duration-500" :class="{ 'opacity-0': currentIndex === 0, 'opacity-100': currentIndex !== 0}">
                <svg class="w-5 h-5 transition-[fill] duration-500 fill-gray-500 hover:fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
            </button>
            <button @click="nextSlide">
                <svg class="w-5 h-5 transition-[fill] duration-500 fill-gray-500 hover:fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
            </button>
        </div>
        <div class="indicator flex justify-center absolute w-full bottom-0 mb-6">
            <span @click="setSlide(index)" class="w-[10px] h-[10px] bg-white rounded-full mx-[5px] cursor-pointer" v-for="(view, index) in views" :key="index" :class="{ 'opacity-100': index === currentIndex, 'opacity-50': index !== currentIndex }"></span>
        </div>
    </div>
</template>

<style scoped>
.carousel-item {
  -webkit-mask-image: linear-gradient(180deg, transparent, #000 10%, #000 85%, transparent);
  -webkit-mask-composite: source-in;
  mask-image: linear-gradient(180deg, transparent, #000 10%, #000 85%, transparent);
  mask-composite: intersect;
  padding-top: 50px;
  padding-bottom: 50px;
}

.carousel-item::-webkit-scrollbar {
  height: 8px;
  width: 10px;
}

.carousel-item::-webkit-scrollbar-thumb {
  background-color: #3C82F6;
  border-radius: 4px;
}

.carousel-item::-webkit-scrollbar-thumb:hover {
  background-color: #2463EB;
}
</style>