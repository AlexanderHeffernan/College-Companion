<script lang="ts" setup>
import { modalState } from '../modules/modalState';
import CourseModal from './templates/CourseModal.vue';
import { courseManager } from '../modules/courseManager';

function handleUpdate(title: string, code: string) {
    const course = modalState.getTempData();

    course.setTitle(title);
    course.setCode(code);
    courseManager.update();
    modalState.closeModal();
}

</script>
<template>
  <CourseModal modalTitle="Edit Course" submitText="Save" :initialCourse="modalState.getTempData()" @submit="handleUpdate" />
</template>