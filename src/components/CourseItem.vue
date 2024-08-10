<script lang="ts" setup>
import { defineProps } from 'vue';
import { Course } from '../modules/course';

const props = defineProps<{
  course: Course;
}>();
</script>

<template>
  <div class="task-item bg-gray-800 text-white p-4 rounded-lg shadow-lg flex items-center space-x-4 m-5">
    <div class="flex flex-1">
      <div>
        <h2 class="text-xl font-semibold mr-3 text-left">{{ props.course.getTitle() }}</h2>
        <p class="text-sm text-gray-400 text-left">{{ props.course.getCode() }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>