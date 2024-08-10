<script lang="ts" setup>
import { modalState } from '../modules/modalState';
import { Task } from '../modules/task';
import { Course } from '../modules/course';
import { taskManager } from '../modules/taskManager';
import TaskModal from './templates/TaskModal.vue';

function handleSubmit(name: string, dueDate: string, course: Course | null) {
    let newTask = Task.create(name, dueDate);

    if (course) { course.addTask(newTask); }

    taskManager.add(newTask);
    modalState.closeModal();
}
</script>
<template>
    <TaskModal modalTitle="Add Task" submitText="Add" @submit="handleSubmit" />
</template>