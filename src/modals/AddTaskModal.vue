<script lang="ts" setup>
import { modalState } from '../modules/modalState';
import { Task } from '../modules/task';
import { taskManager } from '../modules/taskManager';
import { courseManager } from '../modules/courseManager';
import TaskModal from './templates/TaskModal.vue';

function handleSubmit(name: string, dueDate: string, courseId: string | undefined) {
    let newTask = Task.create(name, dueDate);

    if (courseId) { courseManager.getFromIndex(courseId)?.addTask(newTask); }

    taskManager.add(newTask);
    modalState.closeModal();
}
</script>
<template>
    <TaskModal modalTitle="Add Task" submitText="Add" @submit="handleSubmit" />
</template>