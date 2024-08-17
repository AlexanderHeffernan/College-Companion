<script lang="ts" setup>
import { defineProps, onMounted } from 'vue';
import { Task } from '../modules/task';
import { modalState } from '../modules/modalState';
import { taskManager } from '@/modules/taskManager';

const props = defineProps<{
  task: Task;
}>();

onMounted(() => {
  if (!(props.task instanceof Task)) { 
    console.error("task must be an instance of Task");
    return; 
  }
});

function handleToggle() {
  props.task.toggle();
  taskManager.update();
}
</script>

<template>
  <div class="task-item flex bg-gray-800 text-white p-4 rounded-lg shadow-lg my-5" :class="{ 'opacity-50': task.getStatus() === 'Complete' }">
    <button @click="handleToggle" class="mr-4">
      <svg v-if="task.getStatus() === 'Incomplete'" class="w-5 h-5 transition-[fill] transition-500 fill-gray-500 hover:fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 80c8.8 0 16 7.2 16 16l0 320c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16L48 96c0-8.8 7.2-16 16-16l320 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z"/></svg>
      <svg v-else class="w-5 h-5 transition-[fill] transition-500 fill-gray-500 hover:fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
    </button>
    <div class="flex-grow overflow-hidden">
      <h2 class="text-xl font-semibold mr-3 min-w text-left whitespace-nowrap overflow-hidden text-ellipsis" :class="{ 'line-through': task.getStatus() === 'Complete' }">{{ task.getTitle() }}</h2>
      <div class="flex space-x-2">
        <p v-if="task.getDueDate() !== ''" class="text-sm text-gray-300 mr-4">{{ task.getDueDate() }}</p>
        <p v-if="task.getCourse() !== null" class="text-sm text-gray-400">{{ task.getCourse()?.getCode() }}</p>    
      </div>
    </div>

    <div class="flex space-x-4">
      <button @click="modalState.openModal('editItem', task)" class="mr-4">
        <svg class="w-5 h-5 transition-[fill] transition-500 fill-gray-500 hover:fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1 0 32c0 8.8 7.2 16 16 16l32 0zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"/></svg>
      </button>
      <button @click="taskManager.remove(task)">
        <svg class="w-5 h-5 transition-[fill] transition-500 fill-gray-500 hover:fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z"/></svg>
      </button>
    </div>
  </div>
</template>

<style scoped>
</style>