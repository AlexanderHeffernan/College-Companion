<script lang="ts" setup>
  import { defineProps } from 'vue';
  import { Task } from '../modules/task';
  import { modalState } from '../modules/modalState';

  // Define props
  const props = defineProps<{
    task: Task;
  }>();
</script>

<template>
  <div class="task-item bg-gray-800 text-white p-4 rounded-lg shadow-lg flex items-center space-x-4 m-5">
    <h2 class="text-xl font-semibold">{{ props.task.getTitle() }}</h2>
    <p v-if="props.task.getDueDate() !== ''" class="text-sm text-gray-300">{{ props.task.getDueDate() }}</p>
    <p v-if="props.task.getCourseId() !== -1" class="text-sm text-gray-400">{{ props.task.getCourseId() }}</p>
    <button @click="props.task.toggle()" class="bg-blue-500 text-white py-1 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50">{{ props.task.getStatus() }}</button>
    <button @click="modalState.openModal('edit')">Edit</button>
  </div>
</template>

<style scoped>
</style>
