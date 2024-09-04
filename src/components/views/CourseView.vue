<script lang="ts" setup>
import { courseManager } from '@/modules/courseManager';
import { modalState } from '@/modules/modalState';
import CourseItem from '@/components/CourseItem.vue';
</script>
<template>
    <h1 class="text-white text-2xl font-bold mb-3">Your Courses</h1>
      <CourseItem v-for="course in courseManager.getAll()" :key="course.getId()" :course="course" />
      <button class="bg-blue-500 text-white py-1 px-4 mr-4 mb-4 mt-5 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50" @click="modalState.openModal('addCourse')">Add Course</button>
</template>