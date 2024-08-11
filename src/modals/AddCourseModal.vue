<script lang="ts" setup>
import { modalState } from '../modules/modalState';
import { Course } from '../modules/course';
import { courseManager } from '../modules/courseManager';
import CourseModal from './templates/CourseModal.vue';

function handleSubmit(title: string, code: string) {
    let newCourse = Course.create(title, code);

    courseManager.add(newCourse);
    modalState.closeModal();
}
</script>
<template>
    <CourseModal modalTitle="Add Course" submitText="Add" @submit="handleSubmit" />
</template>