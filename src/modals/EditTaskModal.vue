<script lang="ts" setup>
import { modalState } from '../modules/modalState';
import { Course } from '../modules/course';
import TaskModal from './templates/TaskModal.vue';

function handleUpdate(name: string, dueDate: string, course: Course | null) {
    const task = modalState.getTempData();

    task.setTitle(name);
    task.setDueDate(dueDate);
    task.setCourse(course);

    modalState.closeModal();
}

</script>
<template>
  <TaskModal modalTitle="Edit Task" submitText="Save" :initialTask="modalState.getTempData()" @submit="handleUpdate" />
</template>